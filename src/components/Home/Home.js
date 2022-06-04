import React, { useEffect, useState } from "react";
import AllData from "../../Fake-data/MOCK_DATA.json";
import { Col, Container, Row } from "react-bootstrap";
import "./Home.css";
import Cart from "../Cart/Cart";
import AllPlyaer from "../AllPlayer/AllPlayer";

const Home = () => {
  const [player, setPlayer] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setPlayer(AllData);
  });

  const addCartHandel = (data) => {
    setCart([...cart, data]);
  };

  const removeCartHnadeler = (data) => {
    const singleData = cart.filter((e) => e.id !== data.id);
    setCart(singleData);
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
                allData={data}
                addCartHandel={addCartHandel}
                removeCartHnadeler={removeCartHnadeler}
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
