<?php
 include 'DBConfig.php';
 $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 $json = file_get_contents('php://input');
 $obj = json_decode($json,true);
  
  
 $tentaikhoan = $obj["tentaikhoan"];
 $password = $obj["password"];
 $email = $obj["email"];
 $sodienthoai = $obj["sodienthoai"];
 $diachi = $obj["diachi"];
 
 
  $Sql_Query = "INSERT INTO account(id,tentaikhoan,password,email,sodienthoai,diachi ) 
 VALUES (null,'$tentaikhoan','$password','$email','$sodienthoai','$diachi')";
 
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