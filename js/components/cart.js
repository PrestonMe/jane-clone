import React from 'react'
import Nav from './nav'
import Footer from './footer'
import SignIn from './signin'
import CreateAccount from './createAccount'
import NewAddress from './new_address'
import axios from 'axios'
import { updateQty } from '../actions/actionCreators'
import { Link } from 'react-router'
import { connect } from 'react-redux'

const { string, object, number, func, bool } = React.PropTypes

class Cart extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      cart: [],
      login: false,
      addressMenu: false,
      billingMenu: false,
      shippingAddress: {},
      checked: false,
      validator: {
        name: true,
        cardNumber: true,
        exp_month: true,
        exp_year: true,
        cvv: true,
        address: true,
        city: true,
        state: true,
        zip: true,
        shipping: true
      },
      payInfo: {
        name: '',
        cardNumber: '',
        exp_month: '',
        exp_year: '',
        cvv: '',
        address: '',
        city: '',
        state: '',
        zip: ''
      }
    }
    this.login = this.login.bind(this)
    this.convertMoney = this.convertMoney.bind(this)
    this.editQty = this.editQty.bind(this)
    this.toggleEdit = this.toggleEdit.bind(this)
    this.removeFromCart = this.removeFromCart.bind(this)
    this.toggleAddress = this.toggleAddress.bind(this)
    this.toggleBilling = this.toggleBilling.bind(this)
    this.updateBillAddress = this.updateBillAddress.bind(this)
    this.updateInput = this.updateInput.bind(this)
    this.submitOrder = this.submitOrder.bind(this)
  }

  toggleAddress (e) {
    let obj = this.state
    if (e.ship_address) {
      obj.shippingAddress = e
    }
    obj.addressMenu = !this.state.addressMenu
    this.setState(obj)
  }

  editQty (e) {
    e.preventDefault()
    if (!isNaN(e.target.value) && +e.target.value < 10) {
      let cart = this.state.cart
      let id = +e.target.id
      for (let i = 0; i < this.state.cart.length; i++) {
        if (this.state.cart[i].product_id === id) {
          cart[i].qty = +e.target.value
          break
        }
      }
      if (e.target.value === '' || e.target.value === '00') {
        this.setState({cart: cart})
      } else {
        axios.put('/updateCartItem/' + id + '/' + +e.target.value + '/' + this.props.userId)
        .then(res => {
          this.props.dispatch(updateQty(+res.data[0].total))
          this.setState({cart: cart})
        })
      }
    }
  }

  convertMoney (value) {
    value += ''
    value = value.split('.')
    if (value[1] && value[1].length === 1) {
      value[1] += '0'
    } else if (!value[1]) {
      value[1] = '00'
    }
    return value.join('.')
  }

  login () {
    if (!this.state.login) {
      this.setState({login: true})
    }
  }

  toggleBilling () {
    let obj = this.state
    obj.billingMenu = !this.state.billingMenu
    this.setState(obj)
  }

  updateBillAddress (e) {
    let obj = this.state
    obj.checked = !obj.checked
    if (obj.checked && obj.shippingAddress.ship_address) {
      obj.payInfo.address = obj.shippingAddress.ship_address
      obj.payInfo.city = obj.shippingAddress.ship_city
      obj.payInfo.state = obj.shippingAddress.ship_state
      obj.payInfo.zip = obj.shippingAddress.ship_zipcode
    }
    this.setState(obj)
  }

  updateInput (e) {
    let obj = this.state
    obj.payInfo[e.target.name] = e.target.value
    this.setState(obj)
  }

  toggleEdit (e, f) {
    e = !e
    let obj = this.state.cart
    for (let i = 0; i < this.state.cart.length; i++) {
      if (this.state.cart[i].product_id === f) {
        obj[i].edit = e
        this.setState({cart: obj})
        break
      }
    }
  }

  removeFromCart (id, userId) {
    axios.delete('/deleteItem/' + id + '/' + userId)
    .then(res => {
      let obj = this.state.cart
      this.props.dispatch(updateQty(+res.data[0].total))
      for (let i = 0; i < this.state.cart.length; i++) {
        if (this.state.cart[i].id === id) {
          obj.splice(i, 1)
          this.setState({cart: obj})
        }
      }
    })
  }

  submitOrder (e) {
    e.preventDefault()
    let obj = this.state
    let validator = this.state.validator
    let validInput = true
    for (let key in validator) {
      validator[key] = true
    }
    if (!obj.shippingAddress.ship_first_name) validator.shipping = false
    if (!obj.payInfo.name) validator.name = false
    if (!obj.payInfo.cardNumber || obj.payInfo.cardNumber.length !== 16 || isNaN(obj.payInfo.cardNumber * 1)) validator.cardNumber = false
    if (!obj.payInfo.exp_month) validator.exp_month = false
    if (!obj.payInfo.exp_year) validator.exp_year = false
    if (!obj.payInfo.cvv || obj.payInfo.cvv.length !== 3 || isNaN(obj.payInfo.cvv * 1)) validator.cvv = false
    if (!obj.payInfo.address) validator.address = false
    if (!obj.payInfo.city) validator.city = false
    if (!obj.payInfo.state) validator.state = false
    if (!obj.payInfo.zip || obj.payInfo.zip.length < 4 || obj.payInfo.zip.length > 10 || isNaN(obj.payInfo.zip * 1)) validator.zip = false
    obj.validator = validator

    for (let key in validator) {
      if (!validator[key]) {
        validInput = false
      }
    }

    if (validInput) {
      let cartItems = []
      for (let i = 0; i < obj.cart.length; i++) {
        cartItems.push({
          product_id: obj.cart[i].product_id,
          qty: obj.cart[i].qty,
          price: obj.cart[i].sale,
          shipping: obj.cart[i].shipping
        })
      }
      axios.post('/createOrder', {
        data: {
          id: this.props.userId,
          name: obj.shippingAddress.ship_first_name + ' ' + obj.shippingAddress.ship_last_name,
          address: obj.payInfo.address,
          city: obj.payInfo.city,
          state: obj.payInfo.state,
          zip: obj.payInfo.zip,
          cart: cartItems
        }
      }).then(res => {
        if (res.data[0]) {
          this.props.dispatch(updateQty(null))
          this.context.router.transitionTo('/confirmation/' + res.data[0].id)
        } else {
          console.log('something went wrong', res)
        }
      })
    } else {
      this.setState(obj)
    }
  }

  componentDidMount () {
    let obj = this.state
    if (this.props.userId) {
      axios.get('/getCart/' + this.props.userId)
      .then(res => {
        let cart = res.data
        if (cart[cart.length - 1].ship_address) {
          obj.shippingAddress = cart.pop()
        }

        for (let i = 0; i < cart.length; i++) {
          cart[i].edit = false
        }
        obj.cart = cart
        this.setState(obj)
      })
    } else {
      axios.get('/getCart/' + 'getSession')
      .then(res => {
        let cart = res.data
        for (let i = 0; i < cart.length; i++) {
          cart[i].edit = false
        }
        this.setState({ cart: cart })
      })
    }
  }

  render () {
    let total, tax
    if (this.state.cart) {
      total = +this.state.cart.reduce((acc, val) => {
        return acc + (val.sale * val.qty) + (val.shipping * val.qty)
      }, 0).toFixed(2)
      tax = +(total * 0.08).toFixed(2)
    }

    let setAddress = !this.state.addressMenu ? 'hide' : ''

    return (
      <div>
        <Nav />
        <div className='checkout'>
          <div className='cart-wrapper'>
            <div className='cart'>
              <h1>YOUR CART</h1>
              {this.props.cart
              ? <div>
                <div className='item-header media-hide'>
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
                          <img src={`../${item.thumb}`} />
                          <div>
                            <p>${item.sale} {item.name}</p>
                            <p>Seller: {item.seller}</p>
                          </div>
                        </div>
                        <div className='cart-item-right'>
                          <h2>{item.qty} |
                            <span onClick={() => this.toggleEdit(item.edit, item.product_id)}>
                              {!item.edit ? ' Edit' : ' Close'}
                            </span>
                          </h2>
                          <h2>${item.shipping}</h2>
                          <h2>${item.sale}</h2>
                        </div>


                      </div>
                      <div className={!item.edit ? 'hide' : 'clearfix not-mobile'}>
                        <div className='edit-qty'>
                          <input
                            id={item.product_id}
                            value={item.qty}
                            onChange={this.editQty} />
                          <img onClick={() => this.removeFromCart(item.id, item.customer_id)} src='../../public/img/icons/cancel.svg' />
                        </div>
                      </div>

                      <div className='media-cart'>
                        <div className='media-cart-line border-bot'>
                          <p>QTY</p>
                          <h2>{item.qty} |
                            <span onClick={() => this.toggleEdit(item.edit, item.product_id)}>
                              {!item.edit ? ' Edit' : ' Close'}
                            </span>
                          </h2>
                        </div>
                        <div className={!item.edit ? 'hide' : 'clearfix is-mobile'}>
                          <div className='edit-qty'>
                            <input
                              id={item.product_id}
                              value={item.qty}
                              onChange={this.editQty} />
                            <img onClick={() => this.removeFromCart(item.id, item.customer_id)} src='../../public/img/icons/cancel.svg' />
                          </div>
                        </div>
                        <div className='media-cart-line border-bot'>
                          <p>SHIPPING</p>
                          <h2>${item.shipping}</h2>
                        </div>
                      </div>

                      <div className='cart-item-bottom'>
                        <div className='price-ship-details'>
                          <h2>Estimate to ship by Tue, Mar 28.</h2>
                          <h2 className='media-cart-bot'>${this.convertMoney(((item.sale * item.qty) + (item.shipping * item.qty)).toFixed(2))}</h2>
                        </div>
                        <p>Seller usually ships within 2 business days.</p>
                      </div>
                      <div className='media-cart'>
                        <div className='media-cart-line border-top'>
                          <p>DEAL TOTAL</p>
                          <h2>${this.convertMoney(((item.sale * item.qty) + (item.shipping * item.qty)).toFixed(2))}</h2>
                        </div>
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
                {(this.state.cart.length > 1)
                ? <div className='note'>
                  <p>Note: Each deal is charged individually. Since you have multiple deals in your cart, you will see a transaction on your credit card for each deal.</p>
                </div>
                  : ''
                }
                {this.props.loggedIn
                ? <div>
                  <div className='shipping-header'>
                    <h1>SHIPPING ADDRESS</h1>
                    <h1>PAYMENT METHOD</h1>
                  </div>

                  <div className='shipping-payment'>
                    <div className='new-address'>
                      {this.state.shippingAddress.ship_address
                      ? <div className='shipping_address'>
                        <div>
                          <input type='radio'
                            checked='checked'
                            disabled='true' />
                        </div>
                        <div>
                          <p>{this.state.shippingAddress.ship_first_name} {this.state.shippingAddress.ship_last_name}</p>
                          <h3>{this.state.shippingAddress.ship_address}</h3>
                          <h3>{this.state.shippingAddress.ship_city}, {this.state.shippingAddress.ship_state} {this.state.shippingAddress.ship_zipcode}</h3>
                        </div>
                      </div>
                      : ''
                      }
                      <button onClick={this.toggleAddress} className='btn-large-font btn-empty-cart'>USE A NEW ADDRESS</button>
                      <p className={this.state.validator.shipping ? 'hide' : 'error'}>Please enter a shipping address.</p>
                    </div>
                    {setAddress !== 'hide'
                    ? <NewAddress class={setAddress} exitMenu={this.toggleAddress} />
                    : ''
                    }
                    {!this.state.billingMenu
                    ? <div className='payment-method'>
                      <h1>SELECT A PAYMENT METHOD:</h1>
                      <div className='pay-btm'>
                        <button onClick={this.toggleBilling}>CARD</button>
                        <img src='../../public/img/icons/paypal.png' />
                        <button>DWOLLA</button>
                      </div>
                    </div>
                    : <div className='pay-by-card'>
                      <span onClick={this.toggleBilling}><img src='../../public/img/icons/billingClose.svg' /> Select a different payment method</span>
                      <h1>ADD A NEW CREDIT CARD</h1>
                      <form>
                        <input onChange={this.updateInput}
                          name='name'
                          value={this.state.payInfo.name}
                          className={this.state.validator.name ? 'input-text' : 'input-text invalid'}
                          placeholder='Cardholder Name' />
                        <input onChange={this.updateInput}
                          name='cardNumber'
                          value={this.state.payInfo.cardNumber}
                          className={this.state.validator.cardNumber ? 'input-text' : 'input-text invalid'}
                          placeholder='Card Number' />
                        <select onChange={this.updateInput}
                          value={this.state.payInfo.exp_month}
                          className={this.state.validator.exp_month ? 'drop-down-box' : 'drop-down-box invalid'}
                          name='exp_month'>
                          <option defaultValue value=''>[Expiration Month]</option>
                          <option value='January'>January</option>
                          <option value='February'>February</option>
                          <option value='March'>March</option>
                          <option value='April'>April</option>
                          <option value='May'>May</option>
                          <option value='June'>June</option>
                          <option value='July'>July</option>
                          <option value='August'>August</option>
                          <option value='September'>September</option>
                          <option value='October'>October</option>
                          <option value='November'>November</option>
                          <option value='December'>December</option>
                        </select>
                        <select
                          onChange={this.updateInput}
                          className={this.state.validator.exp_year ? 'drop-down-box' : 'drop-down-box invalid'}
                          value={this.state.payInfo.exp_year}
                          name='exp_year'>
                          <option defaultValue value=''>[Expiration Year]</option>
                          <option value='2017'>2017</option>
                          <option value='2018'>2018</option>
                          <option value='2019'>2019</option>
                          <option value='2020'>2020</option>
                          <option value='2021'>2021</option>
                          <option value='2022'>2022</option>
                          <option value='2023'>2023</option>
                          <option value='2024'>2024</option>
                          <option value='2025'>2025</option>
                          <option value='2026'>2026</option>
                        </select>
                        <input onChange={this.updateInput}
                          value={this.state.payInfo.cvv}
                          name='cvv'
                          className={this.state.validator.cvv ? 'cvv' : 'cvv invalid'}
                          placeholder='cvv' />
                        <h1 className='billing-address'>BILLING ADDRESS</h1>
                        <label className='same-text'>
                          <input onChange={this.updateBillAddress}
                            type='checkbox'
                            checked={this.state.checked}
                            className='same-address' />Same as my Shipping Address
                        </label>
                        <input onChange={this.updateInput}
                          name='address'
                          value={this.state.payInfo.address}
                          className={this.state.validator.address ? 'input-text' : 'input-text invalid'}
                          placeholder='Billing Address' />
                        <input onChange={this.updateInput}
                          name='city'
                          value={this.state.payInfo.city}
                          className={this.state.validator.city ? 'input-text' : 'input-text invalid'}
                          placeholder='City' />
                        <select onChange={this.updateInput}
                          name='state'
                          className={this.state.validator.state ? 'drop-down-box' : 'drop-down-box invalid'}
                          value={this.state.payInfo.state}>
                          <option defaultValue value=''>[Select a State]</option>
                          <option value='AL'>Alabama</option>
                          <option value='AK'>Alaska</option>
                          <option value='AZ'>Arizona</option>
                          <option value='AR'>Arkansas</option>
                          <option value='CA'>California</option>
                          <option value='CO'>Colorado</option>
                          <option value='CT'>Connecticut</option>
                          <option value='DE'>Delaware</option>
                          <option value='DC'>District Of Columbia</option>
                          <option value='FL'>Florida</option>
                          <option value='GA'>Georgia</option>
                          <option value='HI'>Hawaii</option>
                          <option value='ID'>Idaho</option>
                          <option value='IL'>Illinois</option>
                          <option value='IN'>Indiana</option>
                          <option value='IA'>Iowa</option>
                          <option value='KS'>Kansas</option>
                          <option value='KY'>Kentucky</option>
                          <option value='LA'>Louisiana</option>
                          <option value='ME'>Maine</option>
                          <option value='MD'>Maryland</option>
                          <option value='MA'>Massachusetts</option>
                          <option value='MI'>Michigan</option>
                          <option value='MN'>Minnesota</option>
                          <option value='MS'>Mississippi</option>
                          <option value='MO'>Missouri</option>
                          <option value='MT'>Montana</option>
                          <option value='NE'>Nebraska</option>
                          <option value='NV'>Nevada</option>
                          <option value='NH'>New Hampshire</option>
                          <option value='NJ'>New Jersey</option>
                          <option value='NM'>New Mexico</option>
                          <option value='NY'>New York</option>
                          <option value='NC'>North Carolina</option>
                          <option value='ND'>North Dakota</option>
                          <option value='OH'>Ohio</option>
                          <option value='OK'>Oklahoma</option>
                          <option value='OR'>Oregon</option>
                          <option value='PA'>Pennsylvania</option>
                          <option value='RI'>Rhode Island</option>
                          <option value='SC'>South Carolina</option>
                          <option value='SD'>South Dakota</option>
                          <option value='TN'>Tennessee</option>
                          <option value='TX'>Texas</option>
                          <option value='UT'>Utah</option>
                          <option value='VT'>Vermont</option>
                          <option value='VA'>Virginia</option>
                          <option value='WA'>Washington</option>
                          <option value='WV'>West Virginia</option>
                          <option value='WI'>Wisconsin</option>
                          <option value='WY'>Wyoming</option>
                          <option value='AA'>Armed Forces Americas</option>
                          <option value='AP'>Armed Forces Pacific</option>
                          <option value='AE'>Armed Forces Others</option>
                        </select>
                        <input onChange={this.updateInput}
                          name='zip'
                          value={this.state.payInfo.zip}
                          className={this.state.validator.zip ? 'input-text' : 'input-text invalid'}
                          placeholder='Zip' />
                      </form>
                    </div>
                    }
                  </div>
                  <div className='terms-of-use'>
                    <h1>By completing your order, you agree to Jane.com's <span>Terms Of Use</span>.</h1>
                  </div>
                  <div className='complete-order'>
                    <button onClick={this.submitOrder}
                      className='btn-large-font btn-empty-cart max-width'>COMPLETE MY ORDER</button>
                  </div>
                </div>
                : <div>
                  <div className='login-cart'>
                    <h1>SIGN UP & CHECKOUT</h1>
                    {this.state.login
                    ? <h1>LOG IN</h1>
                    : <h1>ALREADY A MEMBER?</h1>
                    }
                  </div>
                  <div className='cart-login-signup'>
                    <div className='login-pane cart-reset'>
                      <CreateAccount />
                    </div>
                    {this.state.login
                    ? <h1 className='media-login'>LOG IN</h1>
                    : <h1 className='media-login'>ALREADY A MEMBER?</h1>
                    }
                    <div className='login-pane cart-reset cart-reset-login'>
                      {this.state.login
                      ? ''
                      : <h1>Welcome back then! Click the Log In button below so we can help you get on your way.</h1>
                      }
                      <div>
                        <SignIn login={this.login} {...this.props.location} />
                      </div>
                    </div>
                  </div>
                </div>
                }
              </div>
          : <div>
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
  pathname: string,
  userId: number,
  location: object,
  dispatch: func,
  cart: string,
  loggedIn: bool
}

Cart.contextTypes = {
  router: object
}
const mapStateToProps = state => {
  return {
    cart: state.cartItems,
    loggedIn: state.loggedIn,
    userId: state.userId
  }
}

export default connect(mapStateToProps)(Cart)
