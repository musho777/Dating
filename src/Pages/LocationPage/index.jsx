import { useEffect, useState } from "react"
import { Layout } from "../../Components/Layout"
import { BirthDate } from "../../Components/birthDate"
import { DropDown } from "../../Components/birthDate/dropDown"
import { Button } from "../../ui/button"

export const LocationPage = ({ title }) => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

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

    return <Layout progress={70} text={'Lorem ipsum dolor sit amet consectetur. Tempus tortor massa at ut praesent'}>
        <DropDown
            title={'location'}
            width={(screenWidth <= 425 ? '80%' : '300px')}
            getData={(e) => setSelected(e)}
            data={data}
            selected={selected}
        />
        <Button disabled={!selected} title={'Continue'} />
    </Layout>
}