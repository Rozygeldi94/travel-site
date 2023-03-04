<?php
  $adyOrEmail = filter_var(trim($_POST['login']), FILTER_SANITIZE_STRING);
  $password = filter_var(trim($_POST['password']), FILTER_SANITIZE_STRING);

$password = md5($password."assK4)%2Ljsd");

  $mysql = new mysqli('localhost', 'root', '', 'jeren');
  $result = $mysql->query("SELECT * FROM `kerki` WHERE `ady`= '$adyOrEmail' OR email='$adyOrEmail' AND `parol` = '$password'");
  $user = $result->fetch_assoc();
  if(count($user) == 0){
    echo "Beyle kulanici yok"; //php 7.2 version ve ondan  asakdalarda islar 
    exit();
  }
  setcookie('user', $user['ady'], time() + 3600, "/" );

  $mysql->close();
  header('Location: ../pages/sign-in.php');
?>