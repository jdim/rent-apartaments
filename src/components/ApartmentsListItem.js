import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from './Button';
import { withRouter } from 'react-router-dom';

const Wrapper = styled.article`
  box-sizing: border-box;
  width: 50%;
  padding: 10px;
  position: relative;
  overflow: hidden;
`;

const Preview = styled.div`
  position: absolute;
  right: 10px;
  left: 10px;
  background-image: url(${props => props.url});
  background-size: cover;
  background-position: center;
  min-height: 350px;
`;

const Description = styled.div`
  position: relative;
  margin-top: 200px;
  margin-bottom: 20px;
  background: white;
  max-width: 80%;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.2);
`;

const Title = styled.h2`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const Paragraph = styled.p`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const DescriptionText = styled.p`
  min-height: 86px;
`;

const Price = styled.p`
  color: #a01c8b;
  font-size: 20px;
  font-weight: bold;
  margin: 0;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
`;

function trim(text, maxLength = 120) {
  if (text.length < 120) {
    return text;
  }
  const trimmedText = text.slice(0, maxLength);
  return (
    trimmedText.slice(
      0,
      Math.min(trimmedText.length, trimmedText.lastIndexOf(' '))
    ) + '...'
  );
}

const OptionsList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  color: #4c4231;
`;

const OptionsItem = styled.li`
  padding: 2px 4px;
`;

const CustomIcon = styled.i`
  display: inline-block;
  width: 16px;
  height: 16px;
  background-repeat: no-repeat;
  background-image: url('/icons/${props => props.image || ''}');
`;

const ApartmentsListItem = props => {
  return (
    <Wrapper>
      <Preview url={props.previewUrl} />
      <Description>
        <Title>{props.title}</Title>
        <Paragraph>{props.address}</Paragraph>
        <DescriptionText>{trim(props.shortDescription)}</DescriptionText>
        <OptionsList>
          <OptionsItem>
            <i className="fas fa-hiking" /> {props.qtyGuests}
          </OptionsItem>
          {props.wifi && (
            <OptionsItem>
              <i className="fas fa-wifi" />
            </OptionsItem>
          )}
          {props.parking && (
            <OptionsItem>
              <i className="fas fa-parking" />
            </OptionsItem>
          )}
          {!props.forSmoking && (
            <OptionsItem>
              <i className="fas fa-smoking-ban" />
            </OptionsItem>
          )}
          {!props.pets && (
            <OptionsItem>
              <CustomIcon image="no-pets.svg" />
            </OptionsItem>
          )}
        </OptionsList>
        <Footer>
          <Price>$ {props.price}/night</Price>
          <Button size="sm" to={`${props.match.url}/apartments/${props._id}`}>
            View details
          </Button>
        </Footer>
      </Description>
    </Wrapper>
  );
};

ApartmentsListItem.propTypes = {
  title: PropTypes.string.isRequired,
  address: PropTypes.string,
  shortDescription: PropTypes.string,
  price: PropTypes.number.isRequired,
  qtyGuests: PropTypes.number.isRequired,
  qtyBedrooms: PropTypes.number.isRequired,
  qtyBathrooms: PropTypes.number,
  wifi: PropTypes.bool,
  parking: PropTypes.bool,
  forSmoking: PropTypes.bool,
  pets: PropTypes.bool,
  previewUrl: PropTypes.string
};

export default withRouter(ApartmentsListItem);
