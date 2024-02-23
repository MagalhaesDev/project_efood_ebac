import { createContext, ReactNode } from 'react'
import imgOne from '../assets/categoryProducts/img-one.png'
import imgTwo from '../assets/categoryProducts/img-two.png'


export interface categoriesProductsProps {
    id: number;
    img: string;
    tag: string[],
    title: string;
    avaliation: string;
    description: string;
}

const categoriesProducts: categoriesProductsProps[] = [
    {
        id: 1,
        img: imgOne,
        tag: ['Destaque da semana', 'Japonesa'],
        title: 'Hioki Sushi',
        avaliation: '4.9',
        description: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!'
    },
    {
        id: 2,
        img: imgTwo,
        tag: ['Italiana'],
        title: 'La Dolce Vita Trattoria',
        avaliation: '4.6',
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
    },
    {
        id: 3,
        img: imgTwo,
        tag: ['Italiana'],
        title: 'La Dolce Vita Trattoria',
        avaliation: '4.6',
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
    },
    {
        id: 4,
        img: imgTwo,
        tag: ['Italiana'],
        title: 'La Dolce Vita Trattoria',
        avaliation: '4.6',
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
    },
    {
        id: 5,
        img: imgTwo,
        tag: ['Italiana'],
        title: 'La Dolce Vita Trattoria',
        avaliation: '4.6',
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
    },
    {
        id: 6,
        img: imgTwo,
        tag: ['Italiana'],
        title: 'La Dolce Vita Trattoria',
        avaliation: '4.6',
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
    }
]

interface ProductsContextType {
    categoriesProducts: categoriesProductsProps[]
}

export const ProductsContext = createContext({} as ProductsContextType)

interface ProductsContextProviderProps {
    children: ReactNode
}

export function ProductsContextProvider({
    children,
}: ProductsContextProviderProps) {


    return (
        <ProductsContext.Provider
            value={{ categoriesProducts }}
        >
            {children}
        </ProductsContext.Provider>
    )
}