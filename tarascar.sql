-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Хост: localhost
-- Час створення: Бер 18 2017 р., 13:41
-- Версія сервера: 5.5.53-0ubuntu0.14.04.1
-- Версія PHP: 5.5.9-1ubuntu4.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- База даних: `tarascar`
--

-- --------------------------------------------------------

--
-- Структура таблиці `cars`
--

CREATE TABLE IF NOT EXISTS `cars` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `users_id` int(11) NOT NULL,
  `brand` varchar(45) DEFAULT NULL,
  `model` varchar(45) DEFAULT NULL,
  `year` date DEFAULT NULL,
  `engine` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`,`users_id`),
  KEY `fk_cars_users1_idx` (`users_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Дамп даних таблиці `cars`
--

INSERT INTO `cars` (`id`, `users_id`, `brand`, `model`, `year`, `engine`) VALUES
(2, 62, 'Chevrolet', 'Aveo', '2008-03-09', '1.5');

-- --------------------------------------------------------

--
-- Структура таблиці `orders`
--

CREATE TABLE IF NOT EXISTS `orders` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `trip_id` int(10) unsigned NOT NULL,
  `users_id` int(11) NOT NULL,
  `date_` datetime DEFAULT NULL,
  PRIMARY KEY (`id`,`trip_id`,`users_id`),
  KEY `fk_orders_trip1_idx` (`trip_id`),
  KEY `fk_orders_users1_idx` (`users_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Структура таблиці `trip`
--

CREATE TABLE IF NOT EXISTS `trip` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `owner_id` int(11) NOT NULL,
  `start_point_lat` varchar(45) CHARACTER SET latin1 DEFAULT NULL,
  `start_point_lng` varchar(45) CHARACTER SET latin1 DEFAULT NULL,
  `end_point_lat` varchar(45) CHARACTER SET latin1 NOT NULL,
  `end_point_lng` varchar(255) CHARACTER SET latin1 NOT NULL,
  `duration` varchar(45) CHARACTER SET latin1 NOT NULL,
  `quantity` tinyint(2) DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  `date_start` datetime DEFAULT NULL,
  `date_end` datetime DEFAULT NULL,
  `start_name` varchar(255) DEFAULT NULL,
  `end_name` varchar(255) DEFAULT NULL,
  `cars_id` int(10) unsigned NOT NULL DEFAULT '2',
  PRIMARY KEY (`id`,`owner_id`,`cars_id`),
  KEY `fk_trip_users_idx` (`owner_id`),
  KEY `fk_trip_cars1_idx` (`cars_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=25 ;

--
-- Дамп даних таблиці `trip`
--

INSERT INTO `trip` (`id`, `owner_id`, `start_point_lat`, `start_point_lng`, `end_point_lat`, `end_point_lng`, `duration`, `quantity`, `price`, `date_start`, `date_end`, `start_name`, `end_name`, `cars_id`) VALUES
(24, 62, '49.6375743', '24.294656199999963', '49.8396978', '24.029727500000035', '2634', 4, 15.00, '2017-03-23 00:00:00', '0000-00-00 00:00:00', 'Бібрка, Львівська область, Україна', 'Львів, Львівська область, Україна', 2);

-- --------------------------------------------------------

--
-- Структура таблиці `trip_info`
--

CREATE TABLE IF NOT EXISTS `trip_info` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `trip_id` int(10) unsigned NOT NULL,
  `meta_k` varchar(45) DEFAULT NULL,
  `meta_v` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`,`trip_id`),
  KEY `fk_trip_info_trip1_idx` (`trip_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=1417 ;

--
-- Дамп даних таблиці `trip_info`
--

INSERT INTO `trip_info` (`id`, `trip_id`, `meta_k`, `meta_v`) VALUES
(1395, 24, 'points', 'seeoHyktqC?MCICGCEAAC?ECIAMC'),
(1396, 24, 'points', 'yy}mHs`hsCEFg@n@a@`@GNELGVCVAR?Z?\\@`@Bt@Bl@@X'),
(1397, 24, 'points', '{{}mHsngsCUUqA{A[g@QWKU_AsBGM[{@eCk@[IgAOgAAo'),
(1398, 24, 'points', '}qwnHkbcrCHPLRLJXNL@NATC^ELDHDLNJRDDFz@BZBVDh'),
(1399, 24, 'points', 'smwnHshrqCa@fBQp@K`@Sh@Qb@Uf@_@r@c@r@eA`BeBjC'),
(1400, 24, 'points', 'imboHirrqCc@p@GJEHk@tAoBbFGNgA`Cc@`A'),
(1401, 24, 'points', 'kwboHs_rqC]]o@g@iAaASWk@g@SKQEIAMBODiAfAo@l@U'),
(1402, 24, 'points', 'azcoHybrqCO\\'),
(1403, 24, 'points', 'qzcoH{arqCsAg@uA_@c@Mq@a@]Um@u@Yi@CEYg@KOW[EG'),
(1404, 24, 'points', '}geoHedtqCb@iBd@iC'),
(1405, 24, 'steps', 'yy}mHs`hsCEFg@n@a@`@GNELGVCVAR?Z?\\@`@Bt@Bl@@X'),
(1406, 24, 'points', 'cgeoHkmtqCUJGLEJCJCLKv@GX'),
(1407, 24, 'steps', '}qwnHkbcrCHPLRLJXNL@NATC^ELDHDLNJRDDFz@BZBVDh'),
(1408, 24, 'steps', '{{}mHsngsCUUqA{A[g@QWKU_AsBGM[{@eCk@[IgAOgAAo'),
(1409, 24, 'steps', 'smwnHshrqCa@fBQp@K`@Sh@Qb@Uf@_@r@c@r@eA`BeBjC'),
(1410, 24, 'steps', 'imboHirrqCc@p@GJEHk@tAoBbFGNgA`Cc@`A'),
(1411, 24, 'steps', 'kwboHs_rqC]]o@g@iAaASWk@g@SKQEIAMBODiAfAo@l@U'),
(1412, 24, 'steps', 'azcoHybrqCO\\'),
(1413, 24, 'steps', 'qzcoH{arqCsAg@uA_@c@Mq@a@]Um@u@Yi@CEYg@KOW[EG'),
(1414, 24, 'steps', '}geoHedtqCb@iBd@iC'),
(1415, 24, 'steps', 'seeoHyktqC?MCICGCEAAC?ECIAMC'),
(1416, 24, 'steps', 'cgeoHkmtqCUJGLEJCJCLKv@GX');

-- --------------------------------------------------------

--
-- Структура таблиці `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `phone` varchar(95) DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `sessid` varchar(45) DEFAULT NULL,
  `intro` varchar(255) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `lastlogin` datetime DEFAULT NULL,
  `status` enum('ban','deleted','active') DEFAULT 'active',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=66 ;

--
-- Дамп даних таблиці `users`
--

INSERT INTO `users` (`id`, `name`, `surname`, `email`, `password`, `phone`, `birthday`, `sessid`, `intro`, `created`, `lastlogin`, `status`) VALUES
(62, 'Taras', 'Bodnar', 'bania20091@rambler.ru', 'e10adc3949ba59abbe56e057f20f883e', NULL, NULL, NULL, NULL, '2017-03-16 17:48:38', NULL, 'active');

--
-- Обмеження зовнішнього ключа збережених таблиць
--

--
-- Обмеження зовнішнього ключа таблиці `cars`
--
ALTER TABLE `cars`
  ADD CONSTRAINT `fk_cars_users1` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Обмеження зовнішнього ключа таблиці `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `fk_orders_trip1` FOREIGN KEY (`trip_id`) REFERENCES `trip` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_orders_users1` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Обмеження зовнішнього ключа таблиці `trip`
--
ALTER TABLE `trip`
  ADD CONSTRAINT `fk_trip_cars1` FOREIGN KEY (`cars_id`) REFERENCES `cars` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_trip_users` FOREIGN KEY (`owner_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Обмеження зовнішнього ключа таблиці `trip_info`
--
ALTER TABLE `trip_info`
  ADD CONSTRAINT `fk_trip_info_trip1` FOREIGN KEY (`trip_id`) REFERENCES `trip` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
