import React from "react";
import "./card.styles.css";
export const Card = (props) => (
  <div className="card-container">
    <img src = {`https://robohash.org/${props.monster.name}?set=set4`}></img>
    <h1>{props.monster.name}</h1>
  </div>
);
