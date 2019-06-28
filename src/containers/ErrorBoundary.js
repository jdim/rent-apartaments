import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Error from '../components/Error';
import { connect } from 'react-redux';

class ErrorBoundary extends Component {
  static propTypes = {
    error: PropTypes.object,
    msg: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Log error to logging service
    console.log(error, info);
  }

  render() {
    if (this.state.hasError || this.props.error) {
      return <Error />;
    }

    return this.props.children;
  }
}

const mapStateToProps = state => ({
  error: state.error.error,
  msg: state.error.msg
});

export default connect(mapStateToProps)(ErrorBoundary);
