import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyles = createGlobalStyle`
${reset}
;
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');
* {
    box-sizing: border-box;
    color: #333;
}
html {
    font-size: 16px;
}
h1, h2, h3, h4, p, span, button, input, textarea, select, a, div {
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: normal;
}
body {
    overflow-x: hidden;
    line-height: 1.2;
}
a {
    text-decoration: none;
    color: inherit
}
button {
    padding: none;
    cursor: pointer;
    background: none;
}
button, input {
    border: none;
    outline: none;
}
`;
