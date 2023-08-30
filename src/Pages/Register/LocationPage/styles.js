import { styled } from "styled-components";

export const Location = styled.div`
width: ${props => props.width}px;
    padding: 4px 10px;
    min-width:190px;
    border: 1px solid #701454;
    border-radius:50px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: -7px -7px 30px 0px #22202E, 7px 7px 32px 0px #17161E;
    background:${props => props.$bgcolor};
`