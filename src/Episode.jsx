import React from "react";
import "./css/App.scss";
import "./css/Episode.scss";
import { Route, Link } from "react-router-dom";
import { Overview } from "./Overview";

export class Episode extends React.Component {
  render() {
    return (
      <div className="main-cont">
        <div className="tile-container">
          {this.props.data.episodes.map((d, index) => {
            return (
              <Route key={index} path={"/episodes" + d["route"]}>
                <EpisodeDisplay
                  episode={index+1}
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
            {this.props.images.map((i, index) => (
              <img src={i} alt-text={`episode ${index+1}`} alt={`episode ${index+1}`} key={index}/>
            ))}
          </div>
          {this.returnButton}
        </div>
        <Overview />
      </div>
    );
  }
}
