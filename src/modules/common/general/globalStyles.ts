import { createGlobalStyle } from 'styled-components';
import theme from './theme';
// import LatoBoldWoff from './../../../assets/fonts/lato-bold-webfont.woff';
// import LatoBoldWoff2 from 'assets/fonts/lato-bold-webfont.woff2';
// import LatoRegularWoff from 'assets/fonts/lato-regular-webfont.woff';
// import LatoRegularWoff2 from 'assets/fonts/lato-regular-webfont.woff2';
// import LatoLightWoff from 'assets/fonts/lato-light-webfont.woff';
// import LatoLightWoff2 from 'assets/fonts/lato-light-webfont.woff2';

const GlobalStyle = createGlobalStyle`
 /* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default padding */
ul[class],
ol[class] {
  padding: 0; 
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Train+One&display=swap');


/* Set core body defaults */
body {
  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  background:${theme.colors.lightBlue};
  font-family: 'Poppins', sans-serif;
}

/* Remove list styles on ul, ol elements with a class attribute */
ul[class],
ol[class] {
  list-style: none;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img {
  max-width: 100%;
  display: block;
}

/* Natural flow and rhythm in articles by default */
article > * + * {
  margin-top: 1em;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}




`;

export default GlobalStyle;
