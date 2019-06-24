import React from 'react';
import HeaderSection from './HeaderSection';
import ApartmentsListContainer from '../containers/ApartmentsListContainer';
import ApartmentFilterContainer from '../containers/ApartmentFilterContainer';
import Container from './Container';
import styled from 'styled-components';

const ListWrapper = styled.div`
  background: white;
  padding-top: 30px;
  padding-bottom: 30px;
`;

const StyledContainer = styled(Container)`
  padding: 0;
`;

const Rent = () => {
  return (
    <React.Fragment>
      <HeaderSection
        preTitle="Book Timely"
        title="Rent Apartments"
        previewUrl="/img/nathan-fertig-249917-unsplash.jpg"
      >
        <p>
          We have collection the best apartments for you. <br />
          Reasonable prices for travelers of different classes.
        </p>
      </HeaderSection>
      <section>
        <ApartmentFilterContainer />
        <ListWrapper>
          <StyledContainer>
            <ApartmentsListContainer />
          </StyledContainer>
        </ListWrapper>
      </section>
    </React.Fragment>
  );
};

export default Rent;
