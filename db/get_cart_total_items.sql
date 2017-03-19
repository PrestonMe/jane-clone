SELECT SUM(qty) as total
FROM cart
WHERE customer_id = $1;
