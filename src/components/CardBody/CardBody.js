import React from "react";
import "./CardBody.css";

class CardBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked : false
    };
  }
  handleImageClick = () => {
    console.log(this.state.clicked)
    this.state.clicked===false ? this.setState({ clicked: true }) : console.log("Reset game")
  }

  render() {
  return (
    <div className="card-body">
      <img className="card-image" onClick={this.handleImageClick}
        key={this.props.id}
        src={this.props.image}
        alt={this.props.alt}
      />
    </div>
  )
}
}
export default CardBody;