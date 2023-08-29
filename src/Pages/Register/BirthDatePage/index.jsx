import { Layout } from "../../../Components/Layout"
import { BirthDate } from "../../../Components/birthDate"
import { Button } from "../../../ui/button"
import { useNavigate } from "react-router-dom"

export const BirthDatePage = () => {
    const navigate = useNavigate()

    return <Layout progress={30} text={'Lorem ipsum dolor sit amet consectetur.'}>
        <BirthDate />
        <Button
            title={'Continue'}
            onClick={() => navigate('/register/gender')}
            top={30}
        />
    </Layout>
}