import { NextRequest, NextResponse } from "next/server";
import { validateCredentials, createSession } from "@/lib/db";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // Validar campos
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email e senha são obrigatórios" },
        { status: 400 }
      );
    }

    // Validar credenciais
    const user = validateCredentials(email, password);

    if (!user) {
      return NextResponse.json(
        { error: "Email ou senha inválidos" },
        { status: 401 }
      );
    }

    // Criar sessão
    const token = createSession(user.id);

    // Retornar dados do usuário (sem a senha)
    const { password: _, ...userWithoutPassword } = user;

    // Criar resposta com cookie
    const response = NextResponse.json(
      {
        success: true,
        user: userWithoutPassword,
        message: "Login realizado com sucesso",
      },
      { status: 200 }
    );

    // Definir cookie de sessão
    response.cookies.set("session", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24, // 24 horas
    });

    return response;
  } catch (error) {
    console.error("Erro no login:", error);
    return NextResponse.json(
      { error: "Erro interno no servidor" },
      { status: 500 }
    );
  }
}
