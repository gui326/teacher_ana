import { createGlobalStyle } from 'styled-components';

export const GlobalStylePublic = createGlobalStyle` 
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
        background: linear-gradient(180deg, rgba(105, 194, 232, 0.46) 0%, #69C2E8 100%);
        min-height: 100vh;
        overflow-x: hidden;
    }
`;