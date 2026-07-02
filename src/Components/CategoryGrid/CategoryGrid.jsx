import CardCategory from "../CardCategory/CardCategory";
import "./CategoryGrid.css"

const imagensCategoria = [
    {
        src: "/Imagens/Category/tenis.jpg",
        product: "Tênis",
        text: "Para aqueles que correm em liberdade"
    },
    {
        src: "/Imagens/Category/Moletom.jpg",
        product: "Moletom",
        text: "Conforto em tempos de frio"
    }
    ,
    {
        src: "/Imagens/Category/Shorts.jpg",
        product: "Shorts",
        text: "Conforto para atividades rápidas"
    }
] 

function CategoryGrid(){
    return(
        <div className="category-grid-container">
            <div className="category-top-content">
                <h1>COMPRE POR MODALIDADE</h1>
            </div>
            <div className="category-bottom-content">
                {imagensCategoria.map((imagem) => (
                    <CardCategory product={imagem.product} src={imagem.src} text={imagem.text}/>
                ))
                }
            </div>
        </div>
    )
}

export default CategoryGrid