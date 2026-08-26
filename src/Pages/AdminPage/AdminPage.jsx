import { useMemo } from 'react';
import { Navigate } from 'react-router-dom';
import { products } from '../../data/products';
import { useAuth } from '../../context/AuthContext';

function AdminPage() {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/account" replace />;
  }

  const salesStats = useMemo(() => {
    return products
      .map((product) => ({
        name: product.name,
        category: product.category,
        price: product.price,
        sales: Math.floor(Math.random() * 150) + 10,
        rating: product.rating,
      }))
      .sort((a, b) => b.sales - a.sales);
  }, []);

  const totalSales = useMemo(() => {
    return salesStats.reduce((sum, product) => sum + product.sales * product.price, 0);
  }, [salesStats]);

  const categorySales = useMemo(() => {
    const grouped = {};
    salesStats.forEach((product) => {
      if (!grouped[product.category]) {
        grouped[product.category] = { count: 0, revenue: 0 };
      }
      grouped[product.category].count += product.sales;
      grouped[product.category].revenue += product.sales * product.price;
    });
    return grouped;
  }, [salesStats]);

  const maxSales = Math.max(...salesStats.map((p) => p.sales));
  const topProduct = salesStats[0];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f7f6] to-[#edf1ee] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-4xl font-black tracking-tight text-[#15342d]">
            Painel Administrativo
          </h1>
          <p className="mt-2 text-lg text-[#183a33]/75">
            Bem-vindo, <span className="font-bold">{user?.name}</span>. Aqui estão os dados de vendas.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-4 mb-8">
          <div className="rounded-[24px] border border-[#15342d]/10 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#183a33]/60">
              Receita Total
            </p>
            <p className="mt-3 text-3xl font-black text-[#15342d]">
              {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
                totalSales
              )}
            </p>
          </div>

          <div className="rounded-[24px] border border-[#15342d]/10 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#183a33]/60">
              Total de Vendas
            </p>
            <p className="mt-3 text-3xl font-black text-[#15342d]">
              {salesStats.reduce((sum, p) => sum + p.sales, 0)}
            </p>
          </div>

          <div className="rounded-[24px] border border-[#15342d]/10 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#183a33]/60">
              Categorias
            </p>
            <p className="mt-3 text-3xl font-black text-[#15342d]">
              {Object.keys(categorySales).length}
            </p>
          </div>

          <div className="rounded-[24px] border border-[#15342d]/10 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#183a33]/60">
              Produtos
            </p>
            <p className="mt-3 text-3xl font-black text-[#15342d]">{products.length}</p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr] mb-8">
          <div className="rounded-[24px] border border-[#15342d]/10 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-[#15342d] mb-6">Top Produtos</h2>
            <div className="space-y-4">
              {salesStats.slice(0, 5).map((product, idx) => (
                <div key={idx} className="flex items-end gap-4">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-[#15342d]">
                        {idx + 1}. {product.name}
                      </span>
                      <span className="text-xs font-bold text-[#317567]">{product.sales} vendas</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-[#dae1de]">
                      <div
                        className="h-full bg-gradient-to-r from-[#15342d] to-[#317567]"
                        style={{ width: `${(product.sales / maxSales) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[24px] border border-[#15342d]/10 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-[#15342d] mb-6">Vendas por Categoria</h2>
            <div className="space-y-3">
              {Object.entries(categorySales).map(([category, data]) => (
                <div key={category} className="rounded-[16px] bg-[#f5f7f6] p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-[#15342d]">{category}</span>
                    <span className="text-xs font-bold text-[#183a33]/60">{data.count} un.</span>
                  </div>
                  <p className="text-xs text-[#183a33]/75">
                    {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
                      data.revenue
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {topProduct && (
          <div className="rounded-[24px] border border-[#15342d]/10 bg-gradient-to-r from-[#15342d] to-[#1a4839] p-8 text-white shadow-lg mb-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                  Produto Estrela
                </p>
                <h3 className="mt-2 text-2xl font-black">{topProduct.name}</h3>
                <p className="mt-1 text-sm text-white/75">
                  {topProduct.sales} vendas • Avaliação ★ {topProduct.rating}
                </p>
                <p className="mt-3 text-lg font-bold">
                  {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
                    topProduct.price * topProduct.sales
                  )}{' '}
                  em vendas
                </p>
              </div>
              <div className="text-right">
                <div className="text-5xl font-black text-[#9ed3ac]">{topProduct.sales}</div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                  Vendas
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="rounded-[24px] border border-[#15342d]/10 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-[#15342d] mb-6">Todos os Produtos</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="border-b border-[#15342d]/10">
                <tr>
                  <th className="px-4 py-3 text-left font-bold text-[#15342d]">Produto</th>
                  <th className="px-4 py-3 text-left font-bold text-[#15342d]">Categoria</th>
                  <th className="px-4 py-3 text-right font-bold text-[#15342d]">Preço</th>
                  <th className="px-4 py-3 text-right font-bold text-[#15342d]">Vendas</th>
                  <th className="px-4 py-3 text-right font-bold text-[#15342d]">Receita</th>
                  <th className="px-4 py-3 text-right font-bold text-[#15342d]">Rating</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#15342d]/10">
                {salesStats.map((product) => (
                  <tr key={product.name} className="hover:bg-[#f5f7f6]">
                    <td className="px-4 py-3 font-medium text-[#15342d]">{product.name}</td>
                    <td className="px-4 py-3 text-[#183a33]/75">{product.category}</td>
                    <td className="px-4 py-3 text-right text-[#15342d] font-semibold">
                      R$ {product.price}
                    </td>
                    <td className="px-4 py-3 text-right font-semibold text-[#317567]">
                      {product.sales}
                    </td>
                    <td className="px-4 py-3 text-right font-bold text-[#15342d]">
                      {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
                        product.sales * product.price
                      )}
                    </td>
                    <td className="px-4 py-3 text-right">★ {product.rating}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
