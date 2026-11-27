import React, { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  Loader2,
  Paperclip,
  Phone,
  Plus,
  Ruler,
  Send,
  Trash2,
  X,
} from 'lucide-react';
import { productsData } from '../data/products';
import {
  COLOR_OPTIONS,
  COLOR_OPTIONS_BY_PRODUCT,
  getColorSwatchStyle,
  getStep2ConfigForProduct,
  ITALIAN_PROVINCES,
  PRODUCT_GROUPS,
} from '../data/quoteConfig';
import { getQuoteApiUrl } from '../config/quoteApi';

const STEPS = [
  { id: 1, label: 'Prodotti' },
  { id: 2, label: 'Quantità e Misure' },
  { id: 3, label: 'Informazioni' },
];

const MAX_FILE_BYTES = 5 * 1024 * 1024; // 5 MB

const inputBase =
  'w-full rounded-lg border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 transition focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand';

const labelBase = 'mb-1.5 block text-xs font-semibold uppercase tracking-wider text-neutral-600';

const EMPTY_ROW = { quantity: '1', typology: '', detail: '1 Anta', width: '', height: '' };

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = String(reader.result || '');
      const base64 = result.includes(',') ? result.split(',')[1] : result;
      resolve(base64);
    };
    reader.onerror = () => reject(new Error('Impossibile leggere il file selezionato.'));
    reader.readAsDataURL(file);
  });
}

export default function PreventivoPage() {
  const [searchParams] = useSearchParams();
  const initialSlug = searchParams.get('prodotto') || '';
  const validInitialSlug = productsData[initialSlug] ? initialSlug : '';

  const [step, setStep] = useState(1);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Step 1
  const [productSlug, setProductSlug] = useState(validInitialSlug);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState('Tutti');
  const [color, setColor] = useState('');

  // Step 2
  const [rows, setRows] = useState([
    {
      ...EMPTY_ROW,
      detail: getStep2ConfigForProduct(validInitialSlug).details[0] || '',
    },
  ]);

  // Step 3
  const [customer, setCustomer] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    province: '',
    message: '',
    privacyAccepted: false,
  });
  const [attachmentFile, setAttachmentFile] = useState(null);

  const selectedProduct = productSlug ? productsData[productSlug] : null;
  const step2Config = useMemo(() => getStep2ConfigForProduct(productSlug), [productSlug]);
  const colorOptions = COLOR_OPTIONS_BY_PRODUCT[productSlug] || COLOR_OPTIONS;

  const updateRow = (index, field, value) => {
    setRows((prev) => prev.map((row, idx) => (idx === index ? { ...row, [field]: value } : row)));
  };

  const addRow = () => {
    if (rows.length >= 12) return;
    setRows((prev) => [
      ...prev,
      { ...EMPTY_ROW, detail: step2Config.details[0] || '' },
    ]);
  };

  const removeRow = (index) => {
    if (rows.length <= 1) return;
    setRows((prev) => prev.filter((_, idx) => idx !== index));
  };

  const handleFileChange = (e) => {
    setError('');
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > MAX_FILE_BYTES) {
      setError('Il file allegato supera il limite massimo di 5 MB.');
      e.target.value = '';
      return;
    }
    setAttachmentFile(file);
  };

  const goToStep = (targetStep) => {
    setError('');
    if (targetStep < step) {
      setStep(targetStep);
      return;
    }
    if (step === 1) {
      if (!productSlug) {
        setError('Seleziona un prodotto per continuare.');
        return;
      }
      if (!color) {
        setError('Seleziona un colore o una finitura per continuare.');
        return;
      }
    }
    if (step === 2 && targetStep > 2) {
      const validRows = rows.filter((r) => Number(r.quantity) > 0 && r.typology);
      if (validRows.length === 0) {
        setError('Inserisci almeno una riga con quantità e tipologia.');
        return;
      }
    }
    setStep(targetStep);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (
      !customer.fullName.trim() ||
      !customer.email.trim() ||
      !customer.phone.trim() ||
      !customer.address.trim() ||
      !customer.city.trim()
    ) {
      setError('Compila tutti i campi obbligatori contrassegnati con *.');
      return;
    }
    if (!customer.privacyAccepted) {
      setError('Accetta l’informativa sulla privacy per inviare la richiesta.');
      return;
    }

    const validRows = rows
      .filter((r) => Number(r.quantity) > 0 && r.typology)
      .map((r) => ({
        quantity: Number(r.quantity),
        typology: r.typology,
        detail: r.detail,
        width: r.width.trim(),
        height: r.height.trim(),
      }));

    if (validRows.length === 0) {
      setError('Inserisci almeno una quantità e tipologia nello step 2.');
      return;
    }

    const apiUrl = getQuoteApiUrl();
    if (!apiUrl) {
      setError(
        'Servizio di invio preventivo non ancora collegato. Contattaci al 02 45708405 o via WhatsApp.'
      );
      return;
    }

    setSubmitting(true);
    try {
      let attachment = null;
      if (attachmentFile) {
        const contentBase64 = await fileToBase64(attachmentFile);
        attachment = {
          filename: attachmentFile.name,
          contentType: attachmentFile.type || 'application/octet-stream',
          contentBase64,
        };
      }

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          product: selectedProduct?.title || productSlug,
          category: selectedProduct?.category || '',
          color,
          items: validRows,
          customer,
          attachment,
        }),
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(data.error || 'Si è verificato un errore durante l’invio.');
      }

      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      setError(err.message || 'Errore di rete. Riprova tra poco.');
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setStep(1);
    setError('');
    setProductSlug('');
    setActiveCategoryFilter('Tutti');
    setColor('');
    setRows([{ ...EMPTY_ROW }]);
    setCustomer({
      fullName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      province: '',
      message: '',
      privacyAccepted: false,
    });
    setAttachmentFile(null);
  };

  return (
    <main className="min-h-screen bg-[#f6f5f2] px-4 pt-28 pb-20 sm:px-6">
      <div className="mx-auto max-w-4xl">
        {/* Heading */}
        <div className="mb-10 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand">
            Preventivo Gratuito
          </p>
          <h1 className="font-heading text-3xl text-neutral-900 sm:text-4xl">
            Fai il tuo preventivo online
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm text-neutral-600 sm:text-base">
            Bastano pochi minuti per ricevere un preventivo dettagliato per i tuoi serramenti,
            porte, persiane o complementi. Non hai le misure?{' '}
            <a
              href="tel:+390245708405"
              className="inline-flex items-center gap-1 font-semibold text-brand underline-offset-4 hover:underline"
            >
              <Phone className="h-3.5 w-3.5" />
              Contattaci per una consulenza gratuita
            </a>
            .
          </p>
        </div>

        {submitted ? (
          /* Confirmation Card */
          <section className="rounded-2xl border border-neutral-200 bg-white p-8 text-center shadow-sm sm:p-12">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-brand/10 text-brand">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h2 className="font-heading text-2xl text-neutral-900 sm:text-3xl">
              Richiesta inviata con successo
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-neutral-600">
              Grazie <span className="font-semibold text-neutral-900">{customer.fullName}</span>, abbiamo ricevuto
              la tua richiesta per <span className="font-semibold text-neutral-900">{selectedProduct?.title}</span>
              . Il nostro team tecnico ti ricontatterà al più presto.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={resetForm}
                className="cursor-pointer rounded-lg border border-neutral-300 bg-white px-5 py-2.5 text-sm font-medium text-neutral-800 transition hover:border-neutral-400 hover:bg-neutral-50"
              >
                Nuovo preventivo
              </button>
              <Link
                to="/"
                className="rounded-lg bg-brand px-5 py-2.5 text-sm font-medium text-white transition hover:bg-brand-hover"
              >
                Torna alla Home
              </Link>
            </div>
          </section>
        ) : (
          <>
            {/* Minimal Stepper */}
            <nav aria-label="Avanzamento preventivo" className="mb-8">
              <ol className="grid grid-cols-3 gap-2 sm:gap-4">
                {STEPS.map((s) => {
                  const isActive = step === s.id;
                  const isDone = step > s.id;
                  return (
                    <li key={s.id}>
                      <button
                        type="button"
                        onClick={() => (isDone ? goToStep(s.id) : null)}
                        disabled={!isDone}
                        className={`flex w-full items-center justify-center gap-2.5 rounded-xl border px-3 py-3 text-xs font-semibold transition sm:text-sm ${
                          isActive
                            ? 'border-brand bg-brand/10 text-neutral-900 shadow-xs'
                            : isDone
                            ? 'cursor-pointer border-neutral-300 bg-white text-neutral-800 hover:border-brand/50'
                            : 'cursor-default border-neutral-200 bg-white/60 text-neutral-400'
                        }`}
                      >
                        <span
                          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
                            isActive
                              ? 'bg-brand text-white'
                              : isDone
                              ? 'bg-emerald-500/15 text-emerald-700'
                              : 'bg-neutral-200 text-neutral-500'
                          }`}
                        >
                          {isDone ? <Check className="h-3.5 w-3.5" /> : s.id}
                        </span>
                        <span className="truncate">{s.label}</span>
                      </button>
                    </li>
                  );
                })}
              </ol>
            </nav>

            {/* Form Card */}
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8"
              noValidate
            >
              {error && (
                <div
                  role="alert"
                  className="mb-6 rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700"
                >
                  {error}
                </div>
              )}

              {/* STEP 1: PRODOTTI */}
              {step === 1 && (
                <div className="space-y-8">
                  {/* Visual Product Picker */}
                  <div>
                    <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                      <label className="text-xs font-semibold uppercase tracking-wider text-neutral-600">
                        1. Scegli il prodotto *
                      </label>
                      <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Filtra per categoria">
                        {['Tutti', ...PRODUCT_GROUPS.map((g) => g.category)].map((cat) => {
                          const isTabActive = activeCategoryFilter === cat;
                          return (
                            <button
                              key={cat}
                              type="button"
                              onClick={() => setActiveCategoryFilter(cat)}
                              className={`cursor-pointer rounded-full px-3 py-1 text-xs font-medium transition ${
                                isTabActive
                                  ? 'bg-neutral-900 text-white shadow-xs'
                                  : 'bg-[#f6f5f2] text-neutral-600 hover:bg-neutral-200/70 hover:text-neutral-900'
                              }`}
                            >
                              {cat}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="space-y-6">
                      {PRODUCT_GROUPS.filter(
                        (group) => activeCategoryFilter === 'Tutti' || group.category === activeCategoryFilter
                      ).map((group) => (
                        <div key={group.category}>
                          {activeCategoryFilter === 'Tutti' && (
                            <p className="mb-2.5 text-[11px] font-bold uppercase tracking-[0.18em] text-neutral-400">
                              {group.category}
                            </p>
                          )}
                          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                            {group.items.map((item) => {
                              const isSelected = productSlug === item.slug;
                              return (
                                <button
                                  key={item.slug}
                                  type="button"
                                  onClick={() => {
                                    const nextCfg = getStep2ConfigForProduct(item.slug);
                                    setProductSlug(item.slug);
                                    setColor('');
                                    setRows([{ ...EMPTY_ROW, detail: nextCfg.details[0] || '' }]);
                                    setError('');
                                  }}
                                  className={`group relative flex cursor-pointer flex-col overflow-hidden rounded-xl border text-left transition-all duration-200 ${
                                    isSelected
                                      ? 'border-brand bg-brand/[0.04] ring-2 ring-brand/25 shadow-sm'
                                      : 'border-neutral-200 bg-white hover:border-neutral-300 hover:shadow-sm'
                                  }`}
                                >
                                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#f6f5f2]">
                                    <img
                                      src={item.image}
                                      alt={item.label}
                                      loading="lazy"
                                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    {isSelected && (
                                      <span className="absolute top-2 right-2 flex h-6 w-6 items-center justify-center rounded-full bg-brand text-white shadow-sm">
                                        <Check className="h-3.5 w-3.5" />
                                      </span>
                                    )}
                                  </div>
                                  <div className="flex flex-1 flex-col justify-between p-3">
                                    <span
                                      className={`text-sm font-semibold leading-snug ${
                                        isSelected ? 'text-brand' : 'text-neutral-900'
                                      }`}
                                    >
                                      {item.label}
                                    </span>
                                    <span className="mt-1 line-clamp-1 text-[11px] text-neutral-500">
                                      {group.category}
                                    </span>
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Color / Finish Swatches */}
                  <div className="border-t border-neutral-200 pt-6">
                    <label className="mb-3 block text-xs font-semibold uppercase tracking-wider text-neutral-600">
                      2. Scegli Colore / Finitura *
                    </label>
                    <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                      {colorOptions.map((opt) => {
                        const isColorSelected = color === opt;
                        return (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => {
                              setColor(opt);
                              setError('');
                            }}
                            className={`flex cursor-pointer items-center gap-3 rounded-xl border px-3.5 py-2.5 text-left text-sm transition ${
                              isColorSelected
                                ? 'border-brand bg-brand/[0.06] font-semibold text-neutral-900 ring-1 ring-brand/30'
                                : 'border-neutral-200 bg-[#faf9f7] text-neutral-700 hover:border-neutral-300 hover:bg-white'
                            }`}
                          >
                            <span
                              className="h-5 w-5 shrink-0 rounded-full border border-neutral-300 shadow-inner"
                              style={getColorSwatchStyle(opt)}
                              aria-hidden="true"
                            />
                            <span className="flex-1 leading-tight">{opt}</span>
                            {isColorSelected && <Check className="h-4 w-4 shrink-0 text-brand" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Live Selection Bar + Next CTA */}
                  <div className="flex flex-col items-stretch justify-between gap-4 rounded-xl border border-neutral-200 bg-[#f6f5f2] p-4 sm:flex-row sm:items-center">
                    {selectedProduct ? (
                      <div className="flex items-center gap-3.5">
                        <img
                          src={selectedProduct.image}
                          alt={selectedProduct.title}
                          className="h-12 w-16 shrink-0 rounded-lg border border-neutral-200 object-cover"
                        />
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-brand">
                            {selectedProduct.category}
                          </p>
                          <p className="text-sm font-semibold text-neutral-900">
                            {selectedProduct.title}
                            {color && <span className="font-normal text-neutral-600"> · {color}</span>}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <p className="text-xs text-neutral-500">
                        Seleziona un prodotto e una finitura per procedere con misure e quantità.
                      </p>
                    )}

                    <button
                      type="button"
                      onClick={() => goToStep(2)}
                      className="inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-lg bg-brand px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-hover"
                    >
                      Avanti
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: QUANTITÀ E MISURE */}
              {step === 2 && (
                <div className="space-y-6">
                  {/* Selected Summary */}
                  <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-neutral-200 bg-[#f6f5f2] px-4 py-3 text-xs text-neutral-600">
                    <div className="flex items-center gap-3">
                      {selectedProduct?.image && (
                        <img
                          src={selectedProduct.image}
                          alt={selectedProduct.title}
                          className="h-10 w-14 shrink-0 rounded-lg border border-neutral-200 object-cover"
                        />
                      )}
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-sm font-semibold text-neutral-900">{selectedProduct?.title}</span>
                        <span className="text-neutral-400">•</span>
                        <span className="inline-flex items-center gap-1.5 font-medium text-neutral-700">
                          <span
                            className="h-3.5 w-3.5 rounded-full border border-neutral-300"
                            style={getColorSwatchStyle(color)}
                            aria-hidden="true"
                          />
                          {color}
                        </span>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-neutral-500">
                      <Ruler className="h-3.5 w-3.5 text-brand" />
                      Misure in cm (anche indicative)
                    </span>
                  </div>

                  {/* Dynamic Rows */}
                  <div className="space-y-4">
                    {rows.map((row, idx) => (
                      <div
                        key={idx}
                        className="rounded-xl border border-neutral-200 bg-[#faf9f7] p-4"
                      >
                        <div className="mb-3 flex items-center justify-between">
                          <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                            {step2Config.rowLabel} #{idx + 1}
                          </span>
                          <button
                            type="button"
                            onClick={() => removeRow(idx)}
                            disabled={rows.length <= 1}
                            title="Rimuovi riga"
                            className="cursor-pointer rounded-lg p-1.5 text-neutral-400 transition hover:bg-red-50 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-30"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>

                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-12">
                          <div className="sm:col-span-2">
                            <label className="mb-1 block text-[11px] font-semibold uppercase text-neutral-500">
                              Quantità
                            </label>
                            <input
                              type="number"
                              min="1"
                              max="999"
                              value={row.quantity}
                              onChange={(e) => updateRow(idx, 'quantity', e.target.value)}
                              placeholder="1"
                              className={inputBase}
                            />
                          </div>

                          <div className="sm:col-span-5">
                            <label className="mb-1 block text-[11px] font-semibold uppercase text-neutral-500">
                              Tipologia *
                            </label>
                            <select
                              value={row.typology}
                              onChange={(e) => {
                                updateRow(idx, 'typology', e.target.value);
                                setError('');
                              }}
                              className={inputBase}
                            >
                              <option value="">Seleziona tipologia</option>
                              {step2Config.typologies.map((t) => (
                                <option key={t} value={t}>
                                  {t}
                                </option>
                              ))}
                            </select>
                          </div>

                          <div className="sm:col-span-5">
                            <label className="mb-1 block text-[11px] font-semibold uppercase text-neutral-500">
                              {step2Config.detailLabel}
                            </label>
                            <select
                              value={row.detail}
                              onChange={(e) => updateRow(idx, 'detail', e.target.value)}
                              className={inputBase}
                            >
                              {step2Config.details.map((opt) => (
                                <option key={opt} value={opt}>
                                  {opt}
                                </option>
                              ))}
                            </select>
                          </div>

                          <div className="sm:col-span-6">
                            <label className="mb-1 block text-[11px] font-semibold uppercase text-neutral-500">
                              Larghezza (cm)
                            </label>
                            <input
                              type="number"
                              min="10"
                              max="1000"
                              value={row.width}
                              onChange={(e) => updateRow(idx, 'width', e.target.value)}
                              placeholder={step2Config.widthPlaceholder}
                              className={inputBase}
                            />
                          </div>

                          <div className="sm:col-span-6">
                            <label className="mb-1 block text-[11px] font-semibold uppercase text-neutral-500">
                              Altezza (cm)
                            </label>
                            <input
                              type="number"
                              min="10"
                              max="1000"
                              value={row.height}
                              onChange={(e) => updateRow(idx, 'height', e.target.value)}
                              placeholder={step2Config.heightPlaceholder}
                              className={inputBase}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {rows.length < 12 && (
                    <button
                      type="button"
                      onClick={addRow}
                      className="inline-flex cursor-pointer items-center gap-1.5 text-xs font-semibold text-brand transition hover:text-brand-hover"
                    >
                      <Plus className="h-4 w-4" />
                      Aggiungi un’altra tipologia / misura
                    </button>
                  )}

                  <div className="flex items-center justify-between pt-2">
                    <button
                      type="button"
                      onClick={() => goToStep(1)}
                      className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-neutral-300 bg-white px-5 py-2.5 text-sm font-medium text-neutral-700 transition hover:border-neutral-400 hover:bg-neutral-50"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Indietro
                    </button>
                    <button
                      type="button"
                      onClick={() => goToStep(3)}
                      className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-brand px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-hover"
                    >
                      Avanti
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: INFORMAZIONI */}
              {step === 3 && (
                <div className="space-y-5">
                  {selectedProduct && (
                    <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-neutral-200 bg-[#f6f5f2] px-4 py-3">
                      <div className="flex items-center gap-3">
                        <img
                          src={selectedProduct.image}
                          alt={selectedProduct.title}
                          className="h-11 w-14 shrink-0 rounded-lg border border-neutral-200 object-cover"
                        />
                        <div>
                          <p className="text-sm font-semibold text-neutral-900">
                            {selectedProduct.title} · <span className="font-normal text-neutral-600">{color}</span>
                          </p>
                          <p className="text-xs text-neutral-500">
                            {rows.filter((r) => Number(r.quantity) > 0 && r.typology).length} elementi configurati
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => goToStep(2)}
                        className="cursor-pointer text-xs font-semibold text-brand hover:underline"
                      >
                        Modifica misure
                      </button>
                    </div>
                  )}

                  <div>
                    <label htmlFor="quote-name" className={labelBase}>
                      Nome e Cognome *
                    </label>
                    <input
                      id="quote-name"
                      type="text"
                      required
                      value={customer.fullName}
                      onChange={(e) => setCustomer({ ...customer, fullName: e.target.value })}
                      placeholder="Mario Rossi"
                      className={inputBase}
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="quote-email" className={labelBase}>
                        Indirizzo e-mail *
                      </label>
                      <input
                        id="quote-email"
                        type="email"
                        required
                        value={customer.email}
                        onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
                        placeholder="mario.rossi@email.it"
                        className={inputBase}
                      />
                    </div>
                    <div>
                      <label htmlFor="quote-phone" className={labelBase}>
                        Telefono *
                      </label>
                      <input
                        id="quote-phone"
                        type="tel"
                        required
                        value={customer.phone}
                        onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                        placeholder="333 1234567"
                        className={inputBase}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="quote-address" className={labelBase}>
                      Indirizzo (Via e numero civico) *
                    </label>
                    <input
                      id="quote-address"
                      type="text"
                      required
                      value={customer.address}
                      onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
                      placeholder="Via Roma, 10"
                      className={inputBase}
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="quote-city" className={labelBase}>
                        Città *
                      </label>
                      <input
                        id="quote-city"
                        type="text"
                        required
                        value={customer.city}
                        onChange={(e) => setCustomer({ ...customer, city: e.target.value })}
                        placeholder="Buccinasco"
                        className={inputBase}
                      />
                    </div>
                    <div>
                      <label htmlFor="quote-province" className={labelBase}>
                        Provincia
                      </label>
                      <select
                        id="quote-province"
                        value={customer.province}
                        onChange={(e) => setCustomer({ ...customer, province: e.target.value })}
                        className={inputBase}
                      >
                        <option value="">Scegli la provincia</option>
                        {ITALIAN_PROVINCES.map((prov) => (
                          <option key={prov} value={prov}>
                            {prov}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="quote-message" className={labelBase}>
                      Inserisci il tuo messaggio
                    </label>
                    <textarea
                      id="quote-message"
                      rows={4}
                      value={customer.message}
                      onChange={(e) => setCustomer({ ...customer, message: e.target.value })}
                      placeholder="Note aggiuntive sulle misure, sul montaggio o richieste particolari..."
                      className={inputBase}
                    />
                  </div>

                  {/* Optional Attachment */}
                  <div>
                    <span className={labelBase}>Allega un file (opzionale — max 5 MB)</span>
                    {attachmentFile ? (
                      <div className="flex items-center justify-between rounded-lg border border-neutral-300 bg-[#faf9f7] px-3.5 py-2.5 text-sm text-neutral-800">
                        <span className="flex items-center gap-2 truncate">
                          <Paperclip className="h-4 w-4 shrink-0 text-brand" />
                          <span className="truncate">{attachmentFile.name}</span>
                          <span className="shrink-0 text-xs text-neutral-500">
                            ({(attachmentFile.size / 1024 / 1024).toFixed(2)} MB)
                          </span>
                        </span>
                        <button
                          type="button"
                          onClick={() => setAttachmentFile(null)}
                          className="ml-2 cursor-pointer text-neutral-500 hover:text-neutral-900"
                          aria-label="Rimuovi allegato"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    ) : (
                      <label className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-dashed border-neutral-300 bg-[#faf9f7] px-4 py-4 text-sm text-neutral-600 transition hover:border-brand/60 hover:text-neutral-900">
                        <Paperclip className="h-4 w-4 text-brand" />
                        <span>Scegli planimetria, foto o documento (PDF, JPG, PNG)</span>
                        <input
                          type="file"
                          onChange={handleFileChange}
                          accept=".pdf,.jpg,.jpeg,.png,.webp,.doc,.docx"
                          className="hidden"
                        />
                      </label>
                    )}
                  </div>

                  {/* GDPR */}
                  <label className="flex cursor-pointer items-start gap-3 pt-1 text-xs leading-relaxed text-neutral-600">
                    <input
                      type="checkbox"
                      checked={customer.privacyAccepted}
                      onChange={(e) =>
                        setCustomer({ ...customer, privacyAccepted: e.target.checked })
                      }
                      className="mt-0.5 h-4 w-4 shrink-0 accent-brand"
                    />
                    <span>
                      Acconsento al trattamento dei miei dati personali in conformità
                      all’informativa resa ai sensi dell’art. 13 del Regolamento UE 2016/679
                      (GDPR). *
                    </span>
                  </label>

                  <div className="flex items-center justify-between pt-3">
                    <button
                      type="button"
                      onClick={() => goToStep(2)}
                      disabled={submitting}
                      className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-neutral-300 bg-white px-5 py-2.5 text-sm font-medium text-neutral-700 transition hover:border-neutral-400 hover:bg-neutral-50 disabled:opacity-50"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Indietro
                    </button>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-brand px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-hover disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Invio in corso...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Invia la richiesta
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </form>
          </>
        )}
      </div>
    </main>
  );
}
