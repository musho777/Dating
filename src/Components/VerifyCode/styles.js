import { styled } from "styled-components";

export const VerfyCode = styled.div`
    width:300px;
    & > :first-child {
        border-radius:30px 0 0 30px;
        border-left:1px solid #F09;
    }
    & > :last-child {
        border-radius:0 30px 30px 0;
    }
    display: flex;
    justify-content: center;
    @media (max-width: 425px) {
        width:80%;
        
    };
`
export const Child = styled.input`
    border:1px solid #F09;
    border-left:none;
    background:${props => props.$bgcolor};
    color:${props => props.color};
    width:17%;
    padding: 8px 10px;
    outline:none;
    font-size:20px;
    font-weight:400;
    font-family:DejaVu Serif;
    text-align: center;
    -moz-appearance: textfield;
    appearance: textfield;
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
`