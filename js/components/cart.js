import React from 'react'
import Nav from './nav'
import Footer from './footer'
import SignIn from './signin'
import CreateAccount from './createAccount'
import { updateQty } from '../actions/actionCreators'
import axios from 'axios'
import { Link } from 'react-router'
import { connect } from 'react-redux'

const { string } = React.PropTypes

class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cart: [],
      login: false
    }
    this.login = this.login.bind(this)
    this.convertMoney = this.convertMoney.bind(this)
    this.editQty = this.editQty.bind(this)
  }

  editQty (e) {
    e.preventDefault()
    console.log(+e.target.value, e.target.value)
    if(!isNaN(e.target.value) && +e.target.value < 10){
      let cart = this.state.cart, id = +e.target.id
      for(let i = 0; i < this.state.cart.length; i++) {
        if(this.state.cart[i].product_id === id) {
          cart[i].qty = +e.target.value
          break;
        }
      }
      if(e.target.value === '' || e.target.value === '00') {
        this.setState({cart: cart})
      } else {
        axios.put('/updateCartItem/' + id + '/'+ +e.target.value + '/' + this.props.userId)
        .then(res => {
          console.log('update response', res)
          this.props.dispatch(updateQty(+res.data[0].total))
          // const cart = res.data
          // this.setState({ cart: cart })
          this.setState({cart: cart})
        })
      }
    }
  }

  convertMoney(value) {
      value += ""
      value = value.split('.')
      if(value[1] && value[1].length === 1) {
        value[1] += '0'
      } else if (!value[1]){
        value[1] = '00'
      }
      return value.join('.')
  }

  login () {
    if(!this.state.login) {
      this.setState({login: true})
    }
  }

  componentDidMount () {
    if(this.props.userId) {
      axios.get('/getCart/' + this.props.userId)
      .then(res => {
        const cart = res.data
        this.setState({ cart: cart })
      })
    } else {
      axios.get('/getCart/' + 'getSession')
      .then(res => {
        const cart = res.data
        this.setState({ cart: cart })
      })
    }
  }

  render () {
    let total, tax;
    if(this.state.cart) {
      total = +this.state.cart.reduce((acc, val) => {
        return acc + (val.sale * val.qty) + (val.shipping * val.qty)
      }, 0).toFixed(2)
      tax = +(total * .08).toFixed(2)
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
                      <h2>${item.shipping}</h2>
                      <h2>${item.sale}</h2>
                    </div>
                  </div>
                  <div className='clearfix'>
                    <div className='edit-qty'>
                      <input
                        id={item.product_id}
                        value={item.qty}
                        onChange={this.editQty}/>
                        <img src='../../public/img/icons/cancel.svg'/>
                      </div>
                  </div>
                  <div className='cart-item-bottom'>
                    <div className='price-ship-details'>
                      <h2>Estimate to ship by Tue, Mar 28.</h2>
                      <h2>${this.convertMoney((item.sale * item.qty + item.shipping * item.qty).toFixed(2))}</h2>
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
                  <h1>${this.convertMoney(total)}</h1>
                </div>
                <div>
                  <h1>TAX</h1>
                  <h1>${this.convertMoney(tax)}</h1>
                </div>
                <div className='final-price'>
                  <h1>ORDER TOTAL:</h1>
                  <h1>${this.convertMoney((total + tax).toFixed(2))}</h1>
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

            {this.props.loggedIn ?
              <div>
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
            </div>
            :
            <div>
              <div className='login-cart'>
                <h1>SIGN UP & CHECKOUT</h1>
                {this.state.login
                ?
                <h1>LOG IN</h1>
                :
                <h1>ALREADY A MEMBER?</h1>
                }
              </div>
              <div className='cart-login-signup'>
                  <div className='login-pane cart-reset'>
                    <CreateAccount />
                  </div>
                  <div className='login-pane cart-reset cart-reset-login'>
                    {this.state.login
                    ?
                    ''
                    :
                    <h1>Welcome back then! Click the Log In button below so we can help you get on your way.</h1>
                    }
                    <div>
                      <SignIn login={this.login} {...this.props.location}/>
                    </div>
                  </div>
              </div>
            </div>
            }

          </div>

          :
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

Cart.propTypes = {
  pathname: string
}

const mapStateToProps = state => {
  return {
    cart: state.cartItems,
    loggedIn: state.loggedIn,
    userId: state.userId
  }
}

export default connect(mapStateToProps)(Cart)
