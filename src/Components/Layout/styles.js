import { styled } from "styled-components";
import img from '../../utils/img/image.png'

export const Layout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background:url(${img});
    background-size: cover;
    justify-content: space-between;
    background-repeat: no-repeat;
    background-position: center center;
    min-height:100vh;
`
export const Title = styled.p`
    color: ${props => props.color};
    font-size:50px;
    font-Weight:700;
`
export const LogOut = styled.p`
    color:${props => props.color};
    font-family: DejaVu Serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration-line: underline;
    position: absolute;
    bottom: 20px;
`
export const TextWrapper = styled.div`
    position: absolute;
    bottom: 20px;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: #ffff;
    align-items: center;
    opacity: 80%;
    padding: 30px;
    @media screen and (max-width: 768px) {
        width:90%
    }
`
export const PolicyWrapper = styled.div`
    justify-content: center;
    display: flex;
    margin-top: 10px;
`