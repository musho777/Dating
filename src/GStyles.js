import { styled } from "styled-components";

export const Text = styled.p`
    color: ${props => props.color};
    font-size:18px;
    font-Weight:400;
    font-family:DejaVu Serif;
    line-height:30px;
    width:450px;
    text-align: center;
    @media (max-width: 450px) {
        width:80%;
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