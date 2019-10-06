-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Oct 06, 2019 at 06:05 AM
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
-- Database: `ql_sanpham`
--

-- --------------------------------------------------------

--
-- Table structure for table `account`
--

DROP TABLE IF EXISTS `account`;
CREATE TABLE IF NOT EXISTS `account` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tentaikhoan` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL,
  `sodienthoai` int(10) NOT NULL,
  `diachi` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `account`
--

INSERT INTO `account` (`id`, `tentaikhoan`, `password`, `email`, `sodienthoai`, `diachi`) VALUES
(1, 'MaiQuanh', '111', 'maiquanh@gmail.com', 123, 'Khánh Hòa'),
(2, 'Yến Nhi', '222', 'YenNhi@gmail.com', 234, 'Long An'),
(3, 'TuanTai', '333', 'tuantai@gmail.com', 45678, 'TP.Hồ Chí Minh');

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
  `mau` varchar(500) NOT NULL,
  `hang` varchar(500) NOT NULL,
  `giatien` varchar(500) NOT NULL,
  `chitiet` varchar(5000) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbsanpham`
--

INSERT INTO `tbsanpham` (`id`, `masp`, `tensp`, `soluong`, `HinhAnh`, `mau`, `hang`, `giatien`, `chitiet`) VALUES
(1, 'sp001', 'Đồng hồ Nam', 10, 'Casio.jpg', 'vàng', 'Casio', '200', 'Mẫu đồng hồ Casio AQ-S810W-1A4VDF ấn tượng với công nghệ Tough Solar (Năng Lượng Ánh Sáng), vỏ máy được thiết kế tạo hình các góc cạnh phủ tông màu xám phối cùng bộ dây đeo bằng cao su đen tạo nên vẻ cá tính năng động.'),
(2, 'sp002', 'Đồng hồ nam', 3, 'Dizizid.jpg', 'đen', 'Dizizid', '500', 'Đồng hồ được thiết kế mặt tròn, với những chi tiết kim, vạch chỉ giờ được bố trí một cách khoa học không những giúp người đeo xem giờ một cách chính xác nhất mà còn giúp người đeo khẳng định phong cách năng động của riêng họ.'),
(3, 'sp003', 'Đồng hồ nữ', 5, 'Michael.jpg', 'hồng', 'Michael', '250', 'Tinh tế và luôn là nguồn cảm hứng bất tận trong giới thời trang, chiếc đồng hồ nam mạnh mẽ và thật nổi bật trên cổ tay của nam giới. Khi ra ngoài, một thiết kế đồng hồ có thể mang lại cho bạn sự nổi bật và cuốn hút, làm cho trang phục trở nên hấp dẫn hơn trong mắt người đối diện. Đồng hồ còn khẳng định đẳng cấp của phái mạnh, khiến mọi cô nàng đều phải ngẩn ngơ trước vẻ nam tính của bạn.Đồng hồ nam DIZIZID DZ66 có thiết kế thời trang, hiện đại, mang đến phong cách đầy sang trọng, lịch lãm.'),
(4, 'sp004', 'Đồng hồ nữ', 3, 'Synoke.jpg', 'hồng', 'Synoke', '400', 'Đồng hồ định vị thông minh ST Watch có thiết kế với màu sắc tươi tắn, với chất liệu từ nhựa cao cấp thân thiện với môi trường và đảm bảo sức khỏe cho trẻ em. Dây đồng hồ được là từ nhựa dẻo gel silica an toàn và mang lại cảm giác thoải mái khi trẻ đeo đồng hồ trên tay.');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
