import React from 'react'
import Nav from './nav'
import Footer from './footer'
import { Link } from 'react-router'
import { connect } from 'react-redux'

class Cart extends React.Component {
  // constructor(props) {
  //   super(props)
  //
  //
  // }
  render () {
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
            <div className='cart-item'>
              <div className='cart-item-top'>
                <div className='cart-item-left'>
                  <img src='../../public/img/accessories/thumbnails/adrflt1.jpg'/>
                  <div>
                    <p>$15.99 | Festival Sandals | 2 Styles</p>
                    <p>Seller: Shoetopia.com</p>
                  </div>
                </div>
                <div className='cart-item-right'>
                  <h2>1 | <span>Edit</span></h2>
                  <h2>$5.99</h2>
                  <h2>$15.99</h2>
                </div>
              </div>
              <div className='cart-item-bottom'>
                <div className='price-ship-details'>
                  <h2>Estimate to ship by Tue, Mar 28.</h2>
                  <h2>$21.98</h2>
                </div>
                <p>Seller usually ships within 2 business days.</p>
              </div>
            </div>
            <div className='order-total'>
              <div className='order-right'>
                <div>
                  <h1>TOTAL BEFORE TAX</h1>
                  <h1>$31.96</h1>
                </div>
                <div>
                  <h1>TAX</h1>
                  <h1>$0.00</h1>
                </div>
                <div className='final-price'>
                  <h1>ORDER TOTAL:</h1>
                  <h1>$31.96</h1>
                </div>
              </div>
            </div>
            <div className='note'>
              <p>Note: Each deal is charged individually. If you have multiple deals in your cart, you will see a transaction on your credit card for each deal.</p>
            </div>

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
    loggedIn: state.loggedIn
  }
}

export default connect(mapStateToProps)(Cart)
