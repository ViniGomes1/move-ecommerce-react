import CardCategory from "../CardCategory/CardCategory";
import "./CategoryGrid.css"

const imagensCategoria = [
    {
        src: "/Imagens/Category/Esportes.jpeg",
        product: "Esportes",
        text: "Para competidores vorazes"
    },
    {
        src: "/Imagens/Category/Academia.jpeg",
        product: "Academia",
        text: "Para aqueles que buscam bem estar"
    }
    ,
    {
        src: "/Imagens/Category/Shorts.jpg",
        product: "Conforto",
        text: "Liberdade em suas atividades"
    }
] 

function CategoryGrid(){
    return(
        <div className="category-grid-container">
            <div className="category-top-content">
                <h1>COMPRE POR MODALIDADE</h1>
            </div>
            <div className="category-bottom-content">
                {imagensCategoria.map((imagem, index) => (
                    <CardCategory key={index} product={imagem.product} src={imagem.src} text={imagem.text}/>
                ))
                }
            </div>
        </div>
    )
}

export default CategoryGrid