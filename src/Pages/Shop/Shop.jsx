import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ShopEnviroment from '../../Components/ShopEnviroment/ShopEnviroment';
import GridShopProducts from '../../Components/GridShopProducts/GridShopProducts';
import SideBarShop from '../../Components/SideBarShop/SideBarShop';
import { products } from '../../data/products';
import './Shop.css';

function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'Tudo';
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  useEffect(() => {
    const categoryParam = searchParams.get('category') || 'Tudo';
    setSelectedCategory(categoryParam);
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'Tudo') {
      return products;
    }

    return products.filter((product) => product.category === selectedCategory);
  }, [selectedCategory]);

  const handleCategoryChange = (newCategory) => {
    setSelectedCategory(newCategory);
    if (newCategory === 'Tudo') {
      setSearchParams({});
      return;
    }

    setSearchParams({ category: newCategory });
  };

  return (
    <div>
      <ShopEnviroment produtos={filteredProducts.length} categoria={selectedCategory} />
      <div className="shop-content-container">
        <SideBarShop selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} />
        <GridShopProducts products={filteredProducts} onValue={() => {}} />
      </div>
    </div>
  );
}

export default Shop;