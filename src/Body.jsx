import React from "react";
import "./css/App.scss";
import { Tile } from "./Tile";
import data from "./data.json";
import { Switch, Route, Link } from "react-router-dom";

export class Body extends React.Component {
  render() {
      let index = 0;
    return (
      <div className="main-cont">
        <div className="tile-container">
          {data.episodes.map(d => {
              index += 1;
            return (
              <Link className = "tileLink" to={"/episodes" + d["route"]}><Tile
                imgSrc={d["img"]}
                episode={index}
                date={d["date"]}
                title={d["title"]}
                descrip={d["description"]}
              /></Link>
            );

          })}
        </div>
      </div>
    );
  }
}
