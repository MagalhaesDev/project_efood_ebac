import styled from "styled-components";
import { colors } from "../../../../styles";

export const CardProductContainer = styled.div`
      padding: .5rem;
      background-color: ${colors.primaryColor};
      height: 21rem;
`

export const ImageContainer = styled.div`
   position: relative;
   height: 10rem;

   background-size: cover;

    img {
        position: absolute;
        z-index: 1;
        width: 100%;
        height: 100%;
    }
`

export const DescriptionContainer = styled.div`
    min-height: 9rem;
    margin-top: .5rem;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: .5rem;

    h2, p {
        color: #fff;
    }

    h2 {
        font-size: 1rem;
    }

    p {
        font-size: 0.875rem;
        font-weight: 300;
        color: ${colors.secondaryColor};
    }
`

export const ButtonAddCart = styled.button`

    background-color:  ${colors.secondaryColor};
    color: ${colors.primaryColor};
    font-size: 0.875rem;
    padding: .25rem 0;
    border: none;
    cursor: pointer;
`