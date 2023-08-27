import { useState } from "react"
import { Layout } from "../../Components/Layout"
import { CheckBox } from "../../Components/checkBox"
import { Button } from "../../ui/button"
import { useNavigate } from "react-router-dom"
import * as S from './styles'

export const LanguagePage = () => {
    const navigate = useNavigate()
    const [data, setData] = useState([
        { title: 'Armenian', selected: false },
        { title: 'Armenian', selected: false },
        { title: 'Armenian', selected: false },
        { title: 'Armenian', selected: false },
        { title: 'Armenian', selected: false },
        { title: 'Armenian', selected: false },
        { title: 'Armenian', selected: false },
        { title: 'Armenian', selected: false },
        { title: 'Armenian', selected: false },
        { title: 'Armenian', selected: false },
        { title: 'Armenian', selected: false },
        { title: 'Armenian', selected: false },

    ])
    const [disable, setDisable] = useState(true)
    const handelClick = (i, selected) => {
        let item = [...data]
        let send = true
        item[i].selected = !selected
        setData(item)
        item.map((elm, i) => {
            if (elm.selected) {
                send = false
            }
        })
        setDisable(send)
    }
    return <Layout progress={60} text={'Select the languages you speak.'}>
        <S.Wrapper>
            {data.map((elm, i) => (
                <CheckBox key={i} onClick={() => handelClick(i, elm.selected)} checked={elm.selected} text={elm.title} />
            ))}
        </S.Wrapper>
        <Button
            title={'Continue'}
            top={30}
            disabled={disable}
            onClick={() => navigate('/register/nationality')}
        />
    </Layout>
}