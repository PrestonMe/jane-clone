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
        <Match exactly pattern='/clothing' component={AllDeals} />
        <Match exactly pattern='/accessories' component={AllDeals} />
        <Match exactly pattern='/baby' component={AllDeals} />
        <Match exactly pattern='/kids' component={AllDeals} />
        <Match exactly pattern='/misc' component={AllDeals} />
        <Match exactly pattern='/new' component={AllDeals} />
        <Match exactly pattern='/ending-soon' component={AllDeals} />
        <Match exactly pattern='/popular' component={AllDeals} />
        <Match exactly pattern='/sneak-peaks' component={AllDeals} />
        <Match exactly pattern='/home-decor' component={AllDeals} />

      </div>
    </Provider>

  )
}

export default App
