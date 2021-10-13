import ls from "local-storage";
import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BootstrapCards from "./BootstrapCards";

function fun() {
  let favorites = [
    {
      title: "King Kong",
      text: "Fight",
      srcImage:
        "https://m.media-amazon.com/images/M/MV5BMjYxYmRlZWYtMzAwNC00MDA1LWJjNTItOTBjMzlhNGMzYzk3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    },
    {
      title: "King Kong 2",
      text: "Fight",
      srcImage: "https://i.ytimg.com/vi/JHoj8XrzAoI/maxresdefault.jpg",
    },
    {
      title: "King Kong 3",
      text: "Fight",
      srcImage:
        "https://m.media-amazon.com/images/M/MV5BZWVjMmY4ODUtMmYzMC00NDdjLWE4MjMtOWUzMDBlNzczOGMwXkEyXkFqcGdeQWpnYW1i._V1_.jpg",
    },
    {
      title: "King Kong",
      text: "Fight",
      srcImage:
        "https://m.media-amazon.com/images/M/MV5BMjYxYmRlZWYtMzAwNC00MDA1LWJjNTItOTBjMzlhNGMzYzk3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    },
  ];

  favorites = [];
  favorites = ls.get("favorites");
  if (favorites !== null) {
    favorites = JSON.parse(favorites);
  }

  let movieList;
  if (favorites !== null) {
    movieList = favorites.map((movie, idx) => {
      return (
        <Col lg={4} md={4} key={idx}>
          <BootstrapCards
            title={movie.title}
            text={movie.text}
            srcImage={movie.srcImage}
            setFavorites="true"
          ></BootstrapCards>
        </Col>
      );
    });
  } else {
    movieList = (
      <h3
        style={{
          display: "flex",
          flexDirection: "column",
          position: "flex",
          justifyContent: "center",
          textAlign: "center",
          alignSelf: "center",
          marginTop: "50vh",
        }}
      >
        No Favorites Set
      </h3>
    );
  }
  return movieList;
}

export class Favorites extends Component {
  movieList = "";
  // refresh = this.props.refresh;
  constructor(props) {
    super(props);
    this.state = {
      refresh: this.props.refresh,
      favorites: [],
    };
  }
  // componen
  // this.setState({ refresh: this.props.refresh });
  render() {
    // this.setState({ refresh: "true" });
    return (
      window.addEventListener("storage", (e) => {}),
      (this.movieList = fun()),
      (
        <>
          <br />

          <Container>
            <Row>{this.movieList}</Row>
          </Container>
        </>
      )
    );
  }
}

export default Favorites;
