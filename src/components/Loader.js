import React from 'react';
import styled from 'styled-components';

const StyledLoader = styled.div`
  position: absolute;
  background: rgba(255, 255, 255, 0.5);
  width: 100%;
  height: 100%;
  z-index: 100;
  text-align: center;
`;

const Text = styled.p`
  display: inline-block;
  margin: 0;
  background: rgba(255, 255, 255, 0.85);
  border: 1px solid #3b88fd;
  border-radius: 5px;
  padding: 4px 12px;
`;

const Loader = () => {
  return (
    <StyledLoader>
      <Text>Loading...</Text>
    </StyledLoader>
  );
};

export default Loader;
