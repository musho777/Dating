import { styled } from "styled-components";

export const Card = styled.div`
    width:500px;
    height:280px;
    border-radius: 50px;
    position: relative;
    `

export const Img = styled.img`
    border-radius: 50px;
    width:500px;
    height:280px;
`

export const CardWrapper = styled.div`
    height: 200px;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    width:500px;
`

export const Opacity = styled.div`
    width:500px;
    opacity: 0.6;
    background: white;
    height: 200px;
`

export const TextWrapper = styled.div`
    position: absolute;
    z-index: 2;
    left: 0;
    right: 0;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    gap: 20px;
`

export const Button = styled.button`
width:200px;
height:40px;
border-radius: 50px;
border: 4px solid #6A1551;
background: transparent;
cursor: pointer;
&:hover {
     background: linear-gradient(93deg, #3D2941 6.02%, #6A1551 96.01%);
     color:#fff
}
`