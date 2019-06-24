import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ListItem from './ApartmentsListItem';
import Loader from './Loader';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: row wrap;
  padding: 5px;
  min-height: 40px;
`;

const ApartmentsList = ({ items, loading }) => {
  return (
    <Wrapper>
      {loading && <Loader />}
      {!!items && items.map(item => <ListItem key={item._id} {...item} />)}
    </Wrapper>
  );
};

ApartmentsList.propTypes = {
  items: PropTypes.array.isRequired,
  loading: PropTypes.bool
};

ApartmentsList.defaultProps = {
  loading: false
};

export default ApartmentsList;
