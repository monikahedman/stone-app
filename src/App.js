import React from "react";
import { Main } from "./Main";
import axios from 'axios'

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null
    };
  }

  componentDidMount() {
    var that = this;
    this.serverRequest = axios.get("./data.json").then(function(result) {
      var episodeData = result.data;
      that.setState({
        data: episodeData
      });
    });
  }
  render() {
    return <Main data={this.state.data}/>;
  }
}

export default App;
