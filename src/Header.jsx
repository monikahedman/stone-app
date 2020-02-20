import React from "react";
import "./css/App.scss";
import logo from "./images/title.jpg";

export class Header extends React.Component {

  render() {
    return (
        <div className="header">
          <img src={logo} className="logo" alt="logo" />
          <h2>A Webcomic by Monika Hedman</h2>
        </div>
    );
  }
}
