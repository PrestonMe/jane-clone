INSERT INTO cart (qty, session_id, customer_id, product_id)
values ($1, $2, $3, $4) RETURNING id;
