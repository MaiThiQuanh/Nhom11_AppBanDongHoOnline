<?php 
require "config.php";

$con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);

$json = file_get_contents('php://input');

$obj = json_decode($json,true);

$masp = $obj['masp'];
$tensp = $obj['tensp'];

$Sql_Query = "insert into thongtin (masp,tensp) values ('$masp','$tensp')";

if(mysqli_query($con,$Sql_Query)){
	 
   
   $MSG = 'Thêm sản phẩm thành công' ;
    
   $json = json_encode($MSG);
    
    echo $json ;

}
else{

   echo 'Lỗi';

}
mysqli_close($con);
	 
?>