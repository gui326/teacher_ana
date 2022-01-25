import styled from "styled-components";

export const Content = styled.section` 
    width: 100%;
    margin-left: ${props => props.expansible === false ? '75px' : '240px'};
    padding: 1.5em;

    @media (max-width: 468px){
        margin-left: 0;
        padding: 1.2rem;
    }
`;