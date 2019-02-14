import React from "react";
import styled from "styled-components";
import { func, shape } from "prop-types";

const ViewerWrapper = styled.figure`
  background-color: rgba(0, 0, 0, 0.8);
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: ${props => props.theme.standardPadding};
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  cursor: pointer;
  display: flex;

  .full-size-image {
    max-width: 100%;
    max-height: 100%;
    display: block;
    margin: 0 auto;
    object-fit: contain;
    cursor: default;
  }


  .close-button {
    font-size: 4rem;
    color: #FFF;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
    position: absolute;
    top: 2rem;
    right: ${props => props.theme.standardPadding};
  }
`;

const Viewer = ({ viewerImage, setViewerImage }) => {
  return (
    <ViewerWrapper onClick={event => setViewerImage({ image: false, event })} role="dialog" aria-hidden={!viewerImage.image}>
      <img
        className="full-size-image"
        src={viewerImage.image}
        alt={`Hi, my name is ${viewerImage.name}`}
      />
      <span className="close-button" aria-label="Close">&times;</span>
    </ViewerWrapper>
  );
};

Viewer.propTypes = {
  viewerImage: shape().isRequired,
  setViewerImage: func.isRequired
};

export default Viewer;
