import { useState } from "react"
import { Input } from "../../ui/input"
import { useNavigate } from "react-router-dom"
import * as G from '../../GStyles'
import { Layout } from "../../Components/Layout"
import { Button } from "../../ui/button"
export const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    return <Layout progress={-20} text={'Lorem ipsum dolor sit amet consectetur. Tempus tortor massa at ut praesent '}>
        <Input placeholder={'Enter your mail address'} value={email} onChange={(e) => setEmail(e.target.value)} />
        <div>
            <Input placeholder={'Enter your mail address'} value={password} onChange={(e) => setPassword(e.target.value)} />
            <G.Text2 onClick={() => navigate('/forgotpassword')} style={{ textAlign: 'end', cursor: 'pointer' }} size={12} color="#524F4F">Forgot Password?</G.Text2>
        </div>
        <Button disabled={!email.length} title="Continue" onClick={() => { }} top={30} />
    </Layout>
}