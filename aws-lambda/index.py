import boto3
import logging
import os
import requests

logger = logging.getLogger(__name__)


def recaptcha_verified(event):
    if "recaptchaResponse" in event:
        payload = {'secret': os.environ["RECAPTCHA_SECRET"], 'response': event["recaptchaResponse"]}
        r = requests.post("https://www.google.com/recaptcha/api/siteverify", data=payload)
        logger.info("reCaptcha Response: %s", r.json())
        return r.json()['success']
    else:
        return False


def send_email(event):
    sns = boto3.client('sns')
    email_body = "Name:\t" + event["fullname"] + "\nEmail:\t" + event["emailaddress"] + "\nMessage:\t" + event["mssg"]
    sns.publish(TopicArn=os.environ["SNS_TOPIC"], Message=email_body,
                Subject=f'Website message from: {event["fullname"]}.')
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
            "X-Requested-With": "*"
        },
        "sent": sent,
        "mssg": mssg
    }
    logger.info("Lambda Response: %s", response)
    return response


def lambda_handler(event, context):
    logger.info("Lambda Event: %s", event)
    status = 404
    sent = False
    mssg = "Message not set."
    if event or event is not None:
        if recaptcha_verified(event):
            if "fullname" not in event or "emailaddress" not in event or "mssg" not in event:
                mssg = "Please make sure to give your name, email address and a message, thank you."
            elif len(event["fullname"]) == 0 or len(event["emailaddress"]) == 0:
                mssg = "Please specify at least your name and email address, thank you."
            elif len(event["mssg"]) > 1000:
                mssg = "Please do not exceed 1000 characters in your message, thank you."
            else:
                status, sent, mssg = send_email(event)
        else:
            mssg = "reCaptcha check failed, please try again later."
    else:
        mssg = "Sorry we are having some problems, please try again later."
    return send_res(status, sent, mssg)

