<?php
require './vendor/autoload.php';
require 'config.php';
require 'sparkpostSecret.php'; // Provides $sparkpostSecret, assign your own Sparkpost API key secret to this variable.
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Content-Type');
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

use GuzzleHttp\Client as GuzzleClient;
use Http\Adapter\Guzzle6\Client as GuzzleAdapter;
use SparkPost\SparkPost;

if (empty($_POST['fullname']) && empty($_POST['emailaddress'])) {
    echo json_encode(
        [
            "sent" => false,
            "mssg" => $SendMailEmptyerrorMessage
        ]
    );
    exit();
}

if (strlen($_POST['mssg']) > 1000) {
    echo json_encode(
        [
            "sent" => false,
            "mssg" => $SendMailLengtherrorMessage
        ]
    );
    exit();
}

if ($_POST) {
    http_response_code(200);
    $name = $_POST['fullname'];
    $from = $_POST['emailaddress'];
    $subject = 'Website message from: ' . $name;
    $message = $_POST['mssg'];

    $httpClient = new GuzzleAdapter(new GuzzleClient());
    $sparky = new SparkPost($httpClient, ['key' => ($sparkpostSecret), 'async' => false]);
    try {
        $text = '';
        $text .= "Name:  $name" . PHP_EOL;
        $text .= "Email: $from" . PHP_EOL;
        $text .= '---' . PHP_EOL;
        $text .= 'Message: ' . $message;
        $transmissionData = [
            'content' => [
                'from' => [
                    'name' => 'DWA',
                    'email' => 'website@deltawhiskeyalpha.com',
                ],
                'reply_to' => $from,
                'subject' => $subject,
                'text' => $text,
            ],
            'recipients' => [
                [
                    'address' => [
                        'name' => $adminName,
                        'email' => $adminEmail,
                    ],
                ],
            ],
        ];
        $promise = $sparky->transmissions->post($transmissionData);
        echo json_encode(array("sent" => true));
    } catch (\Exception $e) {
        echo json_encode(
            [
                "sent" => false,
                "mssg" => $SendMailFailedSenderrorMessage
            ]
        );
    }

} else {
    echo json_encode(
        [
            "sent" => false,
            "mssg" => $SendMailFailederrorMessage
        ]
    );
}
