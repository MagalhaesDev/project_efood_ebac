import styled from "styled-components";

export const ProductsContainer = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CardProductsContainer = styled.div`
        margin: 5rem 10.6875rem;
        margin-bottom: 7.5rem;
        width: 60rem;
        display: grid;
        gap: 2rem;
        grid-template-columns: repeat(3, minmax(0, 1fr));
`