import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { MOCK_USERS } from '../../data/mockUsers';

function Login() {
  const { login, error, clearError } = useAuth();
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    login(identifier, password);
  }

  return (
    <section className="mx-auto flex min-h-[calc(100vh-12rem)] w-full max-w-md flex-col justify-center px-4 py-12 sm:px-6">
      <div className="rounded-2xl border border-[#15342d]/10 bg-white/60 p-6 shadow-sm backdrop-blur-sm sm:p-8">
        <header className="mb-8 text-center">
          <p className="text-xs tracking-[0.25em] text-[#15342d]/60">ACESSO</p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-[#15342d] sm:text-3xl">
            Entrar na conta
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-[#15342d]/70">
            Use um usuário ou e-mail cadastrado para acessar o painel.
          </p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          <div>
            <label
              htmlFor="identifier"
              className="mb-1.5 block text-xs font-medium tracking-wide text-[#15342d]/80"
            >
              USUÁRIO OU E-MAIL
            </label>
            <input
              id="identifier"
              type="text"
              autoComplete="username"
              value={identifier}
              onChange={(event) => {
                clearError();
                setIdentifier(event.target.value);
              }}
              placeholder="ex: nome.sobrenome@move.com.br"
              className="w-full rounded-xl border border-[#15342d]/15 bg-white px-4 py-3 text-sm text-[#15342d] outline-none transition-shadow placeholder:text-[#15342d]/35 focus:border-[#15342d]/40 focus:ring-2 focus:ring-[#15342d]/10"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-1.5 block text-xs font-medium tracking-wide text-[#15342d]/80"
            >
              SENHA
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => {
                clearError();
                setPassword(event.target.value);
              }}
              placeholder="• • • • • • • • • •"
              className="w-full rounded-xl border border-[#15342d]/15 bg-white px-4 py-3 text-sm text-[#15342d] outline-none transition-shadow placeholder:text-[#15342d]/35 focus:border-[#15342d]/40 focus:ring-2 focus:ring-[#15342d]/10"
            />
          </div>

          {error && (
            <p
              role="alert"
              className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700"
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full rounded-xl bg-[#15342d] px-4 py-3 text-sm font-medium tracking-wide text-[#dae1de] transition-colors hover:bg-[#15342d]/90 focus:outline-none focus:ring-2 focus:ring-[#15342d]/30"
          >
            ENTRAR
          </button>
        </form>
      </div>
    </section>
  );
}

export default Login;
