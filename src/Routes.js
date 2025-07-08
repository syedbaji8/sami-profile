import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import App from './App';
import About from './About';
import PageNotFound from './components/PageNotFound'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './App.css';



function Routes() {
    return (
        <Router>
            {/* <NavLink exact activeClassName={'green'} to="/">App</NavLink>
            <NavLink activeClassName={'green'} to="/about">About</NavLink>
            <NavLink activeClassName={'green'} to="/contact">Contact</NavLink> */}
            <Switch>
                <Route exact path='/' component={App}></Route>
                <Route exact path='/about' component={About}></Route>
                <Route component={PageNotFound}></Route>
            </Switch>
        </Router>
    )
}

export default Routes;