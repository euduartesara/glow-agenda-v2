"use client";

import "./configuracoes.css";
import "./poppins.css";
import { FaUser, FaBell, FaPalette, FaLock, FaEnvelope, FaPhone, FaClock, FaGlobe } from "react-icons/fa";

export default function Configuracoes() {
  return (
    <div className="configuracoes-container poppins">
      <div className="configuracoes-header">
        <div>
          <h1 className="configuracoes-title">Configurações</h1>
          <p className="configuracoes-subtitle">
            Gerencie as preferências e configurações do seu sistema
          </p>
        </div>
      </div>

      {/* Seção Perfil */}
      <div className="config-section">
        <div className="section-header-config">
          <FaUser className="section-icon" style={{ color: "#9333EA" }} />
          <h2 className="section-title">Perfil</h2>
        </div>
        <div className="config-card">
          <div className="config-row">
            <div className="config-field">
              <label className="config-label">Nome Completo</label>
              <input type="text" className="config-input" placeholder="Digite seu nome" defaultValue="Salão Glow" />
            </div>
            <div className="config-field">
              <label className="config-label">Nome do Estabelecimento</label>
              <input type="text" className="config-input" placeholder="Nome do salão" defaultValue="Glow Beauty" />
            </div>
          </div>
          <div className="config-row">
            <div className="config-field">
              <label className="config-label">
                <FaEnvelope className="field-icon" />
                Email
              </label>
              <input type="email" className="config-input" placeholder="seu@email.com" defaultValue="contato@glowbeauty.com" />
            </div>
            <div className="config-field">
              <label className="config-label">
                <FaPhone className="field-icon" />
                Telefone
              </label>
              <input type="tel" className="config-input" placeholder="(00) 00000-0000" defaultValue="(11) 98765-4321" />
            </div>
          </div>
        </div>
      </div>

      {/* Seção Horários */}
      <div className="config-section">
        <div className="section-header-config">
          <FaClock className="section-icon" style={{ color: "#EC4899" }} />
          <h2 className="section-title">Horário de Funcionamento</h2>
        </div>
        <div className="config-card">
          <div className="config-row">
            <div className="config-field">
              <label className="config-label">Abertura</label>
              <input type="time" className="config-input" defaultValue="09:00" />
            </div>
            <div className="config-field">
              <label className="config-label">Fechamento</label>
              <input type="time" className="config-input" defaultValue="18:00" />
            </div>
          </div>
          <div className="config-row">
            <div className="config-field">
              <label className="config-label">Dias de Funcionamento</label>
              <div className="days-selector">
                <button className="day-button active">Seg</button>
                <button className="day-button active">Ter</button>
                <button className="day-button active">Qua</button>
                <button className="day-button active">Qui</button>
                <button className="day-button active">Sex</button>
                <button className="day-button">Sáb</button>
                <button className="day-button">Dom</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seção Notificações */}
      <div className="config-section">
        <div className="section-header-config">
          <FaBell className="section-icon" style={{ color: "#3B82F6" }} />
          <h2 className="section-title">Notificações</h2>
        </div>
        <div className="config-card">
          <div className="config-toggle-row">
            <div className="toggle-info">
              <p className="toggle-label">Notificações por Email</p>
              <p className="toggle-description">Receba lembretes de agendamentos por email</p>
            </div>
            <label className="toggle-switch">
              <input type="checkbox" defaultChecked />
              <span className="toggle-slider"></span>
            </label>
          </div>
          <div className="config-toggle-row">
            <div className="toggle-info">
              <p className="toggle-label">Notificações Push</p>
              <p className="toggle-description">Receba alertas no navegador</p>
            </div>
            <label className="toggle-switch">
              <input type="checkbox" defaultChecked />
              <span className="toggle-slider"></span>
            </label>
          </div>
          <div className="config-toggle-row">
            <div className="toggle-info">
              <p className="toggle-label">Lembrete de Agendamentos</p>
              <p className="toggle-description">Avisos 1 hora antes do atendimento</p>
            </div>
            <label className="toggle-switch">
              <input type="checkbox" />
              <span className="toggle-slider"></span>
            </label>
          </div>
        </div>
      </div>

      {/* Seção Aparência */}
      <div className="config-section">
        <div className="section-header-config">
          <FaPalette className="section-icon" style={{ color: "#10B981" }} />
          <h2 className="section-title">Aparência</h2>
        </div>
        <div className="config-card">
          <div className="config-field">
            <label className="config-label">Tema do Sistema</label>
            <div className="theme-selector">
              <button className="theme-option active">
                <div className="theme-preview light"></div>
                <span>Claro</span>
              </button>
              <button className="theme-option">
                <div className="theme-preview dark"></div>
                <span>Escuro</span>
              </button>
              <button className="theme-option">
                <div className="theme-preview auto"></div>
                <span>Automático</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Seção Segurança */}
      <div className="config-section">
        <div className="section-header-config">
          <FaLock className="section-icon" style={{ color: "#F59E0B" }} />
          <h2 className="section-title">Segurança</h2>
        </div>
        <div className="config-card">
          <div className="config-field">
            <label className="config-label">Senha Atual</label>
            <input type="password" className="config-input" placeholder="Digite sua senha atual" />
          </div>
          <div className="config-row">
            <div className="config-field">
              <label className="config-label">Nova Senha</label>
              <input type="password" className="config-input" placeholder="Digite a nova senha" />
            </div>
            <div className="config-field">
              <label className="config-label">Confirmar Senha</label>
              <input type="password" className="config-input" placeholder="Confirme a nova senha" />
            </div>
          </div>
          <button className="change-password-btn">Alterar Senha</button>
        </div>
      </div>

      {/* Seção Localização */}
      <div className="config-section">
        <div className="section-header-config">
          <FaGlobe className="section-icon" style={{ color: "#8B5CF6" }} />
          <h2 className="section-title">Localização e Idioma</h2>
        </div>
        <div className="config-card">
          <div className="config-row">
            <div className="config-field">
              <label className="config-label">Idioma</label>
              <select className="config-select">
                <option value="pt-BR">Português (Brasil)</option>
                <option value="en-US">English (US)</option>
                <option value="es-ES">Español</option>
              </select>
            </div>
            <div className="config-field">
              <label className="config-label">Fuso Horário</label>
              <select className="config-select">
                <option value="America/Sao_Paulo">Brasília (UTC-3)</option>
                <option value="America/New_York">New York (UTC-5)</option>
                <option value="Europe/London">London (UTC+0)</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Botões de Ação */}
      <div className="config-actions">
        <button className="btn-cancel">Cancelar</button>
        <button className="btn-save">Salvar Alterações</button>
      </div>
    </div>
  );
}
