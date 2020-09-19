import React from "react";
import List from "./List";
import Footer from "./Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="secondary" variant="light">
          <Navbar.Brand href="#home">Iris Arke</Navbar.Brand>
        </Navbar>
        <Route exact path="/" component={List} />
      </Router>
      <br />
      <Footer />
    </div>
  );
}

export default App;
