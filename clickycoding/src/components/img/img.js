import React from "react";
import "./img.css";

const ImgCard = props => (
  <div className="card">
    <div className="img-container">
    <div className="card main images" onClick={() => props.clicked(props.id)} >
    <img className="img1" src={props.image} />
    </div>
      </div>
      </div>
);

export default ImgCard;