create database vacations;

use vacations;


CREATE TABLE users (
id   INT NOT NULL AUTO_INCREMENT ,
firstname VARCHAR(255) not null,
familyName varchar(255) not null,
email varchar(255)unique not null,
username varchar(255)  not null,
password int unique not null ,
role varchar(255) not null,
PRIMARY KEY (id)
);


INSERT INTO users (firstName, familyName, email, username, password, role)
VALUES
('David', 'Gallula', 'dgallula@gmail.com','dgallula', 1234, 'admin' ),
('Elie', 'Zenou', 'elie@gmail.com','elie', 1235, 'user' );




CREATE TABLE vacations (
id   INT NOT NULL AUTO_INCREMENT ,
descriptions VARCHAR(255) not null,
cityName VARCHAR(255) not null,
country VARCHAR(255) not null,
img VARCHAR(255) not null,
price int not null,
DateFrom datetime not null,
DateUntil datetime not null,
followers int,
userId int not null,
PRIMARY KEY (id),
FOREIGN KEY(userId) REFERENCES users(id)
);

INSERT INTO vacations ( descriptions, cityName, country, img, price, dateFrom, dateUntil,followers, userId)
VALUES

('Paris', 'France','Paris la ville des amoureux','Paris.jpej', 499, '2022-06-23', '2022-06-23',5000,  1),
('Madrid' ,'Espagne','Viva espagna','Madrid.jpej', 399, '2020-07-23', '2022-07-23',4000, 2),
('Courchevelle','France','La montagne , ça vous gagne','Courchevelle.jpej', 699, '2022-08-23', '2022-08-23',6000, 2);


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
(2,2,4000),
(1,3,6000);

CREATE TABLE followedVacations (
    id INT AUTO_INCREMENT NOT NULL,
    userID INT NOT NULL,
    vacationID INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY(userID) REFERENCES users(id),
    FOREIGN KEY(vacationID) REFERENCES vacations(id)
);


INSERT INTO followedVacations ( userId, vacationId)
VALUES
(1,1),
(2,2),
(1,3);



select* from vacations;

select *from users;

select * from followVacations;

select * from follow;





 select * from follow;
 
 select followers from follow where userId = 1;
 
select * from vacations;

select * from users;

SELECT * FROM users where role= 'admin';

SELECT *
FROM vacations