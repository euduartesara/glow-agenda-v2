'use client';

import { useState } from 'react';
import Sidebar from '../Sidebar';
import DashboardHeader from '../DashboardHeader';
import '../dashboard.css';
import '../poppins.css';
import './clientes.css';
import { FaSearch, FaPlus, FaEdit, FaTrash, FaPhone, FaEnvelope } from 'react-icons/fa';

interface Cliente {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  cpf: string;
  dataCadastro: string;
  ultimoAgendamento: string;
  status: 'Ativo' | 'Inativo';
}

export default function Clientes() {
  const [clientes] = useState<Cliente[]>([
    {
      id: 1,
      nome: 'Maria Silva',
      email: 'maria@email.com',
      telefone: '(11) 98765-4321',
      cpf: '123.456.789-00',
      dataCadastro: '15/11/2024',
      ultimoAgendamento: '10/12/2024',
      status: 'Ativo',
    },
    {
      id: 2,
      nome: 'João Santos',
      email: 'joao@email.com',
      telefone: '(11) 97654-3210',
      cpf: '987.654.321-00',
      dataCadastro: '08/10/2024',
      ultimoAgendamento: '05/12/2024',
      status: 'Ativo',
    },
    {
      id: 3,
      nome: 'Ana Costa',
      email: 'ana@email.com',
      telefone: '(11) 96543-2109',
      cpf: '456.789.012-00',
      dataCadastro: '20/09/2024',
      ultimoAgendamento: '01/12/2024',
      status: 'Ativo',
    },
    {
      id: 4,
      nome: 'Carlos Oliveira',
      email: 'carlos@email.com',
      telefone: '(11) 95432-1098',
      cpf: '789.012.345-00',
      dataCadastro: '15/08/2024',
      ultimoAgendamento: '20/11/2024',
      status: 'Inativo',
    },
    {
      id: 5,
      nome: 'Fernanda Lima',
      email: 'fernanda@email.com',
      telefone: '(11) 94321-0987',
      cpf: '321.654.987-00',
      dataCadastro: '10/07/2024',
      ultimoAgendamento: '15/11/2024',
      status: 'Ativo',
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredClientes = clientes.filter(cliente =>
    cliente.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cliente.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cliente.telefone.includes(searchTerm)
  );

  return (
    <div className="dashboard-container">
      <Sidebar />

      <main className="dashboard-content">
        <DashboardHeader />

        <div className="clientes-header">
          <div>
            <h1 className="clientes-title">Clientes</h1>
            <p className="clientes-subtitle">Gerenciar e visualizar informações dos clientes</p>
          </div>
          <button className="btn-novo-cliente">
            <FaPlus /> Novo Cliente
          </button>
        </div>

        {/* Buscador e Filtros */}
        <div className="clientes-filters">
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Buscar por nome, email ou telefone..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
        </div>

        {/* Tabela de Clientes */}
        <div className="clientes-table-container">
          <table className="clientes-table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Telefone</th>
                <th>CPF</th>
                <th>Data de Cadastro</th>
                <th>Último Agendamento</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {filteredClientes.map((cliente) => (
                <tr key={cliente.id}>
                  <td className="cliente-nome">{cliente.nome}</td>
                  <td>
                    <div className="cell-content">
                      <FaEnvelope className="cell-icon" />
                      <span>{cliente.email}</span>
                    </div>
                  </td>
                  <td>
                    <div className="cell-content">
                      <FaPhone className="cell-icon" />
                      <span>{cliente.telefone}</span>
                    </div>
                  </td>
                  <td className="cpf">{cliente.cpf}</td>
                  <td>{cliente.dataCadastro}</td>
                  <td>{cliente.ultimoAgendamento}</td>
                  <td>
                    <span className={`status-badge ${cliente.status.toLowerCase()}`}>
                      {cliente.status}
                    </span>
                  </td>
                  <td>
                    <div className="acoes-cell">
                      <button className="btn-action edit">
                        <FaEdit />
                      </button>
                      <button className="btn-action delete">
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredClientes.length === 0 && (
            <div className="empty-state">
              <p>Nenhum cliente encontrado</p>
            </div>
          )}
        </div>

        {/* Estatísticas de Clientes */}
        <div className="clientes-stats">
          <div className="stat-card">
            <div className="stat-icon" style={{ backgroundColor: '#9810FA' }}>
              👥
            </div>
            <div className="stat-info">
              <p className="stat-label">Total de Clientes</p>
              <p className="stat-value">{clientes.length}</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon" style={{ backgroundColor: '#A3004C' }}>
              ✓
            </div>
            <div className="stat-info">
              <p className="stat-label">Clientes Ativos</p>
              <p className="stat-value">{clientes.filter(c => c.status === 'Ativo').length}</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon" style={{ backgroundColor: '#FF6B6B' }}>
              ⏸️
            </div>
            <div className="stat-info">
              <p className="stat-label">Clientes Inativos</p>
              <p className="stat-value">{clientes.filter(c => c.status === 'Inativo').length}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
