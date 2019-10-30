-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Oct 30, 2019 at 09:08 AM
-- Server version: 5.7.26
-- PHP Version: 7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sanpham`
--

-- --------------------------------------------------------

--
-- Table structure for table `tb_nguoidung`
--

DROP TABLE IF EXISTS `tb_nguoidung`;
CREATE TABLE IF NOT EXISTS `tb_nguoidung` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `hoten` varchar(500) NOT NULL,
  `user` varchar(500) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=40 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_nguoidung`
--

INSERT INTO `tb_nguoidung` (`id`, `hoten`, `user`, `password`, `email`) VALUES
(1, 'Mai Thị Quanh', 'MaiQuanh', '123456', 'quanh1998@gmail.com'),
(2, 'Đoàn Thị Yến Nhi', 'YenNhi', '123456', 'nhi1998@gmail.com'),
(3, 'Lưu Tuấn Tài', 'TuanTai', '123456', 'tai1998@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `tb_sanpham`
--

DROP TABLE IF EXISTS `tb_sanpham`;
CREATE TABLE IF NOT EXISTS `tb_sanpham` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `masp` varchar(500) NOT NULL,
  `tensp` varchar(5000) NOT NULL,
  `soluong` int(255) NOT NULL,
  `HinhAnh` varchar(5000) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_sanpham`
--

INSERT INTO `tb_sanpham` (`id`, `masp`, `tensp`, `soluong`, `HinhAnh`) VALUES
(1, 'sp001', 'Casio', 1, 'https://www.gshock.com.vn/wp-content/uploads/2018/05/ba-110ch-7a.png'),
(2, 'sp002', 'Apple', 1, 'https://cf.shopee.vn/file/2e10371dc6a636fadab860a7b1704ef4'),
(3, 'sp003', 'Rolex', 1, 'https://luxuryhanoi.vn/admin/timthumb.php?src=img/product/20180627104001ce6b01e4cd4166124283f11b1a09fe8a.jpg&w=460'),
(4, 'sp004', 'Hublot', 1, 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ-E6wuLGyYgWidJYdjG5VIzLWVTVOxvyiAwmeXCZI37HPKuG4iQAZwsBi78mv25Gl_lnfsV2uxv1ulyq2zft6JqzU2hJy9TYb_xnle3--aeWjd5NgFjoGSng&usqp=CAc');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
