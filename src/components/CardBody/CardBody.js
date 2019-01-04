import React from "react";
import "./CardBody.css";



function CardBody(props) {
  return (
    <div className="card-body">
      <div value={props.clicked}>
      <img src={props.image} alt={props.alt}/>
      </div>
    </div>
  );
}

export default CardBody;
