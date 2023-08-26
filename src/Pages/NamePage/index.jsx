import { useState } from "react"
import { Layout } from "../../Components/Layout"
import { Button } from "../../ui/button"
import { Input } from "../../ui/input"
import * as G from '../../GStyles'
import { Color } from "../../Color"


export const NamePage = () => {
    const [name, setName] = useState('')
    const mood = Color('dark')
    return <Layout progress={40} text={'Lorem ipsum dolor sit amet consectetur.'}>
        <Input onChange={(e) => setName(e.target.value)} placeholder={'Your name'} />
        <Button title="Continue" disabled={name.length === 0} top={30}/>
        <G.TextBold16 color={mood.titleColor}>Use Facebook instead</G.TextBold16>
    </Layout>
}