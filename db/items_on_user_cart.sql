SELECT product_id
FROM cart
WHERE cart.customer_id = $1;
