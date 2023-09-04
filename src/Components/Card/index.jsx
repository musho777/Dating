import * as S from './styles'
import * as G from '../../GStyles'
export const Card = ({ img, title, text }) => {
    return <S.Card>
        <S.Img src={(img)} />
        <S.CardWrapper>
            <S.TextWrapper>
                <G.Text700 color='#333' size={32}>Dating</G.Text700>
                <G.Text2 color='#383838' style={{ padding: '0 70px' }} >
                    Lorem ipsum dolor sit amet consectetur. Tortor eget sagittis ipsum sem. Enim sit et commodo pellentesque pulvinar.
                </G.Text2>
                <S.Button>Interested</S.Button>
            </S.TextWrapper>
            <S.Opacity>

            </S.Opacity>
        </S.CardWrapper>
    </S.Card >
}