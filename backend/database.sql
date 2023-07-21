-- MySQL dump 10.13  Distrib 8.0.33, for Linux (x86_64)
--
-- Host: localhost    Database: checkpoint4
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
  `picture` varchar(255) DEFAULT NULL,
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
    "https://randomuser.me/api/portraits/men/62.jpg",
    "$argon2id$v=19$m=65536,t=5,p=1$+MoXn9zsmWRwAHS3TfiAbw$WstHuB4M4TcSbesmDeY3J2LjpgjEDctVE+Nq+ihzvK0"
  ),
  (
    2,
    "Jane",
    "Doe",
    "janedoe@gmail.com",
    "https://randomuser.me/api/portraits/women/33.jpg",
    "$argon2id$v=19$m=65536,t=5,p=1$PORWIqiuu6ZbfzMWoBIt3Q$FVD6fyzEvOI0lWvzbps0O71CG7O7PIv5I8MDUDInh2k"
  ),
  (
    3,
    "Sharlene",
    "Ruiz",
    "sharleneruiz@gmail.com",
    "https://randomuser.me/api/portraits/women/64.jpg",
    "$argon2id$v=19$m=65536,t=5,p=1$2g2AwS9AqxpHl5w/b0nH7A$mcbpRKvu6t6YMEZTkqBneoM5L2HBSZ7KR65CCL6uxbY"
  ),
  (
    4,
    "Arnaud",
    "Qwetch",
    "arnaud@gmail.com",
    "https://randomuser.me/api/portraits/men/89.jpg",
    "$argon2id$v=19$m=65536,t=5,p=1$cGwR/sUxocrUrA+FG+EwTw$qH5cHnDSB6ABvYSAtnMePmG44Jtu23n52ddMJOM1uG8"
  ),
  (
    5,
    "Alice",
    "Johnson",
    "alicejohnson@gmail.com",
    "https://randomuser.me/api/portraits/women/22.jpg",
    "$argon2id$v=19$m=65536,t=5,p=1$f9BqxmAVkcRT37WvANMoZg$LDsXjZsdPeD8U/yIxFwz1fVKlz5PbQG5s+/yTO+i74M"
   ),
  (
    6,
    "Michael",
    "Smith",
    "michaelsmith@gmail.com", 
    "https://randomuser.me/api/portraits/men/12.jpg",
    "$argon2id$v=19$m=65536,t=5,p=1$Gj+hBBh8ku8FYKeI7Plq7w$O8YnxrwaGzvvg7Ml80ED7Fs/TO7DOlfyvSGBCk9tMv8"
  ),
  (
    
    7,
    "Emily",
    "Brown",
    "emilybrown@gmail.com", 
    "https://randomuser.me/api/portraits/women/45.jpg",
    "$argon2id$v=19$m=65536,t=5,p=1$6p4ryV6uJDdqp21uQEhnEw$bnCnNGaGYIeVnwBr6IMeQSd7E0de65o4W8BHvlcRgbI"
  ),
  (
    8,
    "Daniel",
    "Wilson",
    "danielwilson@gmail.com", 
    "https://randomuser.me/api/portraits/men/78.jpg",
    "$argon2id$v=19$m=65536,t=5,p=1$ntJ0YJesIT/t+fELtcbHIw$NZeUYqjAZ7cTM1156emfjuSNTc4BXp7PT7pArQwvN/E"
  ),
  ( 
    9,
    "Olivia",
    "Taylor",
    "oliviataylor@gmail.com", 
    "https://randomuser.me/api/portraits/women/50.jpg",
    "$argon2id$v=19$m=65536,t=5,p=1$4utghXfI91M9m3/gv/UDdA$o2FfZ04+vtvf0cdAL6grbNsx/rwpR6W17btDpDMH30g"
  ),
  ( 
    10,
    "William",
    "Anderson",
    "williamanderson@gmail.com", 
    "https://randomuser.me/api/portraits/men/18.jpg",
    "$argon2id$v=19$m=65536,t=5,p=1$KroDagrrKqNN991xR5nzyA$bzHRxK174w8FBrn3LBzZ3fEZyqgzeQMlxFQMsDZq7/A"
  ),
  ( 
    11,
    "Sophia",
    "Martin",
    "sophiamartin@gmail.com", 
    "https://randomuser.me/api/portraits/women/29.jpg",
    "$argon2id$v=19$m=65536,t=5,p=1$QY1sstjbIZ0IbXxKuo+FuA$ErSf/ZVC6pDwT+8cVB1VCczcB/unFv2caHqDbWou8hA"
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
  `sender_id` int NOT NULL,
  `recipient_id` int NOT NULL,
  `conversation_id` int NOT NULL,
  PRIMARY KEY (`id`)
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
  (1, "Lorem ipsum", 1, 2, 1),
  (2, "Lorem ipsum", 2, 4, 2),
  (3, "Lorem ipsum", 1, 3, 3),
  (4, "Lorem ipsum", 3, 1, 3),
  (5, "Lorem ipsum", 2, 4, 2),
  (6, "Lorem ipsum", 4, 2, 2),
  (7, "Lorem ipsum", 2, 1, 1),
  (8, "Lorem ipsum", 1, 2, 1),
  (9, "Lorem ipsum", 1, 5, 4),
  (10, "Lorem ipsum", 5, 1, 4),
  (11, "Lorem ipsum", 1, 6, 5),
  (12, "Lorem ipsum", 6, 1, 5),
  (13, "Lorem ipsum", 1, 7, 6),
  (14, "Lorem ipsum", 7, 1, 6),
  (15, "Lorem ipsum", 1, 8, 7),
  (16, "Lorem ipsum", 8, 1, 7),
  (17, "Lorem ipsum", 1, 9, 8),
  (18, "Lorem ipsum", 9, 1, 8),
  (19, "Lorem ipsum", 1, 10, 9),
  (20, "Lorem ipsum", 10, 1, 9),
  (21, "Lorem ipsum", 1, 11, 10),
  (22, "Lorem ipsum", 11, 1, 10);

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
  (3, "conversation_3", 1, 3),
  (4, "conversation_4", 1, 5),
  (5, "conversation_5", 1, 6),
  (6, "conversation_6", 1, 7),
  (7, "conversation_7", 1, 8),
  (8, "conversation_8", 1, 9),
  (9, "conversation_9", 1, 10),
  (10, "conversation_10", 1, 11);

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
  (4, 2),
  (1, 4),
  (5, 4),
  (1, 5),
  (6, 5),
  (1, 6),
  (7, 6),
  (1, 7),
  (8, 7),
  (1, 8),
  (9, 8),
  (1, 9),
  (10, 9),
  (1, 10),
  (11, 10);

/*!40000 ALTER TABLE `user_conversation` ENABLE KEYS */
;

UNLOCK TABLES;

/*!40101 SET character_set_client = @saved_cs_client */
;

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