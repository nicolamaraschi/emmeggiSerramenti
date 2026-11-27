import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Award, MapPin, Phone, ShieldCheck, Wrench } from 'lucide-react';

const HIGHLIGHTS = [
  {
    icon: Award,
    title: 'Dal 1990 a Buccinasco',
    text: 'Oltre 37 anni di esperienza nella progettazione, produzione e posa in opera di serramenti su misura nella provincia di Milano.',
  },
  {
    icon: Wrench,
    title: 'Posa Interna Qualificata',
    text: 'Nessun subappalto: ogni serramento è realizzato e installato con cura artigianale dal nostro personale tecnico interno.',
  },
  {
    icon: ShieldCheck,
    title: 'Certificazioni & Bonus 50%',
    text: 'Prodotti certificati CE ad alto risparmio energetico, idonei alla detrazione fiscale del 50% per la sostituzione degli infissi.',
  },
];

export default function ChiSiamoPage() {
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
                L’amore di fare le cose per bene, dal 1990. Una storia familiare e artigianale
                cresciuta nella provincia di Milano mettendo sempre al centro la soddisfazione del cliente.
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

      {/* Storia + Gallery */}
      <section className="py-14 sm:py-16">
        <div className="container">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Story Text */}
            <div className="space-y-5 lg:col-span-7">
              <div className="rounded-2xl border border-neutral-200 bg-white p-7 shadow-sm sm:p-9">
                <h2 className="font-heading text-2xl text-neutral-900 sm:text-3xl">
                  Esperienza, produzione e cura artigianale
                </h2>

                <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-neutral-700">
                  <p>
                    L’azienda <strong>Emme.Gi Serramenti</strong> nasce nel <strong>1990</strong> e,
                    grazie alla lunga esperienza maturata sul campo, viene oggi riconosciuta come una
                    delle realtà più valide e professionali della provincia di Milano, guidata da una
                    politica aziendale orientata alla <em>«soddisfazione del cliente»</em> come obiettivo
                    primario nella qualità del prodotto.
                  </p>
                  <p>
                    Operiamo nella progettazione, produzione e commercializzazione di serramenti in
                    <strong> alluminio</strong> (a giunto aperto e a taglio termico),{' '}
                    <strong>alluminio-legno</strong> e <strong>PVC</strong>. Realizziamo inoltre
                    vetrine per negozi, portoni per condomini, verande, pergole bioclimatiche, persiane
                    in alluminio e blindate in acciaio, cassonetti, zanzariere e tapparelle in PVC,
                    alluminio e acciaio coibentato ad alta densità, con un rapporto qualità-prezzo
                    vantaggioso ed elevato risparmio energetico, tutti certificati secondo le più
                    recenti normative europee.
                  </p>
                  <p>
                    Produciamo e installiamo infissi in alluminio utilizzando i sistemi e profili
                    innovativi <strong>AluK Group</strong>, affiancati dai serramenti in PVC{' '}
                    <strong>Fossati</strong> e da partner italiani selezionati per porte interne,
                    porte blindate, inferriate, tende da sole e motorizzazioni.
                  </p>
                  <p>
                    Siamo in grado di soddisfare ogni esigenza architettonica, sia nelle nuove
                    costruzioni che nelle ristrutturazioni. Emme.Gi è garanzia di qualità
                    nell’esecuzione di lavori su misura per il privato e per il settore edilizio,
                    realizzati con tecnologie avanzate e particolare cura artigianale, supportando i
                    clienti anche per la <strong>detrazione fiscale del 50%</strong> in caso di
                    sostituzione di serramenti e chiusure oscuranti.
                  </p>
                </div>

                <div className="mt-7 flex items-start gap-3 rounded-xl border border-neutral-200 bg-[#f6f5f2] p-4 text-sm text-neutral-700">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <div>
                    <p className="font-semibold text-neutral-900">Sede &amp; Showroom</p>
                    <p className="mt-0.5 text-neutral-600">
                      Via Evangelista Torricelli, 2 · 20090 Buccinasco (MI) — Riceviamo su appuntamento
                      per consulenze tecniche e visione dal vivo di profili e finiture.
                    </p>
                  </div>
                </div>
              </div>

              {/* 3 Pillars */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {HIGHLIGHTS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="rounded-xl border border-neutral-200 bg-white p-5 shadow-xs"
                    >
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-brand">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-heading text-lg text-neutral-900">{item.title}</h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-neutral-600">{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Company Photos */}
            <div className="space-y-5 lg:col-span-5">
              <figure className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
                <img
                  src="/azienda-1.jpg"
                  alt="Sede produttiva e uffici Emme.Gi Serramenti a Buccinasco"
                  className="aspect-[4/3] w-full object-cover"
                />
                <figcaption className="border-t border-neutral-200 bg-[#faf9f7] px-4 py-2.5 text-xs font-medium text-neutral-600">
                  La sede produttiva e gli uffici di Buccinasco (MI)
                </figcaption>
              </figure>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <figure className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
                  <img
                    src="/azienda-2.jpg"
                    alt="Ingresso showroom Emme.Gi Serramenti"
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <figcaption className="border-t border-neutral-200 bg-[#faf9f7] px-4 py-2.5 text-xs font-medium text-neutral-600">
                    Ingresso Showroom
                  </figcaption>
                </figure>

                <figure className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
                  <img
                    src="/azienda-3.jpg"
                    alt="Sala espositiva interna Emme.Gi Serramenti"
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <figcaption className="border-t border-neutral-200 bg-[#faf9f7] px-4 py-2.5 text-xs font-medium text-neutral-600">
                    Esposizione interna profili e porte
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
