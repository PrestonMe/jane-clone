import React from 'react'
import Nav from './nav'
import Footer from './footer'
import axios from 'axios'
import { Link } from 'react-router'
import { connect } from 'react-redux'

class History extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        history: []
      }
  }

  componentDidMount () {
    let obj = this.state
    axios.get('/getHistory/' + this.props.userId)
    .then(res => {
      this.setState({history: res.data})
    })
  }

  render () {
    console.log(this.state.history.length)
    return (
      <div>
        <Nav />
          <div className='history'>
            {this.state.history.length
            ?
            <div>
              I'm working!
            </div>
            :
            <div className='no-history'>
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

const mapStateToProps = state => {
  return {
    userId: state.userId
  }
}


export default connect(mapStateToProps)(History)
