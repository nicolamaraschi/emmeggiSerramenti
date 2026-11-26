import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  BadgePercent,
  ChevronLeft,
  ChevronRight,
  Landmark,
  Mail,
  MapPin,
  Navigation,
  Phone,
  Star,
  X,
} from 'lucide-react';
import { getReviewsApiUrl } from '../config/quoteApi';

const HERO_SLIDES = [
  {
    id: 'dal-1990',
    eyebrow: 'Eccellenza Italiana · Dal 1990',
    title: 'L’arte di abitare la luce.',
    description:
      'L’amore di fare le cose per bene, dal 1990. Serramenti progettati su misura per fondere estetica, innovazione tecnologica e materiali pregiati.',
    image: '/hero-bg-light.jpg',
    primaryCta: { label: 'Preventivo Online', to: '/preventivo' },
    secondaryCta: { label: 'Esplora le Collezioni', href: '#collezioni' },
  },
  {
    id: 'fiditalia',
    eyebrow: 'Finanziamento Agevolato',
    title: 'Finanziamento con Fiditalia.',
    description:
      'Rinnova i tuoi serramenti in comode rate mensili grazie alle soluzioni di finanziamento personalizzate tramite Fiditalia, studiate sulle tue esigenze.',
    image: '/alluminio-preview.webp',
    primaryCta: { label: 'Richiedi Informazioni', to: '/preventivo' },
    secondaryCta: { label: 'Contattaci Ora', href: '#contatti' },
  },
  {
    id: 'detrazione-50',
    eyebrow: 'Agevolazioni Fiscali',
    title: 'Detrazione del 50% in 10 Anni.',
    description:
      'Approfitta della detrazione fiscale del 50% recuperabile in 10 anni per la sostituzione dei tuoi infissi ad alto isolamento termico e acustico.',
    image: '/pvc-preview.webp',
    primaryCta: { label: 'Calcola il Preventivo', to: '/preventivo' },
    secondaryCta: { label: 'Scopri i Prodotti', href: '#collezioni' },
  },
];

const COMPANY_STATS = [
  { value: '37', suffix: '', label: 'Anni di attività' },
  { value: '22.000', suffix: '+', label: 'Finestre montate' },
  { value: '10', suffix: '', label: 'Anni di garanzia' },
];

const COLLECTIONS = [
  {
    title: 'Infissi',
    subtitle: 'Alluminio, PVC, Alluminio-Legno, Verande, Pergole',
    image: '/alluminio-preview.webp',
    to: '/infissi/alluminio',
  },
  {
    title: 'Porte',
    subtitle: 'Porte Blindate e Porte Interne',
    image: '/porta-blindata-moderna.jpg',
    to: '/porte/porte-blindate',
  },
  {
    title: 'Persiane',
    subtitle: 'Alluminio AluK e Persiane Blindate',
    image: '/inferriate-preview.webp',
    to: '/persiane/persiane-alluminio',
  },
  {
    title: 'Complementari',
    subtitle: 'Inferriate, Zanzariere, Tende, Tapparelle',
    image: '/tende-da-sole-preview.webp',
    to: '/complementari/tende-da-sole',
  },
];

const PARTNERS = [
  {
    category: 'Serramenti PVC',
    brand: 'Fossati',
    logo: '/Logo-Fossati-2024-NEW_Blacktricolore.png',
    logoClass: 'h-12 max-w-[130px] sm:h-14 lg:h-12 lg:max-w-[115px] xl:h-14 xl:max-w-[135px]',
    image: '/pvc-preview.webp',
    to: '/infissi/serramenti-in-pvc',
  },
  {
    category: 'Serramenti Alluminio',
    brand: 'AluK',
    logo: '/logo_aluk.png',
    image: '/alluminio-preview.webp',
    to: '/infissi/alluminio',
  },
  {
    category: 'Tapparelle',
    brand: 'Plasticino',
    logo: '/Plasticino.png',
    image: '/tapparelle-preview.webp',
    to: '/complementari/tapparelle',
  },
  {
    category: 'Tende da Sole',
    brand: 'Brianza Tende',
    logo: '/cropped-brianzatende-logo-1.webp',
    image: '/tende-da-sole-preview.webp',
    to: '/complementari/tende-da-sole',
  },
  {
    category: 'Zanzariere',
    brand: 'Bettio & Zanzar',
    logo: '/bettioezanzar.png',
    image: '/zanzariere-preview.webp',
    to: '/complementari/zanzariere',
  },
  {
    category: 'Porte Interne',
    brand: 'Parma Porte & Bertolotto',
    logo: '/logo_bertolottoPorte.webp',
    image: '/porte-interne-preview.webp',
    to: '/porte/porte-interne',
  },
  {
    category: 'Porte Blindate',
    brand: 'Metalportblindate',
    logo: '/METALPORTBLINDATE.png',
    image: '/porte-blindate-preview.webp',
    to: '/porte/porte-blindate',
  },
  {
    category: 'Inferriate',
    brand: 'Pro Art',
    logo: '/proArt.png',
    image: '/profili/proart-grata-trend.jpg',
    to: '/complementari/inferriate',
  },
  {
    category: 'Motorizzazioni',
    brand: 'Somfy',
    logo: '/logo_somfy_2.svg',
    image: '/immagineProdottolsomfy.webp',
    to: '/complementari/tapparelle',
  },
];

const REAL_PROJECTS = [
  {
    title: 'Portafinestra a 3 Ante in PVC',
    category: 'Infissi',
    image: '/lavori/infissi-portafinestra-bianca.webp',
  },
  {
    title: 'Finestra Panoramica Soggiorno',
    category: 'Infissi',
    image: '/lavori/infissi-finestra-soggiorno.webp',
  },
  {
    title: 'Porta Scorrevole Laccata Bianca',
    category: 'Porte Interne',
    image: '/lavori/porte-interne-scorrevole.webp',
  },
  {
    title: 'Porte Interne Pantografate',
    category: 'Porte Interne',
    image: '/lavori/porte-interne-battenti.webp',
  },
  {
    title: 'Porta Blindata Effetto Legno',
    category: 'Porte Blindate',
    image: '/lavori/porta-blindata-legno.webp',
  },
  {
    title: 'Ingresso Blindato con Vetri Satinati',
    category: 'Porte Blindate',
    image: '/lavori/porta-blindata-bianca.webp',
  },
  {
    title: 'Persiane e Inferriata su Misura',
    category: 'Persiane & Inferriate',
    image: '/lavori/persiane-inferriata-marrone.webp',
  },
  {
    title: 'Inferriate di Sicurezza per Balcone',
    category: 'Persiane & Inferriate',
    image: '/lavori/inferriate-bianche-balcone.webp',
  },
];

const PROJECT_FILTERS = ['Tutti', 'Infissi', 'Porte Interne', 'Porte Blindate', 'Persiane & Inferriate'];

const GOOGLE_REVIEWS = [
  {
    author: 'Matteo Cobelli',
    date: '4 mesi fa',
    rating: 5,
    text: 'Mi sono rivolto a loro per sostituire finestre, porte finestre, tapparelle e cassonetti delle tapparelle, e mi sono…',
  },
  {
    author: 'Chiara Battaglia',
    date: '5 mesi fa',
    rating: 5,
    text: 'Professionali, precisi e puntuali. Ottimi prodotti e servizio lodevole. Pienamente soddisfatta delle nuove porte.',
  },
  {
    author: 'Gianfranca Rossetti',
    date: '5 mesi fa',
    rating: 5,
    text: 'Ottimo servizio effettuato da Emmegi serramenti: sostituiti tutti gli infissi, i cassonetti e le relative persiane…',
  },
];

const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/place//data=!4m2!3m1!1s0x4786c2e27338f923:0x76d554350662731c';

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isHeroPaused, setIsHeroPaused] = useState(false);
  const [activePartner, setActivePartner] = useState(0);
  const [projectFilter, setProjectFilter] = useState('Tutti');
  const [lightboxProject, setLightboxProject] = useState(null);
  const [reviewsData, setReviewsData] = useState({
    rating: 4.9,
    totalReviews: 46,
    reviews: GOOGLE_REVIEWS,
  });

  const currentPartner = PARTNERS[activePartner];

  useEffect(() => {
    if (isHeroPaused) return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isHeroPaused]);

  useEffect(() => {
    const apiUrl = getReviewsApiUrl();
    if (!apiUrl) return;

    let cancelled = false;
    fetch(apiUrl)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!cancelled && data && Array.isArray(data.reviews) && data.reviews.length > 0) {
          setReviewsData({
            rating: data.rating ?? 4.9,
            totalReviews: data.totalReviews ?? 46,
            reviews: data.reviews,
          });
        }
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, []);

  const visibleProjects =
    projectFilter === 'Tutti'
      ? REAL_PROJECTS
      : REAL_PROJECTS.filter((p) => p.category === projectFilter);

  const prevSlide = () =>
    setActiveSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);

  return (
    <main className="bg-white text-neutral-900">
      {/* FULL-SCREEN AUTO-ROTATING HERO SLIDER */}
      <section
        className="hero-section"
        onMouseEnter={() => setIsHeroPaused(true)}
        onMouseLeave={() => setIsHeroPaused(false)}
        aria-roledescription="carousel"
        aria-label="In evidenza Emmegi Serramenti"
      >
        {/* Background Slides */}
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={slide.id}
            aria-hidden={idx !== activeSlide}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === activeSlide ? 'opacity-100' : 'pointer-events-none opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className={`h-full w-full object-cover transition-transform duration-[5500ms] ease-out ${
                idx === activeSlide ? 'scale-105' : 'scale-100'
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/38 via-black/28 to-black/52" />
          </div>
        ))}

        {/* Slide Content */}
        <div className="hero-content relative z-10 px-4">
          {HERO_SLIDES.map((slide, idx) => {
            if (idx !== activeSlide) return null;
            return (
              <div key={slide.id} className="animate-[fadeInUp_0.65s_ease-out_forwards]">
                <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/95 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-neutral-900 shadow-lg backdrop-blur-sm sm:text-sm">
                  <span className="h-2 w-2 rounded-full bg-brand" />
                  {slide.eyebrow}
                </span>

                <h1 className="hero-title">{slide.title}</h1>
                <p className="hero-description">{slide.description}</p>

                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link to={slide.primaryCta.to} className="cta-button primary">
                    {slide.primaryCta.label}
                  </Link>
                  <a href={slide.secondaryCta.href} className="cta-button">
                    {slide.secondaryCta.label}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop Prev / Next Arrows */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Slide precedente"
          className="absolute left-5 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/30 bg-black/25 text-white backdrop-blur-sm transition hover:border-brand hover:bg-brand md:flex"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Slide successiva"
          className="absolute right-5 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/30 bg-black/25 text-white backdrop-blur-sm transition hover:border-brand hover:bg-brand md:flex"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Bottom Slide Tabs / Indicators */}
        <div className="absolute inset-x-0 bottom-7 z-20 flex flex-wrap items-center justify-center gap-3 px-4">
          {HERO_SLIDES.map((slide, idx) => {
            const isActive = idx === activeSlide;
            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => setActiveSlide(idx)}
                className={`flex cursor-pointer items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] backdrop-blur-md transition ${
                  isActive
                    ? 'border-brand bg-brand text-white shadow-lg'
                    : 'border-white/30 bg-black/30 text-white/85 hover:border-white/70 hover:bg-black/45'
                }`}
              >
                <span className="font-heading italic">0{idx + 1}</span>
                <span className="hidden sm:inline">
                  {idx === 0 ? 'Dal 1990' : idx === 1 ? 'Fiditalia' : 'Detrazione 50%'}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* COMPANY NUMBERS / STATS SECTION */}
      <section className="border-b border-neutral-200 bg-[#f6f5f2] py-14 sm:py-16">
        <div className="container">
          <div className="grid grid-cols-1 divide-y divide-neutral-200 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {COMPANY_STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center py-6 text-center sm:px-6 sm:py-2"
              >
                <span className="font-heading text-5xl font-semibold tracking-tight text-neutral-900 sm:text-6xl">
                  {stat.value}
                  {stat.suffix && <span className="text-brand">{stat.suffix}</span>}
                </span>
                <span className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 sm:text-sm">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINANCING & TAX DEDUCTION HIGHLIGHTS */}
      <section className="bg-white py-12 sm:py-14">
        <div className="container">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="flex items-start gap-5 rounded-xl border border-neutral-200 bg-[#f6f5f2] p-6 transition hover:border-brand/50 hover:shadow-md">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                <Landmark className="h-6 w-6" />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
                  Finanziamento Agevolato
                </p>
                <h2 className="mt-1 font-heading text-xl text-neutral-900 sm:text-2xl">
                  Finanziamento con Fiditalia
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  Possibilità di finanziamento personalizzato tramite Fiditalia per rinnovare i tuoi serramenti in comode rate.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5 rounded-xl border border-neutral-200 bg-[#f6f5f2] p-6 transition hover:border-brand/50 hover:shadow-md">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                <BadgePercent className="h-6 w-6" />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
                  Agevolazioni Fiscali
                </p>
                <h2 className="mt-1 font-heading text-xl text-neutral-900 sm:text-2xl">
                  Detrazione del 50% in 10 Anni
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  Approfitta della detrazione fiscale del 50% recuperabile in 10 anni per la sostituzione dei tuoi infissi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COLLECTIONS SHOWCASE */}
      <section id="collezioni" className="border-t border-neutral-200 bg-[#f6f5f2] py-20 sm:py-24">
        <div className="container">
          <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
                Le Nostre Collezioni
              </p>
              <h2 className="mt-2 font-heading text-3xl text-neutral-900 sm:text-4xl">
                Soluzioni su misura per ogni ambiente
              </h2>
            </div>
            <Link
              to="/preventivo"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-600 transition hover:text-brand"
            >
              Configura il tuo preventivo
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {COLLECTIONS.map((col) => (
              <Link
                key={col.title}
                to={col.to}
                className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100 shadow-sm transition hover:shadow-xl"
              >
                <img
                  src={col.image}
                  alt={col.title}
                  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading text-2xl text-white">{col.title}</h3>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-black/35 text-white backdrop-blur-sm transition group-hover:border-brand group-hover:bg-brand">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs leading-relaxed text-neutral-200">
                    {col.subtitle}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="features-section border-t border-neutral-200">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Eccellenza senza intermediari</h2>
            <p className="section-subtitle">Serramenti completi in tutto</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <article className="group flex flex-col justify-between rounded-xl border border-neutral-200 bg-[#f6f5f2] p-8 transition duration-300 hover:border-brand/50 hover:bg-white hover:shadow-lg">
              <div>
                <div className="mb-8 flex items-center gap-4">
                  <span className="font-heading text-3xl italic leading-none text-brand">01</span>
                  <span className="h-px flex-1 bg-neutral-300 transition group-hover:bg-brand/40" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
                    Filiera Diretta
                  </span>
                </div>
                <h3 className="font-heading text-2xl text-neutral-900">Dalla Fabbrica a Te</h3>
                <p className="mt-4 text-sm leading-relaxed text-neutral-600">
                  Qualità e risparmio diretti. Realizziamo serramenti finiti direttamente dal profilo, garantendo la massima collaborazione e un risultato eccellente senza costi di intermediazione.
                </p>
              </div>
            </article>

            <article className="group flex flex-col justify-between rounded-xl border border-neutral-200 bg-[#f6f5f2] p-8 transition duration-300 hover:border-brand/50 hover:bg-white hover:shadow-lg">
              <div>
                <div className="mb-8 flex items-center gap-4">
                  <span className="font-heading text-3xl italic leading-none text-brand">02</span>
                  <span className="h-px flex-1 bg-neutral-300 transition group-hover:bg-brand/40" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
                    Partner AluK &amp; Fossati · CE
                  </span>
                </div>
                <h3 className="font-heading text-2xl text-neutral-900">Materiali d’Avanguardia</h3>
                <p className="mt-4 text-sm leading-relaxed text-neutral-600">
                  Fieri partner di AluK Group e Fossati Serramenti. Utilizziamo profili top di gamma e tutti i nostri infissi sono rigorosamente marcati CE, sinonimo di assoluta sicurezza e prestigio.
                </p>
              </div>
            </article>

            <article className="group flex flex-col justify-between rounded-xl border border-neutral-200 bg-[#f6f5f2] p-8 transition duration-300 hover:border-brand/50 hover:bg-white hover:shadow-lg">
              <div>
                <div className="mb-8 flex items-center gap-4">
                  <span className="font-heading text-3xl italic leading-none text-brand">03</span>
                  <span className="h-px flex-1 bg-neutral-300 transition group-hover:bg-brand/40" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
                    Post-Vendita
                  </span>
                </div>
                <h3 className="font-heading text-2xl text-neutral-900">Garanzia Totale</h3>
                <p className="mt-4 text-sm leading-relaxed text-neutral-600">
                  Massima resistenza agli eventi atmosferici, antintrusione e antisfondamento. Il nostro lavoro è supportato da un’eccellente assistenza post-vendita per riparazioni e ricambi.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* PARTNERS SECTION — Open Editorial Index with Live Visual Preview */}
      <section className="relative border-t border-neutral-200 bg-[#f6f5f2] pt-24 pb-0 sm:pt-28">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Column: Sticky Editorial Header + Live Preview Frame */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand">
                  I Nostri Partner
                </p>
                <h2 className="mt-3 font-heading text-3xl leading-tight text-neutral-900 sm:text-4xl">
                  Aziende che collaborano con noi
                </h2>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-neutral-600">
                  Ogni categoria è affidata ai migliori produttori italiani ed europei. Passa su
                  un marchio per esplorare la linea.
                </p>

                {/* Live Editorial Photo Frame (desktop) */}
                <div className="mt-8 hidden overflow-hidden rounded-xl border border-neutral-200 shadow-md lg:block">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-white">
                    {PARTNERS.map((p, idx) => (
                      <img
                        key={p.brand}
                        src={p.image}
                        alt={`${p.brand} — ${p.category}`}
                        className={`absolute inset-0 h-full w-full object-cover transition-all duration-500 ease-out ${
                          idx === activePartner
                            ? 'scale-100 opacity-100'
                            : 'scale-105 opacity-0'
                        }`}
                      />
                    ))}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
                      <div className="inline-flex items-center rounded-md bg-white/95 px-3.5 py-2 shadow-lg">
                        <img
                          src={currentPartner.logo}
                          alt={currentPartner.brand}
                          className="h-7 w-auto max-w-[160px] object-contain"
                        />
                      </div>
                      <span className="font-heading text-sm italic text-white/90">
                        0{activePartner + 1} / 0{PARTNERS.length}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Borderless Typographic Index */}
            <div className="lg:col-span-7">
              <ul className="divide-y divide-neutral-200 border-y border-neutral-200">
                {PARTNERS.map((partner, idx) => {
                  const isActive = idx === activePartner;
                  return (
                    <li key={partner.brand}>
                      <Link
                        to={partner.to}
                        onMouseEnter={() => setActivePartner(idx)}
                        onFocus={() => setActivePartner(idx)}
                        className="group flex flex-col justify-between gap-2 py-6 transition-all duration-300 sm:flex-row sm:items-baseline sm:py-7"
                      >
                        <div className="flex items-baseline gap-4">
                          <span
                            className={`font-heading text-xs italic transition-colors duration-300 ${
                              isActive ? 'text-brand' : 'text-neutral-400'
                            }`}
                          >
                            0{idx + 1}
                          </span>
                          <span
                            className={`font-heading text-2xl tracking-wide transition-all duration-300 sm:text-3xl ${
                              isActive
                                ? 'translate-x-2 text-neutral-900'
                                : 'text-neutral-500 group-hover:translate-x-2 group-hover:text-neutral-900'
                            }`}
                          >
                            {partner.brand}
                          </span>
                        </div>

                        <div className="flex items-center gap-3 pl-8 sm:pl-0">
                          <span
                            className={`text-xs uppercase tracking-[0.18em] transition-colors duration-300 ${
                              isActive
                                ? 'text-brand'
                                : 'text-neutral-500 group-hover:text-brand'
                            }`}
                          >
                            {partner.category}
                          </span>
                          <ArrowUpRight
                            className={`h-4 w-4 transition-all duration-300 ${
                              isActive
                                ? 'translate-x-0.5 -translate-y-0.5 text-brand opacity-100'
                                : 'text-neutral-400 opacity-60 group-hover:text-brand group-hover:opacity-100'
                            }`}
                          />
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        {/* Open Architectural Logo Strip */}
        <div className="mt-20 border-y border-neutral-200 bg-white py-10">
          <div className="container">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 lg:flex-nowrap lg:justify-between lg:gap-x-5 xl:gap-x-7">
              {PARTNERS.map((partner, idx) => (
                <Link
                  key={partner.brand}
                  to={partner.to}
                  onMouseEnter={() => setActivePartner(idx)}
                  title={`${partner.brand} — ${partner.category}`}
                  className="group flex shrink-0 items-center justify-center transition duration-300"
                >
                  <img
                    src={partner.logo}
                    alt={partner.brand}
                    className={`w-auto object-contain transition duration-300 ${
                      partner.logoClass ||
                      'h-8 max-w-[110px] sm:h-9 lg:h-8 lg:max-w-[96px] xl:h-9 xl:max-w-[112px]'
                    } ${
                      idx === activePartner
                        ? 'scale-105 opacity-100'
                        : 'opacity-75 grayscale-[30%] group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0'
                    }`}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="services-section bg-white">
        <div className="container">
          <div className="services-grid">
            <div className="service-content">
              <h2 className="section-title">Progettazione su Misura</h2>
              <p>
                La progettazione avviene tramite moderni software dedicati, gestiti dal nostro personale tecnico qualificato. Traduciamo le più svariate richieste in soluzioni estetiche e funzionali impeccabili.
              </p>
              <p>
                Ogni serramento viene realizzato e curato nei minimi dettagli secondo le vostre indicazioni, i vostri gusti e le specifiche esigenze abitative. Il vantaggio di progettare internamente garantisce un controllo qualità assoluto.
              </p>
            </div>
            <div className="service-image-container">
              <img
                src="/progettazione-su-misura.webp"
                alt="Progettazione su Misura Serramenti"
                className="service-image"
              />
            </div>
          </div>

          <div className="services-grid reverse">
            <div className="service-content">
              <h2 className="section-title">Montaggio Qualificato Interno</h2>
              <p>
                Nessuna ditta esterna o terze persone. Ogni serramento che esce dalla nostra azienda viene installato in modo sartoriale dal nostro personale interno altamente qualificato.
              </p>
              <p>
                Operiamo prevalentemente a Buccinasco, Corsico, Assago, Cesano Boscone, Rozzano, Locate Triulzi, Opera, Pieve Emanuele, Settimo Milanese, Trezzano sul Naviglio, Gaggiano, Baggio e tutta la zona di Milano Sud.
              </p>
            </div>
            <div className="service-image-container">
              <img
                src="/montaggio-interno.webp"
                alt="Montaggio Qualificato Interno Serramenti"
                className="service-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* REAL INSTALLATIONS GALLERY */}
      <section className="border-t border-neutral-200 bg-[#f6f5f2] py-20 sm:py-24">
        <div className="container">
          <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
                Installazioni Reali · Milano Sud
              </p>
              <h2 className="mt-2 font-heading text-3xl text-neutral-900 sm:text-4xl">
                Alcune nostre realizzazioni
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {PROJECT_FILTERS.map((filter) => {
                const active = projectFilter === filter;
                return (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setProjectFilter(filter)}
                    className={`cursor-pointer border-b-2 pb-1.5 text-xs font-semibold uppercase tracking-[0.16em] transition ${
                      active
                        ? 'border-brand text-brand'
                        : 'border-transparent text-neutral-500 hover:text-neutral-900'
                    } px-2`}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {visibleProjects.map((project) => (
              <button
                key={project.image}
                type="button"
                onClick={() => setLightboxProject(project)}
                className="group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100 text-left shadow-sm transition hover:shadow-xl"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent opacity-85 transition group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand">
                    {project.category}
                  </p>
                  <p className="mt-1 font-heading text-lg leading-snug text-white">
                    {project.title}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightboxProject && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setLightboxProject(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] max-w-3xl overflow-hidden rounded-xl bg-white shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setLightboxProject(null)}
              aria-label="Chiudi anteprima"
              className="absolute top-3 right-3 z-10 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-black/65 text-white transition hover:bg-brand"
            >
              <X className="h-5 w-5" />
            </button>
            <img
              src={lightboxProject.image}
              alt={lightboxProject.title}
              className="max-h-[80vh] w-auto object-contain"
            />
            <div className="border-t border-neutral-200 bg-white px-5 py-3.5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand">
                {lightboxProject.category}
              </p>
              <p className="font-heading text-lg text-neutral-900">{lightboxProject.title}</p>
            </div>
          </div>
        </div>
      )}

      {/* NATIVE GOOGLE REVIEWS */}
      <section className="border-t border-neutral-200 bg-white py-20 sm:py-24">
        <div className="container">
          {/* Editorial Header + Score Summary */}
          <div className="flex flex-col justify-between gap-8 border-b border-neutral-200 pb-10 lg:flex-row lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
                Recensioni Verificate su Google
              </p>
              <h2 className="mt-2 font-heading text-3xl text-neutral-900 sm:text-4xl">
                Cosa dicono i nostri clienti
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-3.5">
                <span className="font-heading text-4xl leading-none text-neutral-900">
                  {Number(reviewsData.rating).toFixed(1)}
                </span>
                <div>
                  <div
                    className="flex items-center gap-0.5 text-amber-500"
                    aria-label={`${reviewsData.rating} su 5 stelle`}
                  >
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <p className="mt-1 text-xs text-neutral-500">
                    Basato su{' '}
                    <span className="font-semibold text-neutral-900">
                      {reviewsData.totalReviews} recensioni
                    </span>{' '}
                    Google
                  </p>
                </div>
              </div>

              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-neutral-800 transition hover:border-brand hover:text-brand"
              >
                Leggi tutte su Google
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Borderless 3-Column Editorial Reviews */}
          <div className="grid grid-cols-1 divide-y divide-neutral-200 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
            {reviewsData.reviews.map((review) => (
              <article
                key={review.author}
                className="flex flex-col justify-between py-8 lg:px-8 lg:first:pl-0 lg:last:pr-0"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-0.5 text-amber-500">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                      ))}
                    </div>
                    <span className="text-[11px] uppercase tracking-[0.16em] text-neutral-500">
                      {review.date}
                    </span>
                  </div>

                  <p className="mt-5 font-heading text-lg italic leading-relaxed text-neutral-700">
                    “{review.text}”
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-neutral-200/80 pt-4">
                  <span className="text-sm font-semibold text-neutral-900">{review.author}</span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand">
                    Cliente Google
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section id="preventivo" className="border-t border-neutral-200 bg-[#f6f5f2] py-20 sm:py-24">
        <div className="container">
          <div className="grid grid-cols-1 items-center gap-10 rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm sm:p-12 lg:grid-cols-12 lg:gap-12 lg:p-14">
            {/* Left: Primary CTA */}
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
                Consulenza Gratuita
              </p>
              <h2 className="mt-3 font-heading text-3xl leading-tight text-neutral-900 sm:text-4xl">
                Non costa nulla, solo una stretta di mano.
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-neutral-600 sm:text-base">
                Sopralluogo, progettazione interna e preventivo su misura senza alcun impegno.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link to="/preventivo" className="cta-button primary">
                  Richiedi Preventivo
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a
                  href="tel:+390245708405"
                  className="text-sm font-semibold text-neutral-700 underline-offset-4 transition hover:text-brand hover:underline"
                >
                  oppure chiama 02 45708405
                </a>
              </div>
            </div>

            {/* Right: Editorial Quote */}
            <div className="border-t border-neutral-200 pt-8 lg:col-span-5 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
              <span className="block h-0.5 w-10 bg-brand" aria-hidden="true" />
              <blockquote className="mt-5 font-heading text-xl italic leading-relaxed text-neutral-800 sm:text-2xl">
                “L’unico modo di fare un ottimo lavoro è amare quello che fai.”
              </blockquote>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                — Steve Jobs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT & SHOWROOM MAP SECTION */}
      <section id="contatti" className="border-t border-neutral-200 bg-white py-20 sm:py-24">
        <div className="container">
          <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Left: Architectural Contact Sheet */}
            <div className="flex flex-col justify-between lg:col-span-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand">
                  Showroom &amp; Sede Operativa
                </p>
                <h2 className="mt-3 font-heading text-3xl leading-tight text-neutral-900 sm:text-4xl">
                  Vieni a trovarci a Buccinasco
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-neutral-600">
                  Tocca con mano profili, finiture e sistemi di sicurezza direttamente nella
                  nostra sede produttiva e showroom alle porte di Milano.
                </p>

                <dl className="mt-8 divide-y divide-neutral-200 border-y border-neutral-200">
                  <div className="flex items-start gap-4 py-4">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    <div>
                      <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                        Indirizzo
                      </dt>
                      <dd className="mt-1 text-sm font-medium text-neutral-900">
                        Via Evangelista Torricelli, 2<br />
                        <span className="font-normal text-neutral-600">
                          20090 Buccinasco (MI) · Città Metropolitana di Milano
                        </span>
                      </dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 py-4">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    <div>
                      <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                        Telefono
                      </dt>
                      <dd className="mt-1">
                        <a
                          href="tel:+390245708405"
                          className="text-sm font-semibold text-neutral-900 transition hover:text-brand"
                        >
                          02 4570 8405
                        </a>
                      </dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 py-4">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    <div>
                      <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                        Email
                      </dt>
                      <dd className="mt-1">
                        <a
                          href="mailto:emmegiserramenti@gmail.com"
                          className="text-sm font-medium text-neutral-900 transition hover:text-brand"
                        >
                          emmegiserramenti@gmail.com
                        </a>
                      </dd>
                    </div>
                  </div>
                </dl>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button primary"
                >
                  <Navigation className="h-4 w-4" />
                  Apri su Google Maps
                </a>
                <Link
                  to="/preventivo"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-700 transition hover:text-brand"
                >
                  Richiedi Preventivo
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right: Styled Interactive Map + Showroom Preview */}
            <div className="relative min-h-[380px] overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 shadow-sm lg:col-span-7 lg:min-h-[460px]">
              <iframe
                title="Mappa Emmegi Serramenti - Via Evangelista Torricelli 2, Buccinasco"
                src="https://maps.google.com/maps?q=Via+Evangelista+Torricelli+2,+20090+Buccinasco+MI&t=&z=16&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full min-h-[380px] border-0 transition duration-500 lg:min-h-[460px]"
                allowFullScreen
              />

              {/* Floating Showroom Card */}
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group absolute bottom-4 left-4 hidden items-center gap-3.5 rounded-xl border border-neutral-200 bg-white/95 p-2.5 pr-4 shadow-xl backdrop-blur-md transition hover:border-brand/60 sm:flex"
              >
                <img
                  src="/lavori/sede-emmegi-showroom.webp"
                  alt="Ingresso Showroom Emmegi Serramenti"
                  className="h-14 w-14 rounded-lg object-cover"
                />
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand">
                    Emme Gi Serramenti
                  </p>
                  <p className="mt-0.5 text-xs font-semibold text-neutral-900">
                    Via E. Torricelli, 2 · Buccinasco
                  </p>
                  <span className="mt-0.5 inline-flex items-center gap-1 text-[11px] text-neutral-500 transition group-hover:text-brand">
                    Indicazioni stradali
                    <ArrowUpRight className="h-3 w-3" />
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
