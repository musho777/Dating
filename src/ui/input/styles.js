import { styled } from "styled-components";

export const Input = styled.input`
    width: ${props => props.width}px;
    padding: 4px 10px;
    margin-top:${props => props.$top}px;
    margin-left:${props => props.$left}px;
    margin-bottom:${props => props.$bottom}px;
    margin-right:${props => props.$right}px;
    border: 1px solid #701454;
    border-radius:50px;
    box-shadow: -7px -7px 30px 0px #22202E, 7px 7px 32px 0px #17161E;
    background:${props => props.$bgcolor};
    outline: none;
    color:${props => props.color};
    font-family: DejaVu Serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;

    &::placeholder {
        color: #797878;
    };
    @media (max-width: 425px) {
        width:80%;
    }
`