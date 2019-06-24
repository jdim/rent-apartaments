import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  overflow: hidden;
`;

const Header = styled.header`
  align-items: center;
`;

const StyledIcon = styled.a`
  padding-right: 10px;
  color: #5a5a5a;

  :hover {
    color: #7b7b7b;
  }
`;

const StyledLink = styled.a`
  :hover {
    color: #7b7b7b;
  }
`;

const ContactMe = () => {
  return (
    <StyledWrapper>
      <Header>
        <h2>Oops!</h2>
      </Header>
      <p>It's just a prototype</p>
      <p>
        You can view source code
        <br />
        on my{' '}
        <StyledLink
          href="http://github.com/jdim"
          target="_blank"
          rel="noopener noreferrer"
        >
          github account.
        </StyledLink>
        <br />
        Let me know what you think
      </p>
      <p>
        <StyledIcon
          href="http://github.com/jdim"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github fa-2x" />
        </StyledIcon>
        <StyledIcon
          href="https://www.linkedin.com/in/dmitriykh/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-linkedin fa-2x" />
        </StyledIcon>
      </p>
    </StyledWrapper>
  );
};

export default ContactMe;
