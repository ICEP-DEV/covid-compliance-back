SELECT * FROM campus; 
SELECT * FROM screen;
SELECT * FROM staff;
SELECT * From student;
SELECT * FROM user;
SELECT * FROM visitor;

desc screen;
desc staff;
desc student;
desc user;
desc visitor;
desc campus

-- Admin profile select statement
SELECT staff_role FROM staff WHERE staff_email = "hlopheth@tut.ac.za";
SELECT * FROM user u, staff s WHERE s.staff_email = "217458208@tut4life.ac.za" AND u.password = "student01";
SELECT * FROM user u, student s WHERE s.id_number = u.id_number AND s.stud_email = "217458208@tut4life.ac.za" AND u.password = "student01";

ALTER TABLE staff DROP COLUMN sta_email;
ALTER TABLE screen ADD symptoms varchar(255);
ALTER TABLE user MODIFY COLUMN id_number varchar(13);
DELETE FROM user WHERE id_number = 92101059;
select fname from user u, student s where u.id_number = s.id_number and s.stud_num = "215667308"; 

INSERT INTO campus VALUES ('arc','Arcadia Campus','Arcadia','Gauteng','0083');
INSERT INTO campus VALUES('art','Arts Campus','Arcadia','Gauteng','0007');
INSERT INTO campus VALUES('emal','Emalehleni Campus','Witbank','Mpumalanga','1034');
INSERT INTO campus VALUES('main','Pretoria Campus','Pretoria West','Gauteng','0183');
INSERT INTO campus VALUES('pol','Polokwane Campus','Polokwane Ext 67','Polokwane','0699');
INSERT INTO campus VALUES('rank','Ga-Rankuwa Campus','Ga-Rankuwa','Gauteng','0155');
INSERT INTO campus VALUES('soshn','soshanguve North Campus','Soshnaguve','Gauteng','0152');
INSERT INTO campus VALUES('soshs','soshanguve South Campus','Soshnaguve','Gauteng','0152');

INSERT INTO user VALUES(9210105917084, "Tholinhlanhla", "Hlophe", "Male", "Single", "isiZulu", "RSA", "mkhonkosi28@gmail.com", "staff", "admin01", "Phola Park, Piet Retief 2380, Mpumalanga", "0728108800", "soshs");
INSERT INTO user VALUES(9305105118083, "Mandisa", "Tsobo", "Female", "Single", "Xhosa", "RSA", "mandisa@gmail.com", "staff", "staff01", "Soshanguve, Pretoria 0155, Gauteng", "0797795842", "arc");
INSERT INTO user VALUES(9102031010084, "Sindi", "Nkosi", "Female", "Single", "Swati", "RSA", "samu@gmail.com", "staff", "staff01", "Arcadia, Pretoria 0083, Gauteng", "0728458925", "emal");
INSERT INTO user VALUES(9812104558083, "Siyamthanda", "sangweni", "Female", "Single", "English", "RSA", "siyamthanda@gmail.com", "student01", "student01", "Gate 0258, Polokwane 0699, Polokwane", "0712858942", "pol");
INSERT INTO user VALUES(9712082569084, "Hendry", "Mulondo", "Male", "Single", "isiZulu", "RSA", "hendry@gmail.com", "student", "student01", "Witbank Ext 17, Witbank 1034, Mpumalanga", "0712258842", "soshn");
INSERT INTO user VALUES(9512088569084, "Thapelo", "Khumalo", "Male", "Single", "isiZulu", "RSA", "thapelo@gmail.com", "student", "student01", "South Gate, Witbank 1034, Mpumalanga", "0721222547", "main");
INSERT INTO user VALUES(9604085798084, "Male", "Single", "isiZulu", "RSA", "thapelo@gmail.com", "student", "student01", "Thapelo", "Khumalo", "South Gate, Witbank 1034, Mpumalanga", "0721222547");

INSERT INTO student VALUES(218584218, "218584218@tut4life.ac.za", "9812104558083");
INSERT INTO student VALUES(217458208, "217458208@tut4life.ac.za", "9712082569084");
INSERT INTO student VALUES(214777309,"214777309@tut4life.ac.za", "9512088569084");

INSERT INTO staff VALUES(225584210, "9210105917084", "admin", "hlopheth@tut.ac.za");
INSERT INTO staff VALUES(219458209, "9305105118083", "cleak", "tsobom@tut.ac.za");
INSERT INTO staff VALUES(211715390, "9102031010084", "lecturer", "nkosis@tut.ac.za");

INSERT INTO visitor VALUES("vis-9084", "9112092569084");
INSERT INTO visitor VALUES("vis-9084", "9012018509084");

INSERT INTO staff VALUES (84572599,9604085798084,'admin','mkhonkoosith@tut.ac.za');