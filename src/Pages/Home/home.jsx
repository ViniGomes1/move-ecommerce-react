import ContentRoll from "../../Components/ContentRoll/ContentRoll"
import ProductGrid from "../../Components/ProductGrid/ProductGrid"
import CategoryGrid from "../../Components/CategoryGrid/CategoryGrid"




function Home() {

    const imagens = [
        "/Imagens/Carrossel/cara com corda.jpg",
        "/Imagens/Carrossel/move musa.jpeg",
        "/Imagens/Carrossel/imagem-base.jpg"
    ]

    return (
        <>
            <ContentRoll imageRoll={imagens} bottom={true}/>
            <ProductGrid />
            <CategoryGrid />
        </>
    )
}

export default Home