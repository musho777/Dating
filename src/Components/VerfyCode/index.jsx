import { useRef, useState } from 'react';
import * as S from './styles'
import { Color } from '../../Color';
export const VerfyCode = () => {
    const [data, setData] = useState([
        { value: '', ref: useRef(null) },
        { value: '', ref: useRef(null) },
        { value: '', ref: useRef(null) },
        { value: '', ref: useRef(null) },
        { value: '', ref: useRef(null) },
        { value: '', ref: useRef(null) },
    ])
    const handleChange = (i, value) => {
        let item = [...data]
        if (value !== '') {
            item[i + 1]?.ref?.current?.focus();
        }
        if (value <= 9) {
            item[i].value = value
        }
        setData(item)
    }
    const handleKeyDown = (e, i) => {
        let item = [...data]
        if (e === 'Backspace' && item[i].value === '') {
            item[i - 1]?.ref?.current?.focus();
        }
        setData(item)
    }
    const mood = Color('dark')
    return <S.VerfyCode >
        {data.map((elm, i) => {
            return < S.Child
                key={i}
                type='number'
                ref={elm.ref}
                value={elm.value}
                max={9}
                onKeyDown={(e) => handleKeyDown(e.key, i)}
                onChange={(e) => handleChange(i, e.target.value)}
                color={mood.color}
                $bgcolor={mood.bg}
            />
        })}
    </S.VerfyCode>
}