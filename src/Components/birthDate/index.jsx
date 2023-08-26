import * as S from './styles'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { DropdownDown, DropdownUp } from '../svg'

export const BirthDate = () => {
    const months = useSelector(st => st.Register_reducer.months)
    const [days, setDays] = useState(Array.from({ length: 31 - 1 + 1 }, (_, index) => 1 + index))
    const [years] = useState(Array.from({ length: new Date().getFullYear() - 1900 + 1 }, (_, index) => 1900 + index).reverse())
    const [openDropdown, setOpenDropdown] = useState({
        month: false,
        day: false,
        year: false
    })
    const [selectedValues, setSelectedValues] = useState({ /* es a uxarkvum backend */
        month: 'Month',
        monthValue: '',
        day: 'Day',
        year: 'Year'
    })

    useEffect(() => {
        if (selectedValues.month === 'February') {
            setDays(Array.from({ length: 29 - 1 + 1 }, (_, index) => 1 + index))
        } else {
            setDays(Array.from({ length: 31 - 1 + 1 }, (_, index) => 1 + index))
        }
    }, [selectedValues.month])

    function handleDropdownClick(field) {
        if (field === 'month' && !openDropdown.month) {
            setOpenDropdown({
                month: true,
                day: false,
                year: false
            })
        } else if (field === 'day' && !openDropdown.day) {
            setOpenDropdown({
                month: false,
                day: true,
                year: false
            })
        } else if (field === 'year' && !openDropdown.year) {
            setOpenDropdown({
                month: false,
                day: false,
                year: true
            })
        } else {
            setOpenDropdown({
                month: false,
                day: false,
                year: false
            })
        }
    }

    function handleDropdownSelect(field, item) {
        if (field === 'month') {
            setSelectedValues({ ...selectedValues, month: item.title, monthValue: item.value })
        } else if (field === 'day') {
            setSelectedValues({ ...selectedValues, day: item })
        } else if (field === 'year') {
            setSelectedValues({ ...selectedValues, year: item })
        }
    }

    return (
        <S.Birthday>
            <S.EachDate width={'148px'} onClick={() => handleDropdownClick('month')}>
                <S.EachValue>{selectedValues.month}</S.EachValue>
                {openDropdown.month ? <DropdownUp /> : <DropdownDown />}
                {openDropdown.month &&
                    <S.DropdownListPosition width={'148px'}>
                        <S.EachDropdownList>
                            {months.map((e, i) => (
                                <S.EachDropdownField key={i} onClick={() => handleDropdownSelect('month', e)}>{e?.title}</S.EachDropdownField>
                            ))}
                        </S.EachDropdownList>
                    </S.DropdownListPosition>
                }
            </S.EachDate>

            <S.EachDate width={'103px'} onClick={() => handleDropdownClick('day')}>
                <S.EachValue>{selectedValues.day}</S.EachValue>
                {openDropdown.day ? <DropdownUp /> : <DropdownDown />}
                {openDropdown.day &&
                    <S.DropdownListPosition width={'103px'}>
                        <S.EachDropdownList>
                            {days.map((e, i) => (
                                <S.EachDropdownField key={i} onClick={() => handleDropdownSelect('day', e)}>{e}</S.EachDropdownField>
                            ))}
                        </S.EachDropdownList>
                    </S.DropdownListPosition>
                }
            </S.EachDate>

            <S.EachDate width={'116px'} onClick={() => handleDropdownClick('year')}>
                <S.EachValue>{selectedValues.year}</S.EachValue>
                {openDropdown.year ? <DropdownUp /> : <DropdownDown />}
                {openDropdown.year &&
                    <S.DropdownListPosition width={'116px'}>
                        <S.EachDropdownList>
                            {years.map((e, i) => (
                                <S.EachDropdownField key={i} onClick={() => handleDropdownSelect('year', e)}>{e}</S.EachDropdownField>
                            ))}
                        </S.EachDropdownList>
                    </S.DropdownListPosition>
                }
            </S.EachDate>
        </S.Birthday>
    )
}