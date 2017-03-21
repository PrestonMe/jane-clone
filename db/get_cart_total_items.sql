SELECT SUM(qty) as total
FROM cart
WHERE customer_id = $2 OR session_id = $1;
