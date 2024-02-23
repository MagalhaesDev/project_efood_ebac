import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles";
import { Router } from "./Router";
import { ProductsContextProvider } from "./context/ProductsContext";

export function App() {
  return (
    <>
      <BrowserRouter>
        <ProductsContextProvider>
          <Router />
        </ProductsContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </>
  )
}

