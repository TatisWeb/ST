<?php 

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exeption;

require_once('phpmailer/Exception.php');
require_once('phpmailer/PHPMailer.php');

$mail = new PHPMailer;
$mail->CharSet = 'utf-8';
$mail->IsHTML(true);


//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'sergeytatis@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'million777'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('sergeytatis@mail.ru','Заказ с сайта'); // от кого будет уходить письмо?
$mail->addAddress('sergeytatis@gmail.com');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name                                 // Set email format to HTML
$body = `<h1> Поступил заказ с сайта на разработку </h1>`;

if (trim(!empty($_POST['name']))){
 $body.='<p><strong>Имя:</strong>'.$_POST['name'].'</p>';
}
if (trim(!empty($_POST['email']))){
 $body.='<p><strong>Email:</strong>'.$_POST['email'].'</p>';
}
 if (trim(!empty($_POST['phone']))){
  $body.='<p><strong>Phone:</strong>'.$_POST['phone'].'</p>';
 } 
  if (trim(!empty($_POST['message']))){
   $body.='<p><strong>Сообщение:</strong>'.$_POST['message'].'</p>';
  } 
  if (!empty($_FILES['image']['tmp_name'])) {
   $filePath = _Dir_ . "/files/" . $_FILES['image']['name'];
   
  }
   if (copy($_FILES['image']['tmp_name'], $filepath)){
    $fileAttach = $filepath;
    $body.='<p><strong>Фото в приложении</strong></p>';
    $mail->addAttachment($fileAttach);
   }
  

$mail->Body = $body;

if(!$mail->send()) {
    $message = 'Ошибка';
} else {
    $message = 'Сообщение отправленно';
}

$response = ['message' => $message ];

header('Content-type: application/json');
echo json_encode($response);

?>