import React from 'react';
import './Card.css';

const Card = (props) => {
  if (props.text) {
    return (
      <div className="card small text" >
        <div>{props.text}</div>
      </div>
    );
  }

  return (
    <div
      className={`card ${props.size}`}
      id={props.id}
      style={{backgroundImage: `url(${props.url})`}}
      onClick={props.openModal}
      alt={props.id}
    />
  );
};

export default Card;
