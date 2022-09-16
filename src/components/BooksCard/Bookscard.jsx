import React from "react";
import { Button, Card } from "react-bootstrap";
import { backendLink } from "../../App.js";

const bookscard = ({ book }) => {
  return (
    <Card style={{ width: "100%" }}>
      <Card.Img
        variant="top"
        src={`${"http://localhost:4200"}/images/${book.image}`}
        style={{ width: "100%", height: "250px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text> ৳ {book.price}</Card.Text>
        <a href={`/checkout/${book._id}`}>
          <Button onClick={() => {}} variant="primary">
            Buy Now
          </Button>
        </a>
      </Card.Body>
    </Card>
  );
};

export default bookscard;
