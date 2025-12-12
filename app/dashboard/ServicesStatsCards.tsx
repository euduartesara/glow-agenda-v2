import { FaCut, FaClock, FaDollarSign, FaStar } from "react-icons/fa";

export default function ServicesStatsCards() {
  return (
    <div className="cards-grid">

      {/* Total de Serviços */}
      <div className="card-box" style={{ background: "#F3E8FF" }}>
        <div className="metric-icon" style={{ background: "#9810FA" }}>
          <FaCut />
        </div>
        <p className="metric-title">Total de Serviços</p>
        <p className="metric-number">24</p>
        <p className="metric-subtitle">+3 este mês</p>
      </div>

      {/* Serviços Ativos */}
      <div className="card-box" style={{ background: "#DCFCE7" }}>
        <div className="metric-icon" style={{ background: "#00A63E" }}>
          <FaClock />
        </div>
        <p className="metric-title">Serviços Ativos</p>
        <p className="metric-number">22</p>
        <p className="metric-subtitle">92% do total</p>
      </div>

      {/* Receita por Serviço */}
      <div className="card-box" style={{ background: "#DBEAFE" }}>
        <div className="metric-icon" style={{ background: "#155DFC" }}>
          <FaDollarSign />
        </div>
        <p className="metric-title">Receita por Serviço</p>
        <p className="metric-number">R$ 145</p>
        <p className="metric-subtitle">Média mensal</p>
      </div>

      {/* Avaliação Média */}
      <div className="card-box" style={{ background: "#FFEDD4" }}>
        <div className="metric-icon" style={{ background: "#F54900" }}>
          <FaStar />
        </div>
        <p className="metric-title">Avaliação Média</p>
        <p className="metric-number">4.8</p>
        <p className="metric-subtitle">⭐⭐⭐⭐⭐</p>
      </div>

    </div>
  );
}