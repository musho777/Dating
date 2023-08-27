import { useEffect, useState } from "react"
import { Layout } from "../../Components/Layout"
import { DropDown } from "../../Components/birthDate/dropDown"
import { Button } from "../../ui/button"
import { useNavigate } from "react-router-dom"


export const LocationPage = ({ title }) => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const navigate = useNavigate()

    const data = ['Armenia', 'Russia', 'France', 'Italy', 'Greece', 'Germany', 'Spain']

    const [selected, setSelected] = useState('')

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return <Layout progress={50} text={'Lorem ipsum dolor sit amet consectetur. Tempus tortor massa at ut praesent'}>
        <DropDown
            title={'location'}
            width={(screenWidth <= 425 ? '80%' : '300px')}
            getData={(e) => setSelected(e)}
            data={data}
            selected={selected}
        />
        <Button
            disabled={!selected}
            title={'Continue'}
            top={30}
            onClick={() => navigate('/register/language')}
        />
    </Layout>
}