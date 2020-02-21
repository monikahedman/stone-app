import React from "react";
import "./css/App.scss";
import logo from "./images/title.jpg";
import { Link } from "react-router-dom";

export class Header extends React.Component {

  render() {
    return (
        <Link to="/">
        <div className="header">
          <img src={logo} className="logo" alt="logo" alt-text="logo" />
          <h2>A Webcomic by Monika Hedman</h2>
        </div>
        </Link>
    );
  }
}
