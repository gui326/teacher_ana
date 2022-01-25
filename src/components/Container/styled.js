import styled from "styled-components";

export const Content = styled.section` 
    width: 100%;
    margin-left: ${props => props.expansible === false ? '75px' : '240px'};
    padding: 1.5em;
`;