import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";
// import Home from "./Home";
// import AboutUs from "./AboutUs";
// import ContactUs from "./ContactUs";

class BootstrapNavbar extends React.Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Movies</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav
                className="mr-auto"
                style={{
                  marginLeft: "100%",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                <Nav.Link href="#features">Favorites</Nav.Link>
                {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default BootstrapNavbar;
