import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 16px;
  }

  @media screen and (min-width: 460px) {
    html {
      font-size: 20px;
    }
  }

  body {
    margin: 0;
  }

  a {
    color: inherit;
  }

  @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Serif:700,700i');
`;
