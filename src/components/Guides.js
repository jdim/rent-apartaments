import React from 'react';
import './Guides.css';
import HeaderSection from './HeaderSection';
import TopGuidesSection from './TopGuidesSection';
import Button from './Button';

const Guides = () => {
  return (
    <React.Fragment>
      <HeaderSection
        preTitle="City in Australia"
        title="Melbourne"
        previewUrl="/img/weyne-yew-492362-unsplash.jpg"
      >
        <p>
          Melbourne is the coastal capital of the southeastern Australian state
          of Victoria. At the city's centre is the modern Federation Square
          development, with plazas, bars, and restaurants by the Yarra River. In
          the Southbank area, the Melbourne Arts Precinct is the site of Arts
          Centre Melbourne – a performing arts complex – and the National
          Gallery of Victoria, with Australian and indigenous art.
        </p>
        <Button to="/places/123456" className="Guides-More">
          Learn more
        </Button>
      </HeaderSection>
      <TopGuidesSection />
    </React.Fragment>
  );
};

export default Guides;
