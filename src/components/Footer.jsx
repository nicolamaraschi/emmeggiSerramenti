import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';

const INFISSI_PORTE_LINKS = [
  { label: 'Serramenti in Alluminio', to: '/infissi/alluminio' },
  { label: 'Alluminio e Legno', to: '/infissi/alluminio-e-legno' },
  { label: 'Serramenti in PVC', to: '/infissi/serramenti-in-pvc' },
  { label: 'Verande', to: '/infissi/verande' },
  { label: 'Facciate Continue', to: '/infissi/facciate' },
  { label: 'Porte Blindate', to: '/porte/porte-blindate' },
  { label: 'Porte Interne', to: '/porte/porte-interne' },
];

const OSCURANTI_LINKS = [
  { label: 'Persiane in Alluminio', to: '/persiane/persiane-alluminio' },
  { label: 'Persiane Blindate', to: '/persiane/persiane-blindate' },
  { label: 'Inferriate di Sicurezza', to: '/complementari/inferriate' },
  { label: 'Zanzariere', to: '/complementari/zanzariere' },
  { label: 'Tende da Sole', to: '/complementari/tende-da-sole' },
  { label: 'Tapparelle', to: '/complementari/tapparelle' },
];

export default function Footer() {
  return (
    <footer className="relative border-t-[3px] border-brand bg-[#f3efe9] text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-14 sm:px-8 lg:py-16">
        {/* Top Editorial CTA Strip */}
        <div className="flex flex-col justify-between gap-6 border-b border-neutral-900/10 pb-10 md:flex-row md:items-end">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand">
              Dal 1990 · Produzione &amp; Posa Interna
            </p>
            <h2 className="mt-2 font-heading text-2xl text-neutral-950 sm:text-3xl">
              Hai un progetto in mente? Parliamone.
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/preventivo"
              className="inline-flex items-center gap-2 rounded-lg bg-neutral-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-brand"
            >
              Preventivo Online
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+390245708405"
              className="inline-flex items-center gap-2 rounded-lg border border-neutral-900/20 bg-white/70 px-5 py-3 text-sm font-medium text-neutral-900 transition hover:border-brand hover:text-brand"
            >
              <Phone className="h-4 w-4 text-brand" />
              02 45708405
            </a>
          </div>
        </div>

        {/* Main 4-Column Architectural Grid */}
        <div className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block">
              <img
                src="/logo-emmegi.png"
                alt="Emmegi Serramenti"
                className="h-11 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-600">
              L’amore di fare le cose per bene, dal 1990. Serramenti su misura dalla fabbrica
              direttamente a casa tua, con posa qualificata interna.
            </p>
            <div className="mt-5 inline-flex items-start gap-2 text-xs text-neutral-500">
              <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" />
              <span>
                Via Evangelista Torricelli, 2 · 20090 Buccinasco (MI)
              </span>
            </div>
          </div>

          {/* Infissi & Porte */}
          <div className="lg:col-span-3">
            <h3 className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-neutral-950">
              Infissi &amp; Porte
            </h3>
            <ul className="mt-4 space-y-2.5">
              {INFISSI_PORTE_LINKS.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-neutral-600 transition hover:text-brand"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Oscuranti & Complementi */}
          <div className="lg:col-span-2">
            <h3 className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-neutral-950">
              Oscuranti
            </h3>
            <ul className="mt-4 space-y-2.5">
              {OSCURANTI_LINKS.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-neutral-600 transition hover:text-brand"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contatti Diretti */}
          <div className="lg:col-span-3">
            <h3 className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-neutral-950">
              Contatti Diretti
            </h3>
            <div className="mt-4 space-y-3 text-sm">
              <a
                href="tel:+390245708405"
                className="flex items-center gap-2.5 text-neutral-700 transition hover:text-brand"
              >
                <Phone className="h-4 w-4 shrink-0 text-brand" />
                <span className="font-medium">02 45708405</span>
              </a>
              <a
                href="mailto:emmegiserramenti@gmail.com"
                className="flex items-center gap-2.5 text-neutral-700 transition hover:text-brand"
              >
                <Mail className="h-4 w-4 shrink-0 text-brand" />
                <span>emmegiserramenti@gmail.com</span>
              </a>
              <a
                href="https://wa.me/393338363730"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[#16a34a] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#15803d]"
              >
                <MessageCircle className="h-4 w-4" />
                Scrivici su WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-neutral-900/10 pt-6 text-xs text-neutral-500 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Emmegi Serramenti. Tutti i diritti riservati.</p>
          <p className="tracking-wide">Partner AluK Group &amp; Fossati · Serramenti Certificati CE</p>
        </div>
      </div>
    </footer>
  );
}
