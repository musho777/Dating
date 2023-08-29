import { styled } from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-wrap:wrap;
    width: 500px;
    @media (max-width: 425px) {
        width:100%;
        padding:5px;
        justify-content: center;
        margin:0 10px;
    };
`