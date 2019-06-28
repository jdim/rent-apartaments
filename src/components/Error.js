import React from 'react';
import PropTypes from 'prop-types';
import Container from './Container';

const Error = ({ error, msg }) => {
  return (
    <Container>
      <p>
        <i className="fas fa-bug fa-7x" />
      </p>
      <h1>Oops, now we trying to solve this problem</h1>
      <p>{msg}</p>
    </Container>
  );
};

Error.propTypes = {
  error: PropTypes.object,
  msg: PropTypes.string
};

export default Error;
