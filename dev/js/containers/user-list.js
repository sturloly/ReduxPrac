import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions/index'

class UserList extends Component {

  createListItems(){
      return this.props.users.map((user) => {
          return (
            <li key={user.id} onClick={() => this.props.selectUser(user)}>
              Name:{user.name} <br/> Description:{user.description}
            </li>
          )
      })
  }
//|||||| user == payload == single user == 'event.target'
  render() {
    return (
      <ul>
            {this.createListItems()}
      </ul>
    )
  }
}

function mapStateToProps(state){   //pass state as props to components, provided by {connect} also known as 'Provider'
  return {
      users: state.users  // state.users = store = reducer-users.js, passed to props - users to the UserList Component
      //  state = store
  };
}

function matchDispatchToProps(dispatch){  // pass 'selectUser'(actions) as props to component, using "dispatch param" provided by {connect}
  return bindActionCreators({selectUser: selectUser}, dispatch)
}

export default connect(mapStateToProps,matchDispatchToProps)(UserList);

// UserList component gets data by mapStateToProps from store (reducer-users) through {connect}
