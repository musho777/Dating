import { styled } from "styled-components";

export const Button = styled.button`
    width: ${props => props.width}px;
    height:${props => props.height}px;
    margin-top:${props => props.$top}px;
    margin-left:${props => props.$left}px;
    margin-bottom:${props => props.$bottom}px;
    margin-right:${props => props.$right}px;
    background:${props => props.$bgcolor};
    color:${props => props.color};
    border-radius:50px;
    border:none;
    box-shadow: -7px -7px 30px 0px #22202E, 7px 7px 32px 0px #17161E;
    font-size:20px;
    font-family: DejaVu Serif;
    font-weight:400;
    @media (max-width: 320px) {
      width:80%;
    };
    &:hover {
        background:linear-gradient(140deg, #F09 0%, #22202E 100%);
      }
     &:disabled {
      background-color: gray;
      cursor: not-allowed;
      pointer-events: none;
  }
`