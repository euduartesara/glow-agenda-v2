"use client";

import "./sidebar.css";
import { FaHome, FaCalendarAlt, FaUser, FaCut, FaChartBar, FaCog, FaSignOutAlt } from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <h2>GlowAgenda</h2>
        <p>Gerenciamento</p>
      </div>

      <nav className="menu">
        <a className="menu-item active"><FaHome /> Dashboard</a>
        <a className="menu-item"><FaCalendarAlt /> Agendamentos</a>
        <a className="menu-item"><FaUser /> Clientes</a>
        <a className="menu-item"><FaCut /> Serviços</a>
        <a className="menu-item"><FaChartBar /> Relatórios</a>
        <a className="menu-item"><FaCog /> Configurações</a>
      </nav>

      <button className="exit">
        <FaSignOutAlt />
        Sair
      </button>
    </aside>
  );
}
