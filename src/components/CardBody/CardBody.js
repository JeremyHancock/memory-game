import React from "react";
import "./CardBody.css";

function CardBody(props) {
  return (
    <div className="card-body">
      <img className="card-image" onClick={() => props.handleImageClick(props.id)}
        key={props.id}
        src={props.image}
        alt={props.alt}
      />
    </div>
  )
}

export default CardBody;