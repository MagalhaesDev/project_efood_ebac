import { CardProductsContainer, ProductsContainer } from "./styles";
import { CardProduct } from "./components/CardProduct";

export function Products() {

  return (
    <ProductsContainer >
      <CardProductsContainer>
        {[...Array(6)].map((_, index) => (
          <CardProduct key={index} />
        ))}
      </CardProductsContainer>
    </ProductsContainer>
  )
}