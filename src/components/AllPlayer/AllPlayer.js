import React from "react";
import { Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faDeleteLeft } from "@fortawesome/free-solid-svg-icons";

const AllPlyaer = (props) => {
  const { id, name, salary, images } = props.allData;
  const data = props.allData;
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
            <Button onClick={() => props.addCartHandel(data)} variant="primary">
              <FontAwesomeIcon icon={faCartPlus} /> Add
            </Button>
            <Button
              onClick={() => props.removeCartHnadeler(data)}
              variant="danger"
            >
              <FontAwesomeIcon icon={faDeleteLeft} />
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default AllPlyaer;
