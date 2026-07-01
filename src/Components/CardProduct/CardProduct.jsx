import { useState } from 'react';
import './CardProduct.css'


function CardProduct({ productImage, hoverImg = "", price, productName, amostra = true}) {
    const [hovered, setHovered] = useState(false);

    return (
        <div className="card-container">
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
