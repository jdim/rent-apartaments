import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ApartmentList from '../components/ApartmentsList';
import { fetchApartments } from '../actions';
import { connect } from 'react-redux';
import _ from 'lodash';

export class ApartmentsListContainer extends Component {
  constructor(props) {
    super(props);

    this.debouncedFetchApartments = _.debounce(this.props.fetchApartments, 600);
  }

  static propTypes = {
    apartments: PropTypes.shape({
      byId: PropTypes.object.isRequired,
      allIds: PropTypes.array.isRequired,
      isFetching: PropTypes.bool.isRequired
    }).isRequired,
    filter: PropTypes.object.isRequired,
    fetchApartments: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.fetchApartments(this.props.filter);
  }

  componentDidUpdate(prevProps) {
    if (!_.isEqual(this.props.filter, prevProps.filter)) {
      this.debouncedFetchApartments(this.props.filter);
    }
  }

  itemsFromEntity({ byId, allIds }) {
    return allIds.map(id => byId[id]);
  }

  render() {
    const {
      apartments,
      apartments: { isFetching }
    } = this.props;
    const items = this.itemsFromEntity(apartments);
    return <ApartmentList items={items} loading={isFetching} />;
  }
}

const mapStateToProps = state => ({
  apartments: state.apartments,
  filter: state.apartmentsFilter
});
const mapDispatchToProps = {
  fetchApartments
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ApartmentsListContainer);
