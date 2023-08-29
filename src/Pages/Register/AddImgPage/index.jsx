import { useState } from "react"
import { FileInput } from "../../../Components/FileInput"
import { Layout } from "../../../Components/Layout"
import * as S from './styles'
import * as G from '../../../GStyles'
import { Button } from "../../../ui/button"
import { useNavigate } from "react-router-dom"


export const AddImgPage = () => {
    const [data, setData] = useState([''])
    const navigate = useNavigate()

    const showImg = (event) => {
        let item = [...data]
        let img = URL.createObjectURL(event.target.files[0])
        item.map((elm, i) => {
            if (elm === '') {
                item[i] = img
            }
        })
        if (item.length < 4) {
            item.push('')
        }
        setData(item)
    }
    return <Layout progress={80} text={'Lorem ipsum dolor sit amet consectetur.'} text2={'Lorem ipsum dolor sit amet consectetur.'} logOut>
        <S.Wrapper>
            {data.map((elm, i) => {
                if (elm === '') {
                    return <FileInput key={i} getImg={(e) => showImg(e)} />
                }
                else {
                    return <S.ImgCard src={elm} />
                }
            })}
        </S.Wrapper>
        <Button
            title={'Continue'}
            onClick={() => navigate('/register/purpose')}
        />
        <G.Text size={10} color='#B4B1B1'>Lorem ipsum dolor sit amet consectetur.</G.Text>
    </Layout>
}