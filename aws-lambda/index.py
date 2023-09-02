import json
import logging
import os
import sys

from urllib.request import Request, urlopen

if "LAMBDA_TASK_ROOT" in os.environ:
    sys.path.insert(0, os.environ["LAMBDA_TASK_ROOT"])

# pylint: disable=wrong-import-position
import boto3

logger = logging.getLogger()
# logging.basicConfig(stream=sys.stdout, level=logging.DEBUG)  # Enable to log to stdout, and comment line below.
logger.setLevel(logging.INFO)
logger.info(f"Boto3 version: {boto3.__version__}")

fullname_key = "fullname"
email_address_key = "emailaddress"
msg_key = "mssg"


def recaptcha_verified(event):
    if "recaptchaResponse" in event:
        encoding = "utf-8"
        with urlopen(
            url=Request(
                url="https://www.google.com/recaptcha/api/siteverify",
                data=json.dumps(
                    {"secret": os.environ["RECAPTCHA_SECRET"], "response": event["recaptchaResponse"]}
                ).encode(encoding=encoding),
                headers={"Content-Type": "application/json"},
            )
        ) as res:
            res_read = res.read()
            res_json = json.loads(res_read.decode(encoding=encoding))
            logger.info(f"## reCaptcha Response: {res_json}")
            return res["success"]
    return False


def send_email(event):
    sns = boto3.client("sns")
    email_body = (
        "Name:\t" + event[fullname_key] + "\nEmail:\t" + event[email_address_key] + "\nMessage:\t" + event[msg_key]
    )
    sns.publish(
        TopicArn=os.environ["SNS_TOPIC"], Message=email_body, Subject=f"Website message from: {event[fullname_key]}."
    )
    return 200, True, "Message sent, I will be in touch!"


def send_res(status, sent, mssg):
    response = {
        "statusCode": status,
        "headers": {
            "Content-Type": "application/json",
            "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
            "Access-Control-Allow-Methods": "OPTIONS,POST",
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Origin": "*",
            "X-Requested-With": "*",
        },
        "sent": sent,
        msg_key: mssg,
    }
    logger.info(f"## Lambda Response: {response}")
    return response


def lambda_handler(event, context):
    logger.info(f"## EVENT: {event}")
    status = 404
    sent = False
    msg = "Sorry we are having some problems, please try again later."
    if event:
        msg = "reCaptcha check failed, please try again later."
        if recaptcha_verified(event):
            logger.info("## reCaptcha Success")
            if any(k not in event for k in [fullname_key, email_address_key, msg_key]):
                msg = "Please make sure to give your name, email address and a message, thank you."
            elif len(event[fullname_key]) == 0 or len(event[email_address_key]) == 0:
                msg = "Please specify at least your name and email address, thank you."
            elif len(event[msg_key]) > 1000:
                msg = "Please do not exceed 1000 characters in your message, thank you."
            else:
                status, sent, msg = send_email(event)
    return send_res(status, sent, msg)
