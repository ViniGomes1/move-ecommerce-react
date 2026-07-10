import FilterButton from "../FilterButton/FilterButton"
import "./SideBar.css"

const filterParams = [
    {
        nameContent: "Departamento",
        filterList: [
            { nameFilter: "Roupas Femininas" },
            { nameFilter: "Roupas Masculinas" }
        ]
    },
    {
        nameContent: "Categoria",
        filterList: [
            { nameFilter: "Blusas" },
            { nameFilter: "Tops" },
            { nameFilter: "Legging" },
            { nameFilter: "Moletom" },
            { nameFilter: "Shorts" }
        ]
    },
]

function SideBarShop() {

    return (
        <div className="sidebar-container">
            <div className="sidebar-topcontent"><p>FILTROS</p></div>
            <div className="sidebar-midcontent">
                <ul className="filter-list">
                    {filterParams.map((filter, index) => {
                        return (
                            <div key={index}>
                                <li><FilterButton nameContent={filter.nameContent} listFilter={filter.filterList}/></li>
                                <hr />
                            </div>
                        )
                    })}

                </ul>
            </div>
        </div>
    )
}

export default SideBarShop