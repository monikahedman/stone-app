import React from "react";
import "./css/App.scss";
import logo from "./images/title.jpg";
import { Switch, Route, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";


export class Header extends React.Component {

  render() {
    return (
      <Route>
        <Link to="/">
        <div className="header">
          <img src={logo} className="logo" alt="logo" />
          <h2>A Webcomic by Monika Hedman</h2>
        </div>
        </Link>
        </Route>
    );
  }
}
