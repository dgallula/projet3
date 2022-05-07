create database vacations;


use vacations;


CREATE TABLE users (
id   INT NOT NULL AUTO_INCREMENT ,
name VARCHAR(255) not null,
familyName varchar(255) not null,
username varchar(255) not null,
password int not null,
role varchar(255) not null,
PRIMARY KEY (id)
);


INSERT INTO users (name, familyName, username, password, role)
VALUES
('David', 'Gallula', 'dgallula@gmail.com', 1234, 'admin' ),
('Elie', 'Zenou', 'Elie@gmail.com', 1234, 'user' ),
('Elie', 'Sellem', 'Elisellem@gmail.com', 1234, 'user' ),
('Helene', 'Zenou', 'Helene@gmail.com', 1234,'user' ),
('Levana', 'Amoyalle', 'Levana@gmail.com', 1234,'user' ),
('Levy', 'Cohen', 'levy@gmail.com', 1234, 'user' ),
('Perez', 'Avraham', 'Avi@gmail.com', 1234,'user' );



CREATE TABLE vacations (
id   INT NOT NULL AUTO_INCREMENT ,
descriptions VARCHAR(255) not null,
cityName VARCHAR(255) not null,
country VARCHAR(255) not null,
img VARCHAR(255) not null,
price int not null,
DateFrom datetime not null,
DateUntil datetime not null,
userId int not null,
PRIMARY KEY (id),
FOREIGN KEY(userId) REFERENCES users(id)
);

INSERT INTO vacations (cityName,country, descriptions, img, price, dateFrom, dateUntil, userId)
VALUES

('Paris', 'France','Paris la ville des amoureux','Paris.jpej', 499, '2022-06-23', '2022-06-23',  1),
('Madrid' ,'Espagne','Viva espagna','Madrid.jpej', 399, '2020-07-23', '2022-07-23', 2),
('Courchevelle','France','La montagne , Ca vous gagne','Courchevelle.jpej', 699, '2022-08-23', '2022-08-23', 2),
('Miami', 'USA','une destination tres prisee ','Miami.webp', 899, '2022-08-23', '2022-08-23', 1),
('New york', 'USA','New York new york  ','NY.jpej', 899, '2022-09-23', '2022-09-23', 3),
('Jerusalem', 'Israel', 'la ville des trois religions ','Jerusalem.jpej', 999, '2022-10-23', '2022-10-23',4),
('Bruxelle', 'Belgium','une ville tres agrable ','Belgium.jpej', 399, '2022-10-23', '2022-10-23', 4);



CREATE TABLE follow (
id   INT NOT NULL AUTO_INCREMENT ,
userId int not null,
vacationId int not null,
followers int not null,
PRIMARY KEY (id),
FOREIGN KEY(userId) REFERENCES users(id),
FOREIGN KEY(vacationId) REFERENCES vacations(id)
);

INSERT INTO follow ( userId, vacationId,followers)
VALUES
(1,1,5000),
(1,2,4000),
(1,3,6000),
(1,4,10000),
(1,5,8000),
(1,6,20000),
(1,7,40000);




 select * from follow;
 
 select followers from follow where userId = 1;
 
select * from vacations;

select * from users;

SELECT * FROM users where role= 'admin';

SELECT *
FROM vacations