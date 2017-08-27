import React, { Component } from 'react'
import { Match } from 'react-router'
import { Provider } from 'react-redux'
import store from '../store'
import AllDeals from '../components/AllDeals'
import MyAccount from '../components/login'
import Cart from '../components/cart'
import Product from '../components/product'
import SignUp from '../components/signup'
import History from '../components/order_history'
import Account from '../components/account_info'
import OrderSum from '../components/order_complete'
import SearchResults from '../components/search_results'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <div className='main'>
          <Match exactly pattern='/cart' component={Cart} />
          <Match exactly pattern='/logon' component={MyAccount} />
          <Match exactly pattern='/signup' component={SignUp} />
          <Match exactly pattern='/' component={AllDeals} />
          <Match exactly pattern='/clothing' component={AllDeals} />
          <Match exactly pattern='/accessories' component={AllDeals} />
          <Match exactly pattern='/baby' component={AllDeals} />
          <Match exactly pattern='/kids' component={AllDeals} />
          <Match exactly pattern='/misc' component={AllDeals} />
          <Match exactly pattern='/new' component={AllDeals} />
          <Match exactly pattern='/ending-soon' component={AllDeals} />
          <Match exactly pattern='/popular' component={AllDeals} />
          <Match exactly pattern='/sneak-peeks' component={AllDeals} />
          <Match exactly pattern='/home-decor' component={AllDeals} />
          <Match exactly pattern='/history' component={History} />
          <Match exactly pattern='/account' component={Account} />
          <Match pattern='/search/:term' component={SearchResults} />
          <Match pattern='/productpage/:id' component={Product} />
          <Match pattern='/confirmation/:id' component={OrderSum} />
          {/* <Match pattern="*" component={NotFound} /> */}
        </div>
      </Provider>

    )
  }
}

export default App
