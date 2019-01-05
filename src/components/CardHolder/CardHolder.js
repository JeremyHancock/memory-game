import React, { Component } from "react";

import CardBody from "../CardBody/CardBody";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { images } from "../../assets/images";
import Score from "../Score/Score"

import "./CardHolder.css";

class CardHolder extends Component {
  constructor() {
    super();
    this.state = {
      images,
    };
  }

  render() {
    return (
      <div>
        <Header />
        <Score  />
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