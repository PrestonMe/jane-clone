import React from 'react'
import Nav from './nav'
import Footer from './footer'
import Order from './order'
import axios from 'axios'
import { Link } from 'react-router'
import { connect } from 'react-redux'

const { number } = React.PropTypes

class History extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      history: []
    }
  }

  componentDidMount () {
    axios.get('/getHistory/' + this.props.userId)
    .then(res => {
      this.setState({history: res.data})
    })
  }

  render () {
    return (
      <div>
        <Nav />
        <div className='history'>
          {this.state.history.length
          ? <div className='history-wrapper'>
            <div className='history-orders'>
              <h1>YOUR ORDER HISTORY</h1>
              {this.state.history.map(order => {
                return (
                  <Order {...order} key={order.id} />
                )
              })}
            </div>
          </div>
          : <div className='no-history'>
            <span>You haven't purchased anything yet. </span>
            <Link to='/'>
              <span>Check out today's deals!</span>
            </Link>
          </div>
          }
        </div>
        <Footer />
      </div>
    )
  }
}

History.propTypes = {
  userId: number
}

const mapStateToProps = state => {
  return {
    userId: state.userId
  }
}

export default connect(mapStateToProps)(History)
