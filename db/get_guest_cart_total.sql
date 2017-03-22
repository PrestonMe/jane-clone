SELECT SUM(qty) as total
FROM cart
WHERE session_id = $1 AND customer_id IS NULL;
