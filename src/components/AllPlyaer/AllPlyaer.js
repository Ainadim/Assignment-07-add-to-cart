import React from "react";
import { Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const AllPlyaer = (props) => {
  const { name, salary, images } = props.allData;

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
            <Button
              onClick={() => props.addCartHandel(props.allData)}
              variant="primary"
            >
              <FontAwesomeIcon icon={faCartPlus} />
              <span>Add</span>
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default AllPlyaer;
