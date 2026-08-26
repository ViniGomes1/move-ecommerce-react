export const DEFAULT_PASSWORD = 'move123';

export const MOCK_USERS = [
  {
    id: 1,
    username: 'vinicius.g',
    email: 'vinicius@move.com',
    name: 'Vinícius G.',
  },
  {
    id: 2,
    username: 'maria.s',
    email: 'maria@move.com',
    name: 'Maria S.',
  },
  {
    id: 3,
    username: 'joao.p',
    email: 'joao@move.com',
    name: 'João P.',
  },
  {
    id: 4,
    username: 'ana.c',
    email: 'ana@move.com',
    name: 'Ana C.',
  },
  {
    id: 5,
    username: 'cayo.toscano',
    email: 'cayo.toscano@move.com.br',
    name: 'Cayo Toscano',
  },
];

export function findUserByIdentifier(identifier) {
  const normalized = identifier.trim().toLowerCase();

  return MOCK_USERS.find(
    (user) =>
      user.username.toLowerCase() === normalized ||
      user.email.toLowerCase() === normalized
  );
}
