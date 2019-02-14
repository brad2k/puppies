import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";
import "normalize.css";

import Header from "../components/header";
import Thumbnails from "../components/thumbnails";
import Viewer from "../components/viewer";
import Footer from "../components/footer";
import { theme, GlobalStyles } from "../css-bootstrap";

function importImagePaths(context) {
  return context.keys().map(item => context(item));
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      thumbs: []
    };

    this.setViewerImage = this.setViewerImage.bind(this);
  }

  componentDidMount() {
    this.setState({
      thumbs: importImagePaths(require.context("../images/thumbs"))
    });
  }

  setViewerImage({ image, name, event }) {
    if (event && event.target.tagName === "IMG") {
      return;
    }

    this.setState({ viewerImage: { image, name } }, () => {
      document.body.classList.toggle("disable-scroll");
    });
  }

  render() {
    const { thumbs, viewerImage } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <Fragment>
          <GlobalStyles />
          <Helmet
            htmlAttributes={{
              lang: "en"
            }}
          >
            <title>The Puppy Emporium</title>
            <meta
              name="description"
              content="Your source for the cutest puppies in search of a loving home."
            />
            {/* more SEO/social media tag options 
              <meta property="og:title" content="" />
              <meta property="og:description" content="" />
              <meta property="og:image" content="" />
              <meta property="og:url" content="" />
            */}
          </Helmet>
          <Header />
          {thumbs ? (
            <Thumbnails thumbs={thumbs} setViewerImage={this.setViewerImage} />
          ) : (
            <p>
              <span role="img" aria-label="Dog emoji">
                🐶
              </span>{" "}
              Loading…
            </p>
          )}
          {viewerImage && viewerImage.image && (
            <Viewer
              viewerImage={viewerImage}
              setViewerImage={this.setViewerImage}
            />
          )}
          <Footer />
        </Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
