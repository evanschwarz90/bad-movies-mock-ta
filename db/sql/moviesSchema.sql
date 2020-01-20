-- SET UP SCHEMA HERE
CREATE DATABASE badmovies;

USE badmovies;

CREATE TABLE movies (
  id INT PRIMARY KEY,
  name VARCHAR(50),
  imageUrl VARCHAR(100),
  averageRating INT,
  year VARCHAR(5)
);