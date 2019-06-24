import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const CategoryList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  list-style-type: none;
`;

const ListTitle = styled.div`
  padding: 5px 10px 5px 0;
`;

const StyledButton = styled.button`
  border: 0;
  cursor: pointer;
  padding: 5px 10px;
  font-size: 16px;
  background: transparent;
  ${props =>
    props.active &&
    `
  font-weight: bold;
  text-decoration: underline;
  `}

  :hover {
    text-decoration: underline;
  }
`;

const categories = ["All", "Popular"];

function ApartmentsSimpleFilter(props) {
  return (
    <Wrapper>
      <ListTitle>Category:</ListTitle>
      <CategoryList>
        {categories.map(item => (
          <li key={item}>
            <StyledButton
              type="button"
              name="category"
              value={item.toLowerCase()}
              active={item.toLowerCase() === props.category}
              onClick={props.onChange}
            >
              {item}
            </StyledButton>
          </li>
        ))}
      </CategoryList>
    </Wrapper>
  );
}

ApartmentsSimpleFilter.propTypes = {
  category: PropTypes.oneOf(categories.map(name => name.toLowerCase()))
    .isRequired,
  onChange: PropTypes.func.isRequired
};

ApartmentsSimpleFilter.defaultProps = {
  category: "all"
};

export default ApartmentsSimpleFilter;
