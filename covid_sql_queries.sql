SELECT * FROM campus; 
SELECT * FROM screen; 
SELECT * FROM staff; 
SELECT * FROM student; 
SELECT * FROM user; 
SELECT * FROM visitor; 

ALTER TABLE user ADD password varchar(255);
INSERT INTO user VALUES(92101059, "Male", "921010", "Single", "isiZulu", "RSA", "mkhonkosi28@gmail.com", "Student", "nhlanhla");