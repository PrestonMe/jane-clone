import React from 'react'
import Nav from './nav'
import Footer from './footer'
import axios from 'axios'
import { Link } from 'react-router'
import { connect } from 'react-redux'

class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cart: []
    }

  }

  componentDidMount () {
    if(this.props.userId) {
      axios.get('/getCart/' + this.props.userId)
      .then(res => {
        const cart = res.data
        this.setState({ cart })
      })
    } else {
      axios.get('/getCart/' + 'getSession')
      .then(res => {
        const cart = res.data
        this.setState({ cart })
      })
    }
  }

  render () {
    let total, tax;
    console.log(25, this.state.cart)
    if(this.state.cart) {
      total = +this.state.cart.reduce((acc, val) => {
        console.log(acc, +val.price)
        return acc + (+val.sale * val.qty);
      }, 0).toFixed(2)
      tax = +(total * .08).toFixed(2)
      console.log(typeof total, typeof tax, total + tax)
    }

    return (
      <div>
        <Nav />
        <div className='checkout'>
          <div className='cart-wrapper'>
            <div className='cart'>
              <h1>YOUR CART</h1>
        {this.props.cart ?
          <div>
            <div className='item-header'>
              <div className='item-left'>
                <h2>DESCRIPTION</h2>
              </div>
              <div className='item-right'>
                <h2>QTY</h2>
                <h2>SHIPPING</h2>
                <h2>PRICE</h2>
              </div>
            </div>

            {this.state.cart.map(item => {
              return (
                <div className='cart-item' key={item.product_id}>
                  <div className='cart-item-top'>
                    <div className='cart-item-left'>
                      <img src={`../${item.thumb}`}/>
                      <div>
                        <p>${item.sale} {item.name}</p>
                        <p>Seller: {item.seller}</p>
                      </div>
                    </div>
                    <div className='cart-item-right'>
                      <h2>{item.qty} | <span>Edit</span></h2>
                      <h2>$5.99</h2>
                      <h2>${item.sale}</h2>
                    </div>
                  </div>
                  <div className='cart-item-bottom'>
                    <div className='price-ship-details'>
                      <h2>Estimate to ship by Tue, Mar 28.</h2>
                      <h2>${(item.sale * item.qty + 5.99).toFixed(2)}</h2>
                    </div>
                    <p>Seller usually ships within 2 business days.</p>
                  </div>
                </div>
              )
            })}

            <div className='order-total'>
              <div className='order-right'>
                <div>
                  <h1>TOTAL BEFORE TAX</h1>
                  <h1>${total}</h1>
                </div>
                <div>
                  <h1>TAX</h1>
                  <h1>${tax}</h1>
                </div>
                <div className='final-price'>
                  <h1>ORDER TOTAL:</h1>
                  <h1>${total + tax}</h1>
                </div>
              </div>
            </div>
            {(this.state.cart.length > 1) ? 
              <div className='note'>
                <p>Note: Each deal is charged individually. Since you have multiple deals in your cart, you will see a transaction on your credit card for each deal.</p>
              </div>
              :
              ''
            }


            <div className='shipping-header'>
              <h1>SHIPPING ADDRESS</h1>
              <h1>PAYMENT METHOD</h1>
            </div>

            <div className='shipping-payment'>
              <div className='new-address'>
                <button className='btn-large-font btn-empty-cart'>USE A NEW ADDRESS</button>
              </div>
              <div className='payment-method'>
                <h1>SELECT A PAYMENT METHOD:</h1>
                <div className='pay-btm'>
                  <button>CARD</button>
                  <img src='../../public/img/icons/paypal.png'/>
                  <button>DWOLLA</button>
                </div>
              </div>
            </div>

            <div className='terms-of-use'>
              <h1>By completing your order, you agree to Jane.com's <span>Terms Of Use</span>.</h1>
            </div>

            <div className='complete-order'>
              <button className='btn-large-font btn-empty-cart max-width'>COMPLETE MY ORDER</button>
            </div>
          </div> :
          <div>
            <p>You don't have anything in your cart yet
              Let's help you get this baby loaded!
            </p>
            <div className='btn-wrapper'>
              <button className='btn-empty-cart'><Link to='/'>SHOP TODAY'S DEALS!</Link></button>
            </div>
          </div>
        }

            </div>


            <div className='j-promise'>
              <h1>JANE'S PROMISE</h1>
              <p>If you're not absolutely satisfied with your Jane order, we'll make it right or refund your purchase. <b>Cross our hearts!</b></p>
              <h1>SECURE CHECKOUT</h1>
              <p>Security at its finest. Braintree + Jane, bringing you safe shopping and a guaranteed smile.</p>
              <img src='../../public/img/braintree.png' />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cartItems,
    loggedIn: state.loggedIn,
    userId: state.userId
  }
}

export default connect(mapStateToProps)(Cart)
