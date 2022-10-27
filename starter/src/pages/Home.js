import Subscribe from "../components/subscribe/Subscribe";
import Card from "../components/card/Card";
import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import data from "../helper/data";

const Home = () => {
  const [card, setCard] = useState([]);
  const navigate = useNavigate();

  return (
    <div className="root">
      <section id="showcase">
        <div className="container">
          <h1>Professional Web Design</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            luctus ipsum, rhoncus semper magna. Nulla nec magna sit amet sem
            interdum condimentum.
          </p>
        </div>
      </section>
      {<Subscribe />}

      <section id="boxes">
        <div className="container">
          {data?.map((card) => {
            const { id, src, url, title } = card;
            return (
              <div key={id} className="box" onClick={() => navigate(`${id}`)}>
                <img src={src} alt="" />
                <h3>{title}</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus mi augue, viverra sit amet ultricies
                </p>
              </div>
            );
          })}
        </div>
      </section>
      <Outlet />
    </div>
  );
};

export default Home;