import React from "react";
import "./css/App.scss";
import { Header } from "./Header";
import { Body } from "./Body";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import { Episode } from "./Episode";

export class Main extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          {this.props.data != null
            ? [
                <Switch key = {1}>
                  <Route path="/" exact={true}>
                    <Body data={this.props.data} />
                  </Route>
                  <Route path="/episodes" component={Episode}>
                    <Episode data={this.props.data} />
                  </Route>
                </Switch>
              ]
            : [<div key={2}>Content is Loading...</div>]}
        </BrowserRouter>
      </div>
    );
  }
}
