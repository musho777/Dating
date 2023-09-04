import { styled } from "styled-components";
import img from '../../utils/img/bg1.png'
export const Block1 = styled.div`
 background:url(${img});  
 width: 100%;
 min-height: 750px;
 background-size: cover;
 justify-content: space-between;
 background-repeat: no-repeat;
 background-position: center center; 
 position: relative;   
`
export const Opacity = styled.div`
opacity: 0.6;
position: absolute;
width: 100%;
height: 100%;
background-color: white;
`

export const Wrapper = styled.div`
display: flex;
    justify-content: space-around;
    width: 100%;
    margin-bottom:80px
`

export const TextWrapper = styled.div`
    width:500px;
    text-align:'start'
`

export const ImgWrapper = styled.div`
    position: relative;
    width:300px;
    height:200px
`

export const Border = styled.div`
    border: 2px solid;
    width:260px;
    height:305px;
    position: absolute;
    top: -55px;
    right: ${props => props.right}px;
`

export const CardWrapper = styled.div`
    margin:100px 0;
        display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`