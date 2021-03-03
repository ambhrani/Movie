import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthtoken";
import { setCurrentUser, logoutUser } from "../actions/authActions";
import { Provider } from "react-redux";
import store from "../store";

import NavBar  from '../components/NavBar';
import Landing from "../components/layout/Landing";
import LoginForm from '../components/auth/LoginForm';
import RegistrationForm from '../components/auth/RegistrationForm';
import PrivateRoute from "../components/privateRoute/PrivateRoute";
import Dashboard from "../components/dashboard/Dashboard";

import { MoviesList, MoviesInsert, MoviesUpdate } from '../pages';



// Check for token to keep user logged in
if (localStorage.jwtToken) {
    // Set auth token header auth
    const token = localStorage.jwtToken;
    setAuthToken(token);
    // Decode token and get user info and exp
    const decoded = jwt_decode(token);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));
    // Check for expired token
    const currentTime = Date.now() / 1000; // to get in milliseconds
    if (decoded.exp < currentTime) {
      // Logout user
      store.dispatch(logoutUser());
  
      // Redirect to login
      window.location.href = "./login";
    }
  }
class App extends Component {
    render(){
        return (
            <Provider store={store}>
        <Router>
        
          <div className="App">
            
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={RegistrationForm} />
            <Route exact path="/login" component={LoginForm} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <Route path="/movies/list" exact component={MoviesList} />
                    <Route path="/movies/create" exact component={MoviesInsert} />
                    <Route
                        path="/movies/update/:id"
                        exact
                        component={MoviesUpdate}/>
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  
            
}
}

export default App
