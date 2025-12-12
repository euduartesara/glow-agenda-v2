export default function ClientsList() {
  const clientes = [
    { nome: "Maria Silva", telefone: "(11) 99999-9999", email: "maria@email.com", ultimoServico: "Hidratação", dataUltimo: "12/12/2025" },
    { nome: "João Santos", telefone: "(11) 88888-8888", email: "joao@email.com", ultimoServico: "Corte Masculino", dataUltimo: "11/12/2025" },
    { nome: "Ana Costa", telefone: "(11) 77777-7777", email: "ana@email.com", ultimoServico: "Luzes", dataUltimo: "10/12/2025" },
    { nome: "Pedro Oliveira", telefone: "(11) 66666-6666", email: "pedro@email.com", ultimoServico: "Corte Masculino", dataUltimo: "09/12/2025" },
    { nome: "Juliana Souza", telefone: "(11) 55555-5555", email: "juliana@email.com", ultimoServico: "Escova", dataUltimo: "08/12/2025" },
  ];

  return (
    <div className="card-box" style={{ marginTop: "20px", marginRight: "20px", flex: 1 }}>
      <div>
        <h2 className="section-title" style={{ marginTop: 0 }}>Lista de Clientes</h2>
        <p style={{ color: "#999", fontSize: "14px", margin: "0 0 16px 0" }}>{clientes.length} clientes cadastrados</p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {clientes.map((cliente, index) => (
          <div key={index} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "16px", borderBottom: index !== clientes.length - 1 ? "1px solid #e0e0e0" : "none" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "4px" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#F3E8FF", display: "flex", alignItems: "center", justifyContent: "center", color: "#9810FA", fontWeight: 700, fontSize: "12px" }}>
                  {cliente.nome.split(" ").map(n => n[0]).join("").substring(0, 2)}
                </div>
                <div>
                  <p style={{ margin: 0, fontWeight: 600, fontSize: "14px", color: "#111827" }}>{cliente.nome}</p>
                  <small style={{ color: "#4B5563", fontWeight: 500 }}>{cliente.email}</small>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "20px", textAlign: "right" }}>
              <div style={{ fontSize: "14px", minWidth: "120px", textAlign: "right" }}>
                <div style={{ fontWeight: 700, color: "#111827" }}>{cliente.telefone}</div>
                <small style={{ color: "#4B5563", fontWeight: 600 }}>{cliente.ultimoServico}</small>
              </div>

              <span style={{ fontWeight: 700, minWidth: "80px", color: "#111827" }}>{cliente.dataUltimo}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}