import styled from "styled-components";

export const Card = styled.div` 
    background: white;
    border-radius: 7px;
    height: 100%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    cursor: pointer;
    transition: all ease .4s;
    padding: 2em 1.3em;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    background: linear-gradient(to left, #8ecde9, #add4e5);

    h5{
        margin: 0;
        font-size: 1.9rem;
        color: #4e4e4e;
    }

    p{
        margin: 0;
        font-size: .7rem;
        padding-bottom: 3em;
    }

    :hover{
        margin-top: -.5em;
    }
`;