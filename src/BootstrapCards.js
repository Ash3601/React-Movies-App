import ls from "local-storage";
import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";
import Favorites from "./Favorites";
import { useHistory } from "react-router-dom";
let favorites = [];

const addToFavorites = (object, favorite) => {
  try {
    favorites = JSON.parse(ls.get("favorites"));
    if (favorites === null) {
      favorites = [];
    }
  } catch (err) {
    favorites = [];
  }
  console.log("favorites value", favorites);
  if (favorite !== "true") {
    const movieExist = favorites.find((movie) => movie.title === object.title);

    if (movieExist !== undefined) {
      alert(`Movie ${object.title} already exists in favorites`);
    } else if (movieExist === undefined) {
      favorites.push(object);
    }
  } else if (favorite === "true") {
    let card = document.getElementById(object.title);
    card.style.display = "none";
    console.log("removing the movie from favorites");
    for (var i = 0; i < favorites.length; i++) {
      if (favorites[i].title === object.title) {
        favorites.splice(i, 1);
        console.log("Before running Favorites component");
        // <Favorites refresh={i + "abcde"} />;
        ls.remove("favorites");
        ls.set("favorites", JSON.stringify(favorites));

        // const history = useHistory();
        // window.location.href = "/favorites";
        break;
      }
    }
  }

  ls.remove("favorites");
  ls.set("favorites", JSON.stringify(favorites));
};
export class BootstrapCards extends Component {
  render() {
    const title = this.props.title;
    const text = this.props.text;
    const srcImage = this.props.srcImage;
    const isFavorites = this.props.setFavorites;
    return (
      <Card style={{ width: "18rem" }} id={title}>
        <Card.Img variant="top" src={srcImage} height="200" width="200" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
          {isFavorites ? (
            <Button
              variant="dark"
              onClick={() => {
                addToFavorites(this.props, isFavorites);
              }}
            >
              X
            </Button>
          ) : (
            <Button
              variant="dark"
              onClick={() => {
                addToFavorites(this.props, isFavorites);
              }}
            >
              Add to Favorites
            </Button>
          )}
        </Card.Body>
      </Card>
    );
  }
}

export default BootstrapCards;
