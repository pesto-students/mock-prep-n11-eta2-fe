import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ component: Component, restricted,loggedIn, ...rest }) => 
(
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    
    <Route {...rest} render={props => (loggedIn && restricted ? 
    <Redirect to="/" /> : <Component {...props} />)} />
)


export default PublicRoute;