import { NextRequest, NextResponse } from "next/server";
import { removeSession } from "@/lib/db";

export async function POST(request: NextRequest) {
  try {
    const token = request.cookies.get("session")?.value;

    if (token) {
      removeSession(token);
    }

    const response = NextResponse.json(
      { success: true, message: "Logout realizado com sucesso" },
      { status: 200 }
    );

    // Remover cookie
    response.cookies.delete("session");

    return response;
  } catch (error) {
    console.error("Erro no logout:", error);
    return NextResponse.json(
      { error: "Erro interno no servidor" },
      { status: 500 }
    );
  }
}
