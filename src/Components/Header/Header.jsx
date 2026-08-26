import { Link } from 'react-router-dom';
import Logo from '../../assets/Logos/gemini-svg.svg?react';
import person from '../../assets/Logos/person.svg';
import bagfill from '../../assets/Logos/bag-fill.svg';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';

const navLinks = [
  { label: 'LOJA', to: '/shop' },
  { label: 'EVENTOS', to: '/events' },
];

function Header() {
  const { user, isAuthenticated, logout } = useAuth();
  const { cartCount, openCart } = useCart();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#15342d]/10 bg-[#dae1de]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex shrink-0 items-center gap-2.5 transition-opacity hover:opacity-80"
        >
          <Logo className="size-9 text-[#15342d] sm:size-10" />
          <span className="font-['Ibarra_Real_Nova'] text-lg font-bold tracking-tight text-[#15342d] sm:text-xl">
            MOVE Co.
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Principal">
          {navLinks.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className="text-sm tracking-[0.2em] text-[#183a33] transition-colors hover:text-[#183a33]/60"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          {isAuthenticated && (
            <div className="hidden items-center gap-3 sm:flex">
              <span className="max-w-[120px] truncate text-sm font-medium text-[#15342d] lg:max-w-none">
                {user.name}
              </span>
              <button
                type="button"
                onClick={logout}
                className="rounded-full border border-[#15342d]/20 px-3 py-1 text-xs tracking-wide text-[#15342d] transition-colors hover:bg-[#15342d]/5"
              >
                SAIR
              </button>
            </div>
          )}

          <ul className="flex items-center gap-3 sm:gap-4">
            <li>
              <Link
                to={isAuthenticated ? '/admin' : '/account'}
                className="block transition-opacity hover:opacity-70"
                aria-label={isAuthenticated ? 'Admin' : 'Conta'}
              >
                <img src={person} alt="" className="size-6 sm:size-[26px]" />
              </Link>
            </li>
            <li className="relative">
              <button
                type="button"
                onClick={openCart}
                className="transition-opacity hover:opacity-70"
                aria-label="Carrinho"
              >
                <img src={bagfill} alt="" className="size-6 sm:size-[26px]" />
              </button>
              {cartCount > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#15342d] px-1 text-[10px] font-bold text-white">
                  {cartCount}
                </span>
              )}
            </li>
          </ul>
        </div>
      </div>

      <nav
        className="flex items-center justify-center gap-6 border-t border-[#15342d]/5 px-4 py-2.5 md:hidden"
        aria-label="Mobile"
      >
        {navLinks.map(({ label, to }) => (
          <Link
            key={to}
            to={to}
            className="text-xs tracking-[0.15em] text-[#183a33] transition-colors hover:text-[#183a33]/60"
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default Header;
