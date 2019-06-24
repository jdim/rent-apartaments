import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import "rc-slider/assets/index.css";
import Slider from "rc-slider";

const Range = Slider.createSliderWithTooltip(Slider.Range);

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 10px;
`;

const GroupTitle = styled.p`
  font-weight: bold;
`;

const FilterGroup = styled.div`
  font-size: 14px;
  padding: 6px 0;
  white-space: nowrap;
`;

const StyledLabel = styled.label`
  display: inline-block;
  min-width: 120px;
`;

const StyledInput = styled.input`
  font-size: 14px;
`;

const ApartmentsAdvFilter = ({ filter, onChange }) => {
  // Third-party range doesn't pass Event to onChange, so we'll create a simple object with name and value properties
  // May be it's worth to make pull request with that feature
  const rangeInput = React.createRef();
  const onPriceChange = values => {
    onChange({
      target: {
        name: rangeInput.current.props.name,
        value: values
      }
    });
  };

  return (
    <StyledForm>
      <div>
        <GroupTitle>Main:</GroupTitle>

        <FilterGroup>
          <StyledLabel htmlFor="qtyGuests">Qty Guests&nbsp;</StyledLabel>
          <StyledInput
            type="number"
            name="qtyGuests"
            id="qtyGuests"
            min={1}
            max={10}
            value={filter.qtyGuests}
            onChange={onChange}
          />
        </FilterGroup>

        <FilterGroup>
          <StyledLabel htmlFor="qtyBedrooms">Qty Bedrooms&nbsp;</StyledLabel>
          <StyledInput
            type="number"
            name="qtyBedrooms"
            id="qtyBedrooms"
            min="1"
            max="10"
            value={filter.qtyBedrooms}
            onChange={onChange}
          />
        </FilterGroup>

        <FilterGroup>
          <StyledLabel htmlFor="qtyBathrooms">Qty Bathrooms&nbsp;</StyledLabel>
          <StyledInput
            type="number"
            name="qtyBathrooms"
            id="qtyBathrooms"
            min="1"
            max="10"
            value={filter.qtyBathrooms}
            onChange={onChange}
          />
        </FilterGroup>
      </div>

      <div>
        <GroupTitle>Features:</GroupTitle>

        <FilterGroup>
          <input
            type="checkbox"
            name="wifi"
            id="wifi"
            checked={filter.wifi}
            onChange={onChange}
          />
          <StyledLabel htmlFor="wifi">&nbsp;Wifi</StyledLabel>
        </FilterGroup>

        <FilterGroup>
          <input
            type="checkbox"
            name="parking"
            id="parking"
            checked={filter.parking}
            onChange={onChange}
          />
          <StyledLabel htmlFor="parking">&nbsp;Parking</StyledLabel>
        </FilterGroup>
      </div>

      <div>
        <GroupTitle>Rules:</GroupTitle>

        <FilterGroup>
          <input
            type="checkbox"
            name="forSmoking"
            id="forSmoking"
            checked={filter.forSmoking}
            onChange={onChange}
          />
          <StyledLabel htmlFor="forSmoking">&nbsp;For Smoking</StyledLabel>
        </FilterGroup>

        <FilterGroup>
          <input
            type="checkbox"
            name="pets"
            id="pets"
            checked={filter.pets}
            onChange={onChange}
          />
          <StyledLabel htmlFor="pets">&nbsp;Pets</StyledLabel>
        </FilterGroup>
      </div>

      <div>
        <GroupTitle>Price:</GroupTitle>

        <Range
          min={50}
          max={250}
          step={10}
          name="price"
          ref={rangeInput}
          value={filter.price}
          onChange={onPriceChange}
          tipProps={{ style: { zIndex: 1500 } }}
        />
      </div>
    </StyledForm>
  );
};

ApartmentsAdvFilter.propTypes = {
  filter: PropTypes.shape({
    qtyGuests: PropTypes.number.isRequired,
    qtyBedrooms: PropTypes.number.isRequired,
    qtyBathrooms: PropTypes.number.isRequired,
    wifi: PropTypes.bool.isRequired,
    parking: PropTypes.bool.isRequired,
    forSmoking: PropTypes.bool.isRequired,
    pets: PropTypes.bool.isRequired,
    price: PropTypes.arrayOf(PropTypes.number).isRequired
  }).isRequired,
  onChange: PropTypes.func.isRequired
};

export default ApartmentsAdvFilter;
