
<?php

$ady = filter_var(trim($_POST['ady']), FILTER_SANITIZE_STRING);
$familyasy =filter_var(trim($_POST['familyasy']), FILTER_SANITIZE_STRING);
$email = filter_var(trim($_POST['email']), FILTER_SANITIZE_STRING);
$nomeri = filter_var(trim($_POST['nomeri']), FILTER_SANITIZE_STRING);
$password = filter_var(trim($_POST['password']), FILTER_SANITIZE_STRING);
$confirmPassword = filter_var(trim($_POST['confirmPassword']), FILTER_SANITIZE_STRING);
$agreement = filter_var(trim($_POST['checkbox']), FILTER_SANITIZE_STRING);

$password = md5($password."assK4)%2Ljsd");
$confirmPassword = md5($confirmPassword."assK4)%2Ljsd");
$mysql = new mysqli('localhost', 'root', '', 'jeren');
$mysql->query("INSERT INTO `kerki` (`ady`, `familyasy`, `nomeri`, `email`, `parol`, `paroly`, `agreement`)
VALUES ('$ady', '$familyasy', '$nomeri', '$email', '$password', '$confirmPassword', '$agreement')");
if ($mysql->query($mysql) === TRUE) {
echo "Başarılı gönderildi";
} 

$mysql->close();
header('Location: ../pages/sign-in.php')
?>