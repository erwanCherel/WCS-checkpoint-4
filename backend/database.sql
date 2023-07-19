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
    "John",
    "Doe",
    "johndoe@gmail.com",
    "$argon2id$v=19$m=65536,t=5,p=1$+MoXn9zsmWRwAHS3TfiAbw$WstHuB4M4TcSbesmDeY3J2LjpgjEDctVE+Nq+ihzvK0"
  ),
  (
    2,
    "Jane",
    "Doe",
    "janedoe@gmail.com",
    "$argon2id$v=19$m=65536,t=5,p=1$PORWIqiuu6ZbfzMWoBIt3Q$FVD6fyzEvOI0lWvzbps0O71CG7O7PIv5I8MDUDInh2k"
  ),
  (
    3,
    "Sharlene",
    "Ruiz",
    "sharleneruiz@gmail.com",
    "$argon2id$v=19$m=65536,t=5,p=1$2g2AwS9AqxpHl5w/b0nH7A$mcbpRKvu6t6YMEZTkqBneoM5L2HBSZ7KR65CCL6uxbY"
  ),
  (
    4,
    "Arnaud",
    "Qwetch",
    "arnaud@gmail.com",
    "$argon2id$v=19$m=65536,t=5,p=1$cGwR/sUxocrUrA+FG+EwTw$qH5cHnDSB6ABvYSAtnMePmG44Jtu23n52ddMJOM1uG8"
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
  (1, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 1, 1),
  (2, "Lorem ipsum 2", 2, 2),
  (3, "Lorem ipsum 3", 1, 3),
  (4, "Lorem ipsum 4", 3, 3),
  (5, "Lorem ipsum 5", 2, 2),
  (6, "Lorem ipsum 6", 4, 2),
  (7, "Lorem ipsum 7", 2, 1),
  (8, "Lorem ipsum 8", 1, 1);

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
  `user1_id` int NOT NULL,
  `user2_id` int NOT NULL,
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
  (1, "conversation_1", 1, 2),
  (2, "conversation_2", 2, 4),
  (3, "conversation_3", 1, 4);

/*!40000 ALTER TABLE `conversation` ENABLE KEYS */
;

UNLOCK TABLES;

--
-- Table structure for table `user_conversation`
--
DROP TABLE IF EXISTS `user_conversation`;

/*!40101 SET @saved_cs_client     = @@character_set_client */
;

/*!50503 SET character_set_client = utf8mb4 */
;

CREATE TABLE `user_conversation` (
  `user_id` int NOT NULL,
  `conversation_id` int NOT NULL,
  CONSTRAINT `fk_user_conversation_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `fk_user_conversation_conversation` FOREIGN KEY (`conversation_id`) REFERENCES `conversation` (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 0 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

/*!40101 SET character_set_client = @saved_cs_client */
;

--
-- Dumping data for table `user_conversation`
--
LOCK TABLES `user_conversation` WRITE;

/*!40000 ALTER TABLE `user_conversation` DISABLE KEYS */
;

INSERT INTO
  `user_conversation`
VALUES
  (1, 1),
  (1, 3),
  (2, 1),
  (2, 2),
  (3, 3),
  (4, 2);

/*!40000 ALTER TABLE `user_conversation` ENABLE KEYS */
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