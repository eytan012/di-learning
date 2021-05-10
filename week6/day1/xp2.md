-- CREATE TABLE students(
-- 	id serial PRIMARY KEY,
-- 	first_name varchar(255) NOT NULL,
-- 	last_name varchar(255) NOT NULL,
-- 	birth_date DATE
-- )


-- INSERT INTO students(first_name,last_name,birth_date)
-- VALUES('Marc','Benichou',DATE '02-11-1998'),
-- ('Yohan','Cohen',DATE '03-12-2010'),
-- ('Lea','Benichou',DATE '07-27-1987'),
-- ('Amelia','Dux',DATE '07-04-1996'),
-- ('David','Grez',DATE '06-14-2003'),
-- ('Omer','Simpson',DATE '03-10-1980'),
-- ('Eytan','Sayada',DATE '02-12-1996')

-- SELECT first_name,last_name
-- FROM students
-- WHERE ID=1

-- SELECT first_name,last_name
-- FROM students
-- WHERE last_name = 'Benichou' AND first_name = 'Marc'

-- SELECT first_name,last_name
-- FROM students
-- WHERE last_name = 'Benichou' OR first_name = 'Marc'

-- SELECT first_name,last_name
-- FROM students
-- WHERE first_name LIKE '%a%'

-- SELECT first_name,last_name
-- FROM students
-- WHERE first_name LIKE 'A%'

-- SELECT first_name,last_name
-- FROM students
-- WHERE first_name LIKE '%a'

-- SELECT first_name,last_name
-- FROM students
-- WHERE id=1 OR id=3

-- SELECT * FROM students
-- WHERE birth_date >= '1-01-2000'