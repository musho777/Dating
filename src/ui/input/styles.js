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
    background:${props => props.$bgcolor};
    outline: none;
    color:${props => props.color};
    font-family: DejaVu Serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    type: ${props => props.type}

    &::placeholder {
        color: #797878;
    };
`