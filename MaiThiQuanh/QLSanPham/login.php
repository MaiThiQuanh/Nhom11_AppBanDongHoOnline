<?php 

 include 'DBConfig.php';
 $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 $json = file_get_contents('php://input');
  $obj = json_decode($json,true);

$user  = $obj["user"];
 $password = $obj["password"];
 
 
 
  $Sql_Query = "SELECT COUNT(*) FROM tb_nguoidung WHERE user = '$user' AND password='$password'";
 
 if(mysqli_query($con,$Sql_Query)){
	 $MSG = 'ok';
	 $json = json_encode($MSG);
	 echo $json ; 
 }
 else{
 
 echo 'Wrong';
 
 }
 mysqli_close($con);

?>
