import { BackgroundImage, HeaderContainer, HeaderProducts, Logo, TitleProduct } from "./styles";
import background from "../../assets/background.jpg"
import logo from "../../assets/logo.svg"
import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import { useLocation } from "react-router-dom";
import apresentacao from '../../assets/apresentacao.png'

export function Header() {
    const { categoriesProducts } = useContext(ProductsContext)
    const queryParams = new URLSearchParams(useLocation().search);
    const idParams = Number(queryParams.get('id'));
    let categorySellected;

    if (idParams) {
        categorySellected = categoriesProducts.find(category => category.id === idParams)
    }

    return (
        <HeaderContainer>
            {categorySellected ? (
                <>
                    <HeaderProducts>
                        <p>Restaurantes</p>
                       <img src={logo} alt="Imagem de fundo com diversos talheres (garfos e facas)" />
                       <p>0 produto(s) no carrinho</p>
                    </HeaderProducts>
                    <TitleProduct>
                        <div>
                            <div>
                                {categorySellected.tag.map(tag => (
                                    <p>{tag}</p>
                                ))}
                            </div>
                            <h2>{categorySellected.title}</h2>
                        </div>
                        <img src={apresentacao} alt="" />
                    </TitleProduct></>
            ) :
                (
                    <>
                        <Logo src={logo} alt="Imagem de fundo com diversos talheres (garfos e facas)" />
                        <h1>Viva experiências gastronômicas no conforto da sua casa</h1></>)
            }
            <BackgroundImage src={background} alt="Imagem de fundo com diversos talheres (garfos e facas)" />
        </HeaderContainer>
    )
}