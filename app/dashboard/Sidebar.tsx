"use client";

import "./sidebar.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaCalendarAlt, FaUser, FaCut, FaChartBar, FaCog, FaSignOutAlt } from "react-icons/fa";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <div className="logo">
        <h2>GlowAgenda</h2>
        <p>Gerenciamento</p>
      </div>

      <nav className="menu">
        <Link href="/dashboard" className={`menu-item ${pathname === "/dashboard" ? "active" : ""}`}><FaHome /> Dashboard</Link>
        <Link href="/agendamentos" className={`menu-item ${pathname === "/agendamentos" ? "active" : ""}`}><FaCalendarAlt /> Agendamentos</Link>
        <Link href="#" className="menu-item"><FaUser /> Clientes</Link>
        <Link href="#" className="menu-item"><FaCut /> Serviços</Link>
        <Link href="/relatorios" className={`menu-item ${pathname === "/relatorios" ? "active" : ""}`}><FaChartBar /> Relatórios</Link>
        <Link href="/dashboard/configuracoes" className={`menu-item ${pathname === "/dashboard/configuracoes" ? "active" : ""}`}><FaCog /> Configurações</Link>
      </nav>

      <button className="exit">
        <FaSignOutAlt />
        Sair
      </button>
    </aside>
  );
}
