import notebook from '../../assets/Logos/notebook.svg';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

const menuItems = ['PEDIDOS', 'DEVOLUÇÕES', 'FAVORITOS', 'MEUS DETALHES', 'AJUSTES'];
const sideItems = ['CARRINHO', 'AJUDA'];

function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <header className="mb-8 flex flex-col gap-4 border-b border-[#15342d]/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs tracking-[0.25em] text-[#15342d]/60">PAINEL</p>
          <h1 className="mt-1 text-2xl font-semibold tracking-tight text-[#15342d] sm:text-3xl">
            Olá, {user.name}
          </h1>
          <p className="mt-1 text-sm text-[#15342d]/65">{user.email}</p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/admin"
            className="rounded-full bg-[#15342d] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-opacity hover:opacity-90"
          >
            Visão administrativa
          </Link>
          <button
            type="button"
            onClick={logout}
            className="self-start rounded-full border border-[#15342d]/20 px-4 py-2 text-xs tracking-wide text-[#15342d] transition-colors hover:bg-[#15342d]/5 sm:self-auto"
          >
            SAIR DA CONTA
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
        <aside className="lg:col-span-3">
          <nav aria-label="Menu da conta">
            <ul className="flex flex-wrap gap-x-4 gap-y-2 lg:flex-col lg:gap-0 lg:space-y-3">
              {menuItems.map((item, index) => (
                <li
                  key={item}
                  className={`cursor-pointer text-sm tracking-[0.15em] transition-colors hover:text-[#15342d]/70 ${
                    index === 0 ? 'font-bold text-[#15342d]' : 'text-[#15342d]/80'
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <main className="rounded-2xl border border-[#15342d]/10 bg-white/50 p-6 sm:p-8 lg:col-span-6">
          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <img src={notebook} alt="" className="size-8 opacity-80" />
            <div>
              <h2 className="text-base font-medium text-[#15342d]">Seus pedidos</h2>
              <p className="mt-1 text-sm text-[#15342d]/70">Ainda não fez nenhum pedido.</p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <article className="rounded-xl border border-[#15342d]/10 bg-[#dae1de]/30 p-4">
              <p className="text-xs tracking-wide text-[#15342d]/55">USUÁRIO</p>
              <p className="mt-1 text-sm font-medium text-[#15342d]">{user.username}</p>
            </article>
            <article className="rounded-xl border border-[#15342d]/10 bg-[#dae1de]/30 p-4">
              <p className="text-xs tracking-wide text-[#15342d]/55">STATUS</p>
              <p className="mt-1 text-sm font-medium text-[#15342d]">Conta ativa</p>
            </article>
          </div>
        </main>

        <aside className="lg:col-span-3">
          <ul className="flex flex-wrap gap-x-4 gap-y-2 lg:flex-col lg:gap-0 lg:space-y-3 lg:text-right">
            {sideItems.map((item) => (
              <li
                key={item}
                className="cursor-pointer text-sm text-[#15342d]/80 transition-colors hover:text-[#15342d]/60"
              >
                {item}
              </li>
            ))}
            <li className="text-sm font-bold tracking-wide text-[#15342d] lg:pt-2">
              {user.name.toUpperCase()}
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
}

export default Dashboard;
