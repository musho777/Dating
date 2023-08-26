import { Color } from '../../Color'
import * as S from './styles'
export const Button = ({
    width = 170,
    height = 45,
    top = 50,
    left = 0,
    bottom = 20,
    right = 0,
    title,
    onClick,
    disabled
}) => {
    const mood = Color('dark')
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
        color={mood.color}
    >
        {title}
    </S.Button>
}