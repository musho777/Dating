import { Layout } from "../../Components/Layout"
import { Button } from "../../ui/button"
import { useNavigate } from "react-router-dom"

export const BirthDatePage = () => {
    const navigate = useNavigate()

    return <Layout progress={30} text={'Lorem ipsum dolor sit amet consectetur.'}>
        <Button title={'Continue'} onClick={() => navigate('/register/gender')} />
    </Layout>
}