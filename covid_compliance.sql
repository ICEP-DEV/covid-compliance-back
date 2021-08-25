-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 24, 2021 at 09:24 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.2.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `covid_compliance`
--

-- --------------------------------------------------------

--
-- Table structure for table `campus`
--

CREATE TABLE `campus` (
  `camp_id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `town` varchar(255) NOT NULL,
  `province` varchar(255) NOT NULL,
  `code` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `campus`
--

INSERT INTO `campus` (`camp_id`, `name`, `town`, `province`, `code`) VALUES
('arc', 'Arcadia Campus', 'Arcadia', 'Gauteng', '0083'),
('art', 'Arts Campus', 'Arcadia', 'Gauteng', '0007'),
('emal', 'Emalehleni Campus', 'Witbank', 'Mpumalanga', '1034'),
('main', 'Pretoria Campus', 'Pretoria West', 'Gauteng', '0183'),
('pol', 'Polokwane Campus', 'Polokwane Ext 67', 'Polokwane', '0699'),
('rank', 'Ga-Rankuwa Campus', 'Ga-Rankuwa', 'Gauteng', '0155'),
('soshn', 'soshanguve North Campus', 'Soshnaguve', 'Gauteng', '0152'),
('soshs', 'soshanguve South Campus', 'Soshnaguve', 'Gauteng', '0152');

-- --------------------------------------------------------

--
-- Table structure for table `screen`
--

CREATE TABLE `screen` (
  `screen_id` int(11) NOT NULL,
  `temp` float NOT NULL,
  `campus` varchar(255) NOT NULL,
  `cough` varchar(255) NOT NULL,
  `breathing` varchar(255) NOT NULL,
  `fever` varchar(255) DEFAULT NULL,
  `symptoms` varchar(255) NOT NULL,
  `contact` varchar(10) NOT NULL,
  `covid_contact` varchar(255) NOT NULL,
  `travel` varchar(255) NOT NULL,
  `stud_staff` int(11) DEFAULT NULL,
  `visitor_id` varchar(255) DEFAULT NULL,
  `camp_id` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `screen`
--

INSERT INTO `screen` (`screen_id`, `temp`, `campus`, `cough`, `breathing`, `fever`, `symptoms`, `contact`, `covid_contact`, `travel`, `stud_staff`, `visitor_id`, `camp_id`) VALUES
(1, 362.5, 'soshanguve North Campus', 'Yes', 'No', 'No', 'Aids', 'Yes', 'Yes', 'Yes', 215498120, 'vis', 'soshn'),
(2, 362.5, 'soshanguve North Campus', 'Yes', 'No', 'No', 'Aids', 'Yes', 'Yes', 'Yes', 215498120, 'vis', 'soshn'),
(3, 362.5, 'soshanguve North Campus', 'Yes', 'No', 'No', 'Aids', 'Yes', 'Yes', 'Yes', 215498120, 'vis', 'soshn'),
(4, 362.5, 'soshanguve North Campus', 'Yes', 'No', 'No', 'Aids', 'Yes', 'Yes', 'Yes', 215498120, 'vis', 'soshn'),
(5, 32.5, 'soshanguve North Campus', 'Yes', 'No', 'No', 'Aids', 'Yes', 'Yes', 'Yes', 215498120, 'vis', 'soshn'),
(6, 327.5, 'soshanguve North Campus', 'Yes', 'No', 'No', 'Aids', 'Yes', 'Yes', 'Yes', 215498120, 'vis', 'soshn'),
(7, 0, '', 'Yes', 'No', 'No', '', '', '', '', 0, 'vis', 'soshn'),
(8, 0, '', 'Yes', 'No', 'No', '', '', '', '', 0, 'vis', 'soshn'),
(9, 0, '', 'Yes', 'No', 'No', '', '', '', '', 0, 'vis', 'soshn');

-- --------------------------------------------------------

--
-- Table structure for table `staff`
--

CREATE TABLE `staff` (
  `staff_num` int(11) NOT NULL,
  `id_num` int(11) NOT NULL,
  `sta_email` varchar(255) NOT NULL,
  `staff_role` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `stud_num` int(11) NOT NULL,
  `stud_email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id_number` int(15) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `birthdate` date NOT NULL,
  `marital_status` varchar(255) NOT NULL,
  `home_lang` varchar(255) NOT NULL,
  `citizenship` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `visitor`
--

CREATE TABLE `visitor` (
  `visitor_id` varchar(255) NOT NULL,
  `id_numb` int(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `campus`
--
ALTER TABLE `campus`
  ADD PRIMARY KEY (`camp_id`);

--
-- Indexes for table `screen`
--
ALTER TABLE `screen`
  ADD PRIMARY KEY (`screen_id`);

--
-- Indexes for table `staff`
--
ALTER TABLE `staff`
  ADD PRIMARY KEY (`staff_num`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`stud_num`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_number`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `screen`
--
ALTER TABLE `screen`
  MODIFY `screen_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
