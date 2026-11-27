import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Award,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Phone,
  ShieldCheck,
  Wrench,
} from 'lucide-react';

const SHOWROOM_SLIDES = [
  {
    src: '/azienda-1.jpg',
    title: 'Sede Produttiva & Uffici',
    caption: 'Lo stabilimento produttivo e gli uffici operativi a Buccinasco (MI)',
  },
  {
    src: '/azienda-2.jpg',
    title: 'Ingresso Showroom',
    caption: 'Accoglienza clienti e ingresso esposizione in Via Evangelista Torricelli, 2',
  },
  {
    src: '/azienda-3.jpg',
    title: 'Sala Espositiva Interna',
    caption: 'Profili in alluminio, PVC, legno-alluminio, porte e campioni finiture dal vivo',
  },
];

const STORY_POINTS = [
  {
    badge: '01 · Dal 1990',
    title: 'Soddisfazione del cliente al primo posto',
    text: 'Nata nel 1990, Emme.Gi Serramenti è oggi una delle realtà più solide e professionali della provincia di Milano, guidata da una politica chiara: qualità reale del prodotto e cura in ogni dettaglio.',
  },
  {
    badge: '02 · Gamma Completa',
    title: 'Progettazione, produzione e messa in opera',
    text: 'Serramenti in alluminio (giunto aperto e taglio termico), alluminio-legno e PVC, vetrine per negozi, portoni condominiali, verande, pergole, persiane in alluminio e acciaio, porte interne, blindate, inferriate, zanzariere e tapparelle coibentate.',
  },
  {
    badge: '03 · Partner Certificati',
    title: 'Sistemi AluK Group, Fossati e marchi italiani',
    text: 'Produciamo e installiamo infissi con profili innovativi AluK Group e serramenti in PVC Fossati certificati CE secondo le più recenti normative europee per isolamento termico, acustico ed efficienza energetica.',
  },
  {
    badge: '04 · Su Misura & Bonus 50%',
    title: 'Privati, ristrutturazioni ed edilizia',
    text: 'Lavori su misura o su disegno con tecnologie avanzate e cura artigianale, supportando i clienti anche per la detrazione fiscale del 50% nella sostituzione di infissi e chiusure oscuranti.',
  },
];

const HIGHLIGHTS = [
  {
    icon: Award,
    title: '37 Anni di Esperienza',
    text: 'Dal 1990 punto di riferimento a Buccinasco, Corsico e Milano Sud.',
  },
  {
    icon: Wrench,
    title: 'Posa Interna Qualificata',
    text: 'Installazione diretta con nostro personale tecnico, senza subappalti.',
  },
  {
    icon: ShieldCheck,
    title: 'Garanzia & Certificazione CE',
    text: 'Massima sicurezza antieffrazione e risparmio energetico certificato.',
  },
];

export default function ChiSiamoPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return undefined;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % SHOWROOM_SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const prevSlide = () =>
    setActiveSlide((prev) => (prev - 1 + SHOWROOM_SLIDES.length) % SHOWROOM_SLIDES.length);
  const nextSlide = () =>
    setActiveSlide((prev) => (prev + 1) % SHOWROOM_SLIDES.length);

  return (
    <main className="min-h-screen bg-[#f6f5f2] pt-28 pb-20">
      {/* Header */}
      <section className="border-b border-neutral-200 bg-white py-12 sm:py-16">
        <div className="container">
          <nav className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
            <Link to="/" className="transition hover:text-brand">
              EmmeGI
            </Link>
            <span>&gt;</span>
            <span className="text-brand">Chi Siamo</span>
          </nav>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand">
                La Nostra Storia · Dal 1990
              </p>
              <h1 className="mt-2 font-heading text-4xl text-neutral-900 sm:text-5xl">
                L’Azienda Emme.Gi Serramenti
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
                L’amore di fare le cose per bene, dal 1990. Solidità artigianale, tecnologia
                produttiva e posa qualificata interna in tutta la provincia di Milano.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
              <Link
                to="/preventivo"
                className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-hover"
              >
                Preventivo Online
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+390245708405"
                className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 bg-white px-5 py-3 text-sm font-semibold text-neutral-800 transition hover:border-brand hover:text-brand"
              >
                <Phone className="h-4 w-4 text-brand" />
                02 45708405
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content: Structured Key Points + Dedicated Showroom Carousel */}
      <section className="py-14 sm:py-16">
        <div className="container">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start lg:gap-12">
            {/* Left Column: Structured & Scannable Company Story */}
            <div className="space-y-6 lg:col-span-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
                  Esperienza, Produzione &amp; Cura Artigianale
                </p>
                <h2 className="mt-2 font-heading text-2xl text-neutral-900 sm:text-3xl">
                  La nostra identità in 4 punti chiave
                </h2>
              </div>

              <div className="space-y-4">
                {STORY_POINTS.map((point) => (
                  <div
                    key={point.badge}
                    className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-xs transition hover:border-brand/40 sm:p-6"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand">
                        {point.badge}
                      </span>
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-brand/70" />
                    </div>
                    <h3 className="mt-1.5 font-heading text-xl text-neutral-900">
                      {point.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                      {point.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* 3 Compact Pillars */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {HIGHLIGHTS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="rounded-xl border border-neutral-200 bg-white p-4 shadow-xs"
                    >
                      <div className="mb-2.5 flex h-9 w-9 items-center justify-center rounded-lg bg-brand/10 text-brand">
                        <Icon className="h-4 w-4" />
                      </div>
                      <h3 className="font-heading text-base text-neutral-900">{item.title}</h3>
                      <p className="mt-1 text-xs leading-relaxed text-neutral-600">{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Dedicated High-Res Showroom & Headquarters Carousel */}
            <div className="space-y-5 lg:sticky lg:top-28 lg:col-span-6">
              <div
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-md"
              >
                <div className="flex items-center justify-between border-b border-neutral-200 bg-[#faf9f7] px-5 py-3">
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand">
                    Sede &amp; Showroom · Buccinasco (MI)
                  </span>
                  <span className="font-heading text-sm italic text-neutral-500">
                    0{activeSlide + 1} / 0{SHOWROOM_SLIDES.length}
                  </span>
                </div>

                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                  {SHOWROOM_SLIDES.map((slide, idx) => (
                    <img
                      key={slide.src}
                      src={slide.src}
                      alt={slide.title}
                      className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                        idx === activeSlide ? 'opacity-100' : 'pointer-events-none opacity-0'
                      }`}
                    />
                  ))}

                  <button
                    type="button"
                    onClick={prevSlide}
                    aria-label="Foto precedente"
                    className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm transition hover:bg-brand"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={nextSlide}
                    aria-label="Foto successiva"
                    className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm transition hover:bg-brand"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>

                <div className="border-t border-neutral-200 bg-white px-5 py-4">
                  <p className="font-heading text-lg text-neutral-900">
                    {SHOWROOM_SLIDES[activeSlide].title}
                  </p>
                  <p className="mt-0.5 text-sm text-neutral-600">
                    {SHOWROOM_SLIDES[activeSlide].caption}
                  </p>

                  {/* Clickable Thumbnail Strip */}
                  <div className="mt-4 grid grid-cols-3 gap-2.5">
                    {SHOWROOM_SLIDES.map((slide, idx) => {
                      const active = idx === activeSlide;
                      return (
                        <button
                          key={slide.src}
                          type="button"
                          onClick={() => setActiveSlide(idx)}
                          className={`group relative overflow-hidden rounded-lg border transition ${
                            active
                              ? 'border-brand ring-2 ring-brand/25'
                              : 'border-neutral-200 opacity-70 hover:opacity-100'
                          } cursor-pointer`}
                        >
                          <img
                            src={slide.src}
                            alt={slide.title}
                            className="aspect-[4/3] w-full object-cover"
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Location Card */}
              <div className="flex items-start gap-3.5 rounded-2xl border border-neutral-200 bg-white p-5 text-sm text-neutral-700 shadow-xs">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                <div>
                  <p className="font-semibold text-neutral-900">
                    Vieni a trovarci in Showroom
                  </p>
                  <p className="mt-0.5 text-neutral-600">
                    Via Evangelista Torricelli, 2 · 20090 Buccinasco (MI) — Tocca con mano profili,
                    vetri, maniglie e finiture insieme ai nostri tecnici.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
