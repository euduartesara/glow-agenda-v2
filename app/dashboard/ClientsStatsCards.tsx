import { FaUser, FaUserCheck, FaDollarSign, FaChartLine } from "react-icons/fa";

export default function ClientsStatsCards() {
  return (
    <div className="cards-grid">

      {/* Total de Clientes */}
      <div className="card-box" style={{ background: "#F3E8FF" }}>
        <div className="metric-icon" style={{ background: "#9810FA" }}>
          <FaUser />
        </div>
        <p className="metric-title">Total de Clientes</p>
        <p className="metric-number">156</p>
        <p className="metric-subtitle">+12 este mês</p>
      </div>

      {/* Clientes Ativos */}
      <div className="card-box" style={{ background: "#DCFCE7" }}>
        <div className="metric-icon" style={{ background: "#00A63E" }}>
          <FaUserCheck />
        </div>
        <p className="metric-title">Clientes Ativos</p>
        <p className="metric-number">142</p>
        <p className="metric-subtitle">91% do total</p>
      </div>

      {/* Receita Total */}
      <div className="card-box" style={{ background: "#DBEAFE" }}>
        <div className="metric-icon" style={{ background: "#155DFC" }}>
          <FaDollarSign />
        </div>
        <p className="metric-title">Receita Total</p>
        <p className="metric-number">R$ 45.230</p>
        <p className="metric-subtitle">+15% vs mês passado</p>
      </div>

      {/* Ticket Médio */}
      <div className="card-box" style={{ background: "#FFEDD4" }}>
        <div className="metric-icon" style={{ background: "#F54900" }}>
          <FaChartLine />
        </div>
        <p className="metric-title">Ticket Médio</p>
        <p className="metric-number">R$ 89</p>
        <p className="metric-subtitle">Por cliente</p>
      </div>

    </div>
  );
}