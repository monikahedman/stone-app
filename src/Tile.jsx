import React from "react";
import "./css/Tile.scss";

export class Tile extends React.Component{

    tileRef = React.createRef();

    onClick= () => {
        // href = "www.monikahedman.com"
    }

    render(){
        return(
            <div className="tile" ref = {this.tileRef} onClick={this.onClick}>
                <img className="tile-img" src={this.props.imgSrc}></img>
                <div className="tile-info">
                    <h3 className="episode-text">Episode {this.props.episode}</h3>
                    <h2 className="episode-text">{this.props.title}</h2>
                    <p className="episode-text date">Posted {this.props.date}</p>
                    <p className="episode-text description">{this.props.descrip}</p>
                </div>
                <div className="ep button">Read Episode</div>
            </div>
        );
    }
}