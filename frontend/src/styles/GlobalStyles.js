import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --color-black: #000;
    --color-white: #fff;
    --color-light-blue: #009dd9;
    --color-medium-blue: #0066b2;
    --color-dark-blue: #0b2d71;

    

    --color-primary: #507ef5;
    --color-secondary: #356dfb;
    --gray: #bdbec1;
    --gray2: #dedfec;
    --gray3: #c4c4c4;
    --gray4: #eee;
    --bgColorIcon: #ddd;
    --subtitle-text: #777;
    --title2: #444;
    --warning: #f13843;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }

  body {
    max-width: 2000px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    border: 2px solid red;
    overflow-x: hidden;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  a {
    text-decoration: none;
    color: #000;
  }

  button {
    border: none;
    outline: none;
    cursor: pointer;
    :focus {
      border: none;
     outline: none;
    }
  }

  ul li {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  input {
    border: none;
    outline: none;

    &:focus {
      border: none;
    outline: none;
    }
  }
`;
