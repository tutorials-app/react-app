import React from 'react';
import { Route } from 'react-router-dom'
import Home, { About } from './pages/Home'
import UserPage from './pages/User'
import CreateUser from './pages/User/Create'
import { LoginLayout } from './pages/Login'
import UserId from './pages/User/Id' 

export default [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/users",
    exact: true,
    component: UserPage,
  },
  {
    path: "/users/create",
    component: CreateUser
  },
  {
    path: "/users/:userId",
    exact: true,
    component: UserId
  },
  {
    path: "/about",
    component: About
  },
  {
    path: "/login",
    component: LoginLayout
  }
];

export function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}