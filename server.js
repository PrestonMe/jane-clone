require('babel-register')
const express = require('express')
const React = require('react')
const ReactDOMServer = require('react-dom/server')
const cors = require('cors')
const bodyParser = require('body-parser')
const massive = require('massive')
// const config = require('./config')
const session = require('express-session')
// renders our entire app out to a long string which is then shipped
// down as html
const ReactRouter = require('react-router')
const ServerRouter = ReactRouter.ServerRouter
const _ = require('lodash')
// for its templating fucntion (see index.html)
const port = process.env.PORT || 3000
const fs = require('fs')
const baseTemplate = fs.readFileSync('./index.html')
const template = _.template(baseTemplate)
const App = require('./js/containers/App').default
// we use .default since you export default, this is how we
// interoperate between the two
// const connectionString = 'postgres://postgres@localhost/jane'
const connectionString = process.env.DATABASE_URL || 'postgres://postgres@localhost/jane'
const massiveInstance = massive.connectSync({connectionString: connectionString});
// postgresql-regular-13626
const server = express()

server.use(bodyParser.json())
server.use(cors())
server.set('db', massiveInstance);
var db = server.get('db')

server.use('/public', express.static('./public'))

server.use(session({
  secret: process.env.secret,
  resave: false,
  saveUninitialized: true
}))

function login (req, res, response) {
  //checks to see if there are items in cart before user logs in
  db.items_on_session_cart(req.sessionID, function(err, items) {
      if(items.length) {
        //remove items on session cart already in user cart
        db.items_on_user_cart(response[0].id, function(err, userItems) {
          for(let i = 0; i < items.length; i++) {
            for(let j = 0; j < userItems.length; j++) {
              if(items[i].product_id === userItems[j].product_id) {
                items.splice(i, 1);
                i--;
                break;
              }
            }
          }

          function finish() {
            // removes duplicate items on guest cart now that we are logged in
            db.cleanup_cart(req.sessionID, function(err, cleaned) {
              db.get_cart_total_items(['0', response[0].id], function(err, rep) {
                response[0].total = rep[0].total

                res.json(response)
              })
            })
          }
          // inserts new items into users cart
          if(items.length !== 0) {
            for(let i = 0; i < items.length; i++) {
              db.merge_carts([response[0].id, req.sessionID, items[i].product_id], function(err, complete) {})
            }
            setTimeout(finish, 100)
          } else {
            finish()
          }

        })
      } else {
        db.get_cart_total_items(['0', response[0].id], function(err, rep) {
          if(!rep[0].total) {
            response[0].total = null
          } else {
            response[0].total = rep[0].total
          }
          res.json(response)
        })
      }
  })
}

server.get('/products', function(req, res, next) {
  if(req.query.path === '/') {
    db.get_all_deals(function(err, products) {
      res.json(products)
    })
  } else {
    db.get_products(req.query.path, function(err, products) {
      res.json(products);
    })
  }
})

server.get('/product/:id', function(req, res, next) {
  db.get_product(req.params.id, function(err, products) {
    res.json(products);
  })
})

server.get('/login/:email/:password', function(req, res, next) {
  db.login([req.params.email, req.params.password], function(err, response) {
    if(response.length === 0) {
      res.json('Login Failed')
    } else {
      login(req, res, response)
    }
  })
})


server.post('/signup', function(req, res, next) {
  db.find_account(req.body.data.email, function(err, response) {
    if(response.length === 0) {
      db.create_account([req.body.data.name, req.body.data.email, req.body.data.password], function(err, response) {
        login(req, res, response)
      })
    } else {
      res.json('Account Already Exists!')
    }
  })
})

server.put('/updateCartItem/:id/:qty/:custId', function(req, res, next) {
if(req.params.custId === 'null') {
    db.edit_guest_cart([+req.params.qty, req.sessionID, +req.params.id], function(err, response) {
      db.get_guest_cart_total(req.sessionID, function(err, response) {
        res.json(response)
      })
    })
  } else {
    db.edit_cart([+req.params.qty, req.params.custId, +req.params.id], function(err, response) {
      db.get_cart_total_items([req.sessionID, req.params.custId], function(err, response) {
        res.json(response)
      })
    })
  }
})

server.post('/addToCart/:id/:qty/:custId', function(req, res, next) {
  if(req.params.custId === 'null') {
    req.params.custId = null
  }

  let params = [req.params.qty, req.sessionID, req.params.custId, req.params.id]
  let result;

  if(!req.params.custId) {
    db.update_guest_cart([params[0], params[1], params[3]], function(err, response) {
      result = response
      addToCart()
    })
  } else {
    db.update_cart(params, function(err, response) {
      result = response
      addToCart()
    })
  }

  function addToCart(){
    if(!result || result.length === 0) {
      db.add_to_cart(params, function(err, response) {
        if(!params[2]) {
          db.get_guest_cart_total(params[1], function(err, response) {
            res.json(response)
          })
        } else {
          db.get_cart_total_items([params[1], params[2]], function(err, response) {
            res.json(response)
          })
        }
      })
    } else {
      if(!params[2]) {
        db.get_guest_cart_total(params[1], function(err, response) {
          res.json(response)
        })
      } else {
        db.get_cart_total_items([params[1], params[2]], function(err, response) {
          res.json(response)
        })
      }
    }
  }

})

server.get('/getCart/:userId', function(req, res, next) {
  if(req.params.userId === 'getSession') {
    db.get_guest_cart(req.sessionID, function(err, response) {
      res.json(response)
    })
  } else {
    db.get_customers_cart(req.params.userId, function(err, response) {
      db.get_customers_shipping_address(req.params.userId, function(err, address) {
        if(address[0].ship_address){
          response.push(address[0])
        }
        res.json(response)
      })
    })
  }
})

server.delete('/deleteItem/:id/:userId', function(req, res, next) {
  db.delete_cart_item(req.params.id, function(err, response) {
    if(req.params.userId !== 'null') {
      db.get_cart_total_items([req.sessionID, req.params.userId], function(err, response) {
        res.json(response)
      })
    } else {
      db.get_guest_cart_total(req.sessionID, function(err, response) {
        res.json(response)
      })
    }
  })
})

server.post('/setShipAddress', function(req, res, next) {
  let data = req.body.data
  db.set_ship_address([data.first, data.last, data.address, data.city, data.state, data.zip, data.id], function(err, response) {
    res.json(response)
  })
})

server.post('/createOrder', function(req, res, next) {
  let data = req.body.data
  db.create_order([data.id, data.name, data.address, data.city, data.state, data.zip], function(err, orderId) {
    let iterator = 0
    for(let i = 0; i < data.cart.length; i++){
      let cartDetails = [data.cart[i].product_id, data.cart[i].qty, data.cart[i].price, data.cart[i].shipping, orderId[0].id]
      db.create_order_details(cartDetails, function(err, response) {
        iterator++
        if(iterator === data.cart.length){
          db.empty_cart(data.id, function(err, finished) {
            res.json(orderId)
          })
        }
      })
    }
  })
})

server.get('/getHistory/:userId', function(req, res, next) {

  db.get_order_history(req.params.userId, function(err, response) {
    let arr = []
    let counter = 0
    let microCount = 0
    // Possibly avoid this smelly solution with bluebird promisification?
    for(let i = 0; i < response.length; i++) {
      db.get_order_details(response[i].id, function(err, details){
        counter++
        arr.push(details)
        microCount += details.length
        if(counter === response.length) {

          let counter2 = 0, arr2 = []

          for(let j = 0; j < arr.length; j++) {
            for(let k = 0; k < arr[j].length; k++){
              db.get_order_product_details(arr[j][k].product_id, function(err, product) {
                counter2++
                arr2.push(product[0])
                if(counter2 === microCount) {

                  //appending product details to order items
                  for(let h = 0; h < arr2.length; h++) {
                    for(let g = 0; g < arr.length; g++) {
                      for(let f = 0; f < arr[g].length; f++) {
                        if(arr[g][f].product_id === arr2[h].id){
                          arr[g][f].name = arr2[h].name
                          arr[g][f].seller = arr2[h].seller
                          arr[g][f].thumb = arr2[h].thumb
                        }
                      }
                    }
                  }
                  // appending array of order items to order object
                  for(let h = 0; h < response.length; h++) {
                    for(let g = 0; g < arr.length; g++){
                      if(arr[g][0].order_id === response[h].id) {
                        response[h].order_items = arr[g]
                        break;
                      }
                    }
                  }
                  res.json(response)
                }
              })
            }
          }
        }
      })
    }
  })
})

server.get('/getAccount/:id', function(req, res, next) {
  db.get_account_info(req.params.id , function(err, response) {
    res.json(response)
  })
})

server.put('/updateAll', function(req, res, next) {
  db.update_all([req.body.data.name, req.body.data.email, req.body.data.password, req.body.data.id], function(err, response) {
    res.json('Account Updated')
  })
})

server.put('/updateAccount', function(req, res, next) {
    db.update_account([req.body.data.name, req.body.data.email, req.body.data.id], function(err, response) {
      res.json('Account Updated')
    })
})

server.get('/order/:id', function(req, res, next) {
  db.get_order_details(req.params.id, function(err, response) {
    db.get_ship_address(req.params.id, function(err, address) {
      response[0].ship_name = address[0].ship_name
      response[0].ship_address  = address[0].ship_address
      response[0].ship_city = address[0].ship_city
      response[0].ship_state = address[0].ship_state
      response[0].ship_zip = address[0].ship_zipcode
      let counter = 0;
      for(let i = 0; i < response.length; i++) {
        db.get_order_product_details(response[i].product_id, function(err, details) {
          counter++
          response[i].name = details[0].name
          response[i].seller = details[0].seller
          response[i].thumb = details[0].thumb
          if(counter === response.length) {
            res.json(response)
          }
        })
      }
    })
  })
})

server.use((req, res) => {
  const context = ReactRouter.createServerRenderContext()
  // used for react router v4 server side rendering, you can
  // use the above to handle redirects and 404's, but is not implemented
  // in this example
  let body = ReactDOMServer.renderToString(
    React.createElement(ServerRouter, {location: req.url, context: context},
      React.createElement(App)
    )
  )
  res.write(template({body: body}))
  res.end()
})

console.log('listening on ' + port)
server.listen(port)
