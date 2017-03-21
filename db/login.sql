SELECT cust.fullname, cust.id FROM customer cust
WHERE cust.email = $1 AND cust.password = $2;
