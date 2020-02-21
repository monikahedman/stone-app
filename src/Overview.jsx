import React from "react";
import "./css/App.scss";
import data from "./data.json";
import { Link } from "react-router-dom";

export class Overview extends React.Component {
  render() {
    return (
      <div className="main-cont overview">
      <h2>Other Episodes</h2>
        <div className="tile-container overview">
          {data.episodes.map((d, index) => {
            return (
              <Link key={index} to={"/episodes" + d["route"]} className="overview-tile">
                <span>{d["title"]}</span>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}
