import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

/* Container component handling states, event handlers, and passing down props */

export class Review extends Component {

}

/*
function mapStateToProps(state, ownProps) {
  return state[ownProps.id]
}
*/

/*
connect() is a function that injecst Redux-related props into your component
Inject data and callbacks that change that data by dispatching actions
The purpose of connect() is that you don't have to think about subscribing to the store
and instead specify hwo to get props based on Redux store state
Given redux state, return props.
Given redux dispatch, return callback props
*/
//const connectReview = connect(mapStateToProps, actions)(Review)
//export default connectReview;