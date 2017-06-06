SELECT * from product
where LOWER(product.description || product.details
      || product.name || product.type
      || product.seller) LIKE LOWER($1);
