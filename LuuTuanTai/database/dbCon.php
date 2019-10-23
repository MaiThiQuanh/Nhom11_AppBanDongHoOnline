<?php 
$con = mysqli_connect("localhost", "root", "");
mysqli_select_db($con, "sanpham");
mysqli_query($con, "SET NAMES 'utf8'");

class thongtin{
    public $key;
    public $masp;
    public $tensp;
    public $hinhanh;
    
    function thongtin($id, $masp, $tensp, $hinhanh)
    {
        $this->key = $id;
        $this->masp = $masp;
        $this->tensp = $tensp;
        $this->hinhanh = $hinhanh;
    }
}
?>