import FilterButton from "../FilterButton/FilterButton"
import "./SideBar.css"

const filterParams = [
    {
        nameContent: "Departamento",
        filterList: [
            { nameFilter: "Roupas Femininas" },
            { nameFilter: "Roupas Masculinas" }
        ]
    }
]

function SideBar() {

    return (
        <div className="sidebar-container">
            <div className="sidebar-topcontent"><p>FILTROS</p></div>
            <div className="sidebar-midcontent">
                <ul className="filter-list">
                    {filterParams.map((filter, index) => {
                        return (
                            <>
                                <li><FilterButton nameContent={filter.nameContent} listFilter={filter.filterList}/></li>
                                <hr />
                            </>
                        )
                    })}

                </ul>
            </div>
        </div>
    )
}

export default SideBar