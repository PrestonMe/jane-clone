import React from 'react'
import Nav from './nav'
import Footer from './footer'
import axios from 'axios'

const { object } = React.PropTypes

class OrderSum extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      orderNo: null,
      order: []
    }

    this.convertMoney = this.convertMoney.bind(this)
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

  componentDidMount () {
    axios.get('/order/' + this.props.params.id)
    .then(res => {
      console.log(res)
      let orderNo = res.data[0].order_id
      this.setState({order: res.data, orderNo: orderNo})
    })
  }

  render () {
    let state = this.state
    let total, tax

    total = +state.order.reduce((acc, val) => {
      return acc + (val.sold_price * val.qty) + (val.shipping_price * val.qty)
    }, 0).toFixed(2)

    tax = +(total * 0.08).toFixed(2)

    return (
      <div>
        <Nav />
        <div className='history'>
          <div className='history-wrapper'>
            <div className='history-orders'>
              <div className='order'>
                <h1 className='bot-mar'>ORDER SUMMARY</h1>
                <div className='order-sum'>
                  <div>
                    Order # {state.orderNo}
                  </div>
                  <div>
                    Items In Order {state.order.reduce((acc, val) => {
                      return acc + val.qty
                    }, 0)}
                  </div>
                  <div>
                    Order Total: ${this.convertMoney((total + tax).toFixed(2))}
                  </div>
                </div>
                {state.order[0]
                ? <div className='shipping-details'>
                  <h2>SHIPPING ADDRESS</h2>
                  <p>{state.order[0].ship_name}</p>
                  <p>{state.order[0].ship_address}</p>
                  <p>{state.order[0].ship_city}, {state.order[0].ship_state} {state.order[0].ship_zipcode}</p>
                </div>
                : ''
                }
                {state.order.map(item => {
                  return (
                    <div className='line-item' key={item.product_id}>
                      <img src={`../${item.thumb}`} />
                      <div className='seller-price'>
                        <p>${item.sold_price} {item.name}</p>
                        <p>Seller: {item.seller}</p>
                      </div>
                      <div>
                        <p>Quantity: {item.qty}</p>
                        <p>Price: ${item.sold_price * item.qty}</p>
                        <p>Shipping: ${item.shipping_price * item.qty}</p>
                      </div>
                    </div>
                  )
                })}
                <div className='order-pricing'>
                  <div className='left'>
                    <h3>TOTAL BEFORE TAX:</h3>
                    <h3>TAX:</h3>
                    <h4>ORDER TOTAL:</h4>
                  </div>
                  <div className='left'>
                    <h3> ${this.convertMoney(total)}</h3>
                    <h3> ${this.convertMoney(tax)}</h3>
                    <h4> ${this.convertMoney((total + tax).toFixed(2))}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

OrderSum.propTypes = {
  params: object
}

export default OrderSum
