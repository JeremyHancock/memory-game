import React, { Component } from "react";
import CardBody from "../CardBody/CardBody";
import "./CardHolder.css";
import { images } from "../../assets/images";


class CardHolder extends Component {
  constructor() {
    super()
    this.state = {
      images,
      clicked: Boolean
    };
  }
  render() {
    const cardBodies = this.state.images.map(image => <CardBody key={image.id} image={image.image} clicked={false} />)
    return (
      <div>
      {cardBodies}
      </div>
    )
  }
}

export default CardHolder;