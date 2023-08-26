import { useState } from 'react'
import { Color } from '../../Color'
import * as S from './styles'
import { CheckBoxSvg } from '../../Components/svg'
export const ChackBox = ({ text, checked, onClick }) => {
    // const [active, setActive] = useState('')
    const mood = Color('dark')
    return <S.CheckBox
        onClick={onClick}
        $activeColor={mood.checkBoxActiveColor}
        $active={checked}
        $bgColor={mood.bg}
    >
        <S.Text color={mood.color}>{text}</S.Text>
        <CheckBoxSvg active={checked} />
    </S.CheckBox>
}