import { createGlobalStyle } from 'styled-components';

export const GlobalStylePrivate = createGlobalStyle` 
    body{
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        padding: 0;
        scroll-behavior: smooth;
        box-sizing: border-box;
        background: #F7F7F8;
        min-height: 100vh;
        overflow-x: hidden;
    }
`;