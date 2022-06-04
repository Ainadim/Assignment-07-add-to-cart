import React from "react";
import { Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faDeleteLeft } from "@fortawesome/free-solid-svg-icons";

const Cards = (props) => {
  const { id, images, name, salary } = props.data;
  const addCartHandel = props.addCartHandel;
  const removeCart = props.removeCart;

  return (
    <div>
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={images} />
          <Card.Body>
            <Card.Title>
              <b>Name:</b> {name}
            </Card.Title>
            <Card.Text>
              <b>Salary:</b> ${salary} Million
            </Card.Text>
            <Button onClick={() => addCartHandel(id)} variant="primary">
              <FontAwesomeIcon icon={faCartPlus} /> Add
            </Button>
            <Button onClick={() => removeCart(id)} variant="danger">
              <FontAwesomeIcon icon={faDeleteLeft} /> Remove
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Cards;
