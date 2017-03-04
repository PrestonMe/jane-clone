import React from 'react'

class SmallProduct extends React.Component {
  constructor(props){
    super (props)
  }
  render () {
    return (
      <div className='small-product-container'>
        <img src='../../public/img/accessories/Madrflt.jpg' />
        <div className='product-summary'>
          <div className='product-sum-left'>
            <div className='product-name small'>Leather Crossbody Bags | 13 styles</div>
            <span className='sale-price'>$15.99 </span>
            <span className='retail-price'>$20.99</span>
          </div>
          <div className='product-sum-right'>
            <button className='like'>
              <img src='../public/img/icons/heart.svg' />
              <span>136</span>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default SmallProduct
