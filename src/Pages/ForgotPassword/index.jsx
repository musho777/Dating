import { useState } from "react"
import { Input } from "../../ui/input"
import { useNavigate } from "react-router-dom"
import * as G from '../../GStyles'
import { Layout } from "../../Components/Layout"
import { Button } from "../../ui/button"
export const ForgotPassword = () => {
    const [email, setEmail] = useState('')
    const navigate = useNavigate()
    return <Layout title={'Forgot Password?'} progress={-20} text={'Lorem ipsum dolor sit amet consectetur. Tempus tortor massa at ut praesent '}>
        <Input placeholder={'Your email'} value={email} onChange={(e) => setEmail(e.target.value)} />
        <Button disabled={!email.length} title="Continue" onClick={() => { navigate('/confirmcode') }} top={30} />
    </Layout>
}