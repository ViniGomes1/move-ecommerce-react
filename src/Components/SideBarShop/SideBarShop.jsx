import './SideBar.css';
import { categories } from '../../data/products';

function SideBarShop({ selectedCategory, onCategoryChange }) {
  return (
    <aside className="sidebar-container">
      <div className="sidebar-topcontent">
        <p>FILTROS</p>
      </div>

      <div className="sidebar-midcontent">
        <ul className="filter-list">
          {categories.map((category) => (
            <li key={category} className="filter-item">
              <button
                type="button"
                onClick={() => onCategoryChange(category)}
                className={`filter-button-option ${
                  selectedCategory === category ? 'active' : ''
                }`}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default SideBarShop;