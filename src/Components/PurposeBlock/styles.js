import { styled } from "styled-components";

export const Block = styled.div`
    width: 600px;
    padding: 15px;
    border: 1px solid #F09;
    box-shadow: -7px -7px 30px 0px #22202E, 7px 7px 32px 0px #17161E;
    border-radius: 16px;
    background:${props => props.bg};
    @media (max-width: 768px) {
        width:80%;
    }
    &:hover {
        background:#F09;
    }
`