import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CardProduct.css';


function CardProduct({ id, productImage, hoverImg = "", price, productName, amostra = true}) {
    const [hovered, setHovered] = useState(false);
    const navigate = useNavigate();

    const handleOpenProduct = () => {
        if (id) {
            navigate(`/product/${id}`);
        }
    };

    return (
        <div
            className="card-container"
            onClick={handleOpenProduct}
            onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    handleOpenProduct();
                }
            }}
            role="button"
            tabIndex={0}
            style={{ cursor: 'pointer' }}
        >
            <div className="card" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                <img className={`image-card-container ${hovered && amostra ? 'escondida' : ''}`} src={productImage} />
                {
                    amostra && (
                        <img className={`image-card-container ${!hovered ? 'escondida' : ''}`} src={hoverImg} />
                    )
                }
            </div>
            <div className="bottom-card-content">
                <div className="text-card-content">
                    <b>{productName}</b>
                    <p>R$ {price}</p>
                </div>
            </div>
        </div>
    )
}

export default CardProduct
