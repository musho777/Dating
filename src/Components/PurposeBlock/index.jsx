import * as S from './styles'
import * as G from '../../GStyles'
import { Color } from '../../Color'
import { useEffect, useState } from 'react'

export const PurposeBlock = ({ active, title, text, onClick }) => {
    const mood = Color('dark')
    const [color, setColor] = useState({
        color: mood.textColor,
        bg: mood.bg
    })
    useEffect(() => {
        if (active) {
            setColor({
                color: '#000',
                bg: "#F09"
            })
        }
        else {
            setColor({
                color: mood.textColor,
                bg: mood.bg
            })
        }
    }, [active])
    return <S.Block onClick={onClick}>
        <G.Text700 style={{ textAlign: 'start' }} size={24} color={'#000'}>{title}</G.Text700>
        <G.Text700 style={{ textAlign: 'start' }} size={16} color={'#000'}>{text}</G.Text700>
    </S.Block>
}