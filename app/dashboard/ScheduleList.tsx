export default function ScheduleList() {
  return (
    <div className="card-box" style={{ marginTop: "20px" }}>
      <h2 className="section-title">Agendamentos de Hoje</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        
        {/* Exemplo */}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <p><strong>Maria Silva</strong></p>
            <small>Hidratação</small>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <span>09:00</span>

            {/* Badge Concluído */}
            <span style={{
              background: "#DBEAFE",
              border: "2px solid #8EC5FF",
              color: "#1447E6",
              padding: "4px 10px",
              borderRadius: "6px",
              fontWeight: "bold"
            }}>
              Concluído
            </span>

            <span>R$ 120</span>
          </div>

        </div>

      </div>
    </div>
  );
}
