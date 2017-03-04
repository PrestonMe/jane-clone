import React from 'react'
// import { render } from 'react-dom'
import { Match } from 'react-router'
import { Provider } from 'react-redux'
import store from '../store'
import AllDeals from '../components/AllDeals'
import MyAccount from '../components/login'
import Cart from '../components/cart'

const App = () => {
  return (
    <Provider store={store}>
      <div className='main'>
        <Match exactly pattern='/cart' component={Cart} />
        <Match exactly pattern='/logon' component={MyAccount} />
        <Match exactly pattern='/' component={AllDeals} />
      </div>
    </Provider>

  )
}

export default App
