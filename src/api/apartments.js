import axios from 'axios';
import { normalize, schema } from 'normalizr';

const apartmentSchema = new schema.Entity(
  'apartments',
  {},
  { idAttribute: '_id' }
);
const apartmentListSchema = [apartmentSchema];

/**
 *
 * Filtering apartments just for this prototype app.
 * Usually implemented on backend
 */
function getPredicate(filter) {
  return function(apartment) {
    // Price
    if (
      apartment.price < filter.price[0] ||
      apartment.price > filter.price[1]
    ) {
      return false;
    }

    // Rooms
    if (
      ['qtyGuests', 'qtyBedrooms', 'qtyBathrooms'].some(
        qty => apartment[qty] < filter[qty]
      )
    ) {
      return false;
    }

    // Features
    if (
      ['wifi', 'parking'].some(
        feature => filter[feature] === true && apartment[feature] !== true
      )
    ) {
      return false;
    }

    // Rules
    if (
      !['forSmoking', 'pets'].every(param => apartment[param] === filter[param])
    ) {
      return false;
    }

    return true;
  };
}

export function getList(filter) {
  // Last .then() - Fake network latency
  return axios
    .get('/apartments.json')
    .then(({ data }) => {
      const filtered = data.filter(getPredicate(filter));
      const normalized = normalize(filtered, apartmentListSchema);
      return Promise.resolve({
        byId: { ...normalized.entities.apartments },
        allIds: filtered.reduce((ids, entity) => {
          ids.push(entity._id);
          return ids;
        }, [])
      });
    })
    .then(data => new Promise(resolve => setTimeout(() => resolve(data), 800)));
}
