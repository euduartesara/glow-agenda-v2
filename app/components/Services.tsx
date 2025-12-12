import Image from "next/image";
import {
  ScissorsIcon,
  SparklesIcon,
  BoltIcon,
  WrenchIcon,
  PaintBrushIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

export default function Services() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Nossos Serviços</h2>
          <p className="text-gray-600 mt-3 md:mt-4">
            Oferecemos uma variedade completa de serviços de beleza
            <br className="hidden md:block" /> para você se sentir incrível
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {/* Cortes Masculinos */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="relative h-44 md:h-48">
              <Image src="/img/cortes-masculinos.jpg" alt="Cortes Masculinos" fill className="object-cover" />
            </div>
            <div className="p-5 md:p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-purple-100">
                  <ScissorsIcon className="w-6 h-6 text-purple-600" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-gray-900">Cortes Masculinos</h3>
              </div>
              <p className="text-gray-600 leading-relaxed min-h-[6.5rem] md:min-h-[7rem]">
                Cortes modernos e clássicos com técnicas profissionais para todos os estilos.
              </p>
            </div>
          </div>

          {/* Cortes Femininos */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="relative h-44 md:h-48">
              <Image src="/img/cortes-femininos.jpg" alt="Cortes Femininos" fill className="object-cover" />
            </div>
            <div className="p-5 md:p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-purple-100">
                  <SparklesIcon className="w-6 h-6 text-purple-600" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-gray-900">Cortes Femininos</h3>
              </div>
              <p className="text-gray-600 leading-relaxed min-h-[6.5rem] md:min-h-[7rem]">
                Transforme seu visual com cortes personalizados e tendências exclusivas.
              </p>
            </div>
          </div>

          {/* Escova e Chapinha */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="relative h-44 md:h-48">
              <Image src="/img/escova-chapinha.jpg" alt="Escova e Chapinha" fill className="object-cover" />
            </div>
            <div className="p-5 md:p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-purple-100">
                  <BoltIcon className="w-6 h-6 text-purple-600" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-gray-900">Escova e Chapinha</h3>
              </div>
              <p className="text-gray-600 leading-relaxed min-h-[6.5rem] md:min-h-[7rem]">
                Alisamento perfeito e escova modelada para cabelos impecáveis.
              </p>
            </div>
          </div>

          {/* Tratamentos Capilares */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="relative h-44 md:h-48">
              <Image src="/img/tratamentos-capilares.jpg" alt="Tratamentos Capilares" fill className="object-cover" />
            </div>
            <div className="p-5 md:p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-purple-100">
                  <WrenchIcon className="w-6 h-6 text-purple-600" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-gray-900">Tratamentos Capilares</h3>
              </div>
              <p className="text-gray-600 leading-relaxed min-h-[6.5rem] md:min-h-[7rem]">
                Hidratação profunda, reconstrução e tratamentos para todos os tipos de cabelo.
              </p>
            </div>
          </div>

          {/* Coloração */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="relative h-44 md:h-48">
              <Image src="/img/coloracao.jpg" alt="Coloração" fill className="object-cover" />
            </div>
            <div className="p-5 md:p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-purple-100">
                  <PaintBrushIcon className="w-6 h-6 text-purple-600" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-gray-900">Coloração</h3>
              </div>
              <p className="text-gray-600 leading-relaxed min-h-[6.5rem] md:min-h-[7rem]">
                Coloração completa, mechas, luzes e tonalizações com produtos de alta qualidade.
              </p>
            </div>
          </div>

          {/* Penteados */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="relative h-44 md:h-48">
              <Image src="/img/penteados.jpg" alt="Penteados" fill className="object-cover" />
            </div>
            <div className="p-5 md:p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-purple-100">
                  <StarIcon className="w-6 h-6 text-purple-600" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-gray-900">Penteados</h3>
              </div>
              <p className="text-gray-600 leading-relaxed min-h-[6.5rem] md:min-h-[7rem]">
                Penteados para eventos especiais, casamentos e ocasiões importantes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
