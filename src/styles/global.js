import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
    }
    body {
        font-family: sans-serif;
        background-color: #f2f2f2;
    }
`;

export default Global;