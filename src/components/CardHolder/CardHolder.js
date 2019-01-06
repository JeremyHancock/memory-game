import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import CardBody from "../CardBody/CardBody";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { images } from "../../assets/images";
import Score from "../Score/Score"

import "./CardHolder.css";

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};


class CardHolder extends Component {
  constructor() {
    super();
    this.state = {
      images,
      clicked: [],
      score: 0,
      highScore: 0,
      headerText: "WATCHMEN: Memory Game"
    };
  };

  increaseScore = () => {
    let newScore = this.state.score + 1
    this.setState({ 
      score: newScore,
      headerText: "WATCHMEN: Memory Game"
    });
    if (newScore >= this.state.highScore) {
      this.setState({ highScore: newScore })
    };
  };

  Reset = () => {
    this.setState({
      clicked: [],
      score: 0,
      headerText: "You already clicked that image. Try again."
    });
  };

  handleShuffle = () => {
    let shuffledImages = shuffle(images);
    this.setState({ images: shuffledImages });
  };

  handleImageClick = (id) => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.setState({ clicked: this.state.clicked.concat(id) });
      this.increaseScore();
    }
    else {
      this.Reset();
    }
    this.handleShuffle();
  };

  render() {
    return (
      <Container>
        <Row className="header-row">
          <Header 
          HeaderText={this.state.headerText}
          />
          <Score
            Score={this.state.score}
            HighScore={this.state.highScore}
          />
        </Row>
        <Row className="instructions">Click each image just once. The images will shuffle each time you click, so pay attention.
        </Row>
        <Row>
          {this.state.images.map(image => (
            <Col xs='12' sm='6' md='4' lg='3' className="card-holder">
              <CardBody
                key={image.id}
                image={image.image}
                id={image.id}
                alt={image.alt}
                handleImageClick={this.handleImageClick}
                handleShuffle={this.handleShuffle}
              />
            </Col>
          ))}
        </Row>
        <Footer />
      </Container>
    );
  };
};

export default CardHolder;