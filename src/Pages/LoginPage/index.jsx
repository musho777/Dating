import { Layout } from "../../Components/Layout"
import { Button } from "../../ui/button"
import { Input } from "../../ui/input"

export const Login = () => {
    return <Layout progress={0} text={'Lorem ipsum dolor sit amet consectetur. Tempus tortor massa at ut praesent '}>
        <Input placeholder={'Enter your mail address'} />
        <Button title="Continue" />
    </Layout>
}