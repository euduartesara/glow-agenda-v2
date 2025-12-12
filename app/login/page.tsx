'use client';

import { useState } from 'react';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    senha: '',
    lembrarMe: false,
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    setError(''); // Limpar erro ao digitar
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.senha,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Erro ao fazer login');
        setLoading(false);
        return;
      }

      // Login bem-sucedido, redirecionar para o dashboard
      router.push('/dashboard');
    } catch (err) {
      console.error('Erro ao fazer login:', err);
      setError('Erro ao conectar com o servidor');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-4 relative">
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
          className="inline-flex items-center gap-2 text-white hover:text-gray-200 transition-colors mb-5"
        >
          <ArrowLeftIcon className="h-4 w-4" aria-hidden />
          <span className="text-sm">Voltar</span>
        </Link>

        {/* Card de login */}
        <div className="bg-white rounded-3xl p-6 md:p-7 shadow-2xl">
          {/* Icon */}
          <div className="mb-5 flex justify-center">
            <div className="w-11 h-11 bg-purple-100 rounded-2xl flex items-center justify-center">
              <svg className="h-6 w-6 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" fill="currentColor"/>
              </svg>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold text-center text-gray-900 mb-1">
            Acessar sua conta
          </h1>
          <p className="text-center text-gray-600 text-sm mb-5">
            Entre para continuar
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Mensagem de erro */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            {/* Email */}
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1.5">
                E-mail
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="seu@email.com"
                className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                required
              />
            </div>

            {/* Senha */}
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1.5">
                Senha
              </label>
              <input
                type="password"
                name="senha"
                value={formData.senha}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                required
              />
            </div>

            {/* Lembrar-me e Esqueci a senha */}
            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="lembrarMe"
                  checked={formData.lembrarMe}
                  onChange={handleChange}
                  className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-2 focus:ring-purple-500 cursor-pointer"
                />
                <span className="text-gray-700">Lembrar-me</span>
              </label>
              <Link href="#" className="text-purple-600 hover:text-purple-700 transition-colors">
                Esqueci a senha?
              </Link>
            </div>

            {/* Botão Entrar */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-semibold py-2.5 px-6 rounded-lg transition-all duration-200 text-sm mt-1 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Entrando...' : 'Entrar'}
            </button>

            {/* Voltar */}
            <button
              type="button"
              onClick={() => window.history.back()}
              className="w-full bg-white border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold py-2.5 px-6 rounded-lg transition-all duration-200 text-sm"
            >
              Voltar
            </button>
          </form>

          {/* Ainda não tem conta */}
          <div className="mt-5 text-center">
            <p className="text-xs text-gray-600 mb-2.5">
              Ainda não tem uma conta?
            </p>
            <Link
              href="/cadastro"
              className="inline-block px-5 py-1.5 border-2 border-purple-600 text-purple-600 hover:bg-purple-50 font-semibold rounded-lg transition-all duration-200 text-xs"
            >
              Criar conta gratuita
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
