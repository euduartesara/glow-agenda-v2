'use client';

import { useState } from 'react';
import Sidebar from '../Sidebar';
import DashboardHeader from '../DashboardHeader';
import '../dashboard.css';
import '../poppins.css';
import './servicos.css';
import { FaSearch, FaPlus, FaEdit, FaTrash, FaMoneyBillWave, FaTag } from 'react-icons/fa';

interface Servico {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  duracao: string;
  categoria: string;
  status: 'Ativo' | 'Inativo';
  dataCadastro: string;
}

export default function Servicos() {
  const [servicos] = useState<Servico[]>([
    {
      id: 1,
      nome: 'Corte Masculino',
      descricao: 'Corte clássico e moderno para homens',
      preco: 50.00,
      duracao: '30 min',
      categoria: 'Cortes',
      status: 'Ativo',
      dataCadastro: '01/01/2024',
    },
    {
      id: 2,
      nome: 'Corte Feminino',
      descricao: 'Cortes personalizados para mulheres',
      preco: 70.00,
      duracao: '45 min',
      categoria: 'Cortes',
      status: 'Ativo',
      dataCadastro: '01/01/2024',
    },
    {
      id: 3,
      nome: 'Escova Progressiva',
      descricao: 'Tratamento de alisamento permanente',
      preco: 150.00,
      duracao: '120 min',
      categoria: 'Tratamentos',
      status: 'Ativo',
      dataCadastro: '15/02/2024',
    },
    {
      id: 4,
      nome: 'Coloração',
      descricao: 'Tintura e tonalização dos cabelos',
      preco: 100.00,
      duracao: '90 min',
      categoria: 'Coloração',
      status: 'Ativo',
      dataCadastro: '15/02/2024',
    },
    {
      id: 5,
      nome: 'Hidratação Profunda',
      descricao: 'Tratamento de hidratação com produtos premium',
      preco: 80.00,
      duracao: '60 min',
      categoria: 'Tratamentos',
      status: 'Ativo',
      dataCadastro: '20/03/2024',
    },
    {
      id: 6,
      nome: 'Escova Simples',
      descricao: 'Escova modelada e chapinha',
      preco: 40.00,
      duracao: '40 min',
      categoria: 'Acabamento',
      status: 'Inativo',
      dataCadastro: '10/04/2024',
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategoria, setFilterCategoria] = useState<string>('');

  const categorias = Array.from(new Set(servicos.map(s => s.categoria)));

  const filteredServicos = servicos.filter(servico =>
    (servico.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      servico.descricao.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (filterCategoria === '' || servico.categoria === filterCategoria)
  );

  return (
    <div className="dashboard-container">
      <Sidebar />

      <main className="dashboard-content">
        <DashboardHeader />

        <div className="servicos-header">
          <div>
            <h1 className="servicos-title">Serviços</h1>
            <p className="servicos-subtitle">Gerenciar e configurar serviços oferecidos</p>
          </div>
          <button className="btn-novo-servico">
            <FaPlus /> Novo Serviço
          </button>
        </div>

        {/* Filtros */}
        <div className="servicos-filters">
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Buscar por nome ou descrição..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          <select
            value={filterCategoria}
            onChange={(e) => setFilterCategoria(e.target.value)}
            className="filter-select"
          >
            <option value="">Todas as Categorias</option>
            {categorias.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* Cards de Serviços */}
        <div className="servicos-grid">
          {filteredServicos.map((servico) => (
            <div key={servico.id} className="servico-card">
              <div className="card-header">
                <div className="card-title-section">
                  <h3 className="card-title">{servico.nome}</h3>
                  <div className="categoria-badge">
                    <FaTag /> {servico.categoria}
                  </div>
                </div>
                <span className={`status-badge ${servico.status.toLowerCase()}`}>
                  {servico.status}
                </span>
              </div>

              <p className="card-descricao">{servico.descricao}</p>

              <div className="card-details">
                <div className="detail-item">
                  <span className="detail-label">Duração</span>
                  <span className="detail-value">{servico.duracao}</span>
                </div>
                <div className="detail-item">
                  <FaMoneyBillWave className="detail-icon" />
                  <div>
                    <span className="detail-label">Preço</span>
                    <span className="detail-value">R$ {servico.preco.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <div className="card-actions">
                <button className="btn-action edit">
                  <FaEdit /> Editar
                </button>
                <button className="btn-action delete">
                  <FaTrash /> Deletar
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredServicos.length === 0 && (
          <div className="empty-state">
            <p>Nenhum serviço encontrado</p>
          </div>
        )}

        {/* Estatísticas de Serviços */}
        <div className="servicos-stats">
          <div className="stat-card">
            <div className="stat-icon" style={{ backgroundColor: '#9810FA' }}>
              💇
            </div>
            <div className="stat-info">
              <p className="stat-label">Total de Serviços</p>
              <p className="stat-value">{servicos.length}</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon" style={{ backgroundColor: '#A3004C' }}>
              ✓
            </div>
            <div className="stat-info">
              <p className="stat-label">Serviços Ativos</p>
              <p className="stat-value">{servicos.filter(s => s.status === 'Ativo').length}</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon" style={{ backgroundColor: '#FF6B6B' }}>
              💰
            </div>
            <div className="stat-info">
              <p className="stat-label">Ticket Médio</p>
              <p className="stat-value">R$ {(servicos.reduce((acc, s) => acc + s.preco, 0) / servicos.length).toFixed(2)}</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon" style={{ backgroundColor: '#10B981' }}>
              📊
            </div>
            <div className="stat-info">
              <p className="stat-label">Categorias</p>
              <p className="stat-value">{categorias.length}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
