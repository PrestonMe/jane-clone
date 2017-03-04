import React from 'react'
// import { render } from 'react-dom'
import { Match } from 'react-router'
import { Provider } from 'react-redux'
import store from '../store'
import AllDeals from '../components/AllDeals'
import MyAccount from '../components/login'

const App = () => {
  return (
    <Provider store={store}>
      <div className='main'>
        <Match exactly pattern='/' component={AllDeals} />
        <Match pattern='/logon' component={MyAccount} />
      </div>
    </Provider>

  )
}

export default App
