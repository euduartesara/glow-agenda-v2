import { FaUser, FaCheckCircle, FaDollarSign, FaClock } from "react-icons/fa";

export default function StatsCards() {
  return (
    <div className="cards-grid">

      {/* Clientes Hoje */}
      <div className="card-box" style={{ background: "#F3E8FF" }}>
        <div className="metric-icon" style={{ background: "#9810FA" }}>
          <FaUser />
        </div>
        <p className="metric-title">Clientes Hoje</p>
        <p className="metric-number">8</p>
      </div>

      {/* Confirmados */}
      <div className="card-box" style={{ background: "#DCFCE7" }}>
        <div className="metric-icon" style={{ background: "#00A63E" }}>
          <FaCheckCircle />
        </div>
        <p className="metric-title">Confirmados</p>
        <p className="metric-number">6</p>
      </div>

      {/* Receita Hoje */}
      <div className="card-box" style={{ background: "#DBEAFE" }}>
        <div className="metric-icon" style={{ background: "#155DFC" }}>
          <FaDollarSign />
        </div>
        <p className="metric-title">Receita Hoje</p>
        <p className="metric-number">R$ 170</p>
      </div>

      {/* Próximo Cliente */}
      <div className="card-box" style={{ background: "#FFEDD4" }}>
        <div className="metric-icon" style={{ background: "#F54900" }}>
          <FaClock />
        </div>
        <p className="metric-title">Próximo Cliente</p>
        <p className="metric-number">11:00</p>
      </div>

    </div>
  );
}
