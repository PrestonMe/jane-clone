SELECT product_id
FROM cart
WHERE session_id = $1;
