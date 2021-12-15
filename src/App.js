import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Link} from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import Logout from './components/Logout';
import PrivateRoute from './components/PrivateRoute';


function App() {
  return (
    
    <Router>
      <div className="App">
        <header>
          <h2>Friends Database</h2>
          <Link to='login'>Login</Link>
          <Link to='/friends'>Friends</Link>
          <Link to='/friends/add'>Add Friends</Link>
          <Link to='/logout'>Sign Out</Link>
        </header>
      
        <Route exact path='/'>
          <Login />
        </Route>
        <Route exact path='/login'>
          <Redirect to='/' />
        </Route>
        <PrivateRoute exact path='/friends' component={FriendsList}/>
        <PrivateRoute exact path='/friends/add' component={AddFriend}/>
        <PrivateRoute exact path='/logout' component={Logout}/>


      </div>
    </Router>
  );
}

export default App;
