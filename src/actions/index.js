import * as apartmentsApi from '../api/apartments';

// Apartments
export const FETCH_APARTMENTS_REQUEST = 'FETCH_APARTMENTS_REQUEST';
export const FETCH_APARTMENTS_SUCCESS = 'FETCH_APARTMENTS_SUCCESS';

const fetchApartmentsSuccess = apartments => ({
  type: FETCH_APARTMENTS_SUCCESS,
  apartments
});

export const fetchApartments = filter => dispatch => {
  dispatch({ type: FETCH_APARTMENTS_REQUEST });
  apartmentsApi
    .getList(filter)
    .then(data => dispatch(fetchApartmentsSuccess(data)));
};

// Apartments filter
export const APPLY_APARTMENTS_FILTER = 'APPLY_APARTMENTS_FILTER';
export const applyFilter = filter => ({
  type: APPLY_APARTMENTS_FILTER,
  filter
});
export const DefaultApartmentsFilter = {
  category: 'all',
  qtyGuests: 2,
  qtyBedrooms: 1,
  qtyBathrooms: 1,
  wifi: true,
  parking: true,
  forSmoking: false,
  pets: false,
  price: [60, 200]
};
