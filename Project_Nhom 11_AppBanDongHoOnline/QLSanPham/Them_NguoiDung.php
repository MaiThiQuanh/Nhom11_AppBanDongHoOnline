<?php
 include 'DBConfig.php';
 $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 $json = file_get_contents('php://input');
  $obj = json_decode($json,true);


  $hoten = $obj['hoten'];
 $user  = $obj['user'];
 $password = $obj['password'];
 $email = $obj['email'];
 
 
  $Sql_Query = "INSERT INTO tb_nguoidung(hoten,user,password,email ) 
 VALUES ('$hoten','$user','$password','$email')";
 
 if(mysqli_query($con,$Sql_Query)){
 $MSG = 'Successfully' ;

 $json = json_encode($MSG);
 echo $json ; 
 }
 else{
 
 echo 'Wrong';
 
 }
 mysqli_close($con);
 
?>

