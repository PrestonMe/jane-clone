import React from 'react'
// import { render } from 'react-dom'
import { Match } from 'react-router'
import { Provider } from 'react-redux'
import store from '../store'
import AllDeals from '../components/AllDeals'
import Nav from '../components/nav'
import Footer from '../components/footer'

const App = () => {
  return (
    <Provider store={store}>
      <div className='main'>
        <Nav />
        <Match exactly pattern='/' component={AllDeals} />
        <Footer />
      </div>
    </Provider>

  )
}

export default App
