import { Layout } from "../../Components/Layout"
import { Button } from "../../ui/button"
import { useNavigate } from "react-router-dom"


export const LanguagePage = () => {
    const navigate = useNavigate()
    return <Layout progress={60} text={'Select the languages you speak.'}>
        <Button
            title={'Continue'}
            top={30}
            onClick={() => navigate('/register/nationality')}
        />
    </Layout>
}