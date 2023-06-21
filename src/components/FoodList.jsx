import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export default function FoodList({ fetch }) {
  console.log(fetch);
  return (
    <div className="foodList d-flex justify-content-center  overflow-hidden flex-wrap">
      {fetch.map((data) => {
        return (
          <Card className="me-2 mb-2 shadow-sm" style={{ width: "18rem" }}>
            <Link to={`/fooddetail${data.id}`}>
              <Card.Img variant="top" src={data.pic} />
            </Link>
            <Card.Body>
              <Card.Title>{data.foodName}</Card.Title>
              <Card.Text>
                <p>Price: {data.price}</p>
                <p>Ratting: {data.rating}</p>
                <p>Food Type: {data.type}</p>
              </Card.Text>
              <button className="text-uppercase btn btn-outline-dark">
                Add to cart
              </button>
            </Card.Body>
          </Card>
        );
        {
          /* return (<div>
            <h1></h1>
            <img src={data.pic} alt="" />
            <p>Price: {data.price}</p>
            <p>Ratting: {data.rating}</p>
            <p>Food Type: {data.type}</p>
        </div> */
        }
      })}
    </div>
  );
}
