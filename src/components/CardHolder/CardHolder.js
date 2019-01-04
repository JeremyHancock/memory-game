import React, { Component } from "react";

import CardBody from "../CardBody/CardBody";
import "./CardHolder.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { images } from "../../assets/images";
import Score from "../Score/Score"



class CardHolder extends Component {
  constructor() {
    super()
    this.state = {
      images,
    };
  }

  render() {
    return (
      <div>
        <Header />
        <Score />
        <div className="card-holder">
          {this.state.images.map(image => (
            <CardBody
              key={image.id}
              image={image.image}
              id={image.id}
              alt={image.alt}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default CardHolder;