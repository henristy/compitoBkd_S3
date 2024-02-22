import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
  return (
    <footer className="mt-5">
        <Row className='bg-primary p-5'>
          <Col md={4}>
            <h5>Website Cloner</h5>
            <p>A website cloning service to replicate your favorite websites.</p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>123 Clone Street, Clonetown, USA</p>
            <p>Email: info@websitecloner.com</p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} Website Cloner. All rights reserved.</p>
          </Col>
        </Row>
    </footer>
  );
};

export default Footer;
