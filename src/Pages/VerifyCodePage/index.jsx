import { useState } from "react"
import { Layout } from "../../Components/Layout"
import { VerifyCode } from "../../Components/VerifyCode"
import { Button } from "../../ui/button"

export const VerifyCodePage = () => {
    const [code, setCode] = useState('')
    return <Layout progress={20} text={'Lorem ipsum dolor sit amet consectetur.'}>
        <VerifyCode getCode={(e) => { setCode(e) }} />
        <Button title="Continue" disabled={code.length !== 6} />
    </Layout>
}