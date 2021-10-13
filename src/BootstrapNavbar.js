import React from "react";
import {
  Container, Nav, Navbar
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BootstrapCardsList from "./BootstrapCardsList";
import BootstrapCarousels from "./BootstrapCarousels";
import Favorites from "./Favorites";


// import Home from "./Home";
// import AboutUs from "./AboutUs";
// import ContactUs from "./ContactUs";

class BootstrapNavbar extends React.Component {
  render() {
    return (
      <Router>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand to="/users">Movies</Navbar.Brand>
            </LinkContainer>
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
                <LinkContainer to="/favorites">
                  <Nav.Link to="/favorites">Favorites</Nav.Link>
                </LinkContainer>
                {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Switch>
          <Route exact path="/">
            <BootstrapCarousels />
            <BootstrapCardsList />
          </Route>

          <Route path="/favorites">
            <Favorites />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default BootstrapNavbar;
