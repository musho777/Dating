import { Color } from '../../Color'
import * as S from './styles'
export const Button = ({
    width = 170,
    height = 45,
    top = 0,
    left = 0,
    bottom = 0,
    right = 0,
    title,
    onClick,
    disabled,
    type = 'dark'
}) => {
    const mood = Color(type)
    return <S.Button
        disabled={disabled}
        onClick={onClick}
        width={width}
        height={height}
        $top={top}
        $left={left}
        $bottom={bottom}
        $right={right}
        $bgcolor={mood.buttonBg}
        color={'#fff'}
        mood={type}
    >
        {title}
    </S.Button>
}