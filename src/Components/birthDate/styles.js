import { styled } from "styled-components"

export const Birthday = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`

export const EachDate = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: ${props => props.width};
    height: 42px;
    cursor: pointer;
    border: 1px solid #FF0099;
    border-radius: 50px;
    padding: 6px;
    padding-left: 10px;
    position: relative;
`

export const EachValue = styled.span`
    color: #FFF;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
`

export const DropdownListPosition = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: ${props => props.width};
    border: 1px solid #FF0099;
    border-radius: 1px 1px 20px 20px;
    position: absolute;
    padding: 22px 0 10px;
    border-top: none;
    max-height: 210px;
    top: 20px;
    left: -1px;
    height: 210px;
`

export const EachDropdownList = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow-y: auto;
`

export const EachDropdownField = styled.span`
    color: #FFF;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    width: 100%;
    text-align: start;
    padding-left: 10px;
    cursor: pointer;
    border-radius: 10px;
    &:hover {
        background: #FF0099;
    }
`