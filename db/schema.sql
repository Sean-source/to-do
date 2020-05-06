
DROP DATABASE IF EXISTS toDO;

CREATE DATABASE toDo;

USE toDo;

CREATE TABLE actionItems (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  description varchar(255) NOT NULL,
  complete boolean NOT NULL,
  PRIMARY KEY (id)
);
