CREATE TABLE product (
  id serial primary key,
  name varChar(50),
  description varChar(1000),
  details varChar(300),
  price money,
  sale money,
  options varChar(1000),
  qty int,
  type varChar(20),
  bUrl varChar(100),
  mUrl varChar(100),
  thumb varChar(100),
  favorites int,
  seller varChar(25),
  sellerImg varChar(100)
);
