import SideBar from "../../Components/SideBar/SideBar"
//import ContentRoll from "../../Components/ContentRoll/ContentRoll"
import ShopEnviroment from "../../Components/ShopEnviroment/ShopEnviroment"
import "./Shop.css"
import GridShopProducts from "../../Components/GridShopProducts/GridShopProducts"

function Shop() {
    return (
        <div>
            <ShopEnviroment />
            <div className="shop-content-container">
                <SideBar />
                <GridShopProducts />
            </div>
        </div>
    )
}

export default Shop