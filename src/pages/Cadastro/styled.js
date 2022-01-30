import styled from "styled-components";
import { keyframes } from "styled-components";

export const Section = styled.section` 
    margin: auto;
    max-width: 1240px;
`;

export const ContentArea = styled.div` 
    display: flex;
    justify-content: center;
`;

export const Card = styled.div` 
    border-radius: 9px;
    background: white;
    padding: 1.5em 1.3em;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    width: 100%;
    max-width: 70%;

    h1{
        margin-top: 0;
        color: black;
        font-size: 2rem;
        text-align: left;
        letter-spacing: .08em;
    }

    button{
        background: black;
        height: 50px;
        color: white;
        font-weight: 700!important;
        font-family: "Inter"!important;
        border: 0!important;
    }

    button:hover{
        background: rgba(0,0,0, 0.8) ;
        border: 0!important;
    }
`;

export const animate = keyframes` 
    to {
        transform: rotate(0deg);
    }
    from {
        transform: rotate(-360deg);
    }
`;

export const Loading = styled.div` 
    height: 20em;
    display: flex;
    justify-content: center;
    align-items: center;

    svg{
        font-size: 2.3em;
        animation: ${animate} 1.4s linear infinite;
    }
`;