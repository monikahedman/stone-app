import React from "react";
import "./css/App.scss";
import { Tile } from "./Tile";
import { Link } from "react-router-dom";

export class Body extends React.Component {
  render() {
    return (
      <div className="main-cont">
        <div className="tile-container">
          {this.props.data.episodes.map((d, index) => {
            return (
              <Link className = "tileLink" to={"/episodes" + d["route"]} key={index} ><Tile
                imgSrc={d["img"]}
                episode={index+1}
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
