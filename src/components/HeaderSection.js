import React from 'react';
import PropTypes from 'prop-types';
import './HeaderSection.css';
import Container from './Container';

const HeaderSection = props => {
  const previewStyle = props.previewUrl
    ? { backgroundImage: `url(${props.previewUrl})` }
    : null;

  return (
    <section className="HeaderSection">
      <Container>
        <div className="HeaderSection-Content">
          <header>
            <p className="HeaderSection-PreTitle">{props.preTitle}</p>
            <h1 className="HeaderSection-Title">{props.title}</h1>
            <div className="Header-Line" />
          </header>
          {props.children}
        </div>
      </Container>
      {previewStyle && (
        <div className="HeaderSection-Preview" style={previewStyle} />
      )}
    </section>
  );
};

HeaderSection.propTypes = {
  preTitle: PropTypes.string,
  title: PropTypes.string.isRequired,
  previewUrl: PropTypes.string
};

export default HeaderSection;
