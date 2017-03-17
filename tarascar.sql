-- phpMyAdmin SQL Dump
-- version 4.4.13.1deb1
-- http://www.phpmyadmin.net
--
-- Хост: localhost
-- Час створення: Бер 17 2017 р., 17:50
-- Версія сервера: 5.6.31-0ubuntu0.15.10.1
-- Версія PHP: 5.6.11-1ubuntu3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База даних: `tarascar`
--

-- --------------------------------------------------------

--
-- Структура таблиці `cars`
--

CREATE TABLE IF NOT EXISTS `cars` (
  `id` int(10) unsigned NOT NULL,
  `users_id` int(11) NOT NULL,
  `brand` varchar(45) DEFAULT NULL,
  `model` varchar(45) DEFAULT NULL,
  `year` date DEFAULT NULL,
  `engine` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблиці `orders`
--

CREATE TABLE IF NOT EXISTS `orders` (
  `id` int(10) unsigned NOT NULL,
  `trip_id` int(10) unsigned NOT NULL,
  `users_id` int(11) NOT NULL,
  `date_` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблиці `trip`
--

CREATE TABLE IF NOT EXISTS `trip` (
  `id` int(10) unsigned NOT NULL,
  `owner_id` int(11) NOT NULL,
  `start_point_lat` varchar(45) DEFAULT NULL,
  `start_point_lng` varchar(45) DEFAULT NULL,
  `end_point_lat` varchar(45) NOT NULL,
  `end_point_lng` varchar(255) NOT NULL,
  `duration` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `quantity` tinyint(2) DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  `date_start` datetime DEFAULT NULL,
  `date_end` datetime DEFAULT NULL,
  `start_name` varchar(255) DEFAULT NULL,
  `end_name` varchar(255) DEFAULT NULL,
  `cars_id` int(10) unsigned NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Структура таблиці `trip_info`
--

CREATE TABLE IF NOT EXISTS `trip_info` (
  `id` int(10) unsigned NOT NULL,
  `trip_id` int(10) unsigned NOT NULL,
  `meta_k` varchar(45) DEFAULT NULL,
  `meta_v` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблиці `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL,
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
  `status` enum('ban','deleted','active') DEFAULT 'active'
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=latin1;

--
-- Дамп даних таблиці `users`
--

INSERT INTO `users` (`id`, `name`, `surname`, `email`, `password`, `phone`, `birthday`, `sessid`, `intro`, `created`, `lastlogin`, `status`) VALUES
(62, 'Taras', 'Bodnar', 'bania20091@rambler.ru', 'e10adc3949ba59abbe56e057f20f883e', NULL, NULL, NULL, NULL, '2017-03-16 17:48:38', NULL, 'active');

--
-- Індекси збережених таблиць
--

--
-- Індекси таблиці `cars`
--
ALTER TABLE `cars`
  ADD PRIMARY KEY (`id`,`users_id`),
  ADD KEY `fk_cars_users1_idx` (`users_id`);

--
-- Індекси таблиці `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`,`trip_id`,`users_id`),
  ADD KEY `fk_orders_trip1_idx` (`trip_id`),
  ADD KEY `fk_orders_users1_idx` (`users_id`);

--
-- Індекси таблиці `trip`
--
ALTER TABLE `trip`
  ADD PRIMARY KEY (`id`,`owner_id`,`cars_id`),
  ADD KEY `fk_trip_users_idx` (`owner_id`),
  ADD KEY `fk_trip_cars1_idx` (`cars_id`);

--
-- Індекси таблиці `trip_info`
--
ALTER TABLE `trip_info`
  ADD PRIMARY KEY (`id`,`trip_id`),
  ADD KEY `fk_trip_info_trip1_idx` (`trip_id`);

--
-- Індекси таблиці `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT для збережених таблиць
--

--
-- AUTO_INCREMENT для таблиці `cars`
--
ALTER TABLE `cars`
  MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT для таблиці `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT для таблиці `trip`
--
ALTER TABLE `trip`
  MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT для таблиці `trip_info`
--
ALTER TABLE `trip_info`
  MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT для таблиці `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=63;
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
