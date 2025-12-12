export default function ScheduleList() {
  const agendamentos = [
    { nome: "Maria Silva", servico: "Hidratação", horario: "09:00", duracao: "60 min", status: "Concluído", valor: "R$ 120", statusColor: "concluido" },
    { nome: "João Santos", servico: "Corte Masculino", horario: "10:00", duracao: "30 min", status: "Concluído", valor: "R$ 50", statusColor: "concluido" },
    { nome: "Ana Costa", servico: "Luzes", horario: "11:00", duracao: "120 min", status: "Confirmado", valor: "R$ 280", statusColor: "confirmado" },
    { nome: "Pedro Oliveira", servico: "Corte Masculino", horario: "14:00", duracao: "30 min", status: "Confirmado", valor: "R$ 50", statusColor: "confirmado" },
    { nome: "Juliana Souza", servico: "Escova", horario: "15:00", duracao: "45 min", status: "Confirmado", valor: "R$ 80", statusColor: "confirmado" },
  ];

  const getStatusStyle = (statusColor: string) => {
    const styles: any = {
      concluido: {
        background: "#DBEAFE",
        border: "2px solid #8EC5FF",
        color: "#1447E6",
      },
      confirmado: {
        background: "#DCFCE7",
        border: "2px solid #7FF8B1",
        color: "#00A63E",
      },
    };
    return styles[statusColor] || styles.concluido;
  };

  return (
    <div className="card-box" style={{ marginTop: "20px", marginRight: "20px", flex: 1 }}>
      <div>
        <h2 className="section-title" style={{ marginTop: 0 }}>Agendamentos de Hoje</h2>
        <p style={{ color: "#999", fontSize: "14px", margin: "0 0 16px 0" }}>{agendamentos.length} agendamentos programados</p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {agendamentos.map((agendamento, index) => (
          <div key={index} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "16px", borderBottom: index !== agendamentos.length - 1 ? "1px solid #e0e0e0" : "none" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "4px" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#F3E8FF", display: "flex", alignItems: "center", justifyContent: "center", color: "#9810FA", fontWeight: 700, fontSize: "12px" }}>
                  {agendamento.nome.split(" ").map(n => n[0]).join("").substring(0, 2)}
                </div>
                <div>
                  <p style={{ margin: 0, fontWeight: 600, fontSize: "14px", color: "#111827" }}>{agendamento.nome}</p>
                  <small style={{ color: "#4B5563", fontWeight: 500 }}>{agendamento.servico}</small>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "20px", textAlign: "right" }}>
              <div style={{ fontSize: "14px", minWidth: "60px", textAlign: "right" }}>
                <div style={{ fontWeight: 700, color: "#111827" }}>{agendamento.horario}</div>
                <small style={{ color: "#4B5563", fontWeight: 600 }}>{agendamento.duracao}</small>
              </div>

              <span style={{
                padding: "4px 10px",
                borderRadius: "6px",
                fontWeight: 700,
                fontSize: "12px",
                ...getStatusStyle(agendamento.statusColor)
              }}>
                {agendamento.status}
              </span>

              <span style={{ fontWeight: 700, minWidth: "60px", color: "#111827" }}>{agendamento.valor}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
