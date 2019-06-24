import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';
import Container from './Container';

const NotFound = () => {
  return (
    <Container className="NotFound">
      <i className="fas fa-otter fa-7x NotFound-Icon" />
      <h1>Sorry, we can't find that resource. Try another url.</h1>
      <p>
        Or you can <Link to="/">return to Home</Link>
      </p>
    </Container>
  );
};

export default NotFound;
