import { styled } from "styled-components";

export const Block = styled.div`
    width: 600px;
    padding: 15px;
    border: 1px solid #F09;
    border-radius: 16px;
    background:${props => props.bg};
    @media (max-width: 768px) {
        width:100%;
    }
    &:hover {
        background:#F09;
    }
`