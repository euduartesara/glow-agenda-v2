export default function ServicesList() {
  const servicos = [
    { nome: "Corte Masculino", categoria: "Cabelo", duracao: "30 min", preco: "R$ 50", status: "Ativo", avaliacao: "4.9" },
    { nome: "Hidratação", categoria: "Tratamento", duracao: "60 min", preco: "R$ 120", status: "Ativo", avaliacao: "4.8" },
    { nome: "Luzes", categoria: "Coloração", duracao: "120 min", preco: "R$ 280", status: "Ativo", avaliacao: "4.7" },
    { nome: "Escova", categoria: "Penteado", duracao: "45 min", preco: "R$ 80", status: "Ativo", avaliacao: "4.9" },
    { nome: "Corte Feminino", categoria: "Cabelo", duracao: "45 min", preco: "R$ 70", status: "Ativo", avaliacao: "4.8" },
  ];

  const getStatusStyle = (status: string) => {
    const styles: any = {
      Ativo: {
        background: "#DCFCE7",
        border: "2px solid #7FF8B1",
        color: "#00A63E",
      },
      Inativo: {
        background: "#FEE2E2",
        border: "2px solid #FCA5A5",
        color: "#DC2626",
      },
    };
    return styles[status] || styles.Ativo;
  };

  return (
    <div className="card-box" style={{ marginTop: "20px", marginRight: "20px", flex: 1 }}>
      <div>
        <h2 className="section-title" style={{ marginTop: 0 }}>Lista de Serviços</h2>
        <p style={{ color: "#999", fontSize: "14px", margin: "0 0 16px 0" }}>{servicos.length} serviços cadastrados</p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {servicos.map((servico, index) => (
          <div key={index} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "16px", borderBottom: index !== servicos.length - 1 ? "1px solid #e0e0e0" : "none" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "4px" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#F3E8FF", display: "flex", alignItems: "center", justifyContent: "center", color: "#9810FA", fontWeight: 700, fontSize: "12px" }}>
                  {servico.nome.split(" ").map(n => n[0]).join("").substring(0, 2)}
                </div>
                <div>
                  <p style={{ margin: 0, fontWeight: 600, fontSize: "14px", color: "#111827" }}>{servico.nome}</p>
                  <small style={{ color: "#4B5563", fontWeight: 500 }}>{servico.categoria}</small>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "20px", textAlign: "right" }}>
              <div style={{ fontSize: "14px", minWidth: "80px", textAlign: "right" }}>
                <div style={{ fontWeight: 700, color: "#111827" }}>{servico.duracao}</div>
                <small style={{ color: "#4B5563", fontWeight: 600 }}>{servico.preco}</small>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ fontWeight: 700, minWidth: "40px", color: "#111827" }}>⭐{servico.avaliacao}</span>
                <span style={{
                  padding: "4px 10px",
                  borderRadius: "6px",
                  fontWeight: 700,
                  fontSize: "12px",
                  ...getStatusStyle(servico.status)
                }}>
                  {servico.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}