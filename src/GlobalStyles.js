import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
    }
    body {
      box-sizing: border-box;
      background-color: #222528;
    }
`;

export default GlobalStyle;