import * as S from './styles'
import * as G from '../../GStyles'
import Steper from '../Steper'

export const Layout = ({ title = 'Logo', children, text, progress, text2, logOut }) => {
    return <S.Layout>
        <div style={{ height: 20 }}></div>
        <S.Wrapper>
            <S.Title color={'#FF0099'}>{title}</S.Title>
            {progress >= 0 && <Steper progress={progress} />}
            <div>
                <G.Text color={'#000'} style={{ justifyContent: 'center' }}>
                    {text}
                </G.Text>
                {text2?.length > 0 && <G.Text size={14} color={'#000'}>{text2}</G.Text>}
            </div>
            {children}
        </S.Wrapper>
        {<S.PolicyWrapper>
            {logOut ? <S.LogOut color={'#000'}>Log out</S.LogOut> :
                <G.TextPolicy color='#fff'>By signing up, you agree to our Terms. See how we use your data in our Privacy Policy.</G.TextPolicy>
            }
        </S.PolicyWrapper>}
    </S.Layout>
}