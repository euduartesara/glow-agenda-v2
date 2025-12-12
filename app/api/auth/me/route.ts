import { NextRequest, NextResponse } from "next/server";
import { validateSession } from "@/lib/db";

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get("session")?.value;

    if (!token) {
      return NextResponse.json(
        { authenticated: false, user: null },
        { status: 401 }
      );
    }

    const user = validateSession(token);

    if (!user) {
      return NextResponse.json(
        { authenticated: false, user: null },
        { status: 401 }
      );
    }

    // Retornar dados do usuário (sem a senha)
    const { password: _, ...userWithoutPassword } = user;

    return NextResponse.json(
      { authenticated: true, user: userWithoutPassword },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao verificar sessão:", error);
    return NextResponse.json(
      { error: "Erro interno no servidor" },
      { status: 500 }
    );
  }
}
