"use client";


import { useState } from "react";
import {
  UserIcon,
  CreditCardIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

type Step = 1 | 2 | 3;

interface FormData {
  // Etapa 1 - Dados Pessoais
  nome: string;
  email: string;
  telefone: string;
  cpf: string;
  
  // Etapa 2 - Dados de Pagamento
  numeroCartao: string;
  nomeCartao: string;
  validade: string;
  cvv: string;
  parcelas: string;
}

export default function CheckoutForm() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    email: "",
    telefone: "",
    cpf: "",
    numeroCartao: "",
    nomeCartao: "",
    validade: "",
    cvv: "",
    parcelas: "1",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep((prev) => (prev + 1) as Step);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => (prev - 1) as Step);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Dados do formulário:", formData);
    alert("Pagamento realizado com sucesso!");
     setTimeout(() => {
      router.push("/dashboard");
    }, 800);
  };

  const steps = [
    { number: 1, title: "Dados Pessoais", icon: UserIcon },
    { number: 2, title: "Pagamento", icon: CreditCardIcon },
    { number: 3, title: "Confirmação", icon: CheckCircleIcon },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      {/* Stepper */}
      <div className="mb-10">
        <div className="flex items-center justify-between relative">
          {/* Linha de progresso */}
          <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-200 -z-10">
            <div
              className="h-full bg-gradient-to-r from-purple-600 to-pink-500 transition-all duration-500"
              style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
            />
          </div>

          {steps.map((step) => {
            const Icon = step.icon;
            const isActive = currentStep === step.number;
            const isCompleted = currentStep > step.number;

            return (
              <div key={step.number} className="flex flex-col items-center relative">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isCompleted
                      ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white"
                      : isActive
                      ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white scale-110"
                      : "bg-white border-2 border-gray-300 text-gray-400"
                  }`}
                >
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <p
                  className={`mt-2 text-xs md:text-sm font-medium transition-colors ${
                    isActive || isCompleted ? "text-purple-600" : "text-gray-400"
                  }`}
                >
                  {step.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Formulário */}
      <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-lg p-6 md:p-8">
        {/* Etapa 1: Dados Pessoais */}
        {currentStep === 1 && (
          <div className="space-y-5">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Dados Pessoais</h2>
            
            <div>
              <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                Nome Completo *
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition"
                placeholder="Digite seu nome completo"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                E-mail *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition"
                placeholder="seu@email.com"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">
                  Telefone *
                </label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition"
                  placeholder="(11) 99999-9999"
                />
              </div>

              <div>
                <label htmlFor="cpf" className="block text-sm font-medium text-gray-700 mb-2">
                  CPF *
                </label>
                <input
                  type="text"
                  id="cpf"
                  name="cpf"
                  value={formData.cpf}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition"
                  placeholder="000.000.000-00"
                />
              </div>
            </div>
          </div>
        )}

        {/* Etapa 2: Dados de Pagamento */}
        {currentStep === 2 && (
          <div className="space-y-5">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Dados de Pagamento</h2>
            
            <div>
              <label htmlFor="numeroCartao" className="block text-sm font-medium text-gray-700 mb-2">
                Número do Cartão *
              </label>
              <input
                type="text"
                id="numeroCartao"
                name="numeroCartao"
                value={formData.numeroCartao}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition"
                placeholder="0000 0000 0000 0000"
                maxLength={19}
              />
            </div>

            <div>
              <label htmlFor="nomeCartao" className="block text-sm font-medium text-gray-700 mb-2">
                Nome no Cartão *
              </label>
              <input
                type="text"
                id="nomeCartao"
                name="nomeCartao"
                value={formData.nomeCartao}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition"
                placeholder="Nome como está no cartão"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              <div>
                <label htmlFor="validade" className="block text-sm font-medium text-gray-700 mb-2">
                  Validade *
                </label>
                <input
                  type="text"
                  id="validade"
                  name="validade"
                  value={formData.validade}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition"
                  placeholder="MM/AA"
                  maxLength={5}
                />
              </div>

              <div>
                <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-2">
                  CVV *
                </label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition"
                  placeholder="123"
                  maxLength={4}
                />
              </div>

              <div>
                <label htmlFor="parcelas" className="block text-sm font-medium text-gray-700 mb-2">
                  Parcelas *
                </label>
                <select
                  id="parcelas"
                  name="parcelas"
                  value={formData.parcelas}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition bg-white"
                >
                  <option value="1">1x sem juros</option>
                  <option value="2">2x sem juros</option>
                  <option value="3">3x sem juros</option>
                  <option value="4">4x sem juros</option>
                  <option value="5">5x sem juros</option>
                  <option value="6">6x sem juros</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Etapa 3: Confirmação */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Confirmação</h2>
            
            <div className="bg-gray-50 rounded-2xl p-6 space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                  Dados Pessoais
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p><span className="font-medium">Nome:</span> {formData.nome}</p>
                  <p><span className="font-medium">E-mail:</span> {formData.email}</p>
                  <p><span className="font-medium">Telefone:</span> {formData.telefone}</p>
                  <p><span className="font-medium">CPF:</span> {formData.cpf}</p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                  Dados de Pagamento
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p><span className="font-medium">Cartão:</span> **** **** **** {formData.numeroCartao.slice(-4)}</p>
                  <p><span className="font-medium">Nome no Cartão:</span> {formData.nomeCartao}</p>
                  <p><span className="font-medium">Parcelas:</span> {formData.parcelas}x sem juros</p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
              <p className="text-sm text-purple-800">
                <CheckCircleIcon className="h-5 w-5 inline mr-2" aria-hidden />
                Ao confirmar, você concorda com nossos termos e condições de serviço.
              </p>
            </div>
          </div>
        )}

        {/* Botões de Navegação */}
        <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
          {currentStep > 1 && (
            <button
              type="button"
              onClick={handlePrevStep}
              className="px-6 py-3 border-2 border-purple-600 text-purple-600 font-semibold rounded-xl transition-all duration-200 hover:bg-purple-50"
            >
              Voltar
            </button>
          )}
          
          {currentStep < 3 ? (
            <button
              type="button"
              onClick={handleNextStep}
              className="ml-auto px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-xl transition-all duration-200 hover:from-purple-700 hover:to-pink-600"
            >
              Próximo
            </button>
          ) : (
            <button
              type="submit"
              className="ml-auto px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-xl transition-all duration-200 hover:from-purple-700 hover:to-pink-600"
            >
              Confirmar Pagamento
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
