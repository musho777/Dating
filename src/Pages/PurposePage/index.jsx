import { useState } from "react"
import { Layout } from "../../Components/Layout"
import { PurposeBlock } from "../../Components/PurposeBlock"
import { Button } from "../../ui/button"

export const PurposePage = () => {
    const [data, setData] = useState([
        { id: 1, active: false, title: 'Lorem ipsum ', text: 'Lorem ipsum dolor sit amet consectetur. Lacus urna augue ut felis ut ' },
        { id: 2, active: false, title: 'Lorem ipsum ', text: 'Lorem ipsum dolor sit amet consectetur. Lacus urna augue ut felis ut ' },
    ])
    const handelClick = (i) => {
        let item = [...data]
        item.map((elm, i) => {
            elm.active = false
        })
        item[i].active = true
        setData(item)
    }
    return <Layout progress={30} text={'Lorem ipsum dolor sit amet consectetur.'}>
        {data.map((elm, i) => (
            <PurposeBlock key={i} onClick={() => handelClick(i)} active={elm.active} title={elm.title} text={elm.text} />
        ))}
        <Button top={30} title={'Continue'} />
    </Layout>
}