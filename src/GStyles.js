import { styled } from "styled-components";

export const Text = styled.p`
    color: ${props => props.color};
    font-size:${props => props.size ? props.size : 18}px;
    font-Weight:400;
    font-family:DejaVu Serif;
    line-height:30px;
    width:450px;
    text-align: center;
    @media (max-width: 450px) {
        width:80%;
        margin: auto;
    };
`
export const TextBold16 = styled.p`
    color: ${props => props.color};
    font-family: DejaVu Serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`
export const Text2 = styled.p`
    color: ${props => props.color};
    font-size:${props => props.size ? props.size : 18}px;
    font-Weight:400;
    font-family:DejaVu Serif;
    line-height:30px;
    text-align: center;
    margin-top:${props => props.top}px;
`
export const Text700 = styled.p`
    color: ${props => props.color};
    font-size:${props => props.size ? props.size : 18}px;
    font-Weight:700;
    font-family:DejaVu Serif;
    line-height:30px;
    text-align: center;
`
export const TextPolicy = styled.p`
    color: ${props => props.color};
    font-size:${props => props.size ? props.size : 18}px;
    font-Weight:400;
    font-family:DejaVu Serif;
    line-height:30px;
    text-align: center;
    margin-top:${props => props.top}px;
    @media (max-width: 450px) {
    font-size:7px
    };
`