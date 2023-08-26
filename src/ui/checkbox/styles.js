import { styled } from "styled-components";

export const CheckBox = styled.div`
    width: 300px;
    height:50px;
    border-radius:50px;
    border:1px solid #F09;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    background:${props => props.$active ? props.$activeColor : props.$bgColor};
    &:hover {
        background:${props => props.$activeColor};
    }
    @media (max-width: 425px) {
        width:80%;
    }
`

export const Text = styled.p`
    color:${props => props.color};
    
`