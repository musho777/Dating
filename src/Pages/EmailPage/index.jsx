import { useState } from "react"
import { Layout } from "../../Components/Layout"
import { Button } from "../../ui/button"
import { Input } from "../../ui/input"
import { useNavigate } from "react-router-dom"

export const EmailPage = () => {
    const [email, setEmail] = useState('')
    const navigate = useNavigate()

    return <Layout progress={0} text={'Lorem ipsum dolor sit amet consectetur. Tempus tortor massa at ut praesent '}>
        <Input placeholder={'Enter your mail address'} onChange={(e) => setEmail(e.target.value)} />
        <Button disabled={!email.length} title="Continue" onClick={() => navigate('/register/code')} top={30} />
    </Layout>
}