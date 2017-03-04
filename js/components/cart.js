import React from 'react'
import Nav from './nav'
import Footer from './Footer'
import { Link } from 'react-router'

class Cart extends React.Component {
  constructor(props) {
    super(props)


  }
  render () {
    return (
      <div>
        <Nav />
         <div className='checkout'>
           <div className='cart-wrapper'>
             <div className='cart'>
               <h1>YOUR CART</h1>
               <p>You don't have anything in your cart yet
                  Let's help you get this baby loaded!
               </p>
               <div className='btn-wrapper'>
                 <button className='btn-empty-cart'><Link to='/'>SHOP TODAY'S DEALS!</Link></button>
               </div>
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

export default Cart
