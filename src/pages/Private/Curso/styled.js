import styled from "styled-components";

export const Content = styled.div` 
    h1{
        margin: 0;
    }

    p{
        padding-top: 1em;
        margin: 0;
    }
`;

export const CardPrincipais = styled.div` 
    background: white;
    box-sizing: border-box;
    padding: 1.5em 1.8em;
    border-radius: 9px;
    margin-top: 2em;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export const Heading = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const HeadingTitle = styled.div` 
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    h1{
        padding-left: .5em;
    }
`;

export const Card = styled.div` 
    border-radius: 9px;
    border: 1px solid #efefef;
    box-sizing: border-box;
    padding: 1em;
    border-bottom: 3px solid #70C3E7;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    background: #fbfbfb;
    cursor: pointer;
    transition: all ease .3s;

    p{
        margin: 0;
        font-size: .8rem;
        padding-top: 1.2em; 
        padding-bottom: 1em;
    }

    :hover{
        border-right: 7px solid #70C3E7;
        border-bottom: 7px solid #70C3E7;
        margin-top: -5px;
        margin-left: -7px;
    }
`;

export const HeadTitle = styled.div` 
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    h6{
        font-size: .8rem;
        margin: 0;
    }
`;