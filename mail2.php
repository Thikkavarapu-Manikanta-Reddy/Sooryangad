<?php
require_once "Mail.php";

$from = '<t.manikantareddy160@gmail.com>';
$to = '<t.manikantareddy160@gmail.com>';
$subject = 'Hi!';
$body = "Hi,\n\nHow are you?";

$headers = array(
    'From' => $from,
    'To' => $to,
    'Subject' => $subject
);

$smtp = Mail::factory('smtp', array(
        'host' => 'ssl://smtp.gmail.com',
        'port' => '465',
        'auth' => true,
        'username' => 't.manikantareddy160@gmail.com',
        'password' => '9629601733'
    ));




$mail = $smtp->send($to, $headers, $body);


$mail = Mail::factory(..);
if (PEAR::isError($mail)) {
    echo $mail->getMessage() . "\n" . $mail->getUserInfo() . "\n";
    die();
}


if (PEAR::isError($mail)) {
    echo('<p>' . $mail->getMessage() . '</p>');
} else {
    echo('<p>Message successfully sent!</p>');
}
?>