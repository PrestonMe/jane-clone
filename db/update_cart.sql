UPDATE cart set qty = cart.qty + $1
WHERE (cart.customer_id = $3 OR cart.session_id = $2)
AND cart.product_id = $4
RETURNING qty;
