import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";

export default function FoodDetail() {
  const [food, setfood] = useState(null);
  let { id } = useParams();
  console.log(id);

  useEffect(() => {
    axios.get("http://localhost:8080/food/readone/" + id).then((e) => {
      console.log(e.data);
      if (e.status == 200) {
        setfood(e.data);
      }
    });
  }, []);

  return (
    <div>
    {food && 
    <Card className="me-2 mb-2 shadow-sm" style={{ width: "18rem" }}>
    <Card.Img variant="top" src={food.pic} />
    <Card.Body>
      <Card.Title>{food.foodName}</Card.Title>
      <Card.Text>
        <p>Price: {food.price}</p>
        <p>Ratting: {food.rating}</p>
        <p>Food Type: {food.type}</p>
      </Card.Text>
      <button className="text-uppercase btn btn-outline-dark">
        Add to cart
      </button>
    </Card.Body>
  </Card>}
  </div>
  );
}
