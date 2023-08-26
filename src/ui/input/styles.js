import { styled } from "styled-components";

export const Input = styled.input`
    width: ${props => props.width}px;
    height:${props => props.height}px;
    margin-top:${props => props.$top}px;
    margin-left:${props => props.$left}px;
    margin-bottom:${props => props.$bottom}px;
    margin-right:${props => props.$right}px;
    border:1px solid #F09;
    border-radius:50px;
    box-shadow: -7px -7px 30px 0px #22202E, 7px 7px 32px 0px #17161E;
    padding:0 10px;
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
    @media (max-width: 320px) {
        width:80%;
    }
`