interface ServicesGridProps {
  filter: string;
}

export default function ServicesGrid({ filter }: ServicesGridProps) {
  const allServices = [
    { nome: "Corte Masculino", categoria: "Cabelo", duracao: "30 min", preco: "R$ 50", status: "Ativo", avaliacao: "4.9", descricao: "Corte moderno e estiloso para homens" },
    { nome: "Hidratação", categoria: "Tratamento", duracao: "60 min", preco: "R$ 120", status: "Ativo", avaliacao: "4.8", descricao: "Tratamento intensivo para cabelos danificados" },
    { nome: "Luzes", categoria: "Coloração", duracao: "120 min", preco: "R$ 280", status: "Ativo", avaliacao: "4.7", descricao: "Técnica de coloração com mechas" },
    { nome: "Escova", categoria: "Cabelo", duracao: "45 min", preco: "R$ 80", status: "Ativo", avaliacao: "4.9", descricao: "Escova modeladora profissional" },
    { nome: "Corte Feminino", categoria: "Cabelo", duracao: "45 min", preco: "R$ 70", status: "Ativo", avaliacao: "4.8", descricao: "Corte feminino moderno e elegante" },
    { nome: "Barba Completa", categoria: "Barbearia", duracao: "25 min", preco: "R$ 35", status: "Ativo", avaliacao: "4.7", descricao: "Barba completa com acabamento perfeito" },
    { nome: "Sobrancelha", categoria: "Tratamento", duracao: "15 min", preco: "R$ 25", status: "Ativo", avaliacao: "4.6", descricao: "Design de sobrancelhas profissional" },
    { nome: "Manicure", categoria: "Unhas", duracao: "60 min", preco: "R$ 40", status: "Ativo", avaliacao: "4.8", descricao: "Manicure completa com esmaltação" },
    { nome: "Pedicure", categoria: "Unhas", duracao: "90 min", preco: "R$ 60", status: "Ativo", avaliacao: "4.9", descricao: "Pedicure completa com esmaltação" },
    { nome: "Tintura", categoria: "Coloração", duracao: "180 min", preco: "R$ 150", status: "Ativo", avaliacao: "4.5", descricao: "Tintura completa do cabelo" },
  ];

  const filteredServices = filter === "Todos"
    ? allServices
    : allServices.filter(service => service.categoria === filter);

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
      <div style={{ marginBottom: "20px" }}>
        <h2 className="section-title" style={{ marginTop: 0 }}>Serviços Disponíveis</h2>
        <p style={{ color: "#999", fontSize: "14px", margin: "0 0 16px 0" }}>
          {filteredServices.length} {filter === "Todos" ? "serviços disponíveis" : `serviços de ${filter.toLowerCase()}`}
        </p>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
        gap: "20px",
        maxHeight: "600px",
        overflowY: "auto",
        paddingRight: "10px"
      }}>
        {filteredServices.map((servico, index) => (
          <div key={index} style={{
            background: "white",
            borderRadius: "12px",
            padding: "20px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            border: "1px solid #E6E6E6",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
            cursor: "pointer"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.12)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)";
          }}
          >
            {/* Header do Card */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  background: "#F3E8FF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#9810FA",
                  fontWeight: 700,
                  fontSize: "14px"
                }}>
                  {servico.nome.split(" ").map(n => n[0]).join("").substring(0, 2)}
                </div>
                <div>
                  <h3 style={{ margin: 0, fontSize: "16px", fontWeight: 700, color: "#111827" }}>{servico.nome}</h3>
                  <p style={{ margin: "2px 0 0 0", fontSize: "12px", color: "#6B7280", fontWeight: 500 }}>{servico.categoria}</p>
                </div>
              </div>

              <span style={{
                padding: "4px 8px",
                borderRadius: "6px",
                fontWeight: 700,
                fontSize: "10px",
                ...getStatusStyle(servico.status)
              }}>
                {servico.status}
              </span>
            </div>

            {/* Descrição */}
            <p style={{ margin: "0 0 16px 0", fontSize: "14px", color: "#4B5563", lineHeight: "1.4" }}>
              {servico.descricao}
            </p>

            {/* Informações */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  <span style={{ fontSize: "12px", color: "#6B7280" }}>⏱️</span>
                  <span style={{ fontSize: "12px", fontWeight: 600, color: "#111827" }}>{servico.duracao}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  <span style={{ fontSize: "12px", color: "#6B7280" }}>⭐</span>
                  <span style={{ fontSize: "12px", fontWeight: 600, color: "#111827" }}>{servico.avaliacao}</span>
                </div>
              </div>
              <div style={{ fontSize: "18px", fontWeight: 800, color: "#9810FA" }}>
                {servico.preco}
              </div>
            </div>

            {/* Botão de Ação */}
            <button style={{
              width: "100%",
              padding: "10px 16px",
              borderRadius: "8px",
              background: "linear-gradient(90deg, #9810FA, #FF4DA6)",
              color: "white",
              border: "none",
              fontSize: "14px",
              fontWeight: 600,
              cursor: "pointer",
              transition: "opacity 0.2s ease"
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = "0.9"}
            onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
            >
              Agendar Serviço
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}