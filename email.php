<?php
$to ='tyler.walke@gmail.com';
$subject = 'WEBSITE CONTACT';
$name = $_POST['fullName'];
$senderEmail = $_POST['senderEmail'];
$senderPhone = $_POST['senderPhone'];
$company = $_POST['senderCompany'];
$emailTextArea = $_POST['emailTextArea'];

mail($to,$subject,$name,$senderEmail,$senderPhone,$company,$emailTextArea);
 ?>
