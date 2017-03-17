SELECT * FROM customer
WHERE customer.email = $1 AND customer.password = $2;
