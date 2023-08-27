import * as S from './styles'
import { DropdownDown, DropdownUp } from '../svg'
import { useState } from 'react'

export const DropDown = ({ title, width, getData, data = [], selected }) => {
    console.log(width)
    const [openDropdown, setOpenDropdown] = useState(false)
    function handleDropdownClick() {
        setOpenDropdown(!openDropdown)
    }

    return <S.EachDate width={width} onClick={() => handleDropdownClick()}>
        <S.EachValue>{selected ? selected : title}</S.EachValue>
        {openDropdown ? <DropdownUp /> : <DropdownDown />}
        {openDropdown &&
            <S.DropdownListPosition width={width}>
                <S.EachDropdownList>
                    {data.map((e, i) => (
                        <S.EachDropdownField key={i} onClick={() => getData(e)}>{e}</S.EachDropdownField>
                    ))}
                </S.EachDropdownList>
            </S.DropdownListPosition>
        }
    </S.EachDate>
}