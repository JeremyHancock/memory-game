import React, { Component } from "react";

import CardBody from "../CardBody/CardBody";
import "./CardHolder.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { images } from "../../assets/images";


class CardHolder extends Component {
  constructor() {
    super()
    this.state = {
      images,
      clicked: []
    };
  }
  render() {
    const cardBodies = this.state.images.map(image => <CardBody key={image.id} image={image.image} alt={image.alt}/>)
    return (
      <div>
        <Header />
      <div className = "card-holder">
      {cardBodies}
      </div>
      <Footer />
      </div>
    )
  }
}

export default CardHolder;