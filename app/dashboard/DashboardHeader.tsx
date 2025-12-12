"use client";

export default function DashboardHeader() {
  const getDayName = () => {
    const days = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];
    const today = new Date();
    return days[today.getDay()];
  };

  const getFormattedDate = () => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    return `${getDayName()}, ${day} de outubro`;
  };

  return (
    <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
      <div>
        <h1 style={{ fontSize: "28px", fontWeight: 800, margin: 0, marginBottom: "4px", color: "#111827" }}>
          Dashboard
        </h1>

        <p style={{ margin: 0, fontSize: "14px", color: "#4B5563", fontWeight: 600 }}>
          Bem-vindo de volta! Aqui está o resumo do seu dia.
        </p>
      </div>

      <div style={{ textAlign: "right" }}>
        <p style={{ fontSize: "13px", color: "#4B5563", margin: 0 }}>Hoje</p>
        <p style={{ fontSize: "14px", fontWeight: 700, margin: 0, color: "#111827" }}>{getFormattedDate()}</p>
      </div>
    </header>
  );
}
