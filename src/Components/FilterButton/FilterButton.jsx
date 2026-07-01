import { useEffect, useState } from "react"
import "./FilterButton.css"
import seta from "../../assets/Logos/seta.svg"

function FilterButton({ nameContent, listFilter }) {

    const [mostrar, setMostrar] = useState(false)
    const [items, setItems] = useState(listFilter)

    function handleMostrar() {
        return setMostrar(prev => !prev)
    }

    return (
        <div className="filter-button" >
            <div className="name-content" onClick={() => handleMostrar()}>
                <p>{nameContent}</p>
                <img className={`${mostrar ? "rotacionar" : ""}`} src={seta} />
            </div>
            <div className={`list-content ${mostrar ? "mostrar" : ""}`}>
                <ul className="list-wrapper">
                    {listFilter.map((item, index) => {
                        return (
                            <div className="name-list-container">
                                <label className="container-check">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                                <li>{item.nameFilter}</li>
                            </div>
                        )
                    })

                    }
                </ul>

            </div>
        </div>
    )
}

export default FilterButton