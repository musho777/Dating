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
    justify-content: space-between;
    width: 100%;
    margin-bottom:130px
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
    width:260px;
    height:305px;
    position: absolute;
    top: -55px;
    right: ${props => props.right ? props.right : 0}px;
    left: ${props => props.left ? props.left : 0}px;
    border-radius: 4px;
    border: 4px solid #6A1551;
`

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    margin: 100px auto;
`
export const PackageWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    max-width: 1200px;
    margin: 0 auto;
`

export const EachPackage = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
`

export const EachPackageTop = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`

export const PackageTitle = styled.span`
    color: ${props => props.color}
    font-family: DejaVu Serif;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

export const EachPackageText = styled.p`
    color: #FFF;
    font-family: DejaVu Serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px; 
    max-width: 420px;
`