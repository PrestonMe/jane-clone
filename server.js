require('babel-register')
const express = require('express')
const React = require('react')
const ReactDOMServer = require('react-dom/server')
const cors = require('cors')
const bodyParser = require('body-parser')
const massive = require('massive')
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

server.get('/products', function(req, res, next) {
  db.get_products(req.query.path, function(err, products) {
    res.json(products);
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