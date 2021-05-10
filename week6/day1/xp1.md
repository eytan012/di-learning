Exercise 1 : Items And Customers
Create a database called public.
Add two tables:
items
customers.


Follow the instructions below to determine which columns to add to the two tables:

Add the following items to the items table:
Small Desk – 100 (ie. price)
Large desk – 300
Fan – 80

Add 5 new customers to the customers table:
Greg Jones
Sandra Jones
Scott Scott
Trevor Green
Melanie Johnson

Use SQL to fetch the following data from the database:
All the items.
All the items with a price above 80 (80 not included).
All the items with a price below 300. (300 included)
All customers whose last name is ‘Smith’ (What will be your outcome?).
All customers whose last name is ‘Jones’.
All customers whose firstname is not ‘Scott’.

-- CREATE TABLE items(
-- 	id serial PRIMARY KEY,
-- 	item_name varchar(255) NOT NULL,
-- 	item_price int NOT NULL
-- )
-- CREATE TABLE customers(
-- 	id serial PRIMARY KEY,
-- 	first_name varchar(255) NOT NULL,
-- 	last_name varchar(255) NOT NULL
-- )

-- INSERT INTO items(item_name,item_price)
-- VALUES('Small desk', 100),
-- ('Large desk',300),
-- ('Fan',80)

-- INSERT INTO customers(first_name,last_name)
-- VALUES('Greg', 'Jones'),
-- ('Sandra', 'Jones'),
-- ('Scott', 'Scott'),
-- ('Trevor', 'Green'),
-- ('Melanie', 'Johnson')

-- SELECT * FROM items
-- SELECT * FROM items
-- WHERE item_price > 80

-- SELECT * FROM items
-- WHERE item_price <= 300

-- SELECT * FROM customers
-- WHERE last_name = 'Smith'

-- SELECT * FROM customers
-- WHERE last_name = 'Jones'

-- SELECT * FROM customers
-- WHERE first_name != 'Scott'
