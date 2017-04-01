import React from 'react'

class Order extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isHide: false,
      orderDetails: false
    }
    this.toggleOrderDetails = this.toggleOrderDetails.bind(this)
    this.convertMoney = this.convertMoney.bind(this)
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

  toggleOrderDetails () {
    this.setState({orderDetails: !this.state.orderDetails})
  }

  render () {
    let total, tax

    total = +this.props.order_items.reduce((acc, val) => {
      return acc + (val.sold_price * val.qty) + (val.shipping_price * val.qty)
    }, 0).toFixed(2)

    tax = +(total * .08).toFixed(2)

    return (
      <div className='order'>
        <div className='order-sum'>
          <div>
            Order #{this.props.id}
          </div>
          <div>
            Items In Order {this.props.order_items.reduce((acc, val) => {
              return acc + val.qty
            }, 0)}
          </div>
          <div>
            Order Total: ${this.convertMoney((total + tax).toFixed(2))}
          </div>
          <div className='show-order-items' onClick={this.toggleOrderDetails}>
            {this.state.orderDetails ? <p>Hide Details</p> : <p>Show Details</p>}
          </div>
        </div>
        {this.state.orderDetails
        ?
        <div>
          <div className='shipping-details'>
            <h2>SHIPPING ADDRESS</h2>
            <p>{this.props.ship_name}</p>
            <p>{this.props.ship_address}</p>
            <p>{this.props.ship_city}, {this.props.ship_state} {this.props.ship_zipcode}</p>
          </div>
          {this.props.order_items.map(item => {
            return (
              <div className='line-item' key={item.product_id}>
                <img src={`../${item.thumb}`}/>
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
        : ''}
      </div>
    )
  }
}

export default Order
