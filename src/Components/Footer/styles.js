import { styled } from "styled-components";

export const Footer = styled.div`
    width: 100%;
    box-shadow: 10px -10px 10px 0px rgba(0, 0, 0, 0.20);
    margin-top: 100px;
    padding: 40px;
`

export const FooterContent = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`

export const EachFooterRow = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

export const FooterLink = styled.span`
    color: #FFF;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-decoration-line: underline;
    cursor: pointer;
`

export const FooterText = styled.span`
    color: #FFF;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`