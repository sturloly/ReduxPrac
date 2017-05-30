import React from 'react';
import UserList from '../containers/user-list'
require('../scss/style.scss');

const App = () => (
  <div>
      <h2>用户列表:</h2>
      <UserList/>
      <hr/>
      <h2>用户信息:</h2>
  </div>
);

export default App;
