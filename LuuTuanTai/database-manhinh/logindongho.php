<?php 
require "configdongho.php";

$con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 
 // Getting the received JSON into $json variable.
 $json = file_get_contents('php://input');
 
 // decoding the received JSON and store into $obj variable.
 $obj = json_decode($json,true);

 $tentk = $obj['tentk'];
 $pass = $obj['pass'];

 $Sql_Query = "SELECT * FROM user WHERE tentk = '$tentk' AND pass = '$pass'";

 $check = mysqli_fetch_array(mysqli_query($con,$Sql_Query));
 
 
if(isset($check)){
 
 $SuccessLoginMsg = 'Data Matched';
 
 // Converting the message into JSON format.
$SuccessLoginJson = json_encode($SuccessLoginMsg);
 
// Echo the message.
 echo $SuccessLoginJson ; 
 
 }
 
 else{
 
 // If the record inserted successfully then show the message.
$InvalidMSG = 'Tên tài khoản hoặc mật khẩu không chính xác' ;
 
// Converting the message into JSON format.
$InvalidMSGJSon = json_encode($InvalidMSG);
 
// Echo the message.
 echo $InvalidMSGJSon ;
 
 }
 
 mysqli_close($con);
?>