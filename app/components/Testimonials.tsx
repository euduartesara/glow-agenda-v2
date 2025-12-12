import { StarIcon } from "@heroicons/react/24/solid";

const testimonials = [
  {
    quote:
      "Simplesmente amei o resultado! A equipe é super atenciosa e o agendamento online facilita muito a vida. Recomendo!",
    name: "Maria Silva",
    service: "Corte e Coloração",
  },
  {
    quote:
      "Melhor barbearia que já fui. Profissionais muito competentes e o ambiente é top. O sistema de agendamento é perfeito.",
    name: "João Santos",
    service: "Corte Masculino",
  },
  {
    quote:
      "Meu cabelo estava muito danificado e depois do tratamento ficou incrível! Atendimento excepcional do início ao fim.",
    name: "Ana Costa",
    service: "Tratamento Capilar",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            O que dizem nossos clientes
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-500">
            Histórias reais de transformação e satisfação
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="bg-white rounded-3xl shadow-[0_20px_40px_rgba(15,23,42,0.08)] p-8 transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="flex items-center gap-1 text-yellow-400" aria-hidden>
                {Array.from({ length: 5 }).map((_, index) => (
                  <StarIcon key={index} className="h-5 w-5" />
                ))}
              </div>
              <blockquote className="mt-6 text-gray-600 italic leading-relaxed">
                “{testimonial.quote}”
              </blockquote>
              <div className="mt-8 border-t border-gray-200 pt-6">
                <p className="text-lg font-semibold text-gray-900">
                  {testimonial.name}
                </p>
                <p className="mt-1 text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                  {testimonial.service}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
