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

    :last-child{
        margin-bottom: 5em;
    }
`;

export const Heading = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    h3{
        margin: 0;
        align-self: center;
    }
`;

export const HeadingTitle = styled.div` 
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    h1{
        padding-left: .5em;
    }
`;

export const Text = styled.p`
    font-size: .9rem;
    text-align: justify;
    line-height: 1.7em;
    padding-top: 0!important;
    max-width: 90%;
`;

export const Info = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-self: center;
    align-items: center;
    justify-content: left;
    padding-bottom: .8em;

    p{
        padding: 0;
        padding-left: .5em;
        align-items: center;
    }
`;

export const FooterArea = styled.div`
    padding-top: 2em;
    padding-bottom: 1em;
    text-align: center;
`;
