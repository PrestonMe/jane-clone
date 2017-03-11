import React from 'react'
// import axios from 'axios'
// import { Link } from 'react-router'
import Nav from './nav'
import Footer from './footer'
import LargeProduct from './largeproduct'
import SmallProduct from './smallproduct'

const { object } = React.PropTypes

class AllDeals extends React.Component {
  // constructor (props) {
  //   super(props)
  // }

  componentDidMount () {

  }

  render () {
    return (
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
            <LargeProduct />
            <div className='large-product-container'>
              <img src='../../public/img/accessories/Lbtqsng.jpg' />
              <div className='product-summary'>
                <div className='product-sum-left'>
                  <div className='product-name'>Leather Crossbody Bags | 13 styles</div>
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
            <SmallProduct />
            <div className='small-product-container'>
              <img src='../../public/img/accessories/Msbb.jpg' />
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
            <div className='small-product-container'>
              <img src='../../public/img/accessories/Msbb.jpg' />
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
            <div className='small-product-container'>
              <img src='../../public/img/accessories/Msbb.jpg' />
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
            <div className='small-product-container'>
              <img src='../../public/img/accessories/Msbb.jpg' />
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
            <div className='small-product-container'>
              <img src='../../public/img/accessories/Msbb.jpg' />
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
            <div className='small-product-container'>
              <img src='../../public/img/accessories/Msfb.jpg' />
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
            <div className='small-product-container'>
              <img src='../../public/img/accessories/Mujgs.jpg' />
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
