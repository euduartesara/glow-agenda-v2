import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    // Criar resposta com redirecionamento
    const response = NextResponse.json(
      {
        success: true,
        message: "Logout realizado com sucesso",
      },
      { status: 200 }
    );

    // Limpar cookie de sessão
    response.cookies.set("session", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 0, // Isso deleta o cookie
    });

    return response;
  } catch (error) {
    console.error("Erro no logout:", error);
    return NextResponse.json(
      { error: "Erro ao fazer logout" },
      { status: 500 }
    );
  }
}
