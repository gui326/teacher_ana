import styled from "styled-components";

export const HeaderArea = styled.header`
    width: 100%;
`;

export const NavBar = styled.div`
    box-sizing: border-box;
    width: 100%;
    position: relative;
    top: 0;
    right: 0;
    left: 0;
    justify-content: space-around;
    display: flex;
    max-width: 1240px;
    margin: auto;
    padding: 1.5rem 0;

    @media (max-width: 468px){
        padding: 1.5rem 1rem;
    }
`;

export const LogoArea = styled.div` 
    text-align: left;
    width: 100%;
`;

export const MenuArea = styled.div` 
    display: flex;
    flex-wrap: wrap;
    text-align: right;
    width: 100%;
`;

export const Menu = styled.ul`
    display: flex;
    margin-left: auto;
    align-self: center;

    li{
        margin: 0 1em;
        font-weight: 500;
        color: #1D2B4B;
    }

    @media (max-width: 468px){
        display: none;
    }
`;

export const MenuMobile = styled.div`
    display: none;
    margin-left: auto;
    align-self: center;
    svg{
        font-size: 2em;
    }

    @media (max-width: 468px){
        display: block;
    }
`;