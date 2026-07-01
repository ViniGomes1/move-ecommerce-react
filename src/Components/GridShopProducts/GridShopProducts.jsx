
import CardProduct from "../CardProduct/CardProduct"
import "./GridShopProducts.css"


const gridProducts = [
    {
        name: "Calça",
        price: "399",
        src: "/Imagens/Products/calça moletom masculino.jpg"
    },
    {
        name: "Calça legging",
        price: "399",
        src: "/Imagens/Products/calça legging.jpg"
    },
    {
        name: "Camisa Moletom",
        price: "399",
        src: "/Imagens/Products/camisa moletom.jpg"
    }
]

function GridShopProducts() {
    return (
        <div className="grid-shop-container-products">
            {gridProducts.map((imagem, index) => {
                return (
                    <CardProduct productImage={imagem.src} price={imagem.price} productName={imagem.name} amostra={false}/>
                )
            })}
        </div>
    )
}

export default GridShopProducts