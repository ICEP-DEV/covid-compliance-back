-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: covid_compliance
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `campus`
--

DROP TABLE IF EXISTS `campus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `campus` (
  `camp_id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `town` varchar(255) NOT NULL,
  `province` varchar(255) NOT NULL,
  `code` varchar(255) NOT NULL,
  PRIMARY KEY (`camp_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `campus`
--

LOCK TABLES `campus` WRITE;
/*!40000 ALTER TABLE `campus` DISABLE KEYS */;
INSERT INTO `campus` VALUES ('arc','Arcadia Campus','Arcadia','Gauteng','0083'),('art','Arts Campus','Arcadia','Gauteng','0007'),('emal','Emalehleni Campus','Witbank','Mpumalanga','1034'),('main','Pretoria Campus','Pretoria West','Gauteng','0183'),('pol','Polokwane Campus','Polokwane Ext 67','Polokwane','0699'),('rank','Ga-Rankuwa Campus','Ga-Rankuwa','Gauteng','0155'),('soshn','soshanguve North Campus','Soshnaguve','Gauteng','0152'),('soshs','soshanguve South Campus','Soshnaguve','Gauteng','0152');
/*!40000 ALTER TABLE `campus` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `screen`
--

DROP TABLE IF EXISTS `screen`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `screen` (
  `screen_id` int NOT NULL AUTO_INCREMENT,
  `temp` float NOT NULL,
  `campus` varchar(255) NOT NULL,
  `cough` varchar(255) NOT NULL,
  `breathing` varchar(255) NOT NULL,
  `fever` varchar(255) DEFAULT NULL,
  `symptoms` varchar(255) NOT NULL,
  `contact` varchar(10) NOT NULL,
  `covid_contact` varchar(255) NOT NULL,
  `travel` varchar(255) NOT NULL,
  `stud_staff` int DEFAULT NULL,
  `visitor_id` varchar(255) DEFAULT NULL,
  `camp_id` varchar(255) DEFAULT NULL,
  `staff_num` int DEFAULT NULL,
  `screen_date` varchar(255) DEFAULT NULL,
  `tested_date` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`screen_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `screen`
--

LOCK TABLES `screen` WRITE;
/*!40000 ALTER TABLE `screen` DISABLE KEYS */;
INSERT INTO `screen` VALUES (1,362.5,'soshanguve North Campus','Yes','No','No','Aids','Yes','Yes','Yes',215498120,'vis','soshn',NULL,NULL,NULL,NULL),(2,362.5,'soshanguve North Campus','Yes','No','No','Aids','Yes','Yes','Yes',215498120,'vis','soshn',NULL,NULL,NULL,NULL),(3,362.5,'soshanguve North Campus','Yes','No','No','Aids','Yes','Yes','Yes',215498120,'vis','soshn',NULL,NULL,NULL,NULL),(4,362.5,'soshanguve North Campus','Yes','No','No','Aids','Yes','Yes','Yes',215498120,'vis','soshn',NULL,NULL,NULL,NULL),(5,32.5,'soshanguve North Campus','Yes','No','No','Aids','Yes','Yes','Yes',215498120,'vis','soshn',NULL,NULL,NULL,NULL),(6,327.5,'soshanguve North Campus','Yes','No','No','Aids','Yes','Yes','Yes',215498120,'vis','soshn',NULL,NULL,NULL,NULL),(7,0,'','Yes','No','No','','','','',0,'vis','soshn',NULL,NULL,NULL,NULL),(8,0,'','Yes','No','No','','','','',0,'vis','soshn',NULL,NULL,NULL,NULL),(9,0,'','Yes','No','No','','','','',0,'vis','soshn',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `screen` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `staff`
--

DROP TABLE IF EXISTS `staff`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `staff` (
  `staff_num` int NOT NULL,
  `id_num` int NOT NULL,
  `staff_role` varchar(255) NOT NULL,
  `staff_email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`staff_num`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `staff`
--

LOCK TABLES `staff` WRITE;
/*!40000 ALTER TABLE `staff` DISABLE KEYS */;
/*!40000 ALTER TABLE `staff` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student`
--

DROP TABLE IF EXISTS `student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student` (
  `stud_num` int NOT NULL,
  `stud_email` varchar(255) NOT NULL,
  `id_num` int DEFAULT NULL,
  PRIMARY KEY (`stud_num`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student`
--

LOCK TABLES `student` WRITE;
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
/*!40000 ALTER TABLE `student` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id_number` int NOT NULL,
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
  `phone` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id_number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (92101059,'Male','Single','isiZulu','RSA','mkhonkosi28@gmail.com','Student','nhlanhla',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `visitor`
--

DROP TABLE IF EXISTS `visitor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `visitor` (
  `visitor_id` varchar(255) NOT NULL,
  `id_numb` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `visitor`
--

LOCK TABLES `visitor` WRITE;
/*!40000 ALTER TABLE `visitor` DISABLE KEYS */;
/*!40000 ALTER TABLE `visitor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'covid_compliance'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-01 14:58:14
