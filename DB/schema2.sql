CREATE DATABASE todo_db;
USE todo_db;
CREATE TABLE todos
(
    id int NOT NULL AUTO_INCREMENT,
    todo_name varchar(255) NOT NULL,
    fk_category_name varchar(255) NOT NULL,
    todo_duedate varchar(255) NOT NULL,
    todo_completed BOOLEAN default 0,
    todo_deleted  BOOLEAN default 0,
    updatedAt datetime,
    createdAt TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
    );
USE todo_db;
DROP table IF EXISTS userinfo;
CREATE TABLE userinfo
(
    id int NOT NULL AUTO_INCREMENT,
    user_name varchar(255) NOT NULL,
    user_dob date,
    user_status BOOLEAN default 1,
    PRIMARY KEY (id)
    );
USE todo_db;
DROP table IF EXISTS category;
CREATE TABLE category
(
    id int NOT NULL AUTO_INCREMENT,
    category_name varchar(255) NOT NULL,
    PRIMARY KEY (id)
    );