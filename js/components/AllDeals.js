import React from 'react'
// import { Link } from 'react-router'
import Nav from './nav'
import Footer from './footer'

class AllDeals extends React.Component {
  constructor (props) {
    super(props)
    console.log(this)
  }
  render () {
    return (
      <div>
        <Nav {...this.props.location} />
        <div className='shop'>
          <div className='ads'>
            <div className='small-ad'>
              <img src='../../public/img/jane-app.jpg' />
            </div>
            <div className='small-ad' >
              <img src='../../public/img/spring.jpg' />
            </div>
            <div className='large-ad'>
              <img src='../../public/img/spree.jpg' />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default AllDeals
