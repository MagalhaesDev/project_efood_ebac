import { CardCategoryContainer, DescriptionContainer, ImageContainer, Tag, ButtonNavegation } from "./styles";
import Star from "../../../../assets/star.svg"
import { NavLink } from "react-router-dom";
import { categoriesProductsProps } from "../../../../context/ProductsContext";

interface CardProps {
    product: categoriesProductsProps;
}

export function CardCategory({ product }: CardProps) {
    return (
        <CardCategoryContainer>
            <ImageContainer>
                <img src={product.img} alt="" />
                <Tag>
                    {product.tag.map(tag => (

                        <p>{tag}</p>

                    ))}
                </Tag>
            </ImageContainer>
            <DescriptionContainer>
                <div>
                    <h2>{product.title}</h2>
                    <div>
                        <p>{product.avaliation}</p>
                        <img src={Star} alt="Estrela Amarela" />
                    </div>
                </div>
                <p>{product.description}</p>
                <NavLink to={`/products?id=${product.id}`}>
                    <ButtonNavegation>Saiba Mais</ButtonNavegation>
                </NavLink>
            </DescriptionContainer>
        </CardCategoryContainer>
    )
}