DELETE FROM cart
WHERE cart.session_id = $1
AND cart.customer_id IS NULL;
