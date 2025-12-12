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

// Simulação de sessões com tokens em base64
export function createSession(userId: string): string {
  const payload = {
    userId,
    expiresAt: Date.now() + 24 * 60 * 60 * 1000, // 24 horas
  };

  return Buffer.from(JSON.stringify(payload)).toString("base64");
}

// Validar sessão
export function validateSession(token: string): User | null {
  try {
    const decoded = Buffer.from(token, "base64").toString("utf-8");
    const payload = JSON.parse(decoded) as { userId: string; expiresAt?: number };

    if (!payload.userId) {
      return null;
    }

    if (payload.expiresAt && payload.expiresAt < Date.now()) {
      return null;
    }

    const user = users.find((u) => u.id === payload.userId);
    return user || null;
  } catch (error) {
    console.error("Erro ao validar sessão:", error);
    return null;
  }
}
