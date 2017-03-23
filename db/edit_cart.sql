UPDATE cart set qty = $1
WHERE cart.customer_id = $2
AND cart.product_id = $3
RETURNING qty;
