import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';


function NavBar() {

  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
        <img
              src='weblogo.jpg'
              width="100"
              height="50"
              className="d-inline-block align-top"
              alt="clone logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={()=> navigate('/')}>Home</Nav.Link>
            <Nav.Link onClick={()=> navigate('/users')}>Users</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value = {query}
              onChange={(e) => setQuery(e.target.value)}
              />

            <Button variant="outline-warning" type='button' onClick={()=> {
              navigate('/' + query);
              setQuery('');
            }} >Go</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;