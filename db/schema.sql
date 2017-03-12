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

INSERT INTO product
(name, description, details, price, sale, options, qty, type,
bUrl, mUrl, thumb, favorites, seller, sellerImg)
 values
('Leather Crossbody Bags | 13 styles',
'These faux leather cross body bags are great quality, stylish, and functional! Customers who buy 1, are always coming back for more!

The <b>leather strap crossbody</b>  is a triple compartment bag with 2 open compartments and 1 zipper compartment in the middle. Comes with a long strap for crossbody, and a wristlet strap. Wear it either way!

The <b>gold chain strap crossbody bags</b>  are single compartment with a zipper top. Strap and tassle are also removable. ',
'Beautiful Faux Leather
Chain Strap Bags- 9¼" x 11¾"
Leather Strap Bags-8¾" x 6¼"
Removable Straps', 20.99, 15.99, 'styles', 34,
  '/accessories', './public/img/accessories/Lleathercbb.jpg', null, '.public/img/accessories/thumbnails/lcbb1.jpg',
10, 'The Teal Mill', './img/vendor/tealmill.jpg');


INSERT INTO product
(name, description, details, price, sale, options, qty, type,
bUrl, mUrl, thumb, favorites, seller, sellerImg) values
('Spring Fashion Booties | 3 Colors','These super fun Spring booties are <b>darling!</b> They come in black, mauve, or camel. They feature a 3.25" heel and have a faux suede body. Pair these up with SO many different outfits this Spring season and you''ll be set!

<b>These have been running true to size!</b>','Approx 3.25" heel
Faux suede
Slingback
Runs true to size',54.99,28.99,'none',52,'/accessories'
,'./public/img/accessories/Lsfb.jpg','./public/img/accessories/Msfb.jpg'
,'./public/img/accessories/thumbnails/sfb1.jpg',177,'Shoetopia.com','./img/vendor/shoetopia.jpg');

INSERT INTO product
(name, description, details, price, sale, options, qty, type,
bUrl, mUrl, thumb, favorites, seller, sellerImg) values
('','','',,,'',,'','','','',,'','');

INSERT INTO product
(name, description, details, price, sale, options, qty, type,
bUrl, mUrl, thumb, favorites, seller, sellerImg) values
('','','',,,'',,'','','','',,'','');

INSERT INTO product
(name, description, details, price, sale, options, qty, type,
bUrl, mUrl, thumb, favorites, seller, sellerImg) values
('','','',,,'',,'','','','',,'','');

INSERT INTO product
(name, description, details, price, sale, options, qty, type,
bUrl, mUrl, thumb, favorites, seller, sellerImg) values
('','','',,,'',,'','','','',,'','');

INSERT INTO product
(name, description, details, price, sale, options, qty, type,
bUrl, mUrl, thumb, favorites, seller, sellerImg) values
('','','',,,'',,'','','','',,'','');

INSERT INTO product
(name, description, details, price, sale, options, qty, type,
bUrl, mUrl, thumb, favorites, seller, sellerImg) values
('','','',,,'',,'','','','',,'','');

INSERT INTO product
(name, description, details, price, sale, options, qty, type,
bUrl, mUrl, thumb, favorites, seller, sellerImg) values
('','','',,,'',,'','','','',,'','');

INSERT INTO product
(name, description, details, price, sale, options, qty, type,
bUrl, mUrl, thumb, favorites, seller, sellerImg) values
('','','',,,'',,'','','','',,'','');

INSERT INTO product
(name, description, details, price, sale, options, qty, type,
bUrl, mUrl, thumb, favorites, seller, sellerImg) values
('','','',,,'',,'','','','',,'','');
