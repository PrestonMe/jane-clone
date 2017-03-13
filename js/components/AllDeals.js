import React from 'react'
import axios from 'axios'
// import { Link } from 'react-router'
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
        console.log('response', res)
      const products = res.data
      this.setState({ products });
      })
  }

  render () {
    console.log(this.state.products[0] ? this.state.products : null)
    const promise = this.state.products[0];

    return !promise ?
      (<div>
        <Nav {...this.props.location} />
        <Footer />
      </div>) : (
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
            {this.state.products.splice(0, 2).map((product) => {
              return (
                <LargeProduct {...product} key={product.id} />
              )
            })}
            {this.state.products.map(product => {
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