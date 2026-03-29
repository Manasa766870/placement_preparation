-- MySQL dump 10.13  Distrib 8.0.44, for Linux (x86_64)
--
-- Host: localhost    Database: placement_preparation
-- ------------------------------------------------------
-- Server version	8.0.44-0ubuntu0.24.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `questions`
--

LOCK TABLES `questions` WRITE;
/*!40000 ALTER TABLE `questions` DISABLE KEYS */;
INSERT INTO `questions` VALUES (1,'what is dsa','data structures and algorithms','data science algorithms','ds algorithms','data algoritms',1,'DSA'),(2,'what is aptitude','logic','reading','writing','nothing',1,'Aptitude'),(3,'2+3?','4','3','5','1',3,'Aptitude');
/*!40000 ALTER TABLE `questions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `resources`
--

LOCK TABLES `resources` WRITE;
/*!40000 ALTER TABLE `resources` DISABLE KEYS */;
INSERT INTO `resources` VALUES (1,'dsa','pdf','/uploads/1774626850911.pdf','dsa','2026-03-27 15:54:10'),(2,'dsa','video','/uploads/1774626934270.webm','dsa','2026-03-27 15:55:34'),(3,'aptitude','video','/uploads/1774632287981.webm','apptitude','2026-03-27 17:24:48'),(4,'aptitude','pdf','/uploads/1774632347373.pdf','apptitude','2026-03-27 17:25:47'),(5,'dsa','video','/uploads/1774683053634.webm','DSA','2026-03-28 07:30:53'),(6,'DSA','pdf','/uploads/1774683080614.pdf','DSA','2026-03-28 07:31:20'),(7,'dbms','video','/uploads/1774764772143.webm','dbms','2026-03-29 06:12:52'),(8,'dbms','pdf','/uploads/1774764797220.pdf','dbms','2026-03-29 06:13:17'),(9,'os','video','/uploads/1774780787773.webm','os','2026-03-29 10:39:47'),(10,'os','pdf','/uploads/1774780847532.pdf','os','2026-03-29 10:40:47');
/*!40000 ALTER TABLE `resources` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `results`
--

LOCK TABLES `results` WRITE;
/*!40000 ALTER TABLE `results` DISABLE KEYS */;
INSERT INTO `results` VALUES (1,NULL,1,1,'2026-03-29 09:11:22'),(2,NULL,1,1,'2026-03-29 09:14:20'),(3,'student@gmail.com',1,1,'2026-03-29 09:28:11'),(4,'student@gmail.com',0,1,'2026-03-29 09:28:25'),(5,'student@gmail.com',0,1,'2026-03-29 09:28:43'),(6,'student@gmail.com',2,2,'2026-03-29 10:42:02'),(7,'manasa@gmail.com',2,2,'2026-03-29 11:03:39'),(8,'manasa@gmail.com',1,1,'2026-03-29 11:04:06');
/*!40000 ALTER TABLE `results` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Admin','admin@gmail.com','admin123','admin'),(2,'Student','student@gmail.com','student123','user'),(3,'Admin1','admin1@gmail.com','admin1234','admin'),(4,'manasa','manasa@gmail.com','manasa123','user'),(5,'sukhitha','sukhitha@gmail.com','sukhitha123','user'),(7,'bhargavi','bhargavi@gmail.com','bhargavi123','user'),(8,'likhitha','likhitha@gmail.com','likhitha123','user'),(9,'vinay','vinay@gmail.com','vinay123','user'),(10,'yogesh','yogesh@gmail.com','yogesh123','user');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `videos`
--

LOCK TABLES `videos` WRITE;
/*!40000 ALTER TABLE `videos` DISABLE KEYS */;
INSERT INTO `videos` VALUES (1,'Aptitude','/uploads/1774622220195.webm','2026-03-27 14:37:00'),(2,'dsa','/uploads/1774622239518.webm','2026-03-27 14:37:19'),(3,'dsa','/uploads/1774625262828.webm','2026-03-27 15:27:42'),(4,'dsa','/uploads/1774625303999.webm','2026-03-27 15:28:24');
/*!40000 ALTER TABLE `videos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-03-29 17:48:04
