require('babel-register')
const express = require('express')
const React = require('react')
const ReactDOMServer = require('react-dom/server')
const cors = require('cors')
const bodyParser = require('body-parser')
const massive = require('massive')
const config = require('./config')
const session = require('express-session')
// renders our entire app out to a long string which is then shipped
// down as html
const ReactRouter = require('react-router')
const ServerRouter = ReactRouter.ServerRouter
const _ = require('lodash')
// for its templating fucntion (see index.html)
const port = 3000
const fs = require('fs')
const baseTemplate = fs.readFileSync('./index.html')
const template = _.template(baseTemplate)
const App = require('./js/containers/App').default
// we use .default since you export default, this is how we
// interoperate between the two
const connectionString = 'postgres://postgres@localhost/jane'
const massiveInstance = massive.connectSync({connectionString: connectionString});


const server = express()

server.use(bodyParser.json())
server.use(cors())
server.set('db', massiveInstance);
var db = server.get('db')

server.use('/public', express.static('./public'))

server.use(session({
  secret: config.secret,
  resave: false,
  saveUninitialized: true
}))

server.get('/products', function(req, res, next) {
  db.get_products(req.query.path, function(err, products) {
    res.json(products);
  })
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
              // inserts new items into users cart
              if(items.length !== 0) {
                for(let i = 0; i < items.length; i++) {
                  db.merge_carts(response[0].id, req.sessionID, items[i].product_id, function(err, complete) {
                    console.log('merged')
                  })
                }
              }
              // removes duplicate items on guest cart now that we are logged in
              db.cleanup_cart(req.sessionID, function(err, cleaned) {
                console.log('duplicate session_cart rows deleted')
              })
            })
            db.get_cart_total_items(['0', response[0].id], function(err, rep) {
              response[0].total = rep[0].total
              console.log('finished')
              res.json(response)
            })
          } else {
            db.get_cart_total_items(['0', response[0].id], function(err, rep) {
              if(!rep[0].total) {
                response[0].total = null
              } else {
                response[0].total = rep[0].total
              }
              console.log('finished')
              res.json(response)
            })
          }
      })
    }
  })
})

server.post('/addToCart/:id/:qty/:custId', function(req, res, next) {
  if(req.params.custId === 'null') {
    req.params.custId = null
  }
  let params = [req.params.qty, req.sessionID, req.params.custId, req.params.id]
  db.update_cart(params, function(err, response) {
    if(!response || response.length === 0) {
      db.add_to_cart(params, function(err, response) {
        db.get_cart_total_items([params[1], params[2]], function(err, rep) {
          res.json(rep)
        })
      })
    } else {
      db.get_cart_total_items([params[1], params[2]], function(err, rep) {
        res.json(rep)
      })
    }
  })
})

server.post('/signup', function(req, res, next) {
  db.find_account(req.body.data.email, function(err, response) {
    if(response.length === 0) {
      db.create_account([req.body.data.name, req.body.data.email, req.body.data.password], function(err, response) {
        res.json(response)
      })
    } else {
      res.json('Account Already Exists!')
    }
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
