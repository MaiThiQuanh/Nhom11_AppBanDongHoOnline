-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Oct 16, 2019 at 01:05 PM
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
-- Table structure for table `tbsanpham`
--

DROP TABLE IF EXISTS `tbsanpham`;
CREATE TABLE IF NOT EXISTS `tbsanpham` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `masp` varchar(500) NOT NULL,
  `tensp` varchar(5000) NOT NULL,
  `soluong` int(255) NOT NULL,
  `HinhAnh` varchar(5000) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbsanpham`
--

INSERT INTO `tbsanpham` (`id`, `masp`, `tensp`, `soluong`, `HinhAnh`) VALUES
(1, 'sp001', 'Nike', 1, 'https://chiasewiki.com/wp-content/uploads/2017/11/cach-chon-size-giay-2.jpg'),
(2, 'sp002', 'Adidas', 1, 'https://shoptech.com.vn/wp-content/uploads/2019/08/giay_converse_classic_cao_co_mau_den_01.jpg');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
