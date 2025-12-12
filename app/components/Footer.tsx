import Link from "next/link";
import {
  CalendarDaysIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { FaceSmileIcon, CameraIcon } from "@heroicons/react/24/solid";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-16 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-white/70">
            GlowAgenda
          </p>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold">
            Pronto para transformar o seu negócio?
          </h2>
          <p className="mt-4 text-base md:text-lg text-white/90">
            Agende agora mesmo e garanta seu horário com nossos profissionais
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/pagamento" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-purple-700 shadow-lg transition-transform duration-200 hover:-translate-y-0.5">
              <CalendarDaysIcon className="h-5 w-5" aria-hidden />
              Contratar
            </Link>
            <button className="inline-flex items-center gap-2 rounded-full border border-white/70 px-7 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-white/10">
              <PhoneIcon className="h-5 w-5" aria-hidden />
              Contato
            </button>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-12 grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-purple-500 to-pink-500 text-white shadow-lg">
                <FaceSmileIcon className="h-6 w-6" aria-hidden />
              </span>
              <p className="text-xl font-semibold">GlowAgenda</p>
            </div>
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              Sua plataforma completa de agendamento de serviços de beleza. Transforme seu visual com praticidade e profissionalismo.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <button className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20">
                <CameraIcon className="h-5 w-5" aria-hidden />
              </button>
              <button className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20">
                <FaceSmileIcon className="h-5 w-5" aria-hidden />
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold">Links Rápidos</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>
                <a className="transition hover:text-white" href="#inicio">
                  Início
                </a>
              </li>
              <li>
                <a className="transition hover:text-white" href="#servicos">
                  Serviços
                </a>
              </li>
              <li>
                <a className="transition hover:text-white" href="#sobre">
                  Sobre
                </a>
              </li>
              <li>
                <a className="transition hover:text-white" href="#depoimentos">
                  Depoimentos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold">Contato</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex items-center gap-2">
                <PhoneIcon className="h-5 w-5 text-white/50" aria-hidden />
                (11) 99999-9999
              </li>
              <li className="flex items-center gap-2">
                <EnvelopeIcon className="h-5 w-5 text-white/50" aria-hidden />
                contato@glowagenda.com
              </li>
              <li className="flex items-center gap-2">
                <MapPinIcon className="h-5 w-5 text-white/50" aria-hidden />
                Ceres, GO
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
          © 2025 GlowAgenda. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
