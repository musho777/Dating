import { useState } from "react"
import { Layout } from "../../../Components/Layout"
import { Button } from "../../../ui/button"
import { Input } from "../../../ui/input"
import * as G from '../../../GStyles'
import { Color } from "../../../Color"
import { useNavigate } from "react-router-dom"



export const NamePage = () => {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const mood = Color('dark')
    return <Layout progress={20} text={'Lorem ipsum dolor sit amet consectetur.'}>
        <Input onChange={(e) => setName(e.target.value)} placeholder={'Your name'} />
        <Button title="Continue" disabled={name.length === 0} top={30} onClick={() => navigate('/register/birthdate')} />
        <G.TextBold16 color={mood.titleColor}>Use Facebook instead</G.TextBold16>
    </Layout>
}