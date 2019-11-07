<?php 
require "config.php";

$con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);

$json = file_get_contents('php://input');

$obj = json_decode($json,true);

$masp = $obj['masp'];
$tensp = $obj['tensp'];

$Sql_Query = "insert into thongtin (masp,tensp) values ('$masp','$tensp')";

if(mysqli_query($con,$Sql_Query)){
	 
    // If the record inserted successfully then show the message as response. 
   $MSG = 'Product Successfully Inserted into MySQL Database' ;
    
   // Converting the message into JSON format.
   $json = json_encode($MSG);
    
   // Echo the message on screen.
   // We would also show this message on our app.
    echo $json ;

}
else{

   echo 'Something Went Wrong';

}
mysqli_close($con);
	 
?>