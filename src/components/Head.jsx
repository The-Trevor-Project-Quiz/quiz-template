import React from 'react';
import Helmet from 'react-helmet';

import("../scss/style.scss")

function Head(props){

    const { description, shareImage } = props.metadata;
    return (
      <>
        <Helmet>
          {/* General tags */}
          <title>{props.title}</title>
          <meta name="description" content={ description } />
          <meta name="image" content={ `https://confident-archimedes-ed555e.netlify.com/img/${shareImage.relativePath}`} />

          {/* OpenGraph tags */}
          <meta property="og:url" content="/"/>
          <meta property="og:title" content={props.title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={ `https://confident-archimedes-ed555e.netlify.com/img/${shareImage.relativePath}`} />

          {/* Twitter Card tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={props.title} />
          <meta name="twitter:description" content={ description } />
          <meta name="twitter:image" content={ `https://confident-archimedes-ed555e.netlify.com/img/${shareImage.relativePath}`} />
        </Helmet>
      </>
      );
    }

export default Head;