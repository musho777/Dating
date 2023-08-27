import { Layout } from "../../Components/Layout"
import { Button } from "../../ui/button"
import { useNavigate } from "react-router-dom"


export const NationalityPage = () => {
    const navigate = useNavigate()

    return <Layout progress={70} text={'Choice of nationality'}>
        <Button
            title={'Continue'}
            top={30}
            onClick={() => navigate('/register/addimg')}
        />
    </Layout>
}