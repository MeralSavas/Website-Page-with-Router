import Subscribe from "../components/subscribe/Subscribe";
import Card from "../components/card/Card";
import data from "../helper/data";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const navigate = useNavigate();
  const [card, setCard] = useState([]);
  // console.log(data);
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
      <Subscribe />

      <section id="boxes">
        <div className="container">
          {data?.map((item) => {
            const { id, src, url, title, name } = item;

            // console.log(id);
            return (
              <div
                key={id}
                // onClick={() => navigate(`/card/${id}`, { state: item })}
                onClick={() => navigate(`/${name}`)}
                className="box"
              >
                <Link to="">
                  <img src={src} alt="html" />
                </Link>

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

      {/* <Outlet /> */}
    </div>
  );
};

export default Home;
