import styled from "styled-components";

export const Section = styled.section` 
    max-width: 1240px;
    margin: auto;
    padding: 0 4.6em;

    img{
        max-width: 350px;
        position: absolute;
        bottom: 0;
        left: 0;
        filter: opacity(0.8);
    }

    @media (max-width: 468px){
        padding: 0 1.2em;

        img{
            max-width: 310px;
            z-index: 0;
            bottom: 9.7em;
            left: 11em;
            filter: opacity(0.4);
        }
    }
`;

export const ContentArea = styled.div` 
    padding-top: 4em;
    display: flex;
    flex-wrap: wrap;

    @media (max-width: 468px){
        padding-top: 2em;
    }
`;

export const LeftSide = styled.div`
    width: 50%;
    padding-top: 1.7em;

    h1{
        color: #1D2B4B;
        font-size: 2.3rem;
        margin: 0;
    }

    p{
        max-width: 80%;
        color: #2c2c2c;
        font-size: 1.1rem;
        line-height: 1.7rem;
        font-weight: 500;
    }

    @media (max-width: 468px){
        width: 100%;
        padding-top: 0;

        p{
            z-index: 1;
            position: relative;
            text-align: justify;
        }
    }
`;

export const RightSide = styled.div`
    width: 50%;

    @media (max-width: 468px){
        width: 100%;
        padding: 3em 1em;
    }
`;

export const Card = styled.div`
    border: 1px solid #6bb0ce61;
    background: rgba(233, 240, 242, 0.28);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    box-sizing: border-box;
    padding: 2.3em 1.3em;
    max-width: 65%;
    margin: auto;

    h1{
        margin: 0;
        color: #1d2b4b;
    }

    @media (max-width: 468px){
        max-width: 100%;
        text-align: center;
        p{
            text-align: justify;
        }
    }
`;

export const CardButton = styled.button`
    margin-top: auto;
    background: #1D2B4B;
    border: none;
    border-radius: 15px;
    padding: .7em 2em;
    color: white;
    font-weight: 700;
    transition: all ease .3s;

    :hover{
        background: white;
        color: #1D2B4B;
    }

    @media (max-width: 468px){
        width: 100%;
        padding: .9em 0;
    }
`;