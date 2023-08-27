import { Color } from '../../Color'
import * as S from './styles'
import * as G from '../../GStyles'
import Steper from '../Steper'

export const Layout = ({ children, text, progress, text2, logOut }) => {
    const mood = Color('dark')
    return <S.Layout>
        <S.Title color={mood.titleColor}>Logo</S.Title>
        {progress >= 0 && <Steper progress={progress} />}
        <div>
            <G.Text color={mood.textColor}>
                {text}
            </G.Text>
            {text2?.length > 0 && <G.Text size={14} color={mood.textColor}>{text2}</G.Text>}
        </div>
        {children}
        {logOut && <S.LogOut color={mood.textColor}>Log out</S.LogOut>}
        {/* {!logOut &&
            <S.TextWrapper>
                <G.Text2 style={{ display: 'flex' }} size={12} color={mood.textColor}>
                    By signing up, you agree to our Terms. See how we use your data in our <span style={{ textDecorationLine: 'underline', marginLeft: '4px' }}> Privacy Policy.</span>
                </G.Text2>
            </S.TextWrapper>
        } */}
    </S.Layout>
}