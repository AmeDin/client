import React, { Component } from 'react'
import { connect } from 'react-redux';

export class Test extends Component {

  render() {
    console.log(this.props)
    console.log(this.state)
    return (
      <div>
       
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    item: state.item
})

export default connect(mapStateToProps)(Test);
