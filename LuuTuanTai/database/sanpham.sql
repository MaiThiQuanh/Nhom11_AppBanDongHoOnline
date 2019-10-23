-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Oct 23, 2019 at 01:37 PM
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
-- Table structure for table `thongtin`
--

DROP TABLE IF EXISTS `thongtin`;
CREATE TABLE IF NOT EXISTS `thongtin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `masp` varchar(200) NOT NULL,
  `tensp` varchar(200) NOT NULL,
  `hinhanh` varchar(5000) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `thongtin`
--

INSERT INTO `thongtin` (`id`, `masp`, `tensp`, `hinhanh`) VALUES
(1, 'R32', 'Rolex', 'https://24kara.com/files/sanpham/3274/1/jpg/dong-ho-rolex-day-date-118238-0008.jpg'),
(2, 'C42', 'Chronoswiss ', 'https://luxshopping.vn/Uploads/_Temp_/UploadsNewschronoswiss-grand-ch-7541lr-lunar-chronograph-42png_540_660.jpg'),
(3, 'E91', 'Erhard Junghans', 'https://galle.vn/upload_images/images/dong-ho-Junghans-6.png'),
(4, 'G32', 'Glashutte Original', 'https://cdn2.jomashop.com/media/catalog/product/cache/1/watermark/490x490/0a1186946c551c1cc1f1a1120b7bd9a0/g/l/glashutte-panomaticlunar-silver-dial-automatic-men_s-watch-90-02-42-32-05.jpg'),
(5, 'BL71', 'Bulova', 'https://xwatch.vn/images/products/2019/08/12/large/96a118.jpg'),
(6, 'C53', 'Citizen', 'https://xwatch.vn/images/products/2019/07/05/large/citizen-bi5006-81p_1562281365.jpg'),
(7, 'TS56', 'ĐH Thụy Sỹ', 'https://cdn.erawatch.vn/24091/wp-content/uploads/2018/01/emile-chouriet-1.png'),
(8, 'S49', 'Sunrise', 'https://product.hstatic.net/1000089391/product/sunrise-748swa_20_6__master.jpg');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
