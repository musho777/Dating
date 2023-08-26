import { useState } from 'react'
import { Color } from '../../Color'
import { CheckBoxSvg } from '../../Svg/CheckBoxSvg'
import * as S from './styles'
export const ChackBox = ({ text }) => {
    const [active, setActive] = useState('')
    const mood = Color('dark')

    return <S.CheckBox
        onClick={() => setActive(!active)}
        $activeColor={mood.checkBoxActiveColor}
        $active={active}
        $bgColor={mood.bg}
    >
        <S.Text color={mood.color}>{text}</S.Text>
        <CheckBoxSvg active={active} />
    </S.CheckBox>
}