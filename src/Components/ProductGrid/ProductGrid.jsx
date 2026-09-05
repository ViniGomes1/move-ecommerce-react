import { useEffect, useRef, useState } from "react";
import "./ProductGrid.css"
import CardProduct from "../CardProduct/CardProduct";

const imagensGrid = [
    {
        product: "/Imagens/novas/top 1.jpeg",
        image: "/Imagens/novas/treino 1.jpeg",
        price: "299",
        name: "Tênis"
    },
    {
        product: "/Imagens/novas/treino 2.jpeg",
        image: "/Imagens/novas/treino 1.jpeg",
        price: "299",
        name: "Camisa do Brasil"
    },
    {
        product: "/Imagens/novas/yoga 2.jpeg",
        image: "/Imagens/grid/Camisa Branca/persona.avif",
        price: "299",
        name: "Camisa Branca"
    },
    {
        product: "/Imagens/novas/yoga 3.jpeg",
        image: "/Imagens/grid/mochila/persona.avif",
        price: "299",
        name: "Mochila"
    },
    {
        product: "/Imagens/novas/yoga 4.jpeg",
        image: "/Imagens/grid/Boné/persona.webp",
        price: "399",
        name: "Viseira"
    }
]

const esperarDoisSegundos = () => new Promise(resolve => setTimeout(resolve, 2000));



function ProductGrid() {
    const [imagemAtual, setImagemAtual] = useState(imagensGrid[0].image);
    const [estaPorCima, setEstaPorCima] = useState(false);

    const cardGridRef = useRef(null);
    const [reachedEnd, setReachedEnd] = useState(false);

    useEffect(() => {
        const container = cardGridRef.current;
        if (!container) return;

        const handleWheel = (e) => {
            const { scrollRight, scrollLeft, scrollWidth, clientWidth } = container;

            const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 1;
            const isAtStart = scrollLeft <= 0;
            
            setReachedEnd(isAtEnd);

            if (e.deltaY > 0 && !isAtEnd) {
                e.preventDefault();
                container.scrollLeft += e.deltaY;
                return;
            }

            if (e.deltaY < 0 && !isAtStart) {
                e.preventDefault();
                container.scrollLeft += e.deltaY;
                return;
            }
        };

        container.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            container.removeEventListener('wheel', handleWheel);
        };

    }, [])

    return (
        <div className="product-grid-container">
            <div className="top-title">
                <h1>NOVIDADES</h1>
            </div>
            <div ref={cardGridRef} className="card-grid">
                {imagensGrid.map((imagem, index) => {
                    return (
                        <CardProduct
                            key={index}
                            productImage={imagem.product}
                            hoverImg={imagem.image}
                            price={imagem.price}
                            productName={imagem.name}
                            amostra={false}
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