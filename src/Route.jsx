import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import Home from './Home';
import History from './History';

class Routing extends Component {
    render() {
        return (
            <BrowserRouter>
              <div>
                <NavLink exact to="/"> Home </NavLink>
                <NavLink to="/page-de-contact"> History </NavLink>

                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/page-de-contact" component={History} />
                </Switch>
              </div>
            </BrowserRouter>
        );
    }
}

export default Routing;