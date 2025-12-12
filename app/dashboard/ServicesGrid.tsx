interface ServicesGridProps {
  filter: string;
}

export default function ServicesGrid({ filter }: ServicesGridProps) {
  const allServices = [
    { nome: "Corte Masculino", categoria: "Cabelo", duracao: "30 min", preco: "R$ 50", status: "ativo", descricao: "Corte tradicional ou moderno", agendamentos: 45, receita: "R$ 2250" },
    { nome: "Hidratação", categoria: "Tratamento", duracao: "60 min", preco: "R$ 120", status: "ativo", descricao: "Tratamento intensivo para cabelos danificados", agendamentos: 32, receita: "R$ 3840" },
    { nome: "Luzes", categoria: "Coloração", duracao: "120 min", preco: "R$ 280", status: "ativo", descricao: "Técnica de coloração com mechas", agendamentos: 18, receita: "R$ 5040" },
    { nome: "Escova", categoria: "Cabelo", duracao: "45 min", preco: "R$ 80", status: "ativo", descricao: "Escova modeladora profissional", agendamentos: 27, receita: "R$ 2160" },
    { nome: "Corte Feminino", categoria: "Cabelo", duracao: "45 min", preco: "R$ 70", status: "ativo", descricao: "Corte feminino moderno e elegante", agendamentos: 22, receita: "R$ 1540" },
    { nome: "Barba Completa", categoria: "Barbearia", duracao: "25 min", preco: "R$ 35", status: "ativo", descricao: "Barba completa com acabamento perfeito", agendamentos: 38, receita: "R$ 1330" },
    { nome: "Sobrancelha", categoria: "Tratamento", duracao: "15 min", preco: "R$ 25", status: "ativo", descricao: "Design de sobrancelhas profissional", agendamentos: 15, receita: "R$ 375" },
    { nome: "Manicure", categoria: "Unhas", duracao: "60 min", preco: "R$ 40", status: "ativo", descricao: "Manicure completa com esmaltação", agendamentos: 29, receita: "R$ 1160" },
    { nome: "Pedicure", categoria: "Unhas", duracao: "90 min", preco: "R$ 60", status: "ativo", descricao: "Pedicure completa com esmaltação", agendamentos: 20, receita: "R$ 1200" },
    { nome: "Tintura", categoria: "Coloração", duracao: "180 min", preco: "R$ 150", status: "ativo", descricao: "Tintura completa do cabelo", agendamentos: 12, receita: "R$ 1800" },
  ];

  const filteredServices = filter === "Todos"
    ? allServices
    : allServices.filter(service => service.categoria === filter);

  return (
    <div className="card-box" style={{ marginTop: "20px", marginRight: "20px", flex: 1 }}>
      <div style={{
        maxHeight: "600px",
        overflowY: "auto",
        paddingRight: "10px"
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "16px"
        }}>
          {filteredServices.map((servico, index) => (
            <div key={index} style={{
              background: "white",
              borderRadius: "12px",
              padding: "16px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              border: "1px solid #E6E6E6",
              position: "relative"
            }}>
              {servico.status === "ativo" && (
                <div style={{
                  position: "absolute",
                  top: "8px",
                  right: "8px",
                  width: "44.91px",
                  height: "22px",
                  background: "#DCFCE7",
                  border: "2px solid #7FF8B1",
                  color: "#00A63E",
                  borderRadius: "4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "10px",
                  fontWeight: "bold",
                  textTransform: "uppercase"
                }}>
                  ativo
                </div>
              )}
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px", marginTop: "24px" }}>
                <div style={{ width: "20px", height: "20px", background: "linear-gradient(135deg, #9810FA, #FF4DA6)", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="6" cy="6" r="3"></circle>
                    <path d="m14 12-6 6"></path>
                    <path d="M8 12 14 6"></path>
                  </svg>
                </div>
                <h3 style={{ margin: 0, fontSize: "16px", fontWeight: "bold", color: "#111827" }}>{servico.nome}</h3>
              </div>
              <p style={{ margin: "0 0 8px 0", fontSize: "12px", color: "#4B5563" }}>{servico.descricao}</p>
              <div style={{ marginBottom: "4px", fontSize: "12px", color: "#6B7280" }}>
                <strong>Categoria:</strong> {servico.categoria}
              </div>
              <div style={{ marginBottom: "4px", fontSize: "12px", color: "#6B7280" }}>
                <strong>Duração:</strong> {servico.duracao}
              </div>
              <div style={{ marginBottom: "8px", fontSize: "12px", color: "#6B7280" }}>
                <strong>Preço:</strong> <span style={{ color: "#00A63E" }}>{servico.preco}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px", fontSize: "12px" }}>
                <div>
                  <strong>Agendamentos</strong><br />
                  {servico.agendamentos}
                </div>
                <div style={{ textAlign: "right" }}>
                  <strong>Receita</strong><br />
                  <span style={{ color: "#00A63E" }}>{servico.receita}</span>
                </div>
              </div>
              <div style={{ display: "flex", gap: "6px" }}>
                <button style={{
                  flex: 1,
                  padding: "6px 12px",
                  borderRadius: "4px",
                  background: "#FFFFFF",
                  color: "#000000",
                  border: "1px solid #E6E6E6",
                  fontSize: "12px",
                  fontWeight: "600",
                  cursor: "pointer"
                }}>
                  editar
                </button>
                <button style={{
                  flex: 1,
                  padding: "6px 12px",
                  borderRadius: "4px",
                  background: "#FFFFFF",
                  color: "#E7000B",
                  border: "1px solid #E6E6E6",
                  fontSize: "12px",
                  fontWeight: "600",
                  cursor: "pointer"
                }}>
                  Excluir
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}