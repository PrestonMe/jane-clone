import React from 'react'

class SmallProduct extends React.Component {
  // constructor(props){
  //   super (props)
  // }
  render () {
    return (
      <div className='small-product-container'>
        <img src={this.props.burl} />
        <div className='product-summary'>
          <div className='product-sum-left'>
            <div className='product-name small'>{this.props.name}</div>
            <span className='sale-price'>{this.props.sale} </span>
            <span className='retail-price'>{this.props.price}</span>
          </div>
          <div className='product-sum-right'>
            <button className='like'>
              <img src='../public/img/icons/heart.svg' />
              <span>{this.props.favorites}</span>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default SmallProduct
