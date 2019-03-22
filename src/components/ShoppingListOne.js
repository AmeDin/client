import React, { Component } from 'react'
import { connect } from 'react-redux'

export class ShoppingList extends Component {


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


const mapDispatchToProps = (dispatch) => {
  console.log(dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);
