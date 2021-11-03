-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 03, 2021 at 03:22 PM
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
  `full_name` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `temp` float NOT NULL,
  `campus` varchar(255) NOT NULL,
  `cough` varchar(255) NOT NULL,
  `breathing` varchar(255) NOT NULL,
  `fever` varchar(255) NOT NULL,
  `symptoms` varchar(255) NOT NULL,
  `contact` varchar(10) NOT NULL,
  `covid_contact` varchar(255) NOT NULL,
  `travel` varchar(255) NOT NULL,
  `vaccinated` varchar(11) NOT NULL,
  `stud_staff` int(11) DEFAULT NULL,
  `visitor_id` varchar(255) DEFAULT NULL,
  `camp_id` varchar(255) NOT NULL,
  `screen_date` varchar(255) NOT NULL,
  `appointment` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `screen`
--

INSERT INTO `screen` (`screen_id`, `full_name`, `phone`, `temp`, `campus`, `cough`, `breathing`, `fever`, `symptoms`, `contact`, `covid_contact`, `travel`, `vaccinated`, `stud_staff`, `visitor_id`, `camp_id`, `screen_date`, `appointment`) VALUES
(1, 'Lukie', '0721251254', 32.5, 'soshanguve South Campus', 'Yes', 'Yes', 'Yes', '', 'No', 'Yes', 'Yes', 'Yes', NULL, '9102155457080', 'soshs', '2021-08-016', 'checking'),
(2, NULL, NULL, 34.6, 'soshanguve South Campus', 'Yes', 'Yes', 'Yes', 'No', 'No', 'Yes', 'Yes', 'Yes', 215718121, NULL, 'soshs', '2021-08-12', NULL),
(3, NULL, NULL, 36.9, 'soshanguve South Campus', 'Yes', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 994658, NULL, 'soshs', '2021-09-07', NULL),
(4, 'Zamokuhle', '0785425425', 35, 'Ga-Rankuwa Campus', 'Yes', 'No', 'No', 'No', 'No', 'No', 'no', 'Yes', NULL, '', 'rank', '2021-09-06', 'interview'),
(5, 'Zamokuhle', '0785425425', 35, 'Ga-Rankuwa Campus', 'Yes', 'No', 'No', 'No', 'No', 'No', 'no', 'Yes', NULL, '', 'rank', '2021-09-01', 'interview'),
(6, NULL, NULL, 32.5, 'Ga-Rankuwa Campus', 'Yes', 'Yes', 'Yes', 'No', 'Yes', 'Yes', 'Yes', 'Yes', 994658, NULL, 'rank', '2021-09-07', NULL),
(7, NULL, NULL, 34.9, 'Arcadia Campus', 'Yes', 'No', 'Yes', '', 'Yes', 'No', 'Yes', 'Yes', 997475, NULL, 'arc', '2021-09-07', NULL),
(8, NULL, NULL, 34.9, 'Arcadia Campus', 'Yes', 'No', 'Yes', '', 'Yes', 'No', 'Yes', 'No', 997475, NULL, 'arc', '2021-09-07', NULL),
(9, NULL, NULL, 33.2, 'soshanguve South Campus', 'Yes', 'Yes', 'Yes', 'Headache', 'No', 'Yes', 'No', 'No', 215243233, NULL, 'soshs', '2021-09-09', NULL),
(10, NULL, NULL, 36.5, 'soshanguve South Campus', 'Yes', 'Yes', 'Yes', 'No', 'Yes', 'No', 'No', 'Yes', 215719120, NULL, 'soshs', '2021-09-10', NULL),
(11, NULL, NULL, 35.3, 'soshanguve South Campus', 'Yes', 'No', 'Yes', 'lost of food taste', 'Yes', 'Yes', 'Yes', 'No', 994978, NULL, 'soshs', '2021-09-10', NULL),
(12, 'Puane TR', '0793338234', 37.3, 'soshanguve South Campus', 'Yes', 'No', 'Yes', 'No', 'Yes', 'No', 'No', 'Yes', NULL, '9008265665080', 'soshs', '2021-09-10', 'Need Information on how to apply'),
(13, NULL, NULL, 37, 'soshanguve South Campus', 'Yes', 'No', 'Yes', 'Headache', 'Yes', 'Yes', 'Yes', 'No', 994523, NULL, 'soshs', '2021-09-10', NULL),
(14, NULL, NULL, 32.5, 'Ga-Rankuwa Campus', 'Yes', 'No', 'Yes', '', 'No', 'No', 'Yes', 'No', 215648630, NULL, 'rank', '2021-09-15', NULL),
(15, NULL, NULL, 32.5, 'soshanguve South Campus', 'Yes', 'Yes', 'No', 'No', 'Yes', 'Yes', 'Yes', 'Yes', 211566782, NULL, 'soshs', '2021-10-13', NULL),
(60, NULL, NULL, 34.6, 'soshanguve North Campus', 'Yes', 'Yes', 'No', 'No', 'Yes', 'Yes', 'Yes', 'Yes', 215243262, NULL, 'soshn', '2021-10-13', NULL),
(61, NULL, NULL, 34.6, 'soshanguve North Campus', 'Yes', 'Yes', 'No', 'No', 'Yes', 'Yes', 'Yes', 'No', 215243262, NULL, 'soshn', '2021-10-13', NULL),
(62, NULL, NULL, 32.5, 'soshanguve South Campus', 'Yes', 'Yes', 'No', 'No', 'No', 'Yes', 'Yes', 'No', 215243262, NULL, 'soshs', '2021-10-13', NULL),
(63, NULL, NULL, 32.5, 'soshanguve South Campus', 'Yes', 'Yes', 'No', 'No', 'No', 'Yes', 'Yes', 'No', 976521, NULL, 'soshs', '2021-10-13', NULL),
(64, NULL, NULL, 34.6, 'Arcadia Campus', 'Yes', 'Yes', 'No', 'No', 'Yes', 'Yes', 'Yes', 'Yes', 215243262, NULL, 'arc', '2021-10-13', NULL),
(65, NULL, NULL, 34.6, 'Arcadia Campus', 'Yes', 'Yes', 'No', 'No', 'Yes', 'Yes', 'Yes', 'No', 215243262, NULL, 'arc', '2021-10-13', NULL),
(66, NULL, NULL, 34.6, 'Arcadia Campus', 'Yes', 'Yes', 'No', 'No', 'Yes', 'Yes', 'Yes', 'No', 215243262, NULL, 'arc', '2021-10-13', NULL),
(67, NULL, NULL, 34.6, 'Arcadia Campus', 'Yes', 'Yes', 'No', 'No', 'Yes', 'Yes', 'Yes', 'Yes', 215243262, NULL, 'arc', '2021-10-13', NULL),
(68, NULL, NULL, 34.6, 'Arcadia Campus', 'Yes', 'Yes', 'No', 'No', 'Yes', 'Yes', 'Yes', 'Yes', 215243262, NULL, 'arc', '2021-10-13', NULL),
(69, NULL, NULL, 34.6, 'Arcadia Campus', 'Yes', 'Yes', 'No', 'No', 'Yes', 'Yes', 'Yes', 'No', 215243262, NULL, 'arc', '2021-10-13', NULL),
(70, NULL, NULL, 34.6, 'Arcadia Campus', 'Yes', 'Yes', 'No', 'No', 'Yes', 'Yes', 'Yes', '', 215243262, NULL, 'arc', '2021-10-13', NULL),
(71, NULL, NULL, 34.6, 'Arcadia Campus', 'Yes', 'Yes', 'No', 'No', 'Yes', 'Yes', 'Yes', '', 215243262, NULL, 'arc', '2021-10-13', NULL),
(72, NULL, NULL, 34.6, 'Arcadia Campus', 'Yes', 'Yes', 'No', 'No', 'Yes', 'Yes', 'Yes', '', 215243262, NULL, 'arc', '2021-10-13', NULL),
(73, NULL, NULL, 34.6, 'Arcadia Campus', 'Yes', 'Yes', 'No', 'No', 'Yes', 'Yes', 'Yes', '', 215243262, NULL, 'arc', '2021-10-13', NULL),
(74, NULL, NULL, 34.6, 'Arcadia Campus', 'Yes', 'Yes', 'No', 'No', 'Yes', 'Yes', 'Yes', '', 215243262, NULL, 'arc', '2021-10-13', NULL),
(75, NULL, NULL, 34.6, 'Arcadia Campus', 'Yes', 'Yes', 'No', 'No', 'Yes', 'Yes', 'Yes', '', 215243262, NULL, 'arc', '2021-10-13', NULL),
(76, NULL, NULL, 34.6, 'Arcadia Campus', 'Yes', 'Yes', 'No', 'No', 'Yes', 'Yes', 'Yes', '', 215243262, NULL, 'arc', '2021-10-13', NULL),
(77, NULL, NULL, 34.6, 'Arcadia Campus', 'Yes', 'Yes', 'No', 'No', 'Yes', 'Yes', 'Yes', '', 215243262, NULL, 'arc', '2021-10-13', NULL),
(78, NULL, NULL, 34.6, 'Arcadia Campus', 'Yes', 'Yes', 'No', 'No', 'Yes', 'Yes', 'Yes', '', 215243262, NULL, 'arc', '2021-10-13', NULL),
(79, NULL, NULL, 34.6, 'Arcadia Campus', 'Yes', 'Yes', 'No', 'No', 'Yes', 'Yes', 'Yes', '', 215243262, NULL, 'arc', '2021-10-13', NULL),
(80, NULL, NULL, 34.6, 'Arcadia Campus', 'Yes', 'Yes', 'No', 'No', 'Yes', 'Yes', 'Yes', '', 215243262, NULL, 'arc', '2021-10-13', NULL),
(81, NULL, NULL, 34.6, 'soshanguve South Campus', 'Yes', 'Yes', 'No', 'No', 'Yes', 'Yes', 'Yes', '', 215243262, NULL, 'soshs', '2021-10-13', NULL),
(82, NULL, NULL, 34.6, 'soshanguve South Campus', 'Yes', 'Yes', 'No', 'No', 'Yes', 'Yes', 'Yes', '', 215243262, NULL, 'soshs', '2021-10-13', NULL),
(83, NULL, NULL, 32.5, 'soshanguve North Campus', 'Yes', 'Yes', 'No', 'No', 'Yes', 'Yes', 'Yes', '', 215243262, NULL, 'soshn', '2021-10-13', NULL),
(84, NULL, NULL, 32.5, 'soshanguve North Campus', 'Yes', 'Yes', 'No', 'No', 'Yes', 'Yes', 'Yes', '', 215243262, NULL, 'soshn', '2021-10-13', NULL),
(85, NULL, NULL, 32.5, 'Arcadia Campus', 'Yes', 'Yes', 'No', 'No', 'Yes', 'Yes', 'Yes', '', 215648630, NULL, 'arc', '2021-10-13', NULL),
(86, NULL, NULL, 32.5, 'Arcadia Campus', 'Yes', 'Yes', 'No', 'No', 'Yes', 'Yes', 'Yes', '', 215648630, NULL, 'arc', '2021-10-13', NULL),
(87, NULL, NULL, 32.5, 'Arcadia Campus', 'Yes', 'Yes', 'No', 'No', 'Yes', 'Yes', 'Yes', '', 215648630, NULL, 'arc', '2021-10-13', NULL),
(88, NULL, NULL, 32.5, 'Arcadia Campus', 'Yes', 'Yes', 'No', 'No', 'Yes', 'Yes', 'Yes', '', 215648630, NULL, 'arc', '2021-10-13', NULL),
(89, NULL, NULL, 32.5, 'Arcadia Campus', 'Yes', 'Yes', 'No', 'No', 'Yes', 'Yes', 'Yes', '', 215648630, NULL, 'arc', '2021-10-13', NULL),
(90, NULL, NULL, 32.5, 'Arcadia Campus', 'Yes', 'Yes', 'No', 'No', 'Yes', 'Yes', 'Yes', '', 215648630, NULL, 'arc', '2021-10-13', NULL),
(91, NULL, NULL, 32.5, 'soshanguve North Campus', 'Yes', 'Yes', 'No', 'No', 'Yes', 'Yes', 'Yes', '', 215648630, NULL, 'soshn', '2021-10-13', NULL),
(92, NULL, NULL, 32.5, 'Ga-Rankuwa Campus', 'Yes', 'Yes', 'No', 'No', 'Yes', 'Yes', 'Yes', '', 215648630, NULL, 'rank', '2021-10-13', NULL),
(93, NULL, NULL, 32.5, 'Ga-Rankuwa Campus', 'Yes', 'Yes', 'No', 'No', 'Yes', 'Yes', 'Yes', '', 215648630, NULL, 'rank', '2021-10-13', NULL),
(94, NULL, NULL, 32.5, 'Polokwane Campus', 'Yes', 'Yes', 'No', '', 'Yes', 'No', 'No', '', 215648630, NULL, 'pol', '2021-10-13', NULL),
(95, NULL, NULL, 34.9, 'Pretoria Campus', 'Yes', 'Yes', 'No', 'no', 'Yes', 'Yes', 'Yes', '', 215648630, NULL, 'main', '2021-10-13', NULL),
(96, NULL, NULL, 34.6, 'Ga-Rankuwa Campus', 'Yes', 'Yes', 'No', 'no', 'Yes', 'Yes', 'Yes', '', 215648630, NULL, 'rank', '2021-10-13', NULL),
(97, NULL, NULL, 32.5, 'soshanguve North Campus', 'Yes', 'Yes', 'No', 'No', 'Yes', 'Yes', 'Yes', '', 215648630, NULL, 'soshn', '2021-10-13', NULL),
(98, NULL, NULL, 32.5, 'Ga-Rankuwa Campus', 'Yes', 'Yes', 'No', 'No', 'Yes', 'Yes', 'Yes', '', 215648630, NULL, 'rank', '2021-10-13', NULL),
(99, NULL, NULL, 32.5, 'Ga-Rankuwa Campus', 'Yes', 'Yes', 'No', 'No', 'Yes', 'Yes', 'No', '', 215648630, NULL, 'rank', '2021-10-13', NULL),
(100, NULL, NULL, 32.5, 'soshanguve North Campus', 'Yes', 'Yes', 'No', 'No', 'Yes', 'Yes', 'Yes', '', 215648630, NULL, 'soshn', '2021-10-13', NULL),
(101, NULL, NULL, 32.5, 'Ga-Rankuwa Campus', 'Yes', 'Yes', 'No', 'No', 'Yes', 'Yes', 'Yes', '', 215648630, NULL, 'rank', '2021-10-13', NULL),
(102, NULL, NULL, 32.5, 'Ga-Rankuwa Campus', 'Yes', 'Yes', 'No', 'No', 'Yes', 'Yes', 'Yes', '', 215648630, NULL, 'rank', '2021-10-13', NULL),
(103, NULL, NULL, 32.5, 'Arcadia Campus', 'Yes', 'Yes', 'No', 'No', 'No', 'No', 'Yes', '', 215648630, NULL, 'arc', '2021-10-13', NULL),
(104, NULL, NULL, 32.5, 'Ga-Rankuwa Campus', 'Yes', 'Yes', 'No', 'No', 'Yes', 'Yes', 'Yes', '', 215243262, NULL, 'rank', '2021-10-13', NULL),
(105, NULL, NULL, 32.5, 'soshanguve North Campus', 'Yes', 'No', 'No', 'No', 'Yes', 'No', 'No', '', 215243262, NULL, 'soshn', '2021-10-13', NULL),
(106, NULL, NULL, 40, 'soshanguve North Campus', 'Yes', 'Yes', 'No', 'No', 'Yes', 'Yes', 'Yes', '', 215243262, NULL, 'soshn', '2021-10-13', NULL),
(107, NULL, NULL, 40.56, 'soshanguve North Campus', 'Yes', 'Yes', 'No', 'No', 'No', 'Yes', '', '', 215243262, NULL, 'soshn', '2021-10-13', NULL),
(108, NULL, NULL, 34.9, 'Arcadia Campus', 'Yes', 'Yes', 'No', 'No', 'Yes', 'No', 'No', '', 215243262, NULL, 'arc', '2021-10-13', NULL),
(109, NULL, NULL, 51, 'soshanguve North Campus', 'Yes', 'Yes', 'No', 'No', 'Yes', 'Yes', 'Yes', '', 215243262, NULL, 'soshn', '2021-10-13', NULL),
(110, NULL, NULL, 32.5, 'soshanguve North Campus', 'Yes', 'No', 'No', 'No', 'Yes', 'Yes', 'Yes', '', 215243262, NULL, 'soshn', '2021-10-13', NULL),
(111, NULL, NULL, 32.5, 'Ga-Rankuwa Campus', 'Yes', 'Yes', 'No', 'No', 'Yes', 'Yes', 'Yes', '', 215243262, NULL, 'rank', '2021-10-13', NULL),
(112, NULL, NULL, 32.5, 'soshanguve South Campus', 'Yes', 'No', 'No', '', '', '', '', '', 215243262, NULL, 'soshs', '2021-10-14', NULL),
(113, NULL, NULL, 34.6, 'soshanguve North Campus', 'Yes', 'Yes', 'No', 'No', 'Yes', 'Yes', 'No', '', 215648630, NULL, 'soshn', '2021-10-14', NULL),
(114, NULL, NULL, 34.6, 'soshanguve North Campus', 'Yes', 'Yes', 'No', 'No', 'Yes', 'Yes', 'No', '', 215648630, NULL, 'soshn', '2021-10-14', NULL),
(115, NULL, NULL, 32.5, 'soshanguve South Campus', 'Yes', 'No', 'No', '', '', '', '', '', 215648630, NULL, 'soshs', '2021-10-14', NULL),
(116, NULL, NULL, 34.6, 'soshanguve North Campus', 'Yes', 'No', 'No', '', '', '', '', '', 215719121, NULL, 'soshn', '2021-10-14', NULL),
(117, NULL, NULL, 32.5, 'soshanguve North Campus', 'Yes', 'No', 'No', '', '', '', '', '', 215719121, NULL, 'soshn', '2021-10-14', NULL),
(118, NULL, NULL, 34.6, 'soshanguve North Campus', 'Yes', 'No', 'No', '', '', '', '', '', 215719121, NULL, 'soshn', '2021-10-14', NULL),
(119, NULL, NULL, 23.5, 'soshanguve North Campus', 'Yes', 'No', 'No', 'No', 'Yes', 'Yes', 'Yes', 'Yes', 215719121, NULL, 'soshn', '2021-11-03', NULL),
(120, NULL, NULL, 23.5, 'soshanguve South Campus', 'Yes', 'Yes', 'No', 'No', 'No', 'Yes', 'Yes', 'Yes', 215719121, NULL, 'soshs', '2021-11-03', NULL),
(121, NULL, NULL, 23.5, 'soshanguve South Campus', 'Yes', 'No', 'No', 'No', 'No', 'Yes', 'No', 'Yes', 215719121, NULL, 'soshs', '2021-11-03', NULL),
(122, NULL, NULL, 23.5, 'soshanguve North Campus', 'Yes', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 215719121, NULL, 'soshn', '2021-11-03', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `staff`
--

CREATE TABLE `staff` (
  `staff_num` int(11) NOT NULL,
  `id_number` varchar(13) NOT NULL,
  `staff_role` varchar(255) NOT NULL,
  `staff_email` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `staff`
--

INSERT INTO `staff` (`staff_num`, `id_number`, `staff_role`, `staff_email`) VALUES
(976521, '9805122540823', 'staff', 'janeT@tut.ac.za'),
(993245, '9510107980843', 'admin', 'hlopheTN@tut.ac.za');

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `stud_num` int(11) NOT NULL,
  `stud_email` varchar(255) NOT NULL,
  `id_number` varchar(13) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`stud_num`, `stud_email`, `id_number`) VALUES
(215243262, '215243262@tut4life.ac.za', '9202015455080'),
(215648630, '215648630@tut4life.ac.za', '9608125231089'),
(215719121, '215719121@tut4life.ac.za', '9404215654081');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id_number` varchar(255) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `marital_status` varchar(255) NOT NULL,
  `home_lang` varchar(255) NOT NULL,
  `citizenship` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `fname` varchar(255) DEFAULT NULL,
  `lname` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `phone` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id_number`, `gender`, `marital_status`, `home_lang`, `citizenship`, `email`, `role`, `password`, `fname`, `lname`, `address`, `phone`) VALUES
('9202015455080', 'female', 'single', 'Sepedi', 'RSA', 'rudolphpuane@tut4life.ac.za', 'student', '12345', 'Jane', 'Van', 'Aubrey matlala soshanguve 0152', '0784512365'),
('9210105915048', 'Male', 'Single', 'isiZulu', 'RSA', 'nhlanhla@gmail.com', 'staff', 'nhlanhla', 'Tholinhlanhla', 'Hlophe', 'Pretoria Soshanguve', '0769994524'),
('9404215654081', 'Male', 'Single', 'Sepedi', 'RSA', 'puane@gmail.com', 'student', '123456789', 'Teishi', 'Puane', '2625 Block L 0152', '0793237464'),
('9510107980843', 'male', 'single', 'isiZulu', 'RSA', 'mkhonkosi28@gmail.com', 'staff', '123456', 'Tholinhlanhla', 'Hlophe', 'Mpumalanga, Piet Retief', '0797794580'),
('9608125231089', 'Male', 'Single', 'Setswana', 'RSA', 'reneilwe33@gmail.com', 'student', '01245', 'Reneilwe', 'Sesoko', '266 Block X, Mabopane', '0845545425'),
('9805122540823', 'female', 'single', 'Xhosa', 'RSA', 'jane@gmail.com', 'staff', '12345', 'maria', 'mazibuko', 'Khayilisha Eastern cape', '0723251548');

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
  MODIFY `screen_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=123;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
