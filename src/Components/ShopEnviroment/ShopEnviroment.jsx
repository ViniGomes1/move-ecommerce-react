import "./ShopEnviroment.css"

function ShopEnviroment({produtos}){
    return(
        <div className="shop-container">
            <h1>ROUPAS NO GERAL</h1>
            <h3>{produtos} Produtos</h3>
        </div>
    )
}

export default ShopEnviroment

