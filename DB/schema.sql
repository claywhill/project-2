
DROP DATABASE IF EXISTS tbyd_db;
CREATE DATABASE tbyd_db;

USE tbyd_db;

CREATE TABLE todo(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(255),
    category VARCHAR(255),
    created DATE,
    ETA DATE,
    PRIMARY KEY(id)
)

SELECT * FROM todo;

