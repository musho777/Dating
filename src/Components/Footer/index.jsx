import * as S from './styles.js'
import { Planet } from '../svg'

export const Footer = () => {
    return (
        <S.Footer>
            <S.FooterContent>
                <S.EachFooterRow>
                    <Planet />
                    <S.FooterLink>English</S.FooterLink>
                </S.EachFooterRow>
                <S.EachFooterRow>
                    <S.FooterLink>About us</S.FooterLink>
                    <S.FooterLink>Contact us</S.FooterLink>
                    <S.FooterLink>Terms</S.FooterLink>
                    <S.FooterLink>Privacy</S.FooterLink>
                    <S.FooterLink>FAQs</S.FooterLink>
                    <S.FooterLink>Affiliate program</S.FooterLink>
                    <S.FooterLink>Another link</S.FooterLink>
                </S.EachFooterRow>
                <S.EachFooterRow>
                    <S.FooterText>
                        World Singles, 32565-B Golden Lantern St., #179 Dana Point, CA 92629 &nbsp;
                        <a href='tel:+1 (949) 743-2535' style={{
                            color: '#FFF',
                            fontSize: '14px',
                            fontStyle: 'normal',
                            fontWeight: 700,
                            lineHeight: 'normal',
                        }}>+1 (949) 743-2535</a>
                    </S.FooterText>
                </S.EachFooterRow>
                <S.EachFooterRow>
                    <S.FooterText>Copyright © World Singles. All rights reserved.</S.FooterText>
                </S.EachFooterRow>
            </S.FooterContent>
        </S.Footer >
    )
}