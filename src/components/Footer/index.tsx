import { FooterContainer, SocialMidia } from "./styles"
import Logo from "../../assets/logo.svg"
import instagramIcon from "../../assets/socialMedia/instagram.svg"
import facebookIcon from "../../assets/socialMedia/facebook.svg"
import twitterIcon from "../../assets/socialMedia/twitter.svg"

export function Footer() {
    return (
        <FooterContainer>
            <div>
                <img src={Logo} alt="Nome do site com garfo e faca do lado" />
                <SocialMidia>
                    <a href="#">
                        <img src={instagramIcon} alt="" />
                    </a>
                    <a href="#">
                        <img src={facebookIcon} alt="" />
                    </a>
                    <a href="#">
                        <img src={twitterIcon} alt="" />
                    </a>
                </SocialMidia>
            </div>
            <p>
                A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado.
            </p>
        </FooterContainer>
    )
}