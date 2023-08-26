import { Color } from '../../Color'
import * as S from './styles'
import * as G from '../../GStyles'
import Steper from '../Steper'

export const Layout = ({ children, text, progress }) => {
    const mood = Color('dark')
    return <S.Layout>
        <S.Title color={mood.titleColor}>Logo</S.Title>
        <Steper progress={progress} />
        <G.Text color={mood.textColor}>{text}</G.Text>
        {children}
    </S.Layout>
}