import React from "react";
import { Button, Table } from "react-bootstrap";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";

const Cart = (props) => {
  const cart = props.cart;
  const totalSalary = cart.reduce(
    (prevalue, currentValue) => prevalue + currentValue.salary,
    0
  );
  return (
    <div>
      <h4>Cart list:</h4>
      <p>
        <b>Yor select {cart.length} player</b>
      </p>
      <h5>Total Budget $ {totalSalary} Million</h5>
      <Table>
        <thead className="table-thead">
          <tr>
            <th>Player Name</th>
            <th>Player Salary</th>
          </tr>
        </thead>
        {cart.map((player) => {
          return (
            <>
              <tbody>
                <tr>
                  <td>{player.name}</td>
                  <td> $ {player.salary} Million</td>
                </tr>
              </tbody>
            </>
          );
        })}
      </Table>
    </div>
  );
};

export default Cart;
