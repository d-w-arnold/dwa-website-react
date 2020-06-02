<?php
include_once('classes/sendmail.php');
include_once('config.php');

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Content-Type');
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if(empty($_POST['fullname']) && empty($_POST['emailaddress'])) {
    echo json_encode(
        [
           "sent" => false,
           "mssg" => $SendMailEmptyerrorMessage
        ]
    ); 
    exit();
}

if ($_POST){
    http_response_code(200);
    $subject = 'Contact from: ' . $_POST['fullname'];
    $from = $_POST['emailaddress'];
    $message = $_POST['mssg'];
    //Actual sending email
    $sendEmail = new Sender($adminEmail, $from, $subject, $message);
    $sendEmail->send();
} else {
 // tell the user about error
 echo json_encode(
     [
        "sent" => false,
        "mssg" => $SendMailFailederrorMessage
     ]
 );
}