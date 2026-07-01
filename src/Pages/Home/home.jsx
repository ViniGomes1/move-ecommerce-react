import NavBar from "../../Components/NavBar/NavBar"
import ContentRoll from "../../Components/ContentRoll/ContentRoll"
import ProductGrid from "../../Components/ProductGrid/ProductGrid"




function Home() {

    const imagens = [
        "src/assets/Imagens/cara com corda.jpg",
        "src/assets/Imagens/academia.jpg",
        "src/assets/Imagens/imagem-base.jpg"
    ]

    return (
        <>
            <ContentRoll imageRoll={imagens} bottom={true}/>
            <ProductGrid />
        </>
    )
}

export default Home