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
    max-width: 30%;
    flex-direction: column;
    justify-content: center;
`;

export const Card = styled.div`
    border-radius: 9px;
    background: white;
    min-width: 30%!important;
    padding: 2.3em;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    margin-bottom: 1%;

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
`;

export const LinkArea = styled.div` 
    display: flex;
    justify-content: space-between;

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

export const SideCard = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const CardApi = styled.div` 
    border-radius: 9px;
    background: white;
    padding: 1.5em 1.3em;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    h1{
        margin: 0;
        font-size: 1rem;
    }
`;