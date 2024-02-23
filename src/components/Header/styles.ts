import styled from "styled-components";

export const HeaderContainer = styled.div`
    min-height: 24rem;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;


    background-size: cover;

    h1 {
        font-size: 2.25rem;
        margin-bottom: 2.5rem;
        width: 35.5rem;
        text-align: center;
    }
`

export const HeaderProducts = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 2.5rem;
    
    p {
        font-weight: bold;
    }
`

export const BackgroundImage = styled.img`
    position: absolute;
    z-index: -2;
    height: 100%;
`

export const Logo = styled.img`
    margin-top: 2.5rem;
`


export const TitleProduct = styled.div`
   position: relative;      
   margin-top: 3rem;
   height: 17.5rem;
   width: 100%;
   background-size: cover;

   & > div {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1.5rem 10.625rem;
    font-size: 2rem;
    

    & > div {
        display: flex;
        gap: 1rem;
        font-weight: 300;

        p {
            color: #fff;
        }
    }

    h2 {
        color: #fff;
    }
   }

   img {
    position: absolute;
    top: 0;
    z-index: -1;
    height: 100%;
    width: 100%;
   }
`