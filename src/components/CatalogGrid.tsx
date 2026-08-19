import { useMemo, useState } from 'react';
import { SNEAKERS_DATA } from '../data/sneakers';
import type { Brand, Sneaker } from '../types/sneaker';

const WHATSAPP_NUMBER = '573203634494';
const BRAND_OPTIONS: Array<'Todas' | Brand> = [
  'Todas',
  'Nike',
  'Adidas',
  'Bape',
  'New Balance',
  'Asics',
  'Jordan',
  'LV',
  'Puma',
  'Vans',
];

function formatPrice(price: number): string {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

function buildWhatsAppUrl(sneaker: Sneaker): string {
  const message = `Hola Shockers ⚡️, me interesa conseguir el modelo ${sneaker.name} - ${sneaker.brand}. ¿Tienen disponibilidad y en qué tallas?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function ProductCard({ sneaker }: { sneaker: Sneaker }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-zinc-200 bg-white shadow-[0_18px_40px_rgba(24,24,27,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(24,24,27,0.14)]">
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-zinc-100 via-white to-zinc-200 p-5">
        <img
          src={sneaker.image}
          alt={sneaker.name}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
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
            {sneaker.silhouette}
          </p>
          <h3 className="mt-2 text-lg font-black leading-tight tracking-tight text-zinc-950">
            {sneaker.name}
          </h3>
          <p className="mt-2 text-sm font-medium text-zinc-500">{sneaker.brand}</p>
        </div>

        <div className="mt-auto flex items-center justify-between gap-3">
          <span className="text-lg font-black text-zinc-900">{formatPrice(sneaker.price)}</span>
          <a
            href={buildWhatsAppUrl(sneaker)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-zinc-950 px-4 py-2.5 text-xs font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-zinc-900/20"
          >
            Lo quiero
          </a>
        </div>
      </div>
    </article>
  );
}

export default function CatalogGrid() {
  const [selectedBrand, setSelectedBrand] = useState<'Todas' | Brand>('Todas');
  const [selectedSilhouette, setSelectedSilhouette] = useState('Todas');

  const silhouettes = useMemo(() => {
    if (selectedBrand === 'Todas') return [];

    return [
      'Todas',
      ...Array.from(
        new Set(
          SNEAKERS_DATA.filter((sneaker) => sneaker.brand === selectedBrand).map(
            (sneaker) => sneaker.silhouette,
          ),
        ),
      ),
    ];
  }, [selectedBrand]);

  const visibleSneakers = useMemo(() => {
    if (selectedBrand === 'Todas') {
      return SNEAKERS_DATA.filter((sneaker) => sneaker.isFeatured);
    }

    return SNEAKERS_DATA.filter(
      (sneaker) =>
        sneaker.brand === selectedBrand &&
        (selectedSilhouette === 'Todas' || sneaker.silhouette === selectedSilhouette),
    );
  }, [selectedBrand, selectedSilhouette]);

  const handleBrandChange = (brand: 'Todas' | Brand) => {
    setSelectedBrand(brand);
    setSelectedSilhouette('Todas');
  };

  return (
    <section className="mx-auto w-full max-w-7xl">
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
          <ProductCard key={sneaker.id} sneaker={sneaker} />
        ))}
      </div>
    </section>
  );
}
