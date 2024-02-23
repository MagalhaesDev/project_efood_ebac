import { CardProductContainer, DescriptionContainer, ImageContainer, ButtonAddCart } from "./styles";
import imageProduct from "../../../../assets/imageproduct.png"


export function CardProduct() {
    return (
        <CardProductContainer>
            <ImageContainer>
                <img src={imageProduct} alt="" />
            </ImageContainer>
            <DescriptionContainer>
                <h2>Pizza Marguerita</h2>
                <p>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</p>
                <ButtonAddCart>Adicionar ao carrinho</ButtonAddCart>
            </DescriptionContainer>
        </CardProductContainer>
    )
}