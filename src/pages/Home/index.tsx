import { HomeContainer, CardsCategoriesContainer } from "./styles";
import { CardCategory } from "./components/CardCategory";
import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";

export function Home() {
  const { categoriesProducts } = useContext(ProductsContext)

  return (
    <HomeContainer >
      <CardsCategoriesContainer>
        {categoriesProducts.map(product => (
          <CardCategory product={product} />
        ))}
      </CardsCategoriesContainer>
    </HomeContainer>
  )
}