import * as S from './styles'
import * as G from '../../GStyles'
import { Header } from "../../Components/Header"
import { Button } from '../../ui/button'
import { Card } from '../../Components/Card'

export const MainPage = () => {
    return <div>
        <Header />
        <S.Block1>
            <S.Opacity />
            <div style={{ position: 'absolute', width: '100%', padding: '100px 0' }}>
                <S.Wrapper>
                    <div >
                        <G.Text700 style={{ textAlign: 'start' }} color='#333333' size='42'>FIND YOUR LOVE</G.Text700>
                        <S.TextWrapper>
                            <G.Text2 style={{ textAlign: 'start', marginTop: 20 }} color='#000000'>
                                Lorem ipsum dolor sit amet consectetur. Tortor eget sagittis ipsum sem. Enim sit et commodo pellentesque pulvinar. Risus rhoncus id bibendum condimentum a sit. At viverra risus velit molestie vitae aenean ipsum et commodo.
                            </G.Text2>
                        </S.TextWrapper>
                    </div>
                    <S.ImgWrapper>
                        <img width={330} height={200} src={require('../../utils/img/image.png')} />
                        <S.Border right={-60} />
                    </S.ImgWrapper>
                </S.Wrapper>
                <S.Wrapper>
                    <S.ImgWrapper>
                        <img width={330} height={200} src={require('../../utils/img/image.png')} />
                        <S.Border right={60} />
                    </S.ImgWrapper>
                    <div >
                        <G.Text700 style={{ textAlign: 'start' }} color='#333333' size='42'>FIND YOUR LOVE</G.Text700>
                        <S.TextWrapper>
                            <G.Text2 style={{ textAlign: 'start', marginTop: 20 }} color='#000000'>
                                Lorem ipsum dolor sit amet consectetur. Tortor eget sagittis ipsum sem. Enim sit et commodo pellentesque pulvinar. Risus rhoncus id bibendum condimentum a sit. At viverra risus velit molestie vitae aenean ipsum et commodo.
                            </G.Text2>
                        </S.TextWrapper>
                    </div>
                </S.Wrapper>
                <div style={{ justifyContent: 'center', display: 'flex' }}>
                    <Button title={'Register Now'} type='light' width={300} />
                </div>
            </div>
        </S.Block1>
        <S.CardWrapper>
            <G.Text700 size={40} color='#fff'>
                Lorem Ipsum
            </G.Text700 >
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 30, marginTop: 70 }}>
                <Card img={require('../../utils/img/image.png')} />
                <Card img={require('../../utils/img/image.png')} />
            </div>
        </S.CardWrapper>
    </div>
}