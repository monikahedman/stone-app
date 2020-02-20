import React from "react";
import "./css/App.scss";
import "./css/Episode.scss";
import data from "./data.json";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route, Link } from "react-router-dom";

export class Episode extends React.Component {
  render() {
    return (
      <div className="main-cont">
        <div className="tile-container">
          {data.episodes.map(d => {
            return (
              <Route path={"/episodes" + d["route"]}>
                <EpisodeDisplay
                  episode={d["episode"]}
                  date={d["date"]}
                  title={d["title"]}
                  images={d["images"]}
                />
              </Route>
            );
          })}
        </div>
      </div>
    );
  }
}

export class EpisodeDisplay extends React.Component {

    imageList = this.props.images;

  render() {
    return (
      <div className="full-episode">
        <h1 className="episode-text">{this.props.title}</h1>
        <div className="episode-information">
          <p className="episode-text">Episode {this.props.episode}</p>
          <p className="episode-text">{this.props.date}</p>
        </div>

        <div className="image-container">
            {this.imageList.map(i => (
                <img src = {i} />
            ))}
        </div>
        <Link to={'/'}><div className="home button"> See All Episodes</div></Link>
      </div>
    );
  }
}
