import styled from "styled-components";

export const Section = styled.section` 
    max-width: 1240px;
    margin: auto;
    padding: 1.4em 2em;
`;

export const ContentArea = styled.div`
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: center;
`;

export const Card = styled.div`
    border-radius: 9px;
    background: white;
    min-width: 30%!important;
    padding: 2.3em;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    h1{
        margin-top: 0;
        color: #1D2B4B;
        font-size: 1.2rem;
        text-align: left;
        letter-spacing: .08em;
    }

    button{
        background: #1D2B4B;
        color: white;
        font-weight: 500;
        font-family: 'Inter';
        border: 0;
    }

    button:hover{
        background: #1d2b4bb8;
        color: white;
        font-weight: 500;
        border: 0;
    }

    p{
        margin-top: .3em!important;
        text-align: right;
        margin: 0;
        transition: all ease .3s;
    }

    p:hover{
        color: #c6c6c6;
    }
`;