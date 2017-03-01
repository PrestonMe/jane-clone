const express = require('express')
const react = require('react')
const ReactRouter = require('react-router')
const port = 3000
const fs = require('fs')
const baseTemplate = fs.readFileSync('../public/index.html')
const template = _.template(baseTemplate)
const App = require('../public/js/App').default

const server = express()

server.use('/public', express.static('./public'))

server.use((req, res) => {
  const context = ReactRouter.createServerRenderContext()
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
