UPDATE cart set qty = cart.qty + $2
WHERE cart.customer_id = $3 AND cart.product_id = $1
RETURNING qty;
