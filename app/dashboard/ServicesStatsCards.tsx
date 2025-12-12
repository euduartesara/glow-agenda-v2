import { FaBox, FaArrowUp, FaDollarSign, FaStar } from "react-icons/fa";

export default function ServicesStatsCards() {
  return (
    <div className="cards-grid">

      {/* Serviços Ativos */}
      <div className="card-box" style={{ background: "#F3E8FF" }}>
        <div className="metric-icon" style={{ background: "#9810FA" }}>
          <FaBox />
        </div>
        <p className="metric-title">Serviços Ativos</p>
        <p className="metric-number">22</p>
        <p className="metric-subtitle">92% do total</p>
      </div>

      {/* Agend. no Mês */}
      <div className="card-box" style={{ background: "#DCFCE7" }}>
        <div className="metric-icon" style={{ background: "#00A63E" }}>
          <FaArrowUp />
        </div>
        <p className="metric-title">Agend. no Mês</p>
        <p className="metric-number">156</p>
        <p className="metric-subtitle">+23% vs mês passado</p>
      </div>

      {/* Receita do Mês */}
      <div className="card-box" style={{ background: "#DBEAFE" }}>
        <div className="metric-icon" style={{ background: "#155DFC" }}>
          <FaDollarSign />
        </div>
        <p className="metric-title">Receita do Mês</p>
        <p className="metric-number">R$ 22.500</p>
        <p className="metric-subtitle">+18% vs mês passado</p>
      </div>

      {/* Preço Médio */}
      <div className="card-box" style={{ background: "#FFEDD4" }}>
        <div className="metric-icon" style={{ background: "#F54900" }}>
          <FaDollarSign />
        </div>
        <p className="metric-title">Preço Médio</p>
        <p className="metric-number">R$ 145</p>
        <p className="metric-subtitle">Por serviço</p>
      </div>

    </div>
  );
}