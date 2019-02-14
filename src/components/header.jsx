import React from "react";
import styled from "styled-components";

const HeaderEl = styled.header`
  padding: ${props => props.theme.standardPadding};
  text-align: center;
  color: #fff;
  background: #bc4e9c linear-gradient(to right, #f80759, #bc4e9c);

  .h1 {
    font-size: 4rem;
    line-height: 1.2;
    margin: 0 0 3rem;
    transition: font-size 0.3s ease-out;

    @media (min-width: 480px) {
      font-size: 6rem;
    }

    @media (min-width: 960px) {
      font-size: 8rem;
    }

    &:after {
      content: "";
      display: block;
      margin: 0 auto;
      width: 30%;
      background-color: rgba(255, 255, 255, 0.2);
      height: 1px;
      margin-top: 3rem;
    }
  }

  .blockquote {
    display: inline-block;
    margin: 0 ${props => props.theme.standardPadding};
  }

  .quote {
    position: relative;

    &:before,
    &:after {
      display: inline;
      font-size: 8rem;
      position: absolute;
      top: -${props => props.theme.standardPadding};
      color: rgba(255, 255, 255, 0.5);
    }

    &:before {
      content: "“";
      left: -${props => props.theme.standardPadding};
    }

    &:after {
      content: "”";
      right: -${props => props.theme.standardPadding};
    }
  }

  .citation {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const Header = () => (
  <HeaderEl>
    <h1 className="h1">The Puppy Emporium</h1>
    <blockquote className="blockquote">
      <p className="quote">
        A dog will teach you unconditional love. If you can have that in your
        life, things won&apos;t be too bad.
      </p>
      <cite className="citation">&mdash;Robert Wagner</cite>
    </blockquote>
  </HeaderEl>
);

export default Header;
