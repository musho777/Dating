import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Layout } from "../../Components/Layout"
import { Button } from "../../ui/button"
import { VerifyCode } from "../../Components/VerifyCode"
export const ConfirmForgotPassword = () => {
    const [code, setCode] = useState('')
    const navigate = useNavigate()
    return <Layout title={'Forgot Password'} progress={-20} text={'Lorem ipsum dolor sit amet consectetur. Tempus tortor massa at ut praesent '}>
        <VerifyCode getCode={(e) => { setCode(e) }} />
        <Button disabled={code.length != 6} title="Continue" onClick={() => { navigate('/newpassword') }} top={30} />
    </Layout>
}