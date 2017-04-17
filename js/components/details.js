import React from 'react'
const { string } = React.PropTypes

class Details extends React.Component {
  render () {
    var detail = this.props.detail
    return (
      <li>{detail}</li>
    )
  }
}

Details.propTypes = {
  detail: string
}

export default Details
