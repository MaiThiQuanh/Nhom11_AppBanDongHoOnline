<?php 
require "dbCon.php";

$qr = "SELECT * FROM thongtin ORDER BY RAND()";
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

sleep(3);
echo json_encode($mang);
?>