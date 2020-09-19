import React from "react";
import List from "./List";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home">Iris Arke</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
        </Navbar>

        <Route exact path="/" component={List} />
      </Router>
      <br />
    </div>
  );
}

export default App;
