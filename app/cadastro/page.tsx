'use client';

import { useState } from 'react';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

export default function Cadastro() {
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    email: '',
    telefone: '',
    cpf: '',
    senha: '',
    confirmarSenha: '',
    aceitoTermos: false,
  });

  const [erros, setErros] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validação básica
    const novosErros: Record<string, string> = {};
    
    if (!formData.nomeCompleto.trim()) {
      novosErros.nomeCompleto = 'Nome completo é obrigatório';
    }
    if (!formData.email.trim()) {
      novosErros.email = 'E-mail é obrigatório';
    }
    if (!formData.telefone.trim()) {
      novosErros.telefone = 'Telefone é obrigatório';
    }
    if (!formData.cpf.trim()) {
      novosErros.cpf = 'CPF é obrigatório';
    }
    if (!formData.senha.trim()) {
      novosErros.senha = 'Senha é obrigatória';
    }
    if (formData.senha.length < 6) {
      novosErros.senha = 'Mínimo 6 caracteres';
    }
    if (formData.confirmarSenha !== formData.senha) {
      novosErros.confirmarSenha = 'As senhas não conferem';
    }
    if (!formData.aceitoTermos) {
      novosErros.aceitoTermos = 'Você deve aceitar os termos';
    }

    if (Object.keys(novosErros).length > 0) {
      setErros(novosErros);
      return;
    }

    console.log('Cadastro enviado:', formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8 relative">
      {/* Background image */}
      <Image
        src="/img/HeroBG.jpg"
        alt="Salão de beleza, cadeiras e espelhos"
        fill
        priority
        sizes="100vw"
        className="object-cover -z-20"
      />
      {/* Gradient overlay */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          background: "linear-gradient(135deg, rgba(89, 22, 139, 0.7) 0%, rgba(163, 0, 76, 0.7) 50%, rgba(89, 22, 139, 0.7) 100%)"
        }} 
      />

      <div className="w-full max-w-md">
        {/* Header com botão voltar */}
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-white hover:text-gray-200 transition-colors mb-8"
        >
          <ArrowLeftIcon className="h-5 w-5" aria-hidden />
          <span>Voltar</span>
        </Link>

        {/* Card de cadastro */}
        <div className="bg-white rounded-3xl p-8 shadow-2xl">
          {/* Icon */}
          <div className="mb-6 md:mb-8 flex justify-center">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-100 rounded-2xl flex items-center justify-center">
              <svg className="h-6 w-6 md:h-7 md:w-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
            </div>
          </div>

          {/* Título e subtítulo */}
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center text-gray-900 mb-2">
            Criar Conta Gratuita
          </h1>
          <p className="text-center text-gray-600 mb-8 text-sm">
            Preencha seus dados para começar a usar o GlowAgenda
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Nome Completo */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                <span className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Nome Completo
                </span>
              </label>
              <input
                type="text"
                name="nomeCompleto"
                value={formData.nomeCompleto}
                onChange={handleChange}
                placeholder="Digite seu nome completo"
                className={`w-full px-4 py-3 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition ${
                  erros.nomeCompleto ? 'border-red-500' : 'border-gray-200'
                }`}
              />
              {erros.nomeCompleto && <p className="text-red-500 text-xs mt-1">{erros.nomeCompleto}</p>}
            </div>

            {/* E-mail */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                <span className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  E-mail
                </span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="seu@email.com"
                className={`w-full px-4 py-3 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition ${
                  erros.email ? 'border-red-500' : 'border-gray-200'
                }`}
              />
              {erros.email && <p className="text-red-500 text-xs mt-1">{erros.email}</p>}
            </div>

            {/* Telefone e CPF em grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* Telefone */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  <span className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 00.948.684l1.498 4.493a1 1 0 00.502.756l2.73 1.365a1 1 0 001.006-.2c.5-.505 1.023-.958 1.554-1.354a1 1 0 011.258.041l2.996 2.996a1 1 0 01.041 1.258c-.396.53-.849 1.053-1.354 1.554a1 1 0 00-.2 1.006l1.365 2.73a1 1 0 00.756.502l4.493 1.498a1 1 0 00.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Telefone
                  </span>
                </label>
                <input
                  type="tel"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  placeholder="(00) 00000-0000"
                  className={`w-full px-4 py-3 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition ${
                    erros.telefone ? 'border-red-500' : 'border-gray-200'
                  }`}
                />
                {erros.telefone && <p className="text-red-500 text-xs mt-1">{erros.telefone}</p>}
              </div>

              {/* CPF */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  <span className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-5m-4-6l4 4m0 0l4-4m-4 4v12" />
                    </svg>
                    CPF
                  </span>
                </label>
                <input
                  type="text"
                  name="cpf"
                  value={formData.cpf}
                  onChange={handleChange}
                  placeholder="000.000.000-00"
                  className={`w-full px-4 py-3 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition ${
                    erros.cpf ? 'border-red-500' : 'border-gray-200'
                  }`}
                />
                {erros.cpf && <p className="text-red-500 text-xs mt-1">{erros.cpf}</p>}
              </div>
            </div>

            {/* Senha e Confirmar Senha em grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* Senha */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  <span className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Senha
                  </span>
                </label>
                <input
                  type="password"
                  name="senha"
                  value={formData.senha}
                  onChange={handleChange}
                  placeholder="Mínimo 6 caracteres"
                  className={`w-full px-4 py-3 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition ${
                    erros.senha ? 'border-red-500' : 'border-gray-200'
                  }`}
                />
                {erros.senha && <p className="text-red-500 text-xs mt-1">{erros.senha}</p>}
              </div>

              {/* Confirmar Senha */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  <span className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Confirmar Senha
                  </span>
                </label>
                <input
                  type="password"
                  name="confirmarSenha"
                  value={formData.confirmarSenha}
                  onChange={handleChange}
                  placeholder="Digite a senha novamente"
                  className={`w-full px-4 py-3 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition ${
                    erros.confirmarSenha ? 'border-red-500' : 'border-gray-200'
                  }`}
                />
                {erros.confirmarSenha && <p className="text-red-500 text-xs mt-1">{erros.confirmarSenha}</p>}
              </div>
            </div>

            {/* Checkbox Termos */}
            <div className="flex items-start gap-3 pt-2">
              <input
                type="checkbox"
                name="aceitoTermos"
                checked={formData.aceitoTermos}
                onChange={handleChange}
                className="mt-1 h-5 w-5 text-purple-600 rounded cursor-pointer"
              />
              <label className="text-sm text-gray-600 cursor-pointer">
                Eu aceito os{' '}
                <a href="#" className="text-purple-600 hover:text-purple-700 font-medium">
                  termos de Uso
                </a>
                {' '}e{' '}
                <a href="#" className="text-purple-600 hover:text-purple-700 font-medium">
                  Política de Privacidade
                </a>
              </label>
            </div>
            {erros.aceitoTermos && <p className="text-red-500 text-xs">{erros.aceitoTermos}</p>}

            {/* Botão Criar Conta */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 mt-6 flex items-center justify-center gap-2"
            >
              Criar Conta Gratuita
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>

            {/* Link Login */}
            <p className="text-center text-gray-600 text-sm pt-4">
              Já possui uma conta?{' '}
              <Link href="/" className="text-purple-600 hover:text-purple-700 font-semibold border-b border-purple-600 hover:border-purple-700">
                Fazer Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
