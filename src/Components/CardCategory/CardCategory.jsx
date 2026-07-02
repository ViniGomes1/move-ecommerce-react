import "./CardCategory.css"

const imagemTeste = "/Imagens/Category/tenis.jpg"

function CardCategory({product, text, src}){
    return(
        <div className="card-category-container">
            <div className="text-category">
                <div>
                    <h3>{product}</h3>
                    <h4>{text}</h4>
                    <button>Comprar</button>
                </div>
            </div>
            <div className="image-container">
                <img className="category-image" src={src}/>
            </div>
        </div>
    )
}

export default CardCategory