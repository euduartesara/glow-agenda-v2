import Link from "next/link";
import { ScissorsIcon } from "@heroicons/react/24/outline";
import CheckoutForm from "../components/CheckoutForm";

export default function PagamentoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-md">
                <ScissorsIcon className="h-6 w-6 text-white" aria-hidden />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                GlowAgenda
              </span>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link
                href="/"
                className="text-gray-600 hover:text-purple-600 font-medium transition-colors"
              >
                Início
              </Link>
              <Link
                href="/#servicos"
                className="text-gray-600 hover:text-purple-600 font-medium transition-colors"
              >
                Serviços
              </Link>
              <Link
                href="/#sobre"
                className="text-gray-600 hover:text-purple-600 font-medium transition-colors"
              >
                Sobre
              </Link>
              <Link
                href="/#depoimentos"
                className="text-gray-600 hover:text-purple-600 font-medium transition-colors"
              >
                Depoimentos
              </Link>
            </nav>

            {/* CTA Button */}
            <Link
              href="/pagamento"
              className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-semibold px-6 py-2.5 rounded-xl transition-all duration-200 shadow-md"
            >
              Agendar
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-12">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Finalize seu Agendamento
            </h1>
            <p className="mt-3 text-gray-600">
              Preencha os dados abaixo para confirmar seu horário
            </p>
          </div>

          <CheckoutForm />
        </div>
      </main>
    </div>
  );
}
