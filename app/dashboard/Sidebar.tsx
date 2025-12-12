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
        <Link href="/clientes" className={`menu-item ${pathname === "/clientes" ? "active" : ""}`}><FaUser /> Clientes</Link>
        <Link href="#" className="menu-item"><FaCut /> Serviços</Link>
        <Link href="#" className="menu-item"><FaChartBar /> Relatórios</Link>
        <Link href="#" className="menu-item"><FaCog /> Configurações</Link>
      </nav>

      <button className="exit">
        <FaSignOutAlt />
        Sair
      </button>
    </aside>
  );
}
