import React from "react";
import "./CardBody.css";


function CardBody(props) {
  
  return (
    <div className="card-body">
      <div>
        <img className="card-image" src={props.image} alt={props.alt}/>
      </div>
    </div>
  );
}

export default CardBody;