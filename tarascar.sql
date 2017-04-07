-- phpMyAdmin SQL Dump
-- version 4.4.13.1deb1
-- http://www.phpmyadmin.net
--
-- Хост: localhost
-- Час створення: Квт 07 2017 р., 17:57
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

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
  `id` int(10) unsigned NOT NULL,
  `trip_id` int(10) unsigned NOT NULL,
  `users_id` int(11) NOT NULL,
  `date` datetime DEFAULT NULL,
  `trip_start` int(10) unsigned NOT NULL,
  `trip_end` int(10) unsigned NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблиці `trip`
--

CREATE TABLE IF NOT EXISTS `trip` (
  `id` int(10) unsigned NOT NULL,
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
  `cars_id` int(10) unsigned NOT NULL DEFAULT '2'
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8;

--
-- Дамп даних таблиці `trip`
--

INSERT INTO `trip` (`id`, `owner_id`, `start_point_lat`, `start_point_lng`, `end_point_lat`, `end_point_lng`, `duration`, `quantity`, `price`, `date_start`, `date_end`, `start_name`, `end_name`, `cars_id`) VALUES
(25, 62, '49.8396978', '24.029727500000035', '48.8572518', '2.3525772000000416', '65095', 4, 200.00, '2017-03-28 00:00:00', '0000-00-00 00:00:00', 'Львів, Львівська область, Україна', 'Париж, Франція', 2),
(26, 62, '49.8396978', '24.029727500000035', '48.8572518', '2.3525772000000416', '65095', 4, 200.00, '2017-03-28 00:00:00', '0000-00-00 00:00:00', 'Львів, Львівська область, Україна', 'Париж, Франція', 2),
(27, 62, '49.8396978', '24.029727500000035', '48.8572518', '2.3525772000000416', '65095', 2, 400.00, '2017-03-30 00:00:00', '0000-00-00 00:00:00', 'Львів, Львівська область, Україна', 'Париж, Франція', 2),
(28, 62, '49.8396978', '24.029727500000035', '49.6375743', '24.294656199999963', '2733', 4, 12.00, '2017-03-31 00:00:00', '0000-00-00 00:00:00', 'Львів, Львівська область, Україна', 'Бібрка, Львівська область, Україна', 2),
(29, 62, '49.8396978', '24.029727500000035', '49.6375743', '24.294656199999963', '2733', 4, 12.00, '2017-03-31 00:00:00', '0000-00-00 00:00:00', 'Львів, Львівська область, Україна', 'Бібрка, Львівська область, Україна', 2),
(30, 62, '49.8396978', '24.029727500000035', '49.6375743', '24.294656199999963', '2733', 4, 12.00, '2017-03-31 00:00:00', '0000-00-00 00:00:00', 'Львів, Львівська область, Україна', 'Бібрка, Львівська область, Україна', 2),
(31, 62, '49.8396978', '24.029727500000035', '49.6375743', '24.294656199999963', '2733', 4, 12.00, '2017-03-31 00:00:00', '0000-00-00 00:00:00', 'Львів, Львівська область, Україна', 'Бібрка, Львівська область, Україна', 2),
(32, 62, '49.8396978', '24.029727500000035', '50.44985029999999', '30.523864600000024', '33296', 3, 200.00, '2017-03-30 00:00:00', '0000-00-00 00:00:00', 'Львів, Львівська область, Україна', 'Київ, місто Київ, Україна', 2),
(33, 62, '49.8396978', '24.029727500000035', '50.44985029999999', '30.523864600000024', '29801', 3, 450.00, '2017-04-07 00:00:00', '0000-00-00 00:00:00', 'Львів, Львівська область, Україна', 'Київ, місто Київ, Україна', 2),
(34, 62, '49.8396978', '24.029727500000035', '49.06577559999999', '33.41004029999999', '43618', 3, 450.00, '2017-04-13 00:00:00', '0000-00-00 00:00:00', 'Львів, Львівська область, Україна', 'Кременчук, Полтавська область, Україна', 2);

-- --------------------------------------------------------

--
-- Структура таблиці `trip_info`
--

CREATE TABLE IF NOT EXISTS `trip_info` (
  `id` int(10) unsigned NOT NULL,
  `trip_id` int(10) unsigned NOT NULL,
  `meta_k` varchar(45) DEFAULT NULL,
  `meta_v` varchar(45) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=1803 DEFAULT CHARSET=utf8;

--
-- Дамп даних таблиці `trip_info`
--

INSERT INTO `trip_info` (`id`, `trip_id`, `meta_k`, `meta_v`) VALUES
(1417, 25, 'steps', '51.180913,15.008689199999935'),
(1418, 25, 'steps', '49.8396978,24.029727500000035'),
(1419, 25, 'steps', '49.841434,24.02828390000002'),
(1420, 25, 'steps', '50.8812954,11.854487699999936'),
(1421, 25, 'steps', '49.8417757,24.022286699999995'),
(1422, 25, 'steps', '49.8734891,23.90270290000001'),
(1423, 25, 'steps', '49.8430956,24.022088800000006'),
(1424, 25, 'steps', '49.841806,24.023287500000038'),
(1425, 25, 'steps', '49.9564947,23.121916599999963'),
(1426, 25, 'steps', '51.055501,13.370514800000024'),
(1427, 25, 'steps', '49.9549738,23.114115999999967'),
(1428, 25, 'steps', '49.9574845,23.10989070000005'),
(1429, 25, 'steps', '50.8394986,9.584704099999954'),
(1430, 25, 'steps', '50.8323409,9.576663100000019'),
(1431, 25, 'steps', '50.8306218,9.575319600000057'),
(1432, 25, 'steps', '50.827667,9.573368699999946'),
(1433, 25, 'steps', '50.8139485,9.543651599999976'),
(1434, 25, 'steps', '50.6113131,8.829093300000068'),
(1435, 25, 'steps', '50.6241156,8.696053799999959'),
(1436, 25, 'steps', '50.5278687,8.640063699999928'),
(1437, 25, 'steps', '50.9845497,7.838115600000037'),
(1438, 25, 'steps', '50.9530948,7.044937699999991'),
(1439, 25, 'steps', '50.9292366,7.054556300000058'),
(1440, 25, 'steps', '50.9212447,7.052993700000002'),
(1441, 25, 'steps', '50.8052413,6.179300399999988'),
(1442, 25, 'steps', '50.8046752,6.169552299999964'),
(1443, 25, 'steps', '50.7182702,6.1202200000000175'),
(1444, 25, 'steps', '50.6380226,5.842301300000031'),
(1445, 25, 'steps', '50.63749989999999,5.838324899999975'),
(1446, 25, 'steps', '50.67011429999999,5.491327200000001'),
(1447, 25, 'steps', '50.6483069,5.475101099999961'),
(1448, 25, 'steps', '50.4514647,3.7674107999999933'),
(1449, 25, 'steps', '50.43915680000001,3.667795299999966'),
(1450, 25, 'steps', '50.3393059,3.498850800000014'),
(1451, 25, 'steps', '50.012656,2.8787416999999778'),
(1452, 25, 'steps', '48.9881245,2.5084300999999414'),
(1453, 25, 'steps', '48.9866567,2.5056991000000153'),
(1454, 25, 'steps', '48.8658948,2.421219599999972'),
(1455, 25, 'steps', '48.8661961,2.414854900000023'),
(1456, 25, 'steps', '48.8278833,2.394483100000002'),
(1457, 25, 'steps', '48.828407,2.3883295000000544'),
(1458, 25, 'steps', '48.840325,2.374268700000016'),
(1459, 25, 'steps', '48.84174549999999,2.372653200000059'),
(1460, 25, 'steps', '48.8446664,2.3691473000000087'),
(1461, 25, 'steps', '48.8474716,2.3655558000000383'),
(1462, 25, 'steps', '48.8510692,2.362205200000062'),
(1463, 25, 'steps', '48.8511495,2.3624651000000085'),
(1464, 25, 'steps', '48.8533349,2.3578268999999636'),
(1465, 25, 'steps', '48.8543864,2.35494790000007'),
(1466, 25, 'steps', '48.8552952,2.352804399999968'),
(1467, 25, 'steps', '48.8569617,2.3537851999999475'),
(1468, 26, 'steps', '50.2068823,19.1708165'),
(1469, 26, 'steps', '49.8396978,24.029727500000035'),
(1470, 26, 'steps', '49.841434,24.02828390000002'),
(1471, 26, 'steps', '49.841806,24.023287500000038'),
(1472, 26, 'steps', '49.8417757,24.022286699999995'),
(1473, 26, 'steps', '49.8430956,24.022088800000006'),
(1474, 26, 'steps', '49.8734891,23.90270290000001'),
(1475, 26, 'steps', '49.9564947,23.121916599999963'),
(1476, 26, 'steps', '49.9549738,23.114115999999967'),
(1477, 26, 'steps', '49.9574845,23.10989070000005'),
(1478, 26, 'steps', '50.3627026,19.25071939999998'),
(1479, 26, 'steps', '50.4159944,19.218127699999968'),
(1480, 26, 'steps', '50.4235445,19.213710900000024'),
(1481, 26, 'steps', '51.4065713,19.63375300000007'),
(1482, 26, 'steps', '51.4315757,19.64158640000005'),
(1483, 26, 'steps', '51.8850201,19.64127350000001'),
(1484, 26, 'steps', '51.88718369999999,19.639466099999936'),
(1485, 26, 'steps', '52.3155987,14.577728100000058'),
(1486, 26, 'steps', '52.3234445,13.756685599999969'),
(1487, 26, 'steps', '52.2914748,12.922035599999958'),
(1488, 26, 'steps', '52.29496990000001,12.907203699999968'),
(1489, 26, 'steps', '52.3289981,12.824818100000016'),
(1490, 26, 'steps', '51.60099659999999,7.694152000000031'),
(1491, 26, 'steps', '50.9294501,6.847604400000023'),
(1492, 26, 'steps', '50.8052413,6.179300399999988'),
(1493, 26, 'steps', '50.8046752,6.169552299999964'),
(1494, 26, 'steps', '50.7182702,6.1202200000000175'),
(1495, 26, 'steps', '50.6380226,5.842301300000031'),
(1496, 26, 'steps', '50.63749989999999,5.838324899999975'),
(1497, 26, 'steps', '50.67011429999999,5.491327200000001'),
(1498, 26, 'steps', '50.6483069,5.475101099999961'),
(1499, 26, 'steps', '50.4514647,3.7674107999999933'),
(1500, 26, 'steps', '50.43915680000001,3.667795299999966'),
(1501, 26, 'steps', '50.3393059,3.498850800000014'),
(1502, 26, 'steps', '50.012656,2.8787416999999778'),
(1503, 26, 'steps', '48.9881245,2.5084300999999414'),
(1504, 26, 'steps', '48.9866567,2.5056991000000153'),
(1505, 26, 'steps', '48.8658948,2.421219599999972'),
(1506, 26, 'steps', '48.8661961,2.414854900000023'),
(1507, 26, 'steps', '48.8278833,2.394483100000002'),
(1508, 26, 'steps', '48.828407,2.3883295000000544'),
(1509, 26, 'steps', '48.840325,2.374268700000016'),
(1510, 26, 'steps', '48.84174549999999,2.372653200000059'),
(1511, 26, 'steps', '48.8446664,2.3691473000000087'),
(1512, 26, 'steps', '48.8474716,2.3655558000000383'),
(1513, 26, 'steps', '48.8510692,2.362205200000062'),
(1514, 26, 'steps', '48.8511495,2.3624651000000085'),
(1515, 26, 'steps', '48.8533349,2.3578268999999636'),
(1516, 26, 'steps', '48.8543864,2.35494790000007'),
(1517, 26, 'steps', '48.8552952,2.352804399999968'),
(1518, 26, 'steps', '48.8569617,2.3537851999999475'),
(1519, 27, 'steps', '50.2068823,19.1708165'),
(1520, 27, 'steps', '49.8396978,24.029727500000035'),
(1521, 27, 'steps', '49.841434,24.02828390000002'),
(1522, 27, 'steps', '49.841806,24.023287500000038'),
(1523, 27, 'steps', '49.8417757,24.022286699999995'),
(1524, 27, 'steps', '49.8430956,24.022088800000006'),
(1525, 27, 'steps', '49.8734891,23.90270290000001'),
(1526, 27, 'steps', '49.9564947,23.121916599999963'),
(1527, 27, 'steps', '49.9549738,23.114115999999967'),
(1528, 27, 'steps', '49.9574845,23.10989070000005'),
(1529, 27, 'steps', '50.3627026,19.25071939999998'),
(1530, 27, 'steps', '50.4159944,19.218127699999968'),
(1531, 27, 'steps', '51.4315757,19.64158640000005'),
(1532, 27, 'steps', '51.4065713,19.63375300000007'),
(1533, 27, 'steps', '51.643137,19.53738210000006'),
(1534, 27, 'steps', '51.63504529999999,19.56983420000006'),
(1535, 27, 'steps', '51.6401491,19.564271299999973'),
(1536, 27, 'steps', '51.6417617,19.50990509999997'),
(1537, 27, 'steps', '50.4235445,19.213710900000024'),
(1538, 27, 'steps', '51.6979719,19.4791745'),
(1539, 27, 'steps', '51.6398372,19.503456599999936'),
(1540, 27, 'steps', '51.7004496,19.473271100000034'),
(1541, 27, 'steps', '51.7511095,19.43661080000004'),
(1542, 27, 'steps', '51.7517121,19.44202419999999'),
(1543, 27, 'steps', '51.7489034,19.44272030000002'),
(1544, 27, 'steps', '51.7487887,19.441541400000006'),
(1545, 27, 'steps', '51.74459,19.442387800000006'),
(1546, 27, 'steps', '51.7449501,19.440666999999962'),
(1547, 27, 'steps', '51.7356523,19.44200150000006'),
(1548, 27, 'steps', '51.7291215,19.444239700000026'),
(1549, 27, 'steps', '51.7268969,19.44746639999994'),
(1550, 27, 'steps', '51.6966964,19.341264499999966'),
(1551, 27, 'steps', '51.6025858,19.274579300000028'),
(1552, 27, 'steps', '51.2287432,17.367160300000023'),
(1553, 27, 'steps', '51.182807,17.20935259999999'),
(1554, 27, 'steps', '51.1716443,17.169569899999942'),
(1555, 27, 'steps', '51.13968610000001,17.082150899999988'),
(1556, 27, 'steps', '51.1119707,17.061030800000026'),
(1557, 27, 'steps', '51.1114033,17.05919940000001'),
(1558, 27, 'steps', '51.1089526,17.050193300000046'),
(1559, 27, 'steps', '51.1061189,17.047677900000053'),
(1560, 27, 'steps', '51.1057993,17.048612999999932'),
(1561, 27, 'steps', '51.1057672,17.04723230000002'),
(1562, 27, 'steps', '51.10725720000001,17.043868400000065'),
(1563, 27, 'steps', '51.1075542,17.041902400000026'),
(1564, 27, 'steps', '51.1039226,17.037450700000022'),
(1565, 27, 'steps', '51.1023009,17.036623200000008'),
(1566, 27, 'steps', '51.1022192,17.034820800000034'),
(1567, 27, 'steps', '51.0991589,17.033408099999974'),
(1568, 27, 'steps', '51.0978576,17.032597200000055'),
(1569, 27, 'steps', '51.0949225,17.03095570000005'),
(1570, 27, 'steps', '51.0636986,17.002335600000038'),
(1571, 27, 'steps', '51.0502167,16.969176199999993'),
(1572, 27, 'steps', '51.180913,15.008689199999935'),
(1573, 27, 'steps', '51.055501,13.370514800000024'),
(1574, 27, 'steps', '50.8812954,11.854487699999936'),
(1575, 27, 'steps', '50.8394986,9.584704099999954'),
(1576, 27, 'steps', '51.0506822,16.97400790000006'),
(1577, 27, 'steps', '50.8306218,9.575319600000057'),
(1578, 27, 'steps', '50.827667,9.573368699999946'),
(1579, 27, 'steps', '50.8323409,9.576663100000019'),
(1580, 27, 'steps', '50.8139485,9.543651599999976'),
(1581, 27, 'steps', '50.6113131,8.829093300000068'),
(1582, 27, 'steps', '50.0629314,8.609008099999983'),
(1583, 27, 'steps', '50.0303173,8.502810299999965'),
(1584, 27, 'steps', '50.0280801,8.49501459999999'),
(1585, 27, 'steps', '50.0162696,8.49632250000002'),
(1586, 27, 'steps', '49.9831096,8.465358100000003'),
(1587, 27, 'steps', '49.977488,8.455390099999931'),
(1588, 27, 'steps', '49.9644158,8.238646000000017'),
(1589, 27, 'steps', '49.4623132,7.809660300000019'),
(1590, 27, 'steps', '49.20516199999999,7.0404945000000225'),
(1591, 27, 'steps', '49.2037764,6.958138599999984'),
(1592, 27, 'steps', '49.1410888,6.812254100000018'),
(1593, 27, 'steps', '49.1392788,6.807113800000025'),
(1594, 27, 'steps', '49.1290384,6.262325000000033'),
(1595, 27, 'steps', '49.2415416,3.967004299999985'),
(1596, 27, 'steps', '48.8249068,2.393312100000003'),
(1597, 27, 'steps', '48.8276566,2.3896300999999767'),
(1598, 27, 'steps', '48.840325,2.374268700000016'),
(1599, 27, 'steps', '48.84174549999999,2.372653200000059'),
(1600, 27, 'steps', '48.8446664,2.3691473000000087'),
(1601, 27, 'steps', '48.8250877,2.393049700000006'),
(1602, 27, 'steps', '48.8474716,2.3655558000000383'),
(1603, 27, 'steps', '48.8510692,2.362205200000062'),
(1604, 27, 'steps', '48.8511495,2.3624651000000085'),
(1605, 27, 'steps', '48.8533349,2.3578268999999636'),
(1606, 27, 'steps', '48.8543864,2.35494790000007'),
(1607, 27, 'steps', '48.8552952,2.352804399999968'),
(1608, 27, 'steps', '48.8569617,2.3537851999999475'),
(1609, 31, 'polylines', 'ku`oH_pzqC?@@??@@??@@?DL?@@@@?LNLJHJfBpCPZHLP'),
(1610, 31, 'polylines', 'cieoHyhtqCOt@AFCDADCDKHWR]VSLqAl@'),
(1611, 31, 'polylines', 'goeoHwbtqCNdARfB'),
(1612, 31, 'polylines', 'cneoHi}sqC`CiBHIJKLQHQFOLg@b@iBd@iCHe@@G@K?K?'),
(1613, 31, 'polylines', 'yodoHyxtqC@?@??A@?@??A@??A@A?A?A@??A?E?A?A?A?'),
(1614, 31, 'polylines', 'keeoH_ptqCh@O|A_@bAOTEb@IhFmA|@_@zBuAFE'),
(1615, 31, 'polylines', 'mddoHuduqC{AUWGKEIGQOKOMQISQe@'),
(1616, 31, 'polylines', '_kdoHmiuqCZDL?JAJGHGHIFKFQFSJg@'),
(1617, 31, 'polylines', 'egdoH}luqCl@sDXcBn@}CBKp@mDTkAp@eCR{@r@}Bl@}A'),
(1618, 31, 'polylines', 'mhcoH{gwqCNHD@JAHA^CR?`@?HAF?HEd@g@l@q@|@iAVY'),
(1619, 31, 'polylines', 'k`_oHwozqCl@A^?N?^D'),
(1620, 31, 'polylines', 'm|~nHsozqCFHHFFDHDH?H?JEHEHIFKBEJGFG^k@JMNO`@'),
(1621, 31, 'polylines', 'w{}mHsngsCKw@AMMgAE[AYCm@Cu@Aa@?]?[@SBWFWDMFO'),
(1622, 31, 'steps', '49.8396978,24.029727500000035'),
(1623, 31, 'steps', '49.8406842,24.028764300000034'),
(1624, 31, 'steps', '49.84050300000001,24.027888800000028'),
(1625, 31, 'steps', '49.8390954,24.030875400000014'),
(1626, 31, 'steps', '49.83565129999999,24.032290999999987'),
(1627, 31, 'steps', '49.8338334,24.034191299999975'),
(1628, 31, 'steps', '49.8348781,24.034946799999943'),
(1629, 31, 'steps', '49.834274,24.035510899999963'),
(1630, 31, 'steps', '49.829351,24.04494090000003'),
(1631, 31, 'steps', '49.8160623,24.061598199999935'),
(1632, 31, 'steps', '49.8075832,24.061558600000012'),
(1633, 31, 'steps', '49.806949,24.061538199999973'),
(1634, 31, 'steps', '49.6378801,24.291780399999993'),
(1635, 32, 'polylines', 'ixvsHibs~CrCaElAcBjD{ENSBE~E{GjCsDdBaCzFcIrAi'),
(1636, 32, 'polylines', 'cieoHyhtqCOt@AFCDADCDKHWR]VSLqAl@o@\\i@ZSJg@Xg'),
(1637, 32, 'polylines', 'mh{sHsuw_DiAq@AA_@]e@k@i@{@mE{JSw@YeBIs@GaAAw'),
(1638, 32, 'polylines', 'ugfoHossqCEk@CSCUA]'),
(1639, 32, 'polylines', 'yejoH}wxqCHIFIDQFSDS?K@OAGAOCOEMEMIIIGGGKCI?K'),
(1640, 32, 'polylines', 'y|toHi{mrCAECECCECm@YIGEEKMEECIEKEOCSCQ?KAI@O'),
(1641, 32, 'polylines', 'ehfoHcwsqCc@?M?E?IBKFGDKJMNGHKXGXCP]fBGZAFCFC'),
(1642, 32, 'polylines', 'wrhoHexrqCCCACCCEACACACAE?YOMIMMUWc@}AiAiC}@_'),
(1643, 32, 'polylines', 'o_uoHyhnrCHy@PkBJyAFiAFwAB}@BaA@u@@w@@{@?iBA_'),
(1644, 32, 'polylines', 'yfxrHkwb|C}AeDcB}Ek@_B_EcLaF{NaAoCaIiUiAaDO]M'),
(1645, 32, 'polylines', 'yv{sHgyx_DTeFRwEb@qKJyCd@uKBa@l@sNh@mMb@iJ`@m'),
(1646, 32, 'polylines', 'w_wsHinq~Ci@qBOm@Mc@Kq@Gc@E[CYC[Ca@Aa@A_@Aa@?'),
(1647, 32, 'polylines', 'eq}rHuihxDCeAGaDCiAAU[}I]gJCi@EiBMkFO{FY}Mc@a'),
(1648, 32, 'polylines', 'o|{rHqfbyDBYHy@Hy@t@kHDg@XeD'),
(1649, 32, 'polylines', 'km}rHmbujD\\_Bn@eD|@mEn@}CXuAbCyLpCmNb@yBp@aDV'),
(1650, 32, 'polylines', 'ay{rHyzbyD@mAMB_@BIBKBIBIBYNMH'),
(1651, 32, 'polylines', '_}{rHu{byDOi@q@sBkAuDgD{LGQMm@Ka@Ke@[_BI[]}AY'),
(1652, 32, 'polylines', 'y||rHmueyDhAcBb@m@f@u@l@}@'),
(1653, 32, 'polylines', 'uv|rHs}eyDIUGMQS_@i@CEc@g@k@u@c@c@i@i@SUSU{@i'),
(1654, 32, 'polylines', 'gq}rH_vfyD?_@A_@AcA?_@?]?e@@i@B_D@}A?S@gA@k@@'),
(1655, 32, 'polylines', '_o}rHg`hyDHMDGDEBAHKTOf@]hAo@~AeADCFENKNIFGHG'),
(1656, 32, 'polylines', 'uq|rHcyhyD\\b@JLt@dABF'),
(1657, 32, 'steps', '49.8396978,24.029727500000035'),
(1658, 32, 'steps', '49.84458679999999,24.026322299999947'),
(1659, 32, 'polylines', 'aw|rHeohyDDGHMjCiGBEBGFO'),
(1660, 32, 'steps', '49.8446748,24.026903500000003'),
(1661, 32, 'steps', '49.85659750000001,24.021947899999986'),
(1662, 32, 'steps', '49.86476500000001,24.05263279999997'),
(1663, 32, 'steps', '49.9196476,24.16068949999999'),
(1664, 32, 'steps', '49.9200834,24.162853499999983'),
(1665, 32, 'steps', '50.42812929999999,25.742140199999994'),
(1666, 32, 'steps', '50.5845319,26.153487100000007'),
(1667, 32, 'steps', '50.585723,26.14517269999999'),
(1668, 32, 'steps', '50.6075926,26.340903600000047'),
(1669, 32, 'steps', '50.6098918,26.34660340000005'),
(1670, 32, 'steps', '50.4547786,28.129825299999993'),
(1671, 32, 'steps', '50.4553854,30.358187000000044'),
(1672, 32, 'steps', '50.4469564,30.490807399999994'),
(1673, 32, 'steps', '50.44641,30.494047799999976'),
(1674, 32, 'steps', '50.4470412,30.49418860000003'),
(1675, 32, 'steps', '50.4521255,30.50855320000005'),
(1676, 32, 'steps', '50.4511475,30.50986320000004'),
(1677, 32, 'steps', '50.4554001,30.513759599999958'),
(1678, 32, 'steps', '50.4550419,30.520523000000026'),
(1679, 32, 'steps', '50.4512127,30.522913600000038'),
(1680, 32, 'steps', '50.4503515,30.524495099999967'),
(1681, 33, 'polylines', 'yv{sHgyx_DTeFRwEb@qKJyCd@uKBa@l@sNh@mMb@iJ`@m'),
(1682, 33, 'polylines', 'cieoHyhtqCOt@AFCDADCDKHWR]VSLqAl@o@\\i@ZSJg@Xg'),
(1683, 33, 'polylines', 'yejoH}wxqCHIFIDQFSDS?K@OAGAOCOEMEMIIIGGGKCI?K'),
(1684, 33, 'polylines', 'km}rHmbujD\\_Bn@eD|@mEn@}CXuAbCyLpCmNb@yBp@aDV'),
(1685, 33, 'polylines', 'eq}rHuihxDCeAGaDCiAAU[}I]gJCi@EiBMkFO{FY}Mc@a'),
(1686, 33, 'polylines', 'o|{rHqfbyDBYHy@Hy@t@kHDg@XeD'),
(1687, 33, 'polylines', 'ay{rHyzbyD@mAMB_@BIBKBIBIBYNMH'),
(1688, 33, 'polylines', '_}{rHu{byDOi@q@sBkAuDgD{LGQMm@Ka@Ke@[_BI[]}AY'),
(1689, 33, 'polylines', 'y||rHmueyDhAcBb@m@f@u@l@}@'),
(1690, 33, 'polylines', 'uv|rHs}eyDIUGMQS_@i@CEc@g@k@u@c@c@i@i@SUSU{@i'),
(1691, 33, 'polylines', 'ehfoHcwsqCc@?M?E?IBKFGDKJMNGHKXGXCP]fBGZAFCFC'),
(1692, 33, 'polylines', 'wrhoHexrqCCCACCCEACACACAE?YOMIMMUWc@}AiAiC}@_'),
(1693, 33, 'polylines', 'ugfoHossqCEk@CSCUA]'),
(1694, 33, 'polylines', 'yfxrHkwb|C}AeDcB}Ek@_B_EcLaF{NaAoCaIiUiAaDO]M'),
(1695, 33, 'polylines', 'mh{sHsuw_DiAq@AA_@]e@k@i@{@mE{JSw@YeBIs@GaAAw'),
(1696, 33, 'polylines', 'w_wsHinq~Ci@qBOm@Mc@Kq@Gc@E[CYC[Ca@Aa@A_@Aa@?'),
(1697, 33, 'polylines', 'oauoHy}mrCHw@Hy@Jy@BY@S@I?IR_BBQHy@PkBJyAFiAF'),
(1698, 33, 'polylines', 'gq}rH_vfyD?_@A_@AcA?_@?]?e@@i@B_D@}A?S@gA@k@@'),
(1699, 33, 'polylines', '_o}rHg`hyDHMDGDEBAHKTOf@]hAo@~AeADCFENKNIFGHG'),
(1700, 33, 'polylines', 'aw|rHeohyDDGHMjCiGBEBGFO'),
(1701, 33, 'polylines', 'uq|rHcyhyD\\b@JLt@dABF'),
(1702, 33, 'steps', '49.8396978,24.029727500000035'),
(1703, 33, 'steps', '49.84458679999999,24.026322299999947'),
(1704, 33, 'steps', '49.8446748,24.026903500000003'),
(1705, 33, 'steps', '49.85659750000001,24.021947899999986'),
(1706, 33, 'steps', '49.86476500000001,24.05263279999997'),
(1707, 33, 'steps', '49.9203963,24.161094899999966'),
(1708, 33, 'steps', '50.42812929999999,25.742140199999994'),
(1709, 33, 'steps', '50.585723,26.14517269999999'),
(1710, 33, 'steps', '50.6075926,26.340903600000047'),
(1711, 33, 'steps', '50.6098918,26.34660340000005'),
(1712, 33, 'steps', '50.4547786,28.129825299999993'),
(1713, 33, 'steps', '50.4469564,30.490807399999994'),
(1714, 33, 'steps', '50.4553854,30.358187000000044'),
(1715, 33, 'steps', '50.4470412,30.49418860000003'),
(1716, 33, 'steps', '50.44641,30.494047799999976'),
(1717, 33, 'steps', '50.4521255,30.50855320000005'),
(1718, 33, 'steps', '50.4511475,30.50986320000004'),
(1719, 33, 'steps', '50.4554001,30.513759599999958'),
(1720, 33, 'steps', '50.4550419,30.520523000000026'),
(1721, 33, 'steps', '50.4512127,30.522913600000038'),
(1722, 33, 'steps', '50.4503515,30.524495099999967'),
(1723, 34, 'polylines', 'cieoHyhtqCOt@AFCDADCDKHWR]VSLqAl@o@\\i@ZSJg@Xg'),
(1724, 34, 'polylines', 'yv{sHgyx_DTeFRwEb@qKJyCd@uKBa@l@sNh@mMb@iJ`@m'),
(1725, 34, 'polylines', 'ugfoHossqCEk@CSCUA]'),
(1726, 34, 'polylines', 'ehfoHcwsqCc@?M?E?IBKFGDKJMNGHKXGXCP]fBGZAFCFC'),
(1727, 34, 'polylines', 'yejoH}wxqCHIFIDQFSDS?K@OAGAOCOEMEMIIIGGGKCI?K'),
(1728, 34, 'polylines', 'wrhoHexrqCCCACCCEACACACAE?YOMIMMUWc@}AiAiC}@_'),
(1729, 34, 'polylines', 'oauoHy}mrCHw@Hy@Jy@BY@S@I?IR_BBQHy@PkBJyAFiAF'),
(1730, 34, 'polylines', 'yfxrHkwb|C}AeDcB}Ek@_B_EcLaF{NaAoCaIiUiAaDO]M'),
(1731, 34, 'polylines', 'w_wsHinq~Ci@qBOm@Mc@Kq@Gc@E[CYC[Ca@Aa@A_@Aa@?'),
(1732, 34, 'polylines', 'mh{sHsuw_DiAq@AA_@]e@k@i@{@mE{JSw@YeBIs@GaAAw'),
(1733, 34, 'polylines', 'ak|sHejlgDGICEGUUo@]gAEICAECC?A?KFEDADAD?J?D?'),
(1734, 34, 'polylines', 'ik|sHyhlgDjAxD'),
(1735, 34, 'polylines', '}h|sH_clgDAF?D?F@FBNHXPj@@J@F@HALAHAJAHCHCDEF'),
(1736, 34, 'polylines', '}rhvHseemDI]GSCICKCMCKAQAOEYCWD_@@O@GHeADe@BY'),
(1737, 34, 'polylines', '}tatHagruDDC@?HCFEFEDEFIHMHMHSBSNy@Hc@Ji@^u@T'),
(1738, 34, 'polylines', '_jisHu`ixDDk@NgBHy@Bu@H}ABoBEuDGmAM_BSqBOeAYw'),
(1739, 34, 'polylines', 'arksHsvzxDHa@@IBGBEBE@CDCBCTGR@rD|ArHjDzCvAbF'),
(1740, 34, 'polylines', 'gkjsHwdzxDAB?D?B?D?D?B@D?B@B@D@B@B@B@@BDB@@@B'),
(1741, 34, 'polylines', '_visHgl`yDzH}Ff@_@RE\\?bB@fB?bDE|CFf@@X?N?RG`@'),
(1742, 34, 'polylines', '{_dsH{kdyDr@oAl@cAPYJQFKBMFQDOBOBQ?K@M?I@SAUA'),
(1743, 34, 'polylines', 'y}csHijhyDJaAJ_ALu@~@{E~@mEX{AVyAt@cEPcALo@HY'),
(1744, 34, 'polylines', 'iscsHapiyDPWNUJWDIDKHSHYRs@?AF[Ja@H]Nq@NuAFoA'),
(1745, 34, 'polylines', 'kicsHiekyDj@o@NSLSHIHKNSNKLKLMNI\\URKXO`@KLCN?'),
(1746, 34, 'polylines', 'es`sHwxiyDv@lA|A|BxAvBvB~CxBbDjBnC\\d@T\\NT\\j@J'),
(1747, 34, 'polylines', 'y{_sHwyhyDhEe@`Fq@`@GLCZCv@IxEs@t@IdJaAxDg@dB'),
(1748, 34, 'polylines', 'sm~rHeciyDDCdAM`@G^I^Mb@S\\Sd@]f@m@Xa@Zm@`@{@f'),
(1749, 34, 'polylines', 'e`xrHefqyDx@Y`A]|@Sr@WZKzA[zAQ`AMlBMp@E\\CPAx@'),
(1750, 34, 'polylines', 'k~vrHsmqyDhA]f@Q|Bm@tA[|Bg@l@M|B[lBSf@E~BM`AC'),
(1751, 34, 'polylines', 'ugsrH{lpyDTp@JZT`@lA`B^h@PVPZL`@Lj@PbAPjAPdAR'),
(1752, 34, 'polylines', 'ytrrHompyDz@oDnDgMp@}BNm@Le@r@iCd@_BrA}En@yB|'),
(1753, 34, 'polylines', 'i|frHid`|DbAN^FjBb@XFNDd@H\\DN@D?@?HANEPIn@_@\\'),
(1754, 34, 'polylines', 'cbspH_wr~DFGV_@lAqBLQRUT]d@q@PYjBsCfF{HnGqJlG'),
(1755, 34, 'polylines', 'k`ppH{kg_Ep@{CT{@pA{AfDwDHELILKrB}BrAyAr@w@pA'),
(1756, 34, 'polylines', 'gbjnHaembE?A@??ADKBKBM@M@M?MAM?MAE?EACAE?CAEA'),
(1757, 34, 'polylines', '{pdnHo_ybEFBHBH?F?HEFCFGFGDKDKBKBM?C@IASHi@@K'),
(1758, 34, 'polylines', '{manHmy~bE@FJLDFFBDBFBF@H?D?HCDABAFGFIDGBEBGB'),
(1759, 34, 'polylines', 'mtrjHi}_kEhDdAr@TxCbAlBj@l@Jj@Jl@L`ATfFrArAZv'),
(1760, 34, 'polylines', 'sfojH}m~jERt@^hAd@vAJZ~@jCBJj@xAr@tBNf@`@nAJV'),
(1761, 34, 'polylines', 'wpnjHe}|jElBkB'),
(1762, 34, 'polylines', 'imnjHq`}jEVp@zB|GnBvF`@pA'),
(1763, 34, 'steps', '49.8396978,24.029727500000035'),
(1764, 34, 'steps', '49.84458679999999,24.026322299999947'),
(1765, 34, 'steps', '49.8446748,24.026903500000003'),
(1766, 34, 'steps', '49.85659750000001,24.021947899999986'),
(1767, 34, 'steps', '49.86476500000001,24.05263279999997'),
(1768, 34, 'steps', '49.9203963,24.161094899999966'),
(1769, 34, 'steps', '50.42812929999999,25.742140199999994'),
(1770, 34, 'steps', '50.585723,26.14517269999999'),
(1771, 34, 'steps', '50.6075926,26.340903600000047'),
(1772, 34, 'steps', '50.6098918,26.34660340000005'),
(1773, 34, 'steps', '50.6131316,27.59347409999998'),
(1774, 34, 'steps', '50.6131714,27.59324570000001'),
(1775, 34, 'steps', '50.6127943,27.592320299999983'),
(1776, 34, 'steps', '51.0035052,28.539936500000067'),
(1777, 34, 'steps', '50.6403067,29.91745309999999'),
(1778, 34, 'steps', '50.5156781,30.361871899999983'),
(1779, 34, 'steps', '50.5272073,30.452418299999977'),
(1780, 34, 'steps', '50.5210021,30.449562300000025'),
(1781, 34, 'steps', '50.5176039,30.481479600000057'),
(1782, 34, 'steps', '50.4884622,30.501902400000063'),
(1783, 34, 'steps', '50.4881299,30.52213370000004'),
(1784, 34, 'steps', '50.4864475,30.528170799999998'),
(1785, 34, 'steps', '50.4848617,30.536688000000026'),
(1786, 34, 'steps', '50.4710729,30.529560299999957'),
(1787, 34, 'steps', '50.4673329,30.524599399999943'),
(1788, 34, 'steps', '50.4599413,30.52611079999997'),
(1789, 34, 'steps', '50.42706640000001,30.56754760000001'),
(1790, 34, 'steps', '50.4216628,30.568737199999987'),
(1791, 34, 'steps', '50.4026696,30.56349739999996'),
(1792, 34, 'steps', '50.3394116,30.971727999999985'),
(1793, 34, 'steps', '50.3996458,30.56359759999998'),
(1794, 34, 'steps', '50.0741034,31.394562800000017'),
(1795, 34, 'steps', '50.0584572,31.500299900000073'),
(1796, 34, 'steps', '49.7003616,32.02144739999994'),
(1797, 34, 'steps', '49.6719789,32.08199919999993'),
(1798, 34, 'steps', '49.6561448,32.11174510000001'),
(1799, 34, 'steps', '49.0888743,33.42821170000002'),
(1800, 34, 'steps', '49.071296,33.42063239999993'),
(1801, 34, 'steps', '49.067802,33.41282619999993'),
(1802, 34, 'steps', '49.067253,33.413371900000016');

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
  ADD PRIMARY KEY (`id`,`trip_id`,`users_id`,`trip_start`,`trip_end`),
  ADD KEY `fk_orders_trip1_idx` (`trip_id`),
  ADD KEY `fk_orders_users1_idx` (`users_id`),
  ADD KEY `fk_orders_trip_info1_idx` (`trip_start`),
  ADD KEY `fk_orders_trip_info2_idx` (`trip_end`);

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
  MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT для таблиці `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT для таблиці `trip`
--
ALTER TABLE `trip`
  MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=35;
--
-- AUTO_INCREMENT для таблиці `trip_info`
--
ALTER TABLE `trip_info`
  MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=1803;
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
  ADD CONSTRAINT `fk_orders_trip1` FOREIGN KEY (`trip_id`) REFERENCES `trip` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_orders_trip_info1` FOREIGN KEY (`trip_start`) REFERENCES `trip_info` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_orders_trip_info2` FOREIGN KEY (`trip_end`) REFERENCES `trip_info` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_orders_users1` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

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
