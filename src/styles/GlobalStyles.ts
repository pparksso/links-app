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
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: normal;
}

body {
    overflow-x: hidden;
}
a {
    text-decoration: none;
    color: inherit
}
button {
    padding: 0;
    cursor: pointer;
    background: none;
}
button, input {
    border: none;
    outline: none;
}
img {
    max-width: 100%;
    height: auto;
}
.img-box {
    width: 100%;
}
`;
