DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE `Users` (
  `id` INTEGER AUTO_INCREMENT,
  `name` VARCHAR(20),
  PRIMARY KEY (`id`)
);

/* Create other tables and define schemas for them here! */

CREATE TABLE `Rooms` (
  `id` INTEGER AUTO_INCREMENT,
  `name` VARCHAR(20),
  PRIMARY KEY (`id`)
);

CREATE TABLE `Messages` (
  `id` INTEGER AUTO_INCREMENT,
  `userId` INTEGER,
  `roomId` INTEGER,
  `username` VARCHAR(20),
  `roomname` VARCHAR(20),
  `message` VARCHAR(1000),
  PRIMARY KEY (`id`)
);

ALTER TABLE `Messages` ADD FOREIGN KEY (userId) REFERENCES `Users` (`id`);
ALTER TABLE `Messages` ADD FOREIGN KEY (roomId) REFERENCES `Rooms` (`id`);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

