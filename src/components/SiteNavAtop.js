import React from 'react';
import SiteNav from './SiteNav';
import Container from './Container';
import ContainerAtop from './ContainerAtop';

const SiteNavAtop = () => {
  return (
    <ContainerAtop>
      <Container>
        <SiteNav />
      </Container>
    </ContainerAtop>
  );
};

export default SiteNavAtop;
