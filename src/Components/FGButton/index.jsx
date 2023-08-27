import * as S from './styles'

export const FGButton = ({ text, logo }) => {
    return <S.FGBButton >
        <S.Text>{text}</S.Text>
        {logo}
    </S.FGBButton>
}