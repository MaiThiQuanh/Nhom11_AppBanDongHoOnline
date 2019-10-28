<?php 
require "config.php";

$con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 
 // Getting the received JSON into $json variable.
 $json = file_get_contents('php://input');
 
 // decoding the received JSON and store into $obj variable.
 $obj = json_decode($json,true);
 
 $id = $obj['id'];
$masp = $obj['masp'];
$tensp = $obj['tensp'];

$Sql_Query = "UPDATE thongtin SET masp= '$masp', tensp = '$tensp' WHERE id = '$id'";

if(mysqli_query($con,$Sql_Query)){
 
    // If the record inserted successfully then show the message.
   $MSG = 'Cập nhật thành công' ;
    
   // Converting the message into JSON format.
   $json = json_encode($MSG);
    
   // Echo the message.
    echo $json ;
    
    }
    else{
    
    echo 'Try Again';
    
    }
    mysqli_close($con);
?>