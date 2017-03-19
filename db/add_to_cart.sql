INSERT INTO cart (qty, customer_id, product_id)
values ($2, $3, $1) RETURNING id;
