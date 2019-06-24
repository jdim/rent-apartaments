import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Container from '../components/Container';
import ApartmentsSimpleFilter from '../components/ApartmentsSimpleFilter';
import ApartmentsAdvFilter from '../components/ApartmentsAdvFilter';

const SimpleFilterWrapper = styled.div`
  background: #f9f9f9;
  padding-top: 30px;
  padding-bottom: 30px;
  background: rgba(240, 240, 240, 1);
  background: linear-gradient(
    to bottom,
    rgba(240, 240, 240, 1) 0%,
    rgba(249, 249, 249, 1) 10%,
    rgba(249, 249, 249, 1) 90%,
    rgba(240, 240, 240, 1) 100%
  );
`;

const AdvFilterWrapper = styled.div`
  position: relative;
  background: white;
  padding-top: 30px;
  padding-bottom: 30px;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.15);
`;

const ApartmentFilter = ({ filter, onChange }) => {
  return (
    <React.Fragment>
      <SimpleFilterWrapper>
        <Container>
          <ApartmentsSimpleFilter
            category={filter.category}
            onChange={onChange}
          />
        </Container>
      </SimpleFilterWrapper>

      <AdvFilterWrapper>
        <Container>
          <ApartmentsAdvFilter filter={filter} onChange={onChange} />
        </Container>
      </AdvFilterWrapper>
    </React.Fragment>
  );
};

ApartmentFilter.propTypes = {
  filter: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
};

export default ApartmentFilter;
