import styled from "styled-components";

export const SideBarArea = styled.aside` 
    min-width: ${props => props.expansible === false ? '50px' : '240px'};
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    background: #EEEEEE;
    box-sizing: border-box;
`;

export const MenuArea = styled.ul` 
    margin-top: 6em;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-self: center;
    transition: all ease .3s;

    a{
        color: black;
        display: block;
        transition: outline ease .5s;
        transition: background  ease .2s;
    }

    a:hover{
        background: lightgray;
    }

    a:active{
        outline: 1px solid white;
    }
`;

export const Menu = styled.li` 
    list-style: none;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    padding: .9em 1.6em;

    p{
        margin: 0;
        padding-left: 2em;
        align-self: center;
        display: ${props => props.expansible === false ? 'none' : ''};
    }
`;