import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { DEFAULT_PASSWORD, findUserByIdentifier } from '../data/mockUsers';

const AuthContext = createContext(null);

const STORAGE_KEY = 'move-auth-user';

function readStoredUser() {
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(readStoredUser);
  const [error, setError] = useState(null);

  const login = useCallback((identifier, password) => {
    setError(null);

    if (!identifier.trim() || !password) {
      setError('Preencha usuário e senha.');
      return false;
    }

    const matchedUser = findUserByIdentifier(identifier);

    if (!matchedUser || password !== DEFAULT_PASSWORD) {
      setError('Usuário ou senha inválidos.');
      return false;
    }

    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(matchedUser));
    setUser(matchedUser);
    return true;
  }, []);

  const logout = useCallback(() => {
    sessionStorage.removeItem(STORAGE_KEY);
    setUser(null);
    setError(null);
  }, []);

  const clearError = useCallback(() => setError(null), []);

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      error,
      login,
      logout,
      clearError,
    }),
    [user, error, login, logout, clearError]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth deve ser usado dentro de AuthProvider.');
  }

  return context;
}
