import { useState } from "react"
import { Layout } from "../../../Components/Layout"
import { Button } from "../../../ui/button"
import { Input } from "../../../ui/input"
import { useNavigate } from "react-router-dom"
import { FGButton } from "../../../Components/FGButton"
import { FbSvg, GoogleSvg } from "../../../Components/svg"
import * as S from './styles'
import * as G from '../../../GStyles'
import { Color } from "../../../Color"
export const EmailPage = () => {
    const [email, setEmail] = useState('')
    const navigate = useNavigate()
    const mood = Color('dark')
    return <Layout progress={-20} text={'Lorem ipsum dolor sit amet consectetur. Tempus tortor massa at ut praesent '}>
        <Input placeholder={'Enter your mail address'} onChange={(e) => setEmail(e.target.value)} />
        <Button disabled={!email.length} title="Continue" onClick={() => navigate('/register/code')} top={30} />
    </Layout>
}