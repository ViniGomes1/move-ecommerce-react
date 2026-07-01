import { useState } from "react"

import './ContentRoll.css'

function ContentRoll({ imageRoll, bottom }) {
    const [numeroImagem, setNumeroImagem] = useState(0)
    const [slideAtivo, setSlideAtivo] = useState(0);

    return (
        <div className="container-content-roll">
            <div className="slide">
                <div className="slide-rail" style={{ transform: `translateX(-${slideAtivo * 100}%)` }}>
                        {imageRoll.map((imagem, index) => {
                            return (
                                <div key={index} className="rail">
                                    <img key={index} className="image-container" src={imagem} />
                                </div>
                            )
                        })}
                </div>
            </div>
            {bottom && (
                <div className="bottom-image">
                    {imageRoll.map((_, index) => {
                        return (
                            <button key={index} className={slideAtivo == index ? "bottom-image-content-chose" : "bottom-image-content"} onClick={() => setSlideAtivo(index)}></button>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default ContentRoll