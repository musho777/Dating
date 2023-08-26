import { styled } from "styled-components";

export const Layout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`
export const Title = styled.p`
    color: ${props => props.color};
    font-size:80px;
    font-Weight:700;
`