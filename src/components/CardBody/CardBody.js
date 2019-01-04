import React from "react";
import "./CardBody.css";

class CardBody extends React.Component {
  constructor(props) {
    super(props);
    this.handleImageClick = this.handleImageClick.bind(this);
    this.state = {
      isImageClicked: "false"};
  }

  handleImageClick() {
    this.setState({isImageClicked: "true"});
    console.log("Changed to true!");
  }
  render() {
    const isImageClicked = this.state.isImageClicked;
    return (
    <div className="card-body"
    >
      <div>
        <img className="card-image"
          key={this.props.id}
          src={this.props.image}
          alt={this.props.alt}
          clicked={isImageClicked}
          onClick={this.handleImageClick}
        />
      </div>
    </div>
    )
  }
}
export default CardBody;