import { useEffect } from 'react';
import CardProduct from '../CardProduct/CardProduct';
import './GridShopProducts.css';

function GridShopProducts({ products, onValue }) {
  useEffect(() => {
    onValue(products.length);
  }, [products, onValue]);

  return (
    <div className="grid-shop-container-products">
      {products.map((product) => (
        <CardProduct
          key={product.id}
          id={product.id}
          productImage={product.image}
          price={product.price}
          productName={product.name}
          amostra={false}
        />
      ))}
    </div>
  );
}

export default GridShopProducts;