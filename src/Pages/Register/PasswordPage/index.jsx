import { useState } from "react"
import { Layout } from "../../../Components/Layout"
import { Button } from "../../../ui/button"
import { Input } from "../../../ui/input"
import { useNavigate } from "react-router-dom"

export const PasswordPage = () => {
    const navigate = useNavigate()
    const [password, setPassword] = useState([
        { value: '', error: '' },
        { value: '', error: '' }
    ])
    const handelChange = (e, i) => {
        let item = [...password]
        item[i].value = e
        setPassword(item)
    }
    return <Layout progress={10} text={'Lorem ipsum dolor sit amet consectetur. Tempus tortor massa at ut praesent'}>
        {password.map((elm, i) => {
            return <Input key={i} onChange={(e) => handelChange(e.target.value, i)} placeholder={'Enter your password'} />
        })}
        <Button
            disabled={(!password[0].value || !password[1].value)}
            title={'Continue'}
            top={30}
            onClick={() => navigate('/register/name')}
        />
    </Layout>
}