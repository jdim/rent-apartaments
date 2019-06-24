import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ApartmentFilter from '../components/ApartmentFilter';
import { connect } from 'react-redux';
import { applyFilter } from '../actions';

export class ApartmentFilterContainer extends Component {
  static propTypes = {
    filter: PropTypes.object.isRequired,
    applyFilter: PropTypes.func.isRequired
  };

  handleFilterChange = ev => {
    const name = ev.target.name;
    const type = ev.target.type;
    let value;

    if (type === 'checkbox') {
      value = ev.target.checked;
    } else if (type === 'number') {
      value = +ev.target.value;
    } else {
      value = ev.target.value;
    }

    this.props.applyFilter({ ...this.props.filter, [name]: value });
  };

  render() {
    const { filter } = this.props;
    return (
      <ApartmentFilter filter={filter} onChange={this.handleFilterChange} />
    );
  }
}

const mapStateToProps = state => ({
  filter: state.apartmentsFilter
});
const mapDispatchToProps = {
  applyFilter
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ApartmentFilterContainer);
