import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import {
  Button,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl
} from 'react-bootstrap';

import Home from './Home';
import Mouse_List from './pages/mouse/Mouse_List';
import Grid_Index from './pages/grid/Grid_Index';

const App = () => (
  <Router>
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/grid">Grid</Nav.Link>
            <Nav.Link href="/mouse">Mouse</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      ;
      <Route exact path="/" component={Home} />
      <Route path="/mouse" component={Mouse_List} />
      <Route path="/grid" component={Grid_Index} />
    </div>
  </Router>
);

export default App;
