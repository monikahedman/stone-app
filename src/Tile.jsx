import React from "react";
import "./css/Tile.scss";

export class Tile extends React.Component{
    render(){
        return(
            <div className="tile">
                <img className="tile-img" src={this.props.imgSrc} alt-text={`tile ${this.props.title}`} alt={`tile ${this.props.title}`}></img>
                <div className="tile-info">
                    <h3 className="episode-text">Episode {this.props.episode}</h3>
                    <h2 className="episode-text">{this.props.title}</h2>
                    <p className="episode-text date">Published {this.props.date}</p>
                    <p className="episode-text description">{this.props.descrip}</p>
                </div>
                <div className="ep button">Read Episode</div>
            </div>
        );
    }
}