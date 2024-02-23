import styled from "styled-components";
import { colors } from "../../../../styles";

export const CardCategoryContainer = styled.div`
      height: 100%;
      width: 100%;
`

export const ImageContainer = styled.div`
   position: relative;
   height: 13.6rem;

   background-size: cover;

    img {
        position: absolute;
        z-index: -1;
        width: 100%;
        height: 100%;
    }
`

export const Tag = styled.div`
   display: flex;
   justify-content: end;
   gap: .5rem;
   padding: 1rem;
   

   p {
    font-size: .75rem;
    background-color: ${colors.primaryTextColor};
    color: ${colors.secondaryTextColor};
    padding: .375rem .25rem;
    font-weight: bold;
   }
`

export const DescriptionContainer = styled.div`
    padding: .5rem;
    border: 1px solid ${colors.primaryColor};

    & > div {
        display: flex;
        justify-content: space-between;

        h2 {
            font-size: 1.125rem;
        }

        div {
            display: flex;
            align-items: center;
            gap: .5rem;
        }
    }

    & > p {
        font-size: 0.875rem;
        margin: 1rem 0rem;
    }
`

export const ButtonNavegation = styled.button`
     background-color: ${colors.primaryColor};
        color: ${colors.secondaryTextColor};
        padding: .25rem .375rem;
        border: none;
        cursor: pointer;
`