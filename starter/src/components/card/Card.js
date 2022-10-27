import React from "react";

const Card = ({ id, src, url, title }) => {
  return (
    <div key={id} className="box">
      <img src={src} alt="" />
      <h3>{title}</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.z Vivamus mi
        augue, viverra sit amet ultricies
      </p>
    </div>
  );
};

export default Card;
