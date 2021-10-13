import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BootstrapCards from "./BootstrapCards";

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

const movieList = movies.map((movie, idx) => {
  return (
    <Col lg={4} md={4} key={idx}>
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
