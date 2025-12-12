// Simulação de banco de dados em memória
export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  role: string;
}

// Usuários mock (em produção, isso estaria em um banco real e as senhas seriam hash)
export const users: User[] = [
  {
    id: "1",
    email: "admin@glowbeauty.com",
    password: "admin123",
    name: "Administrador",
    role: "admin",
  },
  {
    id: "2",
    email: "contato@glowbeauty.com",
    password: "glow123",
    name: "Salão Glow",
    role: "owner",
  },
  {
    id: "3",
    email: "atendente@glowbeauty.com",
    password: "atendente123",
    name: "Atendente",
    role: "attendant",
  },
];

// Função para buscar usuário por email
export function findUserByEmail(email: string): User | undefined {
  return users.find((user) => user.email === email);
}

// Função para validar credenciais
export function validateCredentials(email: string, password: string): User | null {
  const user = findUserByEmail(email);
  if (user && user.password === password) {
    return user;
  }
  return null;
}

// Simulação de sessões em memória
interface Session {
  userId: string;
  token: string;
  expiresAt: Date;
}

export const sessions: Session[] = [];

// Criar sessão
export function createSession(userId: string): string {
  const token = Math.random().toString(36).substring(2) + Date.now().toString(36);
  const expiresAt = new Date();
  expiresAt.setHours(expiresAt.getHours() + 24); // 24 horas

  sessions.push({ userId, token, expiresAt });
  return token;
}

// Validar sessão
export function validateSession(token: string): User | null {
  const session = sessions.find((s) => s.token === token && s.expiresAt > new Date());
  if (session) {
    const user = users.find((u) => u.id === session.userId);
    return user || null;
  }
  return null;
}

// Remover sessão (logout)
export function removeSession(token: string): void {
  const index = sessions.findIndex((s) => s.token === token);
  if (index > -1) {
    sessions.splice(index, 1);
  }
}
