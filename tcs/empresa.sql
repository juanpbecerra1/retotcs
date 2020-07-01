-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: schemaempresa
-- ------------------------------------------------------
-- Server version	8.0.20

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
-- Table structure for table `departamento`
--

DROP TABLE IF EXISTS `departamento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `departamento` (
  `id_departamento` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(45) NOT NULL,
  `Descripcion` varchar(500) NOT NULL,
  `Codigo` int NOT NULL,
  PRIMARY KEY (`id_departamento`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `departamento`
--

LOCK TABLES `departamento` WRITE;
/*!40000 ALTER TABLE `departamento` DISABLE KEYS */;
INSERT INTO `departamento` VALUES (1,'Sistemas','Encargados de la infraestructura TI y aplicaciones empresariales',1),(2,'Financiero','Encargados de las finanzas empresariales',2),(3,'Talento Humanos','Encargados de la gestion del personal',3),(4,'Comercial','Encargados de las ventas',4);
/*!40000 ALTER TABLE `departamento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `empleado`
--

DROP TABLE IF EXISTS `empleado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `empleado` (
  `id_Empleado` int NOT NULL AUTO_INCREMENT,
  `Primer_Nombre` varchar(45) NOT NULL,
  `Segundo_Nombre` varchar(45) DEFAULT NULL,
  `Primer_Apellido` varchar(45) NOT NULL,
  `Segundo_Apellido` varchar(45) DEFAULT NULL,
  `Identificacion` varchar(20) NOT NULL,
  `Correo` varchar(45) DEFAULT NULL,
  `Telefono` varchar(45) DEFAULT NULL,
  `Activo` tinyint NOT NULL,
  `Salario` decimal(10,0) NOT NULL,
  `Departamento` int NOT NULL,
  PRIMARY KEY (`id_Empleado`),
  UNIQUE KEY `Identificacion_UNIQUE` (`Identificacion`),
  KEY `Departamento_idx` (`Departamento`),
  CONSTRAINT `Departamento` FOREIGN KEY (`Departamento`) REFERENCES `departamento` (`id_departamento`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empleado`
--

LOCK TABLES `empleado` WRITE;
/*!40000 ALTER TABLE `empleado` DISABLE KEYS */;
INSERT INTO `empleado` VALUES (1,'Pedro',NULL,'Sanchez',NULL,'123456','ppp@mail.com','4448411',1,300,1),(2,'Sara','Andrea','Benavidez',NULL,'789010','aada@mail.com','2227899',1,200,3),(3,'Silvia',NULL,'Ramirez',NULL,'160209','adada@mail.com','4448421',1,350,4),(4,'Santiago',NULL,'Sanchez',NULL,'2331313','adad@mail.com','5223456',1,900,2),(5,'Susana','Maria','Duque',NULL,'111111','sdada@mail.com','3556677',0,500,1),(6,'Daniela',NULL,'Zuluaga',NULL,'34566','dadadam@mail.com','5667788',0,100,1),(7,'Hugo',NULL,'Mendez',NULL,'567888','dadad@mail.com','448411',0,600,1);
/*!40000 ALTER TABLE `empleado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `empleado_funcion`
--

DROP TABLE IF EXISTS `empleado_funcion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `empleado_funcion` (
  `id_empleado_funcion` int NOT NULL AUTO_INCREMENT,
  `identificacion_empleado` varchar(20) NOT NULL,
  `funcion` int NOT NULL,
  PRIMARY KEY (`id_empleado_funcion`),
  KEY `funcion_fk_idx` (`funcion`),
  CONSTRAINT `funcion_fk` FOREIGN KEY (`funcion`) REFERENCES `funciones` (`id_funciones`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empleado_funcion`
--

LOCK TABLES `empleado_funcion` WRITE;
/*!40000 ALTER TABLE `empleado_funcion` DISABLE KEYS */;
INSERT INTO `empleado_funcion` VALUES (1,'123456',3),(2,'789010',8),(3,'160209',12),(4,'2331313',4),(5,'2331313',6),(6,'111111',3),(7,'111111',2),(8,'34566',2),(9,'34566',3),(10,'34566',1),(11,'567888',1);
/*!40000 ALTER TABLE `empleado_funcion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `funciones`
--

DROP TABLE IF EXISTS `funciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `funciones` (
  `id_funciones` int NOT NULL AUTO_INCREMENT,
  `Descripcion` varchar(45) NOT NULL,
  `Departamento` int NOT NULL,
  PRIMARY KEY (`id_funciones`),
  KEY `Departamento_idx` (`Departamento`),
  CONSTRAINT `fkdepartamento` FOREIGN KEY (`Departamento`) REFERENCES `departamento` (`id_departamento`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `funciones`
--

LOCK TABLES `funciones` WRITE;
/*!40000 ALTER TABLE `funciones` DISABLE KEYS */;
INSERT INTO `funciones` VALUES (1,'Mesa de ayuda',1),(2,'Soporte en sitio',1),(3,'Desarrollo aplicaciones',1),(4,'Planeacion financiera',2),(5,'Relaciones financieras',2),(6,'Tesoreria',2),(7,'Contabilidad',2),(8,'Reclutamiento',3),(9,'Seleccion',3),(10,'Contratacion',3),(11,'Relaciones Laborales',3),(12,'Ventas al por mayor',4),(13,'Ventas al detal',4),(14,'Publicidad',4);
/*!40000 ALTER TABLE `funciones` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-06-30 19:43:36
