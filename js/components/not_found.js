import React, { Component } from 'react'
import Nav from './nav'
import Footer from './footer'

class NotFound extends Component {
  render() {
    return (
      <div>
        <Nav />
          <div className='shop' >
            <div className='not-found'>
              <img src='../public/img/404.jpg' />
            </div>
          </div>
        <Footer />
      </div>
    )
  }
}

export default NotFound
