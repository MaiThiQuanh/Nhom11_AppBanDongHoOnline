<?php 
require "dbCon.php";

$qr = "SELECT * FROM thongtin";
$ds = mysqli_query($con, $qr);

$mang = array();
while($row = mysqli_fetch_array($ds))
{
    array_push($mang, new thongtin(
    $row["id"], 
    $row["masp"], 
    $row["tensp"], 
    $row["hinhanh"]));
}

echo json_encode($mang);
?>