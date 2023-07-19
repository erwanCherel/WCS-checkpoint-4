-- MySQL dump 10.13  Distrib 8.0.33, for Linux (x86_64)
--
-- Host: localhost    Database: babyplace
-- ------------------------------------------------------
-- Server version	8.0.33-0ubuntu0.22.04.2
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */
;

/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */
;

/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */
;

/*!50503 SET NAMES utf8mb4 */
;

/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */
;

/*!40103 SET TIME_ZONE='+00:00' */
;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */
;

/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */
;

/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */
;

/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */
;

--
-- Table structure for table `user`
--
DROP TABLE IF EXISTS `user`;

/*!40101 SET @saved_cs_client     = @@character_set_client */
;

/*!50503 SET character_set_client = utf8mb4 */
;

CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `hashedPassword` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 0 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

/*!40101 SET character_set_client = @saved_cs_client */
;

--
-- Dumping data for table `user`
--
LOCK TABLES `user` WRITE;

/*!40000 ALTER TABLE `user` DISABLE KEYS */
;

INSERT INTO
  `user`
VALUES
  (
    1,
    "firstname1",
    "lastname1",
    "email1",
    "password1"
  ),
  (
    2,
    "firstname2",
    "lastname2",
    "email2",
    "password2"
  ),
  (
    3,
    "firstname3",
    "lastname3",
    "email3",
    "password3"
  ),
  (
    4,
    "firstname4",
    "lastname4",
    "email4",
    "password4"
  ),
  (
    5,
    "firstname5",
    "lastname5",
    "email5",
    "password5"
  );

/*!40000 ALTER TABLE `user` ENABLE KEYS */
;

UNLOCK TABLES;


--
-- Table structure for table `message`
--
DROP TABLE IF EXISTS `message`;

/*!40101 SET @saved_cs_client     = @@character_set_client */
;

/*!50503 SET character_set_client = utf8mb4 */
;

CREATE TABLE `message` (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` text NOT NULL,
  `user_id` int NOT NULL,
  `conversation_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_message_user` (`user_id`),
  KEY `fk_message_conversation` (`conversation_id`),
  CONSTRAINT `fk_message_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `fk_message_conversation` FOREIGN KEY (`conversation_id`) REFERENCES `conversation` (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 0 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

/*!40101 SET character_set_client = @saved_cs_client */
;

--
-- Dumping data for table `message`
--
LOCK TABLES `message` WRITE;

/*!40000 ALTER TABLE `message` DISABLE KEYS */
;

INSERT INTO
  `message`
VALUES
  (1, "Lorem ipsum 1", 1, 1),
  (2, "Lorem ipsum 2", 2, 2),
  (3, "Lorem ipsum 3", 3, 3),
  (4, "Lorem ipsum 4", 4, 4),
  (5, "Lorem ipsum 5", 5, 5);

/*!40000 ALTER TABLE `message` ENABLE KEYS */
;

UNLOCK TABLES;

--
-- Table structure for table `conversation`
--
DROP TABLE IF EXISTS `conversation`;

/*!40101 SET @saved_cs_client     = @@character_set_client */
;

/*!50503 SET character_set_client = utf8mb4 */
;

CREATE TABLE `conversation` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 0 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

/*!40101 SET character_set_client = @saved_cs_client */
;

--
-- Dumping data for table `conversation`
--
LOCK TABLES `conversation` WRITE;

/*!40000 ALTER TABLE `conversation` DISABLE KEYS */
;

INSERT INTO
  `conversation`
VALUES
  (1, "conversation_1"),
  (2, "conversation_2"),
  (3, "conversation_3"),
  (4, "conversation_4"),
  (5, "conversation_5");

/*!40000 ALTER TABLE `conversation` ENABLE KEYS */
;

UNLOCK TABLES;

/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */
;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */
;

/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */
;

/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */
;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */
;

/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */
;

/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */
;

/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */
;

-- Dump completed on 2023-06-06 11:34:23