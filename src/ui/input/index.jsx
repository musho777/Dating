import { Color } from '../../Color'
import * as S from './styles'

export const Input = ({
    width = 300,
    height = 40,
    radius = 50,
    top = 0,
    left = 0,
    bottom = 0,
    right = 0,
    placeholder,
    onChange = () => { },
    value
}) => {
    const mood = Color('dark')
    return <S.Input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        width={width}
        height={height}
        radius={radius}
        $top={top}
        $bottom={bottom}
        $left={left}
        $right={right}
        $bgcolor={mood.bg}
        color={mood.color}
    />
}