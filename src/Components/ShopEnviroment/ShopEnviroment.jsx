import './ShopEnviroment.css';

function ShopEnviroment({ produtos, categoria = 'Tudo' }) {
  const title = categoria === 'Tudo' ? 'Todos os produtos' : categoria;

  return (
    <div className="shop-container">
      <h1>{title}</h1>
      <h3>{produtos} Produtos</h3>
    </div>
  );
}

export default ShopEnviroment;

