import React from "react";
import styled from "styled-components";

const FooterEl = styled.footer`
  background-color: ${props => props.theme.purple};
  color: #fff;
  margin: 0;
  text-align: center;
  padding: 1rem;
`;

const Footer = () => (
  <FooterEl>
    <p>Built with <span role="img" aria-label="Heart emoji">♥</span> by a wonderful developer for Asana.</p>
  </FooterEl>
);

export default Footer;
