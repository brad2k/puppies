import React from "react";
import styled from "styled-components";
import { string, func } from "prop-types";
import faker from "faker/locale/en";

const Item = styled.li`
  position: relative;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease-out;

  @media (hover: hover) {
    &:hover {
      transform: scale(1.2);
      cursor: pointer;
    }
  }

  &:before {
    content: "";
    display: block;
    width: 100%;
    padding-top: calc((44 / 61) * 100%);
  }

  .image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .dog-name {
    position: absolute;
    top: 1rem;
    left: 0;
    padding: 0.5rem 1rem;
    margin: 0;
    font-size: 1.4rem;
    color: #fff;
    background-color: ${props => props.theme.pink};
  }

  .wrapper {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;

const Thumbnail = ({ image, setViewerImage }) => {
  const name = faker.name.firstName();
  return (
    <Item className="thumb" onClick={() => setViewerImage({ image, name })}>
      <div className="wrapper">
        <h2 className="dog-name">{name}</h2>
        <img className="image" src={image} alt={name} />
      </div>
    </Item>
  );
};

Thumbnail.propTypes = {
  image: string.isRequired,
  setViewerImage: func.isRequired
};

export default Thumbnail;
