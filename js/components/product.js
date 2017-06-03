import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { updateQty } from '../actions/actionCreators'
import Nav from './nav'
import Footer from './footer'
import Details from './details'

const { number, func, object } = React.PropTypes

class Product extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      product: {},
      qty: 1
    }
    this.updateCart = this.updateCart.bind(this)
    this.updateQty = this.updateQty.bind(this)
  }

  updateCart (e) {
    e.preventDefault()
    let user = null

    if (this.props.userId) {
      user = this.props.userId
    }
    axios.post('/addToCart/' +
      this.state.product[0].id + '/' +
      this.state.qty + '/' +
      user
    ).then(res => {
      this.props.dispatch(updateQty(res.data[0].total))
    })
  }

  updateQty (e) {
    e.preventDefault()
    let obj = this.state
    obj.qty = e.target.value
    this.setState(obj)
  }

  componentDidMount () {
    axios.get('/product/' + this.props.params.id
    ).then(res => {
      const product = res.data
      this.setState({ product })
    })
  }

  render () {
    if (this.state.product[0]) {
      var seller = this.state.product[0].sellerimg
      ? '../' + this.state.product[0].sellerimg
      : '../public/img/vendor/none.jpg'
    }

    return !this.state.product[0]
    ? (<div>
      <Nav {...this.props.location} />
      <Footer />
    </div>) : (
      <div>
        <Nav {...this.props.location} />
        <div className='shop'>
          <div className='item-container'>
            <div className='left-item'>
              <img src={`../${this.state.product[0].burl}`} />
            </div>
            <div className='right-item'>
              <h1>{this.state.product[0].name}</h1>
              <div className='price-favorites'>
                <div className='product-sum-left'>
                  <span className='sale-price'>${this.state.product[0].sale} </span>
                  <span className='retail-price'>${this.state.product[0].price}</span>
                </div>
                <div className='product-sum-right'>
                  <button className='like media-product'>
                    <img src='../public/img/icons/heart.svg' />
                    <span>{this.state.product[0].favorites}</span>
                  </button>
                </div>
              </div>
              <div className='shipping'>
                <img src='../public/img/icons/truck.svg' />
                <span> Seller usually ships within 3 days.</span>
              </div>
              <form className='add-to-cart' onSubmit={this.updateCart}>
                <input value={this.state.qty} onChange={this.updateQty} />
                <button>ADD TO BAG</button>
              </form>
              <div className='footer social-media'>
                <svg className='facebook' id='Capa_1' x='0px' y='0px' width='20px' height='20px' viewBox='0 0 96.124 96.123'>
                  <g>
                    <path d='M72.089,0.02L59.624,0C45.62,0,36.57,9.285,36.57,23.656v10.907H24.037c-1.083,0-1.96,0.878-1.96,1.961v15.803   c0,1.083,0.878,1.96,1.96,1.96h12.533v39.876c0,1.083,0.877,1.96,1.96,1.96h16.352c1.083,0,1.96-0.878,1.96-1.96V54.287h14.654   c1.083,0,1.96-0.877,1.96-1.96l0.006-15.803c0-0.52-0.207-1.018-0.574-1.386c-0.367-0.368-0.867-0.575-1.387-0.575H56.842v-9.246   c0-4.444,1.059-6.7,6.848-6.7l8.397-0.003c1.082,0,1.959-0.878,1.959-1.96V1.98C74.046,0.899,73.17,0.022,72.089,0.02z' fill='#E5E5E5' />
                  </g>
                </svg>
                <svg className='twitter' version='1.1' id='Capa_1' x='0px' y='0px' viewBox='0 0 612 612' width='20px' height='20px'>
                  <g>
                    <g>
                      <path d='M612,116.258c-22.525,9.981-46.694,16.75-72.088,19.772c25.929-15.527,45.777-40.155,55.184-69.411    c-24.322,14.379-51.169,24.82-79.775,30.48c-22.907-24.437-55.49-39.658-91.63-39.658c-69.334,0-125.551,56.217-125.551,125.513    c0,9.828,1.109,19.427,3.251,28.606C197.065,206.32,104.556,156.337,42.641,80.386c-10.823,18.51-16.98,40.078-16.98,63.101    c0,43.559,22.181,81.993,55.835,104.479c-20.575-0.688-39.926-6.348-56.867-15.756v1.568c0,60.806,43.291,111.554,100.693,123.104    c-10.517,2.83-21.607,4.398-33.08,4.398c-8.107,0-15.947-0.803-23.634-2.333c15.985,49.907,62.336,86.199,117.253,87.194    c-42.947,33.654-97.099,53.655-155.916,53.655c-10.134,0-20.116-0.612-29.944-1.721c55.567,35.681,121.536,56.485,192.438,56.485    c230.948,0,357.188-191.291,357.188-357.188l-0.421-16.253C573.872,163.526,595.211,141.422,612,116.258z' fill='#E5E5E5' />
                    </g>
                  </g>
                </svg>
                <svg className='pinterest' version='1.1' id='Capa_1' x='0px' y='0px' width='20px' height='20px' viewBox='0 0 438.529 438.529'>
                  <g>
                    <path d='M409.141,109.203c-19.608-33.592-46.205-60.189-79.798-79.796C295.751,9.801,259.065,0,219.281,0   C179.5,0,142.812,9.801,109.22,29.407c-33.597,19.604-60.194,46.201-79.8,79.796C9.809,142.8,0.008,179.485,0.008,219.267   c0,44.35,12.085,84.611,36.258,120.767c24.172,36.172,55.863,62.912,95.073,80.232c-0.762-20.365,0.476-37.209,3.709-50.532   l28.267-119.348c-4.76-9.329-7.139-20.93-7.139-34.831c0-16.175,4.089-29.689,12.275-40.541   c8.186-10.85,18.177-16.274,29.979-16.274c9.514,0,16.841,3.14,21.982,9.42c5.142,6.283,7.705,14.181,7.705,23.7   c0,5.896-1.099,13.084-3.289,21.554c-2.188,8.471-5.041,18.273-8.562,29.409c-3.521,11.132-6.045,20.036-7.566,26.692   c-2.663,11.608-0.476,21.553,6.567,29.838c7.042,8.278,16.372,12.423,27.983,12.423c20.365,0,37.065-11.324,50.107-33.972   c13.038-22.655,19.554-50.159,19.554-82.514c0-24.938-8.042-45.21-24.129-60.813c-16.085-15.609-38.496-23.417-67.239-23.417   c-32.161,0-58.192,10.327-78.082,30.978c-19.891,20.654-29.836,45.352-29.836,74.091c0,17.132,4.854,31.505,14.56,43.112   c3.235,3.806,4.283,7.898,3.14,12.279c-0.381,1.143-1.141,3.997-2.284,8.562c-1.138,4.565-1.903,7.522-2.281,8.851   c-1.521,6.091-5.14,7.994-10.85,5.708c-14.654-6.085-25.791-16.652-33.402-31.689c-7.614-15.037-11.422-32.456-11.422-52.246   c0-12.753,2.047-25.505,6.14-38.256c4.089-12.756,10.468-25.078,19.126-36.975c8.663-11.9,19.036-22.417,31.123-31.549   c12.082-9.135,26.787-16.462,44.108-21.982s35.972-8.28,55.959-8.28c27.032,0,51.295,5.995,72.8,17.986   c21.512,11.992,37.925,27.502,49.252,46.537c11.327,19.036,16.987,39.403,16.987,61.101c0,28.549-4.948,54.243-14.842,77.086   c-9.896,22.839-23.887,40.778-41.973,53.813c-18.083,13.042-38.637,19.561-61.675,19.561c-11.607,0-22.456-2.714-32.548-8.135   c-10.085-5.427-17.034-11.847-20.839-19.273c-8.566,33.685-13.706,53.77-15.42,60.24c-3.616,13.508-11.038,29.119-22.27,46.819   c20.367,6.091,41.112,9.13,62.24,9.13c39.781,0,76.47-9.801,110.062-29.41c33.595-19.602,60.192-46.199,79.794-79.791   c19.606-33.599,29.407-70.287,29.407-110.065C438.527,179.485,428.74,142.795,409.141,109.203z' fill='#E5E5E5' />
                  </g>
                </svg>
                <svg className='instagram' version='1.1' id='Capa_1' x='0px' y='0px' width='20px' height='20px' viewBox='0 0 97.395 97.395'>
                  <g>
                    <path d='M12.501,0h72.393c6.875,0,12.5,5.09,12.5,12.5v72.395c0,7.41-5.625,12.5-12.5,12.5H12.501C5.624,97.395,0,92.305,0,84.895   V12.5C0,5.09,5.624,0,12.501,0L12.501,0z M70.948,10.821c-2.412,0-4.383,1.972-4.383,4.385v10.495c0,2.412,1.971,4.385,4.383,4.385   h11.008c2.412,0,4.385-1.973,4.385-4.385V15.206c0-2.413-1.973-4.385-4.385-4.385H70.948L70.948,10.821z M86.387,41.188h-8.572   c0.811,2.648,1.25,5.453,1.25,8.355c0,16.2-13.556,29.332-30.275,29.332c-16.718,0-30.272-13.132-30.272-29.332   c0-2.904,0.438-5.708,1.25-8.355h-8.945v41.141c0,2.129,1.742,3.872,3.872,3.872h67.822c2.13,0,3.872-1.742,3.872-3.872V41.188   H86.387z M48.789,29.533c-10.802,0-19.56,8.485-19.56,18.953c0,10.468,8.758,18.953,19.56,18.953   c10.803,0,19.562-8.485,19.562-18.953C68.351,38.018,59.593,29.533,48.789,29.533z' fill='#E5E5E5' />
                  </g>
                </svg>
                <svg className='snapchat' version='1.1' id='Layer_1' x='0px' y='0px' width='20px' height='20px' viewBox='0 0 511.117 511.117'>
                  <path fill='#E5E5E5' d='M256,493.903c-0.883,0-2.648,0-3.531,0c-0.883,0-1.766,0-2.648,0c-30.014,0-45.903-8.828-64.441-22.069c-13.241-8.828-25.6-17.655-39.724-20.303c-7.945-0.883-15.007-1.766-22.069-1.766c-12.359,0-22.069,1.766-29.131,3.531c-4.414,0.883-7.945,1.766-10.593,1.766s-6.179-0.883-7.945-5.297c-0.883-4.414-1.766-7.945-2.648-11.476c-1.766-9.71-3.531-15.89-7.945-16.772C16.772,414.455,3.531,403.862,0,396.8c0-1.766,0-2.648,0-3.531c0-2.648,1.766-5.297,4.414-5.297c74.152-12.359,107.697-88.276,108.579-90.924l0,0c4.414-8.828,5.297-16.772,2.648-23.834c-5.297-12.359-22.069-17.655-32.662-21.186c-2.648-0.883-5.297-1.766-7.062-2.648c-22.069-8.828-23.834-17.655-22.952-22.069c1.766-7.945,11.476-13.241,20.303-13.241c2.648,0,4.414,0,6.179,0.883c9.71,4.414,18.538,7.062,26.483,7.062c10.593,0,15.007-4.414,15.89-5.297c0-5.297-0.883-10.593-0.883-15.89c-2.648-35.31-5.297-78.566,6.179-103.283C159.779,23.393,230.4,17.214,251.586,17.214c0.883,0,8.828,0,8.828,0h0.883c21.186,0,91.807,6.179,125.352,80.331c11.476,24.717,7.945,68.855,6.179,103.283v1.766c0,5.297-0.883,9.71-0.883,14.124c0.883,0.883,4.414,4.414,14.124,5.297l0,0c7.062,0,15.89-2.648,24.717-7.062c2.648-0.883,5.297-1.766,7.945-1.766c3.531,0,6.179,0.883,8.828,1.766l0,0c7.062,2.648,12.359,7.945,12.359,13.241c0,5.297-3.531,13.241-22.952,20.303c-1.766,0.883-4.414,1.766-7.062,2.648c-10.593,3.531-27.365,8.828-32.662,21.186c-2.648,6.179-1.766,14.124,2.648,23.834l0,0c1.766,3.531,32.662,79.448,106.814,91.807c2.648,0.883,4.414,2.648,4.414,5.297c0,0.883,0,1.766-0.883,3.531c-2.648,7.062-15.007,16.772-63.559,24.717c-3.531,0.883-5.297,5.297-7.945,16.772c-0.883,3.531-1.766,7.945-2.648,11.476s-3.531,5.297-7.062,5.297h-0.883c-2.648,0-6.179-0.883-10.593-1.766c-7.945-1.766-17.655-2.648-29.131-2.648c-7.062,0-14.124,0.883-21.186,1.766c-14.124,2.648-26.483,11.476-39.724,20.303C309.848,485.959,286.014,493.903,256,493.903' />
                </svg>
              </div>
              {this.state.product[0].details
              ? <div className='product-details'>
                <p>PRODUCT DETAILS</p>
                <ul>
                  {this.state.product[0].details.split('@').map(detail => {
                    return (
                      <Details detail={detail} key={detail} />
                    )
                  })}
                </ul>
              </div>
              : ''
              }
            </div>
          </div>

          <div className='item-container'>
            <div className='product-description'>
              <h1>PRODUCT DESCRIPTION</h1>
              <div className='description'>
                {this.state.product[0].description.split('\\n').map(desc => {
                  return (
                    <p key={desc}>{desc}</p>
                  )
                })}
              </div>
              {this.state.product[0].details
              ? <div className='product-details media-only'>
                <p>PRODUCT DETAILS</p>
                <ul>
                  {this.state.product[0].details.split('@').map(detail => {
                    return (
                      <Details detail={detail} key={detail} />
                    )
                  })}
                </ul>
              </div>
              : ''
              }
            </div>
            <div className='seller-info'>
              <h1 className='media-only'>SELLER</h1>
              <div className='seller media-only'>
                <img src={seller} />
                <span>{this.state.product[0].seller}</span>
              </div>
              <h1 className='border-desc-top'>SHIPPING</h1>
              <p>$4.99 for the first item and $3.99 for each additional item. US only. Estimated to ship by Mon, Mar 20. Seller usually ships within 4 business days.</p>
              <h1 className='border-desc-top'>FINE PRINT</h1>
              <p>Please make sure that your size and color is correct since we can't make changes to the order. Note that colors may be slightly due to individual monitor settings. See Jane's return policy.</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

Product.propTypes = {
  userId: number,
  dispatch: func,
  params: object,
  location: object
}

const mapStateToProps = state => {
  return {
    userId: state.userId
  }
}
export default connect(mapStateToProps)(Product)
