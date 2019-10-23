<?php 
require "configdongho.php";

$con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);

$json = file_get_contents('php://input');

$obj = json_decode($json,true);

$masp = $obj['masp'];
$tensp = $obj['tensp'];
$soluong = $obj['soluong'];
$hang = $obj['hang'];
$mau = $obj['mau'];
$giatien = $obj['giatien'];
$chitiet = $obj['chitiet'];



$Sql_Query = "insert into thongtin (masp,tensp,soluong,hang,mau,giatien,chitiet) values ('$masp','$tensp','$soluong','$hang','$mau','$giatien','$chitiet')";

if(mysqli_query($con,$Sql_Query)){
	 
    // If the record inserted successfully then show the message as response. 
   $MSG = 'Thêm sản phẩm thành công' ;
    
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