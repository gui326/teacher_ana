import styled from "styled-components";

export const HeaderArea = styled.header` 
    width: 100%;
    height: 3.6em;
`;

export const NavBar = styled.div` 
    background: white;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    padding: .5em 1.5em;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
`;

export const LogoArea = styled.div` 
    align-items: center;
    display: flex;

    img{
        margin-left: 1em;
        max-height: 42px;
        width: auto;
    }

    svg{
        cursor: pointer;
        border-radius: 50px;
        transition: outline ease .5s;
        transition: background ease .2s;
    }

    svg:active{
        background: #f1f1f1;
        outline: 4px solid #f1f1f1;
    }
`;

export const ContentArea = styled.div` 
    align-self: center;

    svg{
        font-size: 38px;
    }

    :hover{
        color: black;
    }
`;