<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require 'vendor/autoload.php';
require '../private/environment_variables.php'; 

/*

sample POST body:

name: JACOB
last_name: Stephens
email: jacob@stewardgoods.com
business_name: Steward Goods
location: Elverson, PA
checkbox_photography: Photography / Art Book
checkbox_catalog: Catalog
checkbox_magazine: Magazine
checkbox_printcollateral: Print Collateral
checkbox_web: Website Design/Development
checkbox_other: Other
message: Working
source: Test

*/

$email = new \SendGrid\Mail\Mail();
$email->setFrom(FROM_EMAIL_ADDRESS, $_POST['name']);
$email->setReplyTo($_POST['email'], $_POST['name']);
$email->setSubject("Message from " . $_POST['name'] . " through " . DOMAIN);
if (DEV_SERVER === true) {
      $email->addTo(DEV_EMAIL_ADDRESS, DEV_NAME);
} else {
      $email->addTo(TO_EMAIL_ADDRESS, TO_NAME);
}

$email->addContent(
      "text/html", 
      "
            <p>First Name: " . $_POST['name'] . "</p>
            <p>Last Name: " . $_POST['last_name'] . "</p>
            <p>Email: " . $_POST['email'] . "</p>
            <p>Business Name: " . $_POST['business_name'] . "</p>
            <p>Location: " . $_POST['location'] . "</p>
            <p>Project Description: " . $_POST['message'] . "</p>
            <p>How did you hear about 15 East?: " . $_POST['source'] . "</p>
            <p>Looking for assistance with</p>
            <ul>
                  <li>" . $_POST['checkbox_photography'] . "</li>
                  <li>" . $_POST['checkbox_catalog'] . "</li>
                  <li>" . $_POST['checkbox_magazine'] . "</li>
                  <li>" . $_POST['checkbox_printcollateral'] . "</li>
                  <li>" . $_POST['checkbox_web'] . "</li>
                  <li>" . $_POST['checkbox_other'] . "</li>
            </ul>
      "
);

$sendgrid = new \SendGrid(SENDGRID_APIKEY);

try {
      $response = $sendgrid->send($email);
      if ($response->statusCode() == 202) {
            echo 'Send Success';
            header("Location: /send-success");
      } else {
            echo 'Send Failure';
            echo '<pre>';
            print_r($response);
            echo '</pre>';
            header("Location: /send-failure");
      }
} catch (Exception $e) {
      echo 'Caught exception: '. $e->getMessage() ."\n";
}

?>