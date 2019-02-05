DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  name varchar(45) NOT NULL,
  devoured BOOLEAN NULL,
 
  PRIMARY KEY (`id`));