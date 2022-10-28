import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const Card = ({ src, url, title }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);

  const { state: card } = useLocation();
  console.log(card);

  return (
    <div className="box">
      <img src={card.src} alt="" />
      <h3>{card.title}</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.z Vivamus mi
        augue, viverra sit amet ultricies
      </p>
    </div>
  );
};

export default Card;
