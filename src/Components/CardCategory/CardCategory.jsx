import { useNavigate } from "react-router-dom";
import "./CardCategory.css"

const imagemTeste = "/Imagens/Category/tenis.jpg"

function CardCategory({ product, text, src }) {
    const navigate = useNavigate();

    const handleClick = () => {
        // Opção 1: Passando a string diretamente
        navigate('/shop?category=Camisetas');

        // Opção 2: Usando URLSearchParams (ideal se a categoria for dinâmica)
        // const params = new URLSearchParams({ category: 'Camisetas' });
        // navigate(`/shop?${params.toString()}`);
    };
    return (
        <div className="card-category-container">
            <div className="text-category">
                <div>
                    <h3>{product}</h3>
                    <h4>{text}</h4>
                    <button onClick={handleClick}>Comprar</button>
                </div>
            </div>
            <div className="image-container">
                <img className="category-image" src={src} />
            </div>
        </div>
    )
}

export default CardCategory