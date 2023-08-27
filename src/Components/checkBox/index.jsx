import * as S from './styles'
import * as G from '../../GStyles'
import { Color } from '../../Color'
import { CheckBoxSvg2 } from '../svg'
export const CheckBox = ({ text, checked, onClick }) => {
    const mood = Color('mood')

    return <S.CheckBox onClick={onClick}>
        <CheckBoxSvg2 active={checked} />
        <G.Text2 style={{ textAlign: 'start', marginLeft: 5 }} size={10} color={mood.textColor}>{text}</G.Text2>
    </S.CheckBox>
}