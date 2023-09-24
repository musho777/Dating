import { styled } from "styled-components";

export const Button = styled.button`
    width: ${props => props.width}px;
    height:${props => props.height}px;
    margin-top:${props => props.$top}px;
    margin-left:${props => props.$left}px;
    margin-bottom:${props => props.$bottom}px;
    margin-right:${props => props.$right}px;
    background:linear-gradient(142deg, #F09 -136.47%, #22202E 100%) !important;
    color:${props => props.color};
    border-radius:50px;
    border:${props => props.mood === 'light' ? "none" : "4px solid #6A1551"};
    font-size:20px;
    font-family: DejaVu Serif;
    font-weight:400;
    z-index: 1;
    cursor: pointer;
    border: none;
    &:hover {
        background:linear-gradient(140deg, #F09 0%, #22202E 100%);
      }
     &:disabled {
      color:#777;
      background-color: gray;
      cursor: not-allowed;
      pointer-events: none;
  }
`