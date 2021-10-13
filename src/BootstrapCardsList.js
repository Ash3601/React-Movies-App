import React, { Component } from "react";
import BootstrapCards from "./BootstrapCards";
import { Button, Card, Container, Row, Col } from "react-bootstrap";

const movies = [
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
];

const movieList = movies.map((movie) => {
  return (
    <Col lg={4} md={4}>
      <BootstrapCards
        title={movie.title}
        text={movie.text}
        srcImage={movie.srcImage}
      ></BootstrapCards>
    </Col>
  );
});

export class BootstrapCardsList extends Component {
  render() {
    return (
      <>
        <Container>
          <Row>{movieList}</Row>
        </Container>
      </>
    );
  }
}

export default BootstrapCardsList;
