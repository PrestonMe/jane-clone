import React from 'react'
import axios from 'axios'
import Nav from './nav'
import Footer from './footer'
import LargeProduct from './largeproduct'
import SmallProduct from './smallproduct'

const { object } = React.PropTypes

class AllDeals extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      products: []
    }
  }

  componentDidMount () {
    axios.get('/products', {
      params: {
        path: this.props.location.pathname
      }
    }
    ).then(res => {
      const products = res.data
      this.setState({ products })
    })
  }

  render () {
    const promise = this.state.products[0]
    return !promise
    ? (<div>
      <Nav {...this.props.location} />
      <Footer />
    </div>)
    : (
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
          <div className='products-container'>
            {this.state.products.slice(0, 2).map((product) => {
              return (
                <LargeProduct {...product} key={product.id} />
              )
            })}
            {this.state.products.slice(2).map(product => {
              return (
                <SmallProduct {...product} key={product.id} />
              )
            })}
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

AllDeals.propTypes = {
  location: object
}

export default AllDeals
