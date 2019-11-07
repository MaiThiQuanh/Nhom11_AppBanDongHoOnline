<?php 
require "config.php";

$con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 
 // Getting the received JSON into $json variable.
 $json = file_get_contents('php://input');
 
 // decoding the received JSON and store into $obj variable.
 $obj = json_decode($json,true);
 
 $id = $obj['id'];


 $Sql_Query = "DELETE FROM thongtin WHERE id = '$id'" ;

 if(mysqli_query($con,$Sql_Query)){
 
    // If the record inserted successfully then show the message.
   $MSG = 'Record Deleted Successfully.' ;
    
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