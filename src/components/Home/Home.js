import React, { useEffect, useState } from "react";
import AllPlyaer from "../AllPlyaer/AllPlyaer";
import AllData from "../../Fake-data/MOCK_DATA.json";
import { Col, Container, Row } from "react-bootstrap";
import "./Home.css";
import Cart from "../Cart/Cart";

const Home = () => {
  const [player, setPlayer] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setPlayer(AllData);
  });

  const addCartHandel = (selectPlayer) => {
    const newCart = [...cart, selectPlayer];
    setCart(newCart);
  };

  return (
    <div>
      <div className="header">
        <h1>Arafinix Club</h1>
      </div>
      <Container>
        <h1>Player Slection Chart</h1>
        <Row>
          <Col className="d-grid">
            {player.map((data, index) => (
              <AllPlyaer
                key={index}
                addCartHandel={addCartHandel}
                allData={data}
              />
            ))}
          </Col>
          <Col>
            <Cart cart={cart} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
