import { useEffect, useState } from "react";
import "./ProductGrid.css"
import CardProduct from "../CardProduct/CardProduct";

const imagensGrid = [
    {
        product: "/Imagens/grid/Dunk/01708551A2.avif",
        image: "/Imagens/grid/Dunk/01708551A3.jpeg",
        price: "299",
        name: "Tênis"
    },
    {
        product: "/Imagens/grid/Camisa/Modelo.jpeg",
        image: "/Imagens/grid/Camisa/persona.avif",
        price: "299",
        name: "Camisa do Brasil"
    },
    {
        product: "/Imagens/grid/Camisa Branca/modelo.avif",
        image: "/Imagens/grid/Camisa Branca/persona.avif",
        price: "299",
        name: "Camisa Branca"
    },
    {
        product: "/Imagens/grid/mochila/modelo.avif",
        image: "/Imagens/grid/mochila/persona.avif",
        price: "299",
        name: "Mochila"
    }
]

console.log(imagensGrid)

const esperarDoisSegundos = () => new Promise(resolve => setTimeout(resolve, 2000));


function ProductGrid() {
    const [imagemAtual, setImagemAtual] = useState(imagensGrid[0].image);
    const [estaPorCima, setEstaPorCima] = useState(false);

    return (
        <div className="product-grid-container">
            <div className="card-grid">
                {imagensGrid.map((imagem, index) => {
                    return (
                        <CardProduct
                            key={index}
                            productImage={imagem.product}
                            hoverImg={imagem.image}
                            price={imagem.price}
                            productName={imagem.name}
                        />
                    )
                })}
            </div>
            <div className="bottom-button">
                <div>
                    <a href="">VER MAIS</a>
                </div>
            </div>
        </div>

    )
}

export default ProductGrid