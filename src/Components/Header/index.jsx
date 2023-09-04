import * as S from './styles'
import * as G from '../../GStyles'
import './calss.css'
import { Color } from '../../Color'
import { Button } from '../../ui/button'
export const Header = () => {
    const menu = ['About us', 'Stories', 'Feedback', 'Contact us']
    const mood = Color('dark')
    return <S.Header>
        <S.Wrapper>
            <div>
                <S.Title color={'#FF0099'}>Logo</S.Title>
            </div>
            <div style={{ display: 'flex' }}>
                {menu.map((elm, i) => {
                    return <div style={{ margin: 20 }}>
                        <G.Text2 className='text' color={mood.color} size={20}>{elm}</G.Text2>
                    </div>
                })
                }
            </div>
            <div>
                <Button title={'Log In'} />
            </div>
        </S.Wrapper>
    </S.Header>
}