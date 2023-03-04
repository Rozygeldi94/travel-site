<?php
  setcookie('user', $user['ady'], time() - 3600, "/");
  header('Location: ../pages/sign-in.php');
?>