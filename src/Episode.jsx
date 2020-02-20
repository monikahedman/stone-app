import React from "react";
import "./css/App.scss";
import "./css/Episode.scss";
import data from "./data.json";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route, Link } from "react-router-dom";
import { Overview } from "./Overview";

export class Episode extends React.Component {
  render() {
    let index = 0;
    return (
      <div className="main-cont">
        <div className="tile-container">
          {data.episodes.map(d => {
            index += 1;
            return (
              <Route path={"/episodes" + d["route"]}>
                <EpisodeDisplay
                  episode={index}
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

class EpisodeDisplay extends React.Component {
  get returnButton() {
    return (
      <Link to={"/"}>
        <div className="home button">Home</div>
      </Link>
    );
  }

  render() {
    return (
      <div className="episode-page">
        <div className="full-episode">
          <h1 className="episode-text">{this.props.title}</h1>
          <div className="episode-information">
            <p className="episode-text">Episode {this.props.episode},</p>
            <p className="episode-text">Published {this.props.date}</p>
          </div>
          {this.returnButton}
          <div className="image-container">
            {this.props.images.map(i => (
              <img src={i} />
            ))}
          </div>
          {this.returnButton}
        </div>
        <Overview />
      </div>
    );
  }
}
