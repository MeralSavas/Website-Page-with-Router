import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const Card = ({ data }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const newData = data.filter((item) => item.id == id);
  console.log(newData);
  const { src, url, title } = newData[0];

  // console.log("data, data1", data);

  const { state: item } = useLocation();
  console.log(item);

  return (
    <div className="box">
      {/* {data.id === id ? ( */}
      <>
        <img src={src} alt="" />
        <h3>{title}</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.z Vivamus mi
          augue, viverra sit amet ultricies
        </p>
      </>
      {/* s */}
    </div>
  );
};

export default Card;
