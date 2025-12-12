"use client";

import React from "react";

export default function About() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 bg-gradient-to-br from-fuchsia-600 via-pink-500 to-purple-600 text-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Por que escolher o GlowAgenda?</h2>
          <p className="mt-4 text-lg sm:text-xl text-white/80">
            Mais do que um salão, uma experiência completa de beleza e bem-estar
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
          {/* Agendamento Fácil */}
          <div className="group text-center">
            <div className="mx-auto w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-12 h-12 text-white/90"
              >
                <path d="M7 2a1 1 0 0 1 1 1v1h8V3a1 1 0 1 1 2 0v1h1a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1V3a1 1 0 0 1 1-1zm12 7H5v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9zM7 7h10V6H7v1z" />
              </svg>
            </div>
            <h3 className="mt-8 text-2xl font-semibold">Agendamento Fácil</h3>
            <p className="mt-4 text-white/80 max-w-xs mx-auto leading-relaxed">
              Agende seus horários 24/7 de forma rápida e prática pelo nosso sistema online.
            </p>
          </div>

          {/* Profissionais Qualificados */}
          <div className="group text-center">
            <div className="mx-auto w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-12 h-12 text-white/90"
              >
                <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm-7 8a7 7 0 0 1 14 0H5z" />
              </svg>
            </div>
            <h3 className="mt-8 text-2xl font-semibold">Profissionais Qualificados</h3>
            <p className="mt-4 text-white/80 max-w-xs mx-auto leading-relaxed">
              Equipe experiente e certificada para garantir o melhor resultado.
            </p>
          </div>

          {/* Pagamento Flexível */}
          <div className="group text-center">
            <div className="mx-auto w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-12 h-12 text-white/90"
              >
                <path d="M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm2 2v2h14V8zm0 6h10v2H5z" />
              </svg>
            </div>
            <h3 className="mt-8 text-2xl font-semibold">Pagamento Flexível</h3>
            <p className="mt-4 text-white/80 max-w-xs mx-auto leading-relaxed">
              Aceita todas as formas de pagamento para sua comodidade.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative gradient overlay for the rounded circles effect */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] rounded-full bg-white/10 blur-3xl" />
      </div>
    </section>
  );
}
