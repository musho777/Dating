import { styled } from "styled-components";

export const Layout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-top: calc(100vh - 580px);
    @media screen and (max-width: 768px) {
        margin-top: calc(100vh - 540px)
    }
`
export const Title = styled.p`
    color: ${props => props.color};
    font-size:80px;
    font-Weight:700;
`