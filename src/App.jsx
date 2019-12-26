import React from "react";
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";
import "./styles.css";

import routes, { RouteWithSubRoutes } from './routes';
import { NotFound } from './pages/Other'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <div className="flex justify-center text-teal-500 my-5">
            <div className="mx-2"><Link to="/">Home</Link></div>
            <div className="mx-2"><Link to="/login">Login</Link></div>
            <div className="mx-2"><Link to="/users">Users</Link></div>
            <div className="mx-2"><Link to="/about">About</Link></div>
          </div>
          <Switch>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
            <Route component={NotFound} />
        </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}