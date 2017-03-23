UPDATE cart
SET customer_id = $1
WHERE session_id = $2
AND product_id = $3
AND customer_id IS NULL;
