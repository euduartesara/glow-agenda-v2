import Image from "next/image";
import {
  ArrowRightIcon,
  ArrowRightOnRectangleIcon,
  ScissorsIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-8 md:py-12 relative overflow-hidden">
      {/* Background image using Next.js Image */}
      <Image
        src="/img/HeroBG.jpg"
        alt="Salão de beleza, cadeiras e espelhos"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0" style={{
        background: "linear-gradient(135deg, rgba(89, 22, 139, 0.7) 0%, rgba(163, 0, 76, 0.7) 50%, rgba(89, 22, 139, 0.7) 100%)"
      }} />
      
      <div className="relative z-10 w-full max-w-5xl mx-auto text-center px-2">
        {/* Icon */}
        <div className="mb-6 md:mb-8 flex justify-center">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg">
            <ScissorsIcon className="h-7 w-7 md:h-8 md:w-8 text-purple-600" aria-hidden />
          </div>
        </div>

        {/* Title and Subtitle */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
          Bem-vindo ao GlowAgenda
        </h1>
        <p className="text-base md:text-lg text-white/90 mb-6 md:mb-8">
          Sua plataforma completa para agendamento de serviços de beleza
        </p>

        {/* Cards Container */}
        <div className="grid md:grid-cols-2 gap-5 md:gap-6 max-w-4xl mx-auto mb-8 md:mb-10">
          {/* Card 1 - Novo por aqui */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl">
            <div className="mb-5 md:mb-6 flex justify-center">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-purple-100 rounded-2xl flex items-center justify-center">
                <SparklesIcon className="h-8 w-8 md:h-9 md:w-9 text-purple-600" aria-hidden />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Novo por aqui?
            </h2>
            <p className="text-gray-600 mb-5 md:mb-6 leading-relaxed">
              Descubra nossos serviços premium de beleza e bem-estar. Agende com facilidade e transforme seu visual.
            </p>
            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2">
              Conhecer o GlowAgenda
              <ArrowRightIcon className="h-5 w-5" aria-hidden />
            </button>
          </div>

          {/* Card 2 - Já é cliente */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl">
            <div className="mb-5 md:mb-6 flex justify-center">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-purple-100 rounded-2xl flex items-center justify-center">
                <ArrowRightOnRectangleIcon className="h-8 w-8 md:h-9 md:w-9 text-purple-600" aria-hidden />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Já é cliente?
            </h2>
            <p className="text-gray-600 mb-5 md:mb-6 leading-relaxed">
              Acesse sua conta para gerenciar agendamentos, visualizar histórico e aproveitar seus benefícios.
            </p>
            <button className="w-full bg-transparent border-2 border-purple-600 hover:bg-purple-50 text-purple-600 font-semibold py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2">
              Fazer Login
              <ArrowRightIcon className="h-5 w-5" aria-hidden />
            </button>
          </div>
        </div>

        {/* Footer text */}
        <p className="text-white/80 text-sm md:text-base">
          Transforme seu visual com os melhores profissionais
        </p>
      </div>
    </section>
  );
}
