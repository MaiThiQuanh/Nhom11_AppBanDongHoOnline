-- phpMyAdmin SQL Dump
-- version 4.4.15.9
-- https://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Mer 16 Octobre 2019 à 23:52
-- Version du serveur :  5.6.37
-- Version de PHP :  5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `qlbanhangHoa`
--

-- --------------------------------------------------------

--
-- Structure de la table `tbSanPham`
--

CREATE TABLE IF NOT EXISTS `tbSanPham` (
  `id` int(11) NOT NULL,
  `username` varchar(5000) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(5000) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(5000) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Contenu de la table `tbSanPham`
--

INSERT INTO `tbSanPham` (`id`, `username`, `password`, `email`) VALUES
(1, 'nhi', 'nhi123', 'nhioanmai');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
