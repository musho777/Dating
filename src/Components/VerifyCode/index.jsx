import { useEffect, useRef, useState } from 'react';
import * as S from './styles'
import { Color } from '../../Color';
export const VerifyCode = ({ getCode }) => {
    const [data, setData] = useState([
        { value: '', ref: useRef(null) },
        { value: '', ref: useRef(null) },
        { value: '', ref: useRef(null) },
        { value: '', ref: useRef(null) },
        { value: '', ref: useRef(null) },
        { value: '', ref: useRef(null) },
    ])
    useEffect(() => {
        let item = [...data]
        let code = ''
        item.map((elm, i) => {
            code += elm.value
        })
        getCode(code)
    }, [data])

    const handleChange = (i, value) => {
        let item = [...data]
        if (value !== '') {
            item[i + 1]?.ref?.current?.focus();
        }
        if (value <= 9 && !value.includes('e') && !value.includes('E')) {
            item[i].value = value
        }

        setData(item)
    }
    const handleKeyDown = (e, i) => {
        let item = [...data]
        if (e.key === 'Backspace' && item[i].value === '') {
            item[i - 1]?.ref?.current?.focus();
        }
        if (e.key === "." || e.key === "-" || e.key === "e" || e.key === "E" || e.key === "+" || e.key === ",") {
            e.preventDefault();
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
                onKeyDown={(e) => handleKeyDown(e, i)}
                onChange={(e) => handleChange(i, e.target.value)}
                color={"#000"}
            />
        })}
    </S.VerfyCode>
}