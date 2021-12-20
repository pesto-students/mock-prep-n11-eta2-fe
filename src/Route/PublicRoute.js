import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ component: Component, restricted,loggedIn, ...rest }) => 
(
    <Route {...rest} render={props => (loggedIn && restricted ? 
    <Redirect to="/" /> : <Component {...props} />)} />
)


export default PublicRoute;