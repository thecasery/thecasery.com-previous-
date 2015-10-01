<?php
// Check for empty fields
if(empty($_POST['name'])  		||
   empty($_POST['email']) 		||
   empty($_POST['title']) 		||
   empty($_POST['signature'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }
	
$name = $_POST['name'];
$email_address = $_POST['email'];
$title = $_POST['title'];
$signature = $_POST['signature'];
$fileToUpload =$_POST['fileToUpload'];
// Create the email and send the message
$to = 'info@thecasery.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$target_dir = "./uploadfile/uploads/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]).".txt";//generates random name

$file = fopen($target_file, 'w');//creates new file
fwrite($file, $name);
fwrite($file, $email_address);
fwrite($file, $title);
fwrite($file, $signature);
fwrite($file, $fileToUpload);
fclose($file);
return true;			
?>