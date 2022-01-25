import styled from "styled-components";

export const SideBarArea = styled.aside` 
    min-width: ${props => props.expansible === false ? '50px' : '240px'};
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    background: #EEEEEE;

    @media (max-width: 468px){
        right: 0;
        top: unset;
        bottom: 0;
        height: auto;
        width: 100%;
        min-width: 100%;
    }
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

    @media (max-width: 468px){
        justify-content: space-around;
        margin: 0;
        flex-wrap: wrap;
        flex-direction: unset;

        a{
            flex: 1 0 auto;
        }
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

    @media (max-width: 468px){
        align-items: center;
        text-align: center;
        flex-wrap: unset;
        flex-direction: column;

        p{
            padding: 0;
            display: block!important;;
        }
    }
`;