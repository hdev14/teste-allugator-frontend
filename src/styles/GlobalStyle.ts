import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`

*, *::before, *::after {
  padding: 0;
  margin: 0;
  outline: 0;
  box-sizing: border-box;
}

html {
  font-size: 10px; /* 1rem */
}

body {
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
  overflow-x: hidden;
}

a {
  text-decoration: none;
}

input, textarea, button {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.4rem;
}

h1 {
  font-size: 2.8rem;
}

h2 { font-size: 2.4rem; }

h3 { font-size: 2rem; }

p {
  text-transform: initial;
  font-size: 1.6rem;
}
`;

export default Global;
