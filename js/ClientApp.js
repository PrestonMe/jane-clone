import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router'
import App from './App'
import Landing from './Landing'
import '../public/styles/normalize.css'
import '../public/styles/styles.css'

const App = React.createClass({
  render () {
    return (
      <BrowserRouter>
      <div className='app'>
        <Match exactly pattern='/' component={Landing} />
        <div className="landing">
          <h1>Test</h1>
          <input type='text' placeholder='Search' />
          <a>or Browse All </a>
        </div>
      </div>
    </BrowserRouter>
    )
  }
})

render(<App />, document.getElementById('app'))

// render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('app'))
