import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';

function ProductPage() {
  const { id } = useParams();
  const { addItem, openCart } = useCart();
  const product = useMemo(
    () => products.find((item) => item.id === id),
    [id],
  );

  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || '');
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [addedMessage, setAddedMessage] = useState('');

  if (!product) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-20 text-center">
        <p className="text-2xl font-bold text-[#15342d]">Produto não encontrado.</p>
        <Link to="/shop" className="mt-5 inline-block rounded-full bg-[#15342d] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white">
          Voltar para a loja
        </Link>
      </div>
    );
  }

  const handleAddToCart = (buyNow = false) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedSize,
      color: selectedColor,
      quantity,
    });

    setAddedMessage(
      `${product.name} foi adicionado ao carrinho com sucesso!`,
    );

    if (buyNow) {
      openCart();
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-center gap-3 text-sm text-[#183a33]/70">
        <Link to="/shop" className="font-medium text-[#15342d]">Loja</Link>
        <span>/</span>
        <span>{product.category}</span>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <div className="overflow-hidden rounded-[30px] border border-[#15342d]/10 bg-white p-3 shadow-[0_24px_60px_rgba(24,58,51,0.08)]">
            <img src={product.gallery[0]} alt={product.name} className="h-[480px] w-full rounded-[22px] object-cover" />
          </div>

          <div className="grid grid-cols-3 gap-3">
            {product.gallery.map((image) => (
              <div key={image} className="overflow-hidden rounded-[22px] border border-[#15342d]/10 bg-white p-2">
                <img src={image} alt={product.name} className="h-28 w-full rounded-[16px] object-cover" />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <span className="rounded-full bg-[#dff2e5] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#15342d]">
              {product.highlight}
            </span>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-[#15342d]">{product.name}</h1>
            <div className="mt-3 flex items-center gap-3 text-sm text-[#183a33]/70">
              <span className="font-semibold text-[#15342d]">★ {product.rating}</span>
              <span>•</span>
              <span>{product.category}</span>
            </div>
          </div>

          <div className="rounded-[28px] border border-[#15342d]/10 bg-[#f7f9f8] p-6">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-[#183a33]/50">Preço</p>
                <p className="mt-2 text-4xl font-black text-[#15342d]">
                  {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}
                </p>
              </div>
              <span className="rounded-full bg-[#15342d] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                3x sem juros
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#183a33]/65">Cor</p>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    type="button"
                    onClick={() => setSelectedColor(color)}
                    className={`rounded-full border px-3 py-2 text-sm font-medium transition ${
                      selectedColor === color
                        ? 'border-[#15342d] bg-[#15342d] text-white'
                        : 'border-[#15342d]/20 bg-white text-[#15342d]'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#183a33]/65">Tamanho</p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`h-11 w-11 rounded-full border text-sm font-semibold transition ${
                      selectedSize === size
                        ? 'border-[#15342d] bg-[#15342d] text-white'
                        : 'border-[#15342d]/20 bg-white text-[#15342d]'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#183a33]/65">Quantidade</p>
              <div className="flex w-fit items-center rounded-full border border-[#15342d]/20 bg-white">
                <button
                  type="button"
                  onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                  className="flex h-11 w-11 items-center justify-center text-xl text-[#15342d]"
                >
                  −
                </button>
                <span className="w-12 text-center text-base font-semibold text-[#15342d]">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((current) => current + 1)}
                  className="flex h-11 w-11 items-center justify-center text-xl text-[#15342d]"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => handleAddToCart(false)}
              className="flex-1 rounded-full bg-[#15342d] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#103128]"
            >
              Adicionar ao carrinho
            </button>
            <button
              type="button"
              onClick={() => handleAddToCart(true)}
              className="flex-1 rounded-full border border-[#15342d]/20 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#15342d] transition hover:bg-[#edf1ee]"
            >
              Comprar agora
            </button>
          </div>

          {addedMessage && (
            <p className="rounded-2xl border border-[#9ed3ac] bg-[#edf9f0] px-4 py-3 text-sm font-medium text-[#15342d]">
              {addedMessage}
            </p>
          )}
        </div>
      </div>

      <section className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[30px] border border-[#15342d]/10 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-bold text-[#15342d]">Descrição</h2>
          <p className="mt-4 text-base leading-8 text-[#183a33]/75">{product.description}</p>
        </div>

        <div className="rounded-[30px] border border-[#15342d]/10 bg-[#edf1ee] p-7 shadow-sm">
          <h2 className="text-2xl font-bold text-[#15342d]">Detalhes do produto</h2>
          <ul className="mt-4 space-y-3 text-sm text-[#183a33]/80">
            {product.features.map((feature) => (
              <li key={feature} className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#317567]" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default ProductPage;
