SELECT title, rental_rate 
FROM film
WHERE rental_rate = .99
;

-- this is the skeliton you will always work from 
-- SELECT 
-- FROM 
-- WHERE 
-- ;
-- to wright a querry find all customer names first and last, 
-- their email addressees and where their a customer of 
-- for only thoes who are a customer of store number two
SELECT first_name, last_name, email
FROM customer
WHERE store_id = 2;

-- count and group by
SELECT COUNT(title)
-- title is column name
FROM film 
WHERE rental_rate = .99
;

SELECT COUNT(title), rental_rate
FROM film 
GROUP BY 2 
;

-- BRAINBUSTER 
-- Which rating do we have the most films in?
-- Which rating is the most prevalent in each store?

-- (1)
SELECT COUNT(title), rating
FROM film 
GROUP BY rating
;

-- (2)
-- NOT  they changed the question to true or false 
-- there are 70 films that have a R rating and are $.99. 
SELECT COUNT(title), rating
FROM film 
WHERE rental_rate = .99
GROUP BY rating
;