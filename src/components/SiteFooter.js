import React from 'react';
import './SiteFooter.css';
import Container from './Container';

const SiteFooter = props => {
  return (
    <footer className="SiteFooter">
      <Container>
        <p>© 2019</p>
      </Container>
      <div className="Credits">
        <div>
          No pets icon made by{' '}
          <a
            href="https://www.freepik.com/?__hstc=57440181.2f2a9f97ad40410bebdb9cdffea84214.1561020413457.1561020413457.1561020413457.1&__hssc=57440181.1.1561020413458&__hsfp=2397273311"
            title="Freepik"
          >
            Freepik
          </a>{' '}
          from{' '}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>{' '}
          is licensed by{' '}
          <a
            href="http://creativecommons.org/licenses/by/3.0/"
            title="Creative Commons BY 3.0"
            target="_blank"
            rel="noopener noreferrer"
          >
            CC 3.0 BY
          </a>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
