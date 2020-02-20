import React from "react";
import "./css/App.scss";
import { Header } from "./Header";
import { Body } from "./Body";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import {Episode} from "./Episode";

export class Main extends React.Component {
  render() {
    return (
      <div>
        
        <BrowserRouter>
        <Header />
          <Switch>
            <Route path="/" exact={true} component={Body} />
            <Route path="/episodes" component={Episode}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
