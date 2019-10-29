-- phpMyAdmin SQL Dump
-- version 4.4.15.9
-- https://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Jeu 17 Octobre 2019 à 00:00
-- Version du serveur :  5.6.37
-- Version de PHP :  5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `qlbanhang`
--

-- --------------------------------------------------------

--
-- Structure de la table `tbSanPham`
--

CREATE TABLE IF NOT EXISTS `tbSanPham` (
  `id` int(11) NOT NULL,
  `masp` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `tensp` varchar(5000) COLLATE utf8_unicode_ci NOT NULL,
  `giasp` int(11) NOT NULL,
  `hinhanh` varchar(5000) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Contenu de la table `tbSanPham`
--

INSERT INTO `tbSanPham` (`id`, `masp`, `tensp`, `giasp`, `hinhanh`) VALUES
(1, 'HC1001', 'Hoa Cúc', 100000, 'http://hoatuoibattu.vn/wp-content/uploads/2014/08/hoa-hong-xanh-la-cay-3.jpg'),
(2, 'HH1002', 'Hoa Hồng', 200000, 'https://hoasaigon.com.vn/kcfinder/upload/images/mach-nho-cach-tang-hoa-cho-ban-gai-ngay-20-10-that-y-nghia-9.jpg'),
(3, 'HH1003', 'Hoa Huệ', 300000, 'http://4.bp.blogspot.com/-OcvnflMrlQc/VCu0OaFUvmI/AAAAAAAAD9o/yr1mFph7cls/s1600/hoa-cuoi-mau-xanh-la.jpg'),
(4, 'HS1005', 'Hoa Sen', 400000, 'https://cayvahoa.net/wp-content/uploads/cay-hoa-hong-xanh-1.jpg');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `tbSanPham`
--
ALTER TABLE `tbSanPham`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `tbSanPham`
--
ALTER TABLE `tbSanPham`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
