import React, { Component } from 'react'
import { connect } from 'react-redux';

export class ShoppingListOne extends Component {


  render() {
    console.log(this.props)
    console.log(this.state)
    //const { items } = this.props.item;
    return (
      <div>
       
      </div>
    )
  }
}



const mapStateToProps = (state) => ({
    item: state.item
})

export default connect()(ShoppingListOne);
