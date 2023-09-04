import * as S from './styles'
import * as G from '../../GStyles'
import { Header } from "../../Components/Header"
import { Button } from '../../ui/button'
import { Card } from '../../Components/Card'
import { Footer } from '../../Components/Footer'

export const MainPage = () => {
    return <div>
        <Header />
        <S.Block1>
            <S.Opacity />
            <div style={{ width: '100%', padding: '100px 0', maxWidth: '1200px', margin: '0 auto' }}>
                <S.Wrapper>
                    <div style={{zIndex: 1}}>
                        <G.Text700 style={{ textAlign: 'start' }} color='#333333' size='42'>FIND YOUR LOVE</G.Text700>
                        <S.TextWrapper>
                            <G.Text2 style={{ textAlign: 'start', marginTop: 20 }} color='#000000'>
                                Lorem ipsum dolor sit amet consectetur. Tortor eget sagittis ipsum sem. Enim sit et commodo pellentesque pulvinar. Risus rhoncus id bibendum condimentum a sit. At viverra risus velit molestie vitae aenean ipsum et commodo.
                            </G.Text2>
                        </S.TextWrapper>
                    </div>
                    <S.ImgWrapper>
                        <img
                            alt=''
                            src={require('../../utils/img/image.png')}
                            style={{
                                width: '100%',
                                height: '100%',
                                position: 'relative',
                                zIndex: '1',
                                right: '60px',
                            }}
                        />
                        <S.Border right={0}/>
                    </S.ImgWrapper>
                </S.Wrapper>
                <S.Wrapper>
                    <S.ImgWrapper>
                        <img
                            alt=''
                            src={require('../../utils/img/image.png')}
                            style={{
                                width: '100%',
                                height: '100%',
                                position: 'relative',
                                zIndex: '1',
                                left: '60px',
                            }}
                        />
                        <S.Border left={0} />
                    </S.ImgWrapper>
                    <div style={{zIndex: 1}}>
                        <G.Text700 style={{ textAlign: 'start' }} color='#333333' size='42'>FIND YOUR FRIEND</G.Text700>
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
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 30, marginTop: 70, width: '100%', flexWrap: 'wrap' }}>
                <Card img={require('../../utils/img/image.png')} />
                <Card img={require('../../utils/img/image.png')} />
            </div>
        </S.CardWrapper>
        <S.PackageWrapper>
            <S.EachPackage>
                <S.EachPackageTop>
                    <img
                        alt=''
                        src={require('../../utils/img/premium.png')}
                        width={80}
                        height={80}
                    />
                    {/* chkaroxaca props-ov poxancem */}
                    <S.PackageTitle style={{ color: '#B6DCFF' }}>Premium</S.PackageTitle>
                </S.EachPackageTop>
                <S.EachPackageText>Lorem ipsum dolor sit amet consectetur. Tortor eget sagittis ipsum sem. Enim sit et commodo pellentesque pulvinar. Risus rhoncus id bibendum <br /><span style={{ cursor: 'pointer' }}>... SEE MORE</span></S.EachPackageText>
            </S.EachPackage>
            <S.EachPackage>
                <S.EachPackageTop>
                    <img
                        alt=''
                        src={require('../../utils/img/gold.png')}
                        width={80}
                        height={80}
                    />
                    <S.PackageTitle style={{ color: '#F1EB01' }}>Gold</S.PackageTitle>
                </S.EachPackageTop>
                <S.EachPackageText>Lorem ipsum dolor sit amet consectetur. Tortor eget sagittis ipsum sem. Enim sit et commodo pellentesque pulvinar. Risus rhoncus id bibendum  <br /><span style={{ cursor: 'pointer' }}>... SEE MORE</span></S.EachPackageText>
            </S.EachPackage>
            <S.EachPackage>
                <S.EachPackageTop>
                    <img
                        alt=''
                        src={require('../../utils/img/vip.png')}
                        width={80}
                        height={80}
                    />
                    <S.PackageTitle style={{ color: '#F5B2F5' }}>VIP</S.PackageTitle>
                </S.EachPackageTop>
                <S.EachPackageText>Lorem ipsum dolor sit amet consectetur. Tortor eget sagittis ipsum sem. Enim sit et commodo pellentesque pulvinar. Risus rhoncus id bibendum  <br /><span style={{ cursor: 'pointer' }}>... SEE MORE</span></S.EachPackageText>
            </S.EachPackage>
        </S.PackageWrapper>
        <Footer />
    </div>
}