import styled from "styled-components";

export const HomeContainer = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CardsCategoriesContainer = styled.div`
        margin: 5rem 10.6875rem;
        margin-bottom: 7.5rem;
        width: 60rem;
        display: grid;
        gap: 3rem 5rem;
        grid-template-columns: repeat(2, minmax(0, 1fr));
`