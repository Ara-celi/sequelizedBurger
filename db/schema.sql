-- Create the database burgers_db and specified it for use.
CREATE DATABASE burgers_db;
USE burgers_db;
# If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS burgers;
-- Create the table burgers and fields.
CREATE TABLE burgers (
-- id: an auto incrementing int that serves as the primary key.	
id int NOT NULL AUTO_INCREMENT,
-- burger_name: a string.
burger_name varchar(255) NOT NULL,
-- devoured: a boolean.
devoured boolean DEFAULT false,
PRIMARY KEY (id)
);
