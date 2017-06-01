import React, {Component} from 'react';
import {connect} from 'react-redux';

class UserDetail extends Component {

    render(){
      if (!this.props.user) {
          return (<h4>Select a user...</h4>);
      }
      return (
        <div>
          <h2 >{this.props.user.email}</h2>
          <h3>name : {this.props.user.name}</h3>
          <h4>age : {this.props.user.age}</h4>
          <h5>Description : {this.props.user.description}</h5>
        </div>
      )
    }
}

function mapStateToProps(state) {
  return {
    user: state.activeUser
  }
}

export default connect(mapStateToProps)(UserDetail)
