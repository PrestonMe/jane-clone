UPDATE cart set qty = $1
WHERE (cart.session_id = $2 AND cart.customer_id IS NULL)
AND cart.product_id = $3
RETURNING qty;
