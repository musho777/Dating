import { styled } from "styled-components";

export const FGBButton = styled.button`
    border-radius: 50px;
    background: #1776F2;
    box-shadow: -7px -7px 30px 0px #22202E, 7px 7px 32px 0px #17161E;
    padding:7px 20px;
    display: flex;
    border: none;
    align-items: flex-end;
    justify-content: space-between;
    width: 230px;
    color: #FFF;
    font-family: Mardoto;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin:20px;
    @media (max-width: 425px) {
        width:40px;
        padding:5px;
        justify-content: center;
        margin:0 10px;
    };
`
export const Text = styled.p`   
    margin-bottom: 3px;
    @media (max-width: 425px) {
        display:none
    };
`