import NavBar from "../../Components/NavBar/NavBar"
import ContentRoll from "../../Components/ContentRoll/ContentRoll"
import ProductGrid from "../../Components/ProductGrid/ProductGrid"




function Home() {

    const imagens = [
        "/Imagens/Carrossel/cara com corda.jpg",
        "/Imagens/Carrossel/academia.jpg",
        "/Imagens/Carrossel/imagem-base.jpg"
    ]

    return (
        <>
            <ContentRoll imageRoll={imagens} bottom={true}/>
            <ProductGrid />
        </>
    )
}

export default Home