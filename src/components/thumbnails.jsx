import React from "react";
import styled from "styled-components";
import { arrayOf, string, func } from "prop-types";

import Thumbnail from "./thumbnail";

const ThumbContainer = styled.ul`
  margin: 8rem ${props => props.theme.standardPadding};
  padding: 0;
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(28rem, 1fr));
  grid-gap: ${props => props.theme.standardPadding};
`;

const Thumbnails = ({ thumbs, setViewerImage }) => {
  return (
    <main>
      <ThumbContainer>
        {thumbs.map(image => {
          return (
            <Thumbnail
              key={image}
              image={image}
              setViewerImage={setViewerImage}
            />
          );
        })}
      </ThumbContainer>
    </main>
  );
};

Thumbnails.propTypes = {
  thumbs: arrayOf(string).isRequired,
  setViewerImage: func.isRequired
};

export default Thumbnails;
