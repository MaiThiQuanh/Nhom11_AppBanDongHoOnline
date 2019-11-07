<?php 
require "dbCon.php";

$trang = $_GET["trang"];
settype($trang, "int");
$capnhat = 5;
$from = ($trang - 1) * $capnhat;

$qr = "SELECT * FROM thongtin LIMIT $from, $capnhat";
$ds = mysqli_query($con, $qr);

$mang = array();
while($row = mysqli_fetch_array($ds))
{
    echo $row["id"];
    // array_push($mang, new thongtin(
    // $row["id"], 
    // $row["masp"], 
    // $row["tensp"], 
    // $row["hinhanh"]));
}

//sleep(4);
//echo json_encode($mang);
?>