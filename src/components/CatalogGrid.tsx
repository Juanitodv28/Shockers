import { useMemo, useState } from 'react';
import { SNEAKERS_DATA } from '../data/sneakers';
import type { Brand, Sneaker } from '../types/sneaker';

const WHATSAPP_NUMBER = '573203634494';
const BRAND_OPTIONS: Brand[] = Array.from(new Set(SNEAKERS_DATA.map((sneaker) => sneaker.brand))).sort(
  (leftBrand, rightBrand) => leftBrand.localeCompare(rightBrand, 'es'),
);

function formatPrice(price: number): string {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

function buildWhatsAppUrl(sneaker: Sneaker): string {
  const message = [
    '¡Hola Shockers! ⚡️🔥',
    '',
    'Me interesa conseguir el siguiente par:',
    `👟 *Modelo:* ${sneaker.name}`,
    `🏷️ *Marca:* ${sneaker.brand}`,
    '',
    '¿Tienen disponibilidad actual y qué tallas manejan? 🙌📦',
  ].join('\n');

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function normalizeSilhouette(silhouette: string): string {
  if (silhouette.startsWith('Air Max') || silhouette.startsWith('Shox TL')) return 'Air Max';
  if (silhouette.startsWith('Dunk')) return 'Dunk';
  if (silhouette.startsWith('Air Jordan 1')) return 'Jordan 1';
  if (silhouette.startsWith('Air Jordan 3')) return 'Jordan 3';
  if (silhouette.startsWith('Air More Uptempo')) return 'Uptempo';
  return silhouette;
}

function ProductCard({ sneaker, onSelect }: { sneaker: Sneaker; onSelect: (sneaker: Sneaker) => void }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-zinc-200 bg-white shadow-[0_18px_40px_rgba(24,24,27,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(24,24,27,0.14)]">
      <div className="relative w-full aspect-square overflow-hidden bg-gray-100">
        <img
          src={sneaker.image}
          alt={sneaker.name}
          className="h-full w-full object-cover object-center transform-gpu transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {sneaker.isFeatured && (
          <span className="absolute left-4 top-4 rounded-full bg-zinc-950 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
            Destacado
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-zinc-500">
            {normalizeSilhouette(sneaker.silhouette)}
          </p>
          <h3 className="mt-2 text-lg font-black leading-tight tracking-tight text-zinc-950">
            {sneaker.name}
          </h3>
          <p className="mt-2 text-sm font-medium text-zinc-500">{sneaker.brand}</p>
        </div>

        <div className="mt-auto flex items-center justify-between gap-3">
          <span className="text-lg font-black text-zinc-900">{formatPrice(sneaker.price)}</span>
          <a
            href="#product-detail"
            onClick={() => onSelect(sneaker)}
            className="inline-flex items-center justify-center rounded-full bg-zinc-950 px-4 py-2.5 text-xs font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-zinc-900/20"
          >
            Ver par
          </a>
        </div>
      </div>
    </article>
  );
}

interface CatalogGridProps {
  selectedProduct: Sneaker | null;
  onProductSelect: (sneaker: Sneaker) => void;
  onProductClear: () => void;
}

function ProductDetail({ sneaker, onBack }: { sneaker: Sneaker; onBack: () => void }) {
  return (
    <section id="product-detail" className="mx-auto max-w-5xl scroll-mt-28">
      <button
        type="button"
        onClick={onBack}
        className="mb-5 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-4 py-2 text-sm font-semibold text-zinc-700 transition-all hover:-translate-x-0.5 hover:bg-white hover:text-zinc-950"
      >
        <span aria-hidden="true">←</span>
        Volver al catálogo
      </button>

      <article className="overflow-hidden rounded-[30px] border border-zinc-200 bg-white shadow-[0_24px_60px_rgba(24,24,27,0.12)]">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex min-h-[360px] items-center justify-center bg-gradient-to-br from-zinc-100 via-white to-zinc-200 p-8 sm:min-h-[520px] sm:p-12">
            <img src={sneaker.image} alt={sneaker.name} className="max-h-[440px] w-full object-contain" />
          </div>

          <div className="flex flex-col justify-center gap-7 p-7 sm:p-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-zinc-500">{sneaker.brand}</p>
              <h1 className="mt-3 text-3xl font-black leading-tight tracking-tight text-zinc-950 sm:text-4xl">
                {sneaker.name}
              </h1>
              <p className="mt-3 text-base font-medium text-zinc-500">Silueta: {normalizeSilhouette(sneaker.silhouette)}</p>
            </div>

            <div className="border-y border-zinc-200 py-5">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-zinc-500">Precio</p>
              <p className="mt-2 text-3xl font-black text-zinc-950">{formatPrice(sneaker.price)}</p>
            </div>

            <p className="text-sm leading-6 text-zinc-600">
              Consulta disponibilidad y tallas directamente con nuestro equipo. Te ayudaremos a confirmar el par antes de comprar.
            </p>

            <a
              href={buildWhatsAppUrl(sneaker)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-zinc-950 px-6 py-4 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-zinc-900/20"
            >
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </article>
    </section>
  );
}

export default function CatalogGrid({ selectedProduct, onProductSelect, onProductClear }: CatalogGridProps) {
  const [selectedBrand, setSelectedBrand] = useState<'Todas' | Brand>('Todas');
  const [selectedSilhouette, setSelectedSilhouette] = useState('Todas');

  const silhouettes = useMemo(() => {
    if (selectedBrand === 'Todas') return [];

    return [
      'Todas',
      ...Array.from(
        new Set(
          SNEAKERS_DATA.filter((sneaker) => sneaker.brand === selectedBrand).map(
            (sneaker) => normalizeSilhouette(sneaker.silhouette),
          ),
        ),
      ).sort((leftSilhouette, rightSilhouette) => leftSilhouette.localeCompare(rightSilhouette, 'es')),
    ];
  }, [selectedBrand]);

  const visibleSneakers = useMemo(() => {
    if (selectedBrand === 'Todas') {
      return SNEAKERS_DATA
        .filter((sneaker) => sneaker.isFeatured)
        .sort((leftSneaker, rightSneaker) => leftSneaker.name.localeCompare(rightSneaker.name, 'es'));
    }

    return SNEAKERS_DATA
      .filter(
        (sneaker) =>
          sneaker.brand === selectedBrand &&
          (selectedSilhouette === 'Todas' || normalizeSilhouette(sneaker.silhouette) === selectedSilhouette),
      )
      .sort((leftSneaker, rightSneaker) => leftSneaker.name.localeCompare(rightSneaker.name, 'es'));
  }, [selectedBrand, selectedSilhouette]);

  const handleBrandChange = (brand: 'Todas' | Brand) => {
    setSelectedBrand(brand);
    setSelectedSilhouette('Todas');
  };

  return (
    <section className="mx-auto w-full max-w-7xl">
      {selectedProduct ? <ProductDetail sneaker={selectedProduct} onBack={onProductClear} /> : null}

      {selectedProduct ? null : (
        <>
      <div className="mb-5 flex overflow-x-auto whitespace-nowrap scrollbar-none gap-2 rounded-full border border-zinc-200 bg-white/80 p-2 shadow-sm backdrop-blur-sm md:justify-center md:overflow-visible">
        {BRAND_OPTIONS.map((brand) => (
          <button
            key={brand}
            type="button"
            onClick={() => handleBrandChange(brand)}
            className={[
              'flex-shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200',
              selectedBrand === brand
                ? 'bg-zinc-950 text-white shadow-lg shadow-zinc-900/20'
                : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900',
            ].join(' ')}
          >
            {brand}
          </button>
        ))}
      </div>

      {selectedBrand !== 'Todas' && (
        <div className="mb-8 flex overflow-x-auto whitespace-nowrap scrollbar-none gap-2 rounded-full border border-zinc-200 bg-zinc-100/80 p-2 md:justify-center md:overflow-visible">
          {silhouettes.map((silhouette) => (
            <button
              key={silhouette}
              type="button"
              onClick={() => setSelectedSilhouette(silhouette)}
              className={[
                'flex-shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200',
                selectedSilhouette === silhouette
                  ? 'bg-zinc-950 text-white shadow-lg shadow-zinc-900/20'
                  : 'text-zinc-600 hover:bg-white hover:text-zinc-900',
              ].join(' ')}
            >
              {silhouette}
            </button>
          ))}
        </div>
      )}

      <div className="mb-6 flex items-end justify-between gap-4 border-b border-zinc-200 pb-4">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-zinc-500">
            {selectedBrand === 'Todas' ? 'Selección Shockers' : selectedBrand}
          </p>
          <h2 className="mt-1 text-2xl font-black tracking-tight text-zinc-950">
            {selectedBrand === 'Todas' ? '🔥 Destacados' : selectedSilhouette === 'Todas' ? selectedBrand : selectedSilhouette}
          </h2>
        </div>
        <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-600">
          {visibleSneakers.length} pares
        </span>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visibleSneakers.map((sneaker) => (
          <ProductCard key={sneaker.id} sneaker={sneaker} onSelect={onProductSelect} />
        ))}
      </div>
        </>
      )}
    </section>
  );
}
