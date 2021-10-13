import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";

const favorites = [];
function addToFavorites(object) {
  favorites.push(object);
  console.log("Added favorites");
  console.log(favorites);
}
export class BootstrapCards extends Component {
  render() {
    const title = this.props.title;
    const text = this.props.text;
    const srcImage = this.props.srcImage;
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={srcImage} height="200" width="200" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
          <Button
            variant="dark"
            onClick={() => {
              addToFavorites(this.props);
            }}
          >
            Add to Favorites
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default BootstrapCards;
