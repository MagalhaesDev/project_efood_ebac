import styled from "styled-components";
import { colors } from "../../styles";

export const FooterContainer = styled.footer`
    background-color: ${colors.secondaryColor};
    min-height: 18.625rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 2.5rem 0;

    & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;
    }

    & > p {
        width: 57%;
        text-align: center;
    }
`

export const SocialMidia = styled.div`
    display: flex;
    gap: .5rem;
`