"use client";

import "./relatorios.css";
import "./poppins.css";
import { FaDollarSign, FaCalendarCheck, FaUserPlus, FaTicketAlt } from "react-icons/fa";

export default function Relatorios() {
  // Mock data para o gráfico de linha
  const monthlyRevenue = [
    { month: "Jan", value: 8500 },
    { month: "Fev", value: 9200 },
    { month: "Mar", value: 10500 },
    { month: "Abr", value: 10000 },
    { month: "Mai", value: 11500 },
    { month: "Jun", value: 12800 },
    { month: "Jul", value: 13200 },
    { month: "Ago", value: 14500 },
    { month: "Set", value: 13800 },
    { month: "Out", value: 16200 },
  ];

  // Mock data para agendamentos mensais
  const monthlyAppointments = [
    { month: "Jan", value: 85 },
    { month: "Fev", value: 95 },
    { month: "Mar", value: 110 },
    { month: "Abr", value: 105 },
    { month: "Mai", value: 125 },
    { month: "Jun", value: 135 },
    { month: "Jul", value: 140 },
    { month: "Ago", value: 145 },
    { month: "Set", value: 138 },
    { month: "Out", value: 152 },
  ];

  const maxRevenue = Math.max(...monthlyRevenue.map((d) => d.value));
  const maxAppointments = Math.max(...monthlyAppointments.map((d) => d.value));

  // Pie chart data and helper to draw filled sectors (full pie)
  const pieData = [
    { label: "Corte", value: 35, color: "#8B5CF6" },
    { label: "Coloração", value: 25, color: "#EC4899" },
    { label: "Tratamento", value: 20, color: "#3B82F6" },
    { label: "Unhas", value: 15, color: "#10B981" },
    { label: "Outros", value: 5, color: "#F97316" },
  ];

  const describeArc = (cx: number, cy: number, r: number, startAngle: number, endAngle: number) => {
    const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
      const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
      return {
        x: Math.round((centerX + radius * Math.cos(angleInRadians)) * 100) / 100,
        y: Math.round((centerY + radius * Math.sin(angleInRadians)) * 100) / 100,
      };
    };

    const start = polarToCartesian(cx, cy, r, endAngle);
    const end = polarToCartesian(cx, cy, r, startAngle);

    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    const d = [`M ${cx} ${cy}`, `L ${start.x} ${start.y}`, `A ${r} ${r} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`, "Z"].join(" ");
    return d;
  };

  return (
    <div className="relatorios-container poppins">
      <div className="relatorios-header">
        <div>
          <h1 className="relatorios-title">Relatórios</h1>
          <p className="relatorios-subtitle">
            Bem-vindo de volta! Aqui está o resumo do seu dia.
          </p>
        </div>
        <div className="relatorios-date">
          <span className="date-label">Hoje</span>
          <span className="date-text">sexta-feira, 17 de outubro</span>
          <span className="user-badge">AD</span>
        </div>
      </div>

      {/* Segunda Seção de Título */}
      <div className="section-header">
        <div>
          <h2 className="section-title-main">Relatórios</h2>
          <p className="section-subtitle">Análise e estatísticas do seu negócio</p>
        </div>
        <div className="export-controls">
          <select className="month-selector">
            <option>Este Mês</option>
            <option>Último Mês</option>
            <option>Últimos 3 Meses</option>
          </select>
          <button className="export-button">
            <span>↓</span> Exportar PDF
          </button>
        </div>
      </div>

      {/* Cards de Estatísticas */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon" style={{ background: "#E0F2FE" }}>
            <FaDollarSign style={{ color: "#0284C7" }} />
          </div>
          <div className="stat-content">
            <p className="stat-label">Receita Total</p>
            <p className="stat-value">R$ 16.200</p>
            <p className="stat-change positive">
              <span>↑</span> +15% vs mês anterior
            </p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon" style={{ background: "#F3E8FF" }}>
            <FaCalendarCheck style={{ color: "#9333EA" }} />
          </div>
          <div className="stat-content">
            <p className="stat-label">Agendamentos</p>
            <p className="stat-value">152</p>
            <p className="stat-change positive">
              <span>↑</span> +106% vs mês anterior
            </p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon" style={{ background: "#D1FAE5" }}>
            <FaUserPlus style={{ color: "#059669" }} />
          </div>
          <div className="stat-content">
            <p className="stat-label">Novos Clientes</p>
            <p className="stat-value">28</p>
            <p className="stat-change positive">
              <span>↑</span> +22% vs mês anterior
            </p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon" style={{ background: "#FED7AA" }}>
            <FaTicketAlt style={{ color: "#EA580C" }} />
          </div>
          <div className="stat-content">
            <p className="stat-label">Ticket Médio</p>
            <p className="stat-value">R$ 106,58</p>
            <p className="stat-change positive">
              <span>↑</span> +5% vs mês anterior
            </p>
          </div>
        </div>
      </div>

      {/* Gráficos - Primeira Linha */}
      <div className="charts-row">
        {/* Gráfico de Receita Mensal */}
        <div className="chart-card">
          <h3 className="chart-title">Receita Mensal</h3>
          <div className="line-chart">
            <div className="chart-y-axis">
              <span>18000</span>
              <span>13500</span>
              <span>9000</span>
              <span>4500</span>
              <span>0</span>
            </div>
            <div className="chart-area">
              <svg className="line-svg" viewBox="0 0 600 250">
                {/* Grid lines */}
                <line x1="0" y1="0" x2="600" y2="0" stroke="#E5E7EB" strokeWidth="1" />
                <line x1="0" y1="62.5" x2="600" y2="62.5" stroke="#E5E7EB" strokeWidth="1" />
                <line x1="0" y1="125" x2="600" y2="125" stroke="#E5E7EB" strokeWidth="1" />
                <line x1="0" y1="187.5" x2="600" y2="187.5" stroke="#E5E7EB" strokeWidth="1" />
                <line x1="0" y1="250" x2="600" y2="250" stroke="#E5E7EB" strokeWidth="1" />
                
                {/* Line path */}
                <polyline
                  fill="none"
                  stroke="#8B5CF6"
                  strokeWidth="3"
                  points={monthlyRevenue
                    .map((d, i) => {
                      const x = (i / (monthlyRevenue.length - 1)) * 600;
                      const y = 250 - (d.value / maxRevenue) * 250;
                      return `${x},${y}`;
                    })
                    .join(" ")}
                />
                
                {/* Data points */}
                {monthlyRevenue.map((d, i) => {
                  const x = (i / (monthlyRevenue.length - 1)) * 600;
                  const y = 250 - (d.value / maxRevenue) * 250;
                  return (
                    <circle
                      key={i}
                      cx={x}
                      cy={y}
                      r="4"
                      fill="#8B5CF6"
                      stroke="white"
                      strokeWidth="2"
                    />
                  );
                })}
              </svg>
              <div className="chart-x-axis">
                {monthlyRevenue.map((d, i) => (
                  <span key={i}>{d.month}</span>
                ))}
              </div>
            </div>
          </div>
          <p className="chart-legend">
            <span style={{ color: "#8B5CF6" }}>←</span> Receita
          </p>
        </div>

        {/* Gráfico de Pizza - Distribuição de Serviços */}
        <div className="chart-card pie-card">
          <h3 className="chart-title">Distribuição de Serviços</h3>
          <div className="pie-chart-container">
            <svg className="pie-chart" viewBox="0 0 200 200" role="img" aria-label="Distribuição de serviços">
              {
                (() => {
                  const total = pieData.reduce((s, p) => s + p.value, 0);
                  let startAngle = -90; // start at top
                  const cx = 100;
                  const cy = 100;
                  const r = 90;
                  return pieData.map((seg, i) => {
                    const angle = (seg.value / total) * 360;
                    const endAngle = startAngle + angle;
                    const d = describeArc(cx, cy, r, startAngle, endAngle);
                    startAngle = endAngle;
                    return (
                      <path key={i} d={d} fill={seg.color} stroke="#ffffff" strokeWidth={1} />
                    );
                  });
                })()
              }
            </svg>
            <div className="pie-legend">
              <div className="legend-item">
                <span className="legend-color" style={{ background: "#EC4899" }}></span>
                <span className="legend-text">Coloração 25%</span>
              </div>
              <div className="legend-item">
                <span className="legend-color" style={{ background: "#8B5CF6" }}></span>
                <span className="legend-text">Corte 35%</span>
              </div>
              <div className="legend-item">
                <span className="legend-color" style={{ background: "#F97316" }}></span>
                <span className="legend-text">Outros 5%</span>
              </div>
              <div className="legend-item">
                <span className="legend-color" style={{ background: "#10B981" }}></span>
                <span className="legend-text">Unhas 15%</span>
              </div>
              <div className="legend-item">
                <span className="legend-color" style={{ background: "#3B82F6" }}></span>
                <span className="legend-text">Tratamento 20%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gráficos - Segunda Linha */}
      <div className="charts-row">
        {/* Gráfico de Barras - Agendamentos Mensais */}
        <div className="chart-card">
          <h3 className="chart-title">Agendamentos Mensais</h3>
          <div className="bar-chart">
            <div className="chart-y-axis">
              <span>160</span>
              <span>120</span>
              <span>80</span>
              <span>40</span>
              <span>0</span>
            </div>
            <div className="bars-container">
              {monthlyAppointments.map((d, i) => (
                <div key={i} className="bar-wrapper">
                  <div
                    className="bar"
                    style={{
                      height: `${(d.value / maxAppointments) * 100}%`,
                      background: "linear-gradient(180deg, #EC4899 0%, #F472B6 100%)",
                    }}
                  ></div>
                  <span className="bar-label">{d.month}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Serviços Mais Vendidos */}
        <div className="chart-card">
          <h3 className="chart-title">Serviços Mais Vendidos</h3>
          <div className="services-list">
            <div className="service-item">
              <div className="service-info">
                <div className="service-number">1</div>
                <div>
                  <p className="service-name">Corte Masculino</p>
                  <p className="service-count">52 agendamentos</p>
                </div>
              </div>
              <p className="service-price">R$ 2600</p>
            </div>
            <div className="service-item">
              <div className="service-info">
                <div className="service-number">2</div>
                <div>
                  <p className="service-name">Coloração Completa</p>
                  <p className="service-count">38 agendamentos</p>
                </div>
              </div>
              <p className="service-price">R$ 3420</p>
            </div>
            <div className="service-item">
              <div className="service-info">
                <div className="service-number">3</div>
                <div>
                  <p className="service-name">Manicure e Pedicure</p>
                  <p className="service-count">45 agendamentos</p>
                </div>
              </div>
              <p className="service-price">R$ 1800</p>
            </div>
            <div className="service-item">
              <div className="service-info">
                <div className="service-number">4</div>
                <div>
                  <p className="service-name">Tratamento Capilar</p>
                  <p className="service-count">30 agendamentos</p>
                </div>
              </div>
              <p className="service-price">R$ 2400</p>
            </div>
          </div>
          <button className="see-more-button">
            <span className="down-arrow">↓</span>
          </button>
        </div>
      </div>
    </div>
  );
}
