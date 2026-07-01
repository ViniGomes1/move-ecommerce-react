import SideBar from "../../Components/SideBar/SideBar"
//import ContentRoll from "../../Components/ContentRoll/ContentRoll"
import ShopEnviroment from "../../Components/ShopEnviroment/ShopEnviroment"
import "./Shop.css"
import GridShopProducts from "../../Components/GridShopProducts/GridShopProducts"
import { useState } from "react"

function Shop() {

    const [quantidade, setQuantidade] = useState()

    return (
        <div>
            <ShopEnviroment produtos={quantidade}/>
            <div className="shop-content-container">
                <SideBar />
                <GridShopProducts onValue={setQuantidade}/>
            </div>
        </div>
    )
}

export default Shop