import { Layout } from "../../Components/Layout"
import { Button } from "../../ui/button"
import { ChackBox } from "../../ui/checkbox"
import * as G from '../../GStyles'
import { Color } from "../../Color"
import { useState } from "react"

export const GenderPage = () => {
    const [sex, setSex] = useState([
        { title: 'Man', checked: false },
        { title: 'Woman', checked: false },
    ])
    const handelClikc = (i) => {
        let item = [...sex]
        item.map((elm, i) => {
            elm.checked = false
        })
        item[i].checked = true
        setSex(item)
    }
    const mood = Color('dark')
    return <Layout progress={80} text={'Lorem ipsum dolor sit amet consectetur.'}>
        {sex.map((elm, i) => (
            <ChackBox key={i} text={elm.title} checked={elm.checked} onClick={() => handelClikc(i)} />
        ))}
        <Button title="Continue" top={30} />
        <G.TextBold16 color={mood.titleColor}>Use Facebook instead</G.TextBold16>

    </Layout>
}