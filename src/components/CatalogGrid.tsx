import { useMemo, useState } from 'react';
import { SNEAKERS_DATA } from '../data/sneakers';
import type { SneakerBrand, SneakerColorway, SneakerModel } from '../types/sneaker';

const WHATSAPP_NUMBER = '573203634494';

const BRAND_ORDER: SneakerBrand[] = ['NIKE', 'ADIDAS', 'JORDAN', 'PUMA', 'NEW BALANCE', 'YEEZY'];
const FILTER_OPTIONS = ['Todas', ...BRAND_ORDER] as const;
type FilterOption = (typeof FILTER_OPTIONS)[number];

const BRAND_LABELS: Record<SneakerBrand, string> = {
  NIKE: 'Nike',
  ADIDAS: 'Adidas',
  JORDAN: 'Jordan',
  PUMA: 'Puma',
  'NEW BALANCE': 'New Balance',
  YEEZY: 'Yeezy',
};

function formatPrice(price: number): string {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

function buildWhatsAppUrl(model: SneakerModel, selectedColorway: SneakerColorway): string {
  const message = `Hola Shockers ⚡️, me interesa conseguir las zapatillas ${model.name} - Ref: ${selectedColorway.reference} en el colorway ${selectedColorway.name}. ¿Tienen disponibilidad y en qué tallas?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export default function CatalogGrid() {
  const [selectedBrand, setSelectedBrand] = useState<FilterOption>('Todas');
  const [selectedColorways, setSelectedColorways] = useState<Record<number, string>>(() =>
    Object.fromEntries(SNEAKERS_DATA.map((model) => [model.id, model.colorways[0]?.id ?? ''])),
  );

  const groupedModels = useMemo(() => {
    return BRAND_ORDER.map((brand) => ({
      brand,
      models: SNEAKERS_DATA.filter((model) => model.brand === brand),
    })).filter((group) => group.models.length > 0);
  }, []);

  const filteredGroups = useMemo(() => {
    if (selectedBrand === 'Todas') return groupedModels;
    return groupedModels.filter((group) => group.brand === selectedBrand);
  }, [groupedModels, selectedBrand]);

  const handleColorwayChange = (modelId: number, colorwayId: string) => {
    setSelectedColorways((prev) => ({ ...prev, [modelId]: colorwayId }));
  };

  const handleBrandClick = (brand: FilterOption) => {
    setSelectedBrand(brand);

    if (brand === 'Todas') return;

    const section = document.getElementById(`brand-${brand}`);
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="mx-auto w-full max-w-7xl">
      <div className="mb-8 flex overflow-x-auto whitespace-nowrap scrollbar-none gap-2 rounded-full border border-zinc-200 bg-white/80 p-2 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md md:justify-center md:overflow-visible">
        {FILTER_OPTIONS.map((brand) => {
            const isActive = selectedBrand === brand;

            return (
              <button
                key={brand}
                type="button"
                onClick={() => handleBrandClick(brand)}
                className={[
                  'flex-shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200',
                  isActive
                    ? 'bg-zinc-950 text-white shadow-lg shadow-zinc-900/20'
                    : 'bg-transparent text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900',
                ].join(' ')}
              >
                {brand}
              </button>
            );
        })}
      </div>

      <div className="space-y-12">
        {filteredGroups.map(({ brand, models }) => (
          <div id={`brand-${brand}`} key={brand} className="space-y-6 scroll-mt-28">
            <div className="flex items-center justify-between gap-3 border-b border-zinc-200 pb-3">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-zinc-500">
                  Marca
                </p>
                <h2 className="mt-1 text-2xl font-black tracking-tight text-zinc-950">
                  {BRAND_LABELS[brand]}
                </h2>
              </div>
              <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-600">
                {models.length} siluetas
              </span>
            </div>

            <div className="space-y-6">
              {models.map((model) => {
                const selectedColorwayId = selectedColorways[model.id] ?? model.colorways[0]?.id ?? '';
                const selectedColorway =
                  model.colorways.find((colorway) => colorway.id === selectedColorwayId) ?? model.colorways[0];

                if (!selectedColorway) return null;

                return (
                  <article
                    key={model.id}
                    className="overflow-hidden rounded-[28px] border border-zinc-200 bg-white shadow-[0_18px_40px_rgba(24,24,27,0.08)]"
                  >
                    <div className="flex items-center justify-between gap-4 border-b border-zinc-200 bg-zinc-50 px-5 py-4">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-zinc-500">
                          {model.silhouette}
                        </p>
                        <h3 className="mt-1 text-xl font-black tracking-tight text-zinc-950">
                          {model.name}
                        </h3>
                      </div>

                      <span className="text-lg font-black text-zinc-900">
                        {formatPrice(model.basePrice)}
                      </span>
                    </div>

                    <div className="grid gap-5 p-5 lg:grid-cols-[1.1fr_1.4fr]">
                      <div className="relative flex min-h-[260px] items-center justify-center overflow-hidden rounded-[22px] bg-gradient-to-br from-zinc-100 via-white to-zinc-200 p-4">
                        <img
                          src={selectedColorway.image}
                          alt={`${model.name} en ${selectedColorway.name}`}
                          className="max-h-[260px] w-full object-contain"
                          loading="lazy"
                        />
                      </div>

                      <div className="flex flex-col justify-between gap-5">
                        <div className="space-y-4">
                          <div className="flex flex-wrap gap-2">
                            {model.colorways.map((colorway) => {
                              const isSelected = selectedColorway.id === colorway.id;

                              return (
                                <button
                                  key={colorway.id}
                                  type="button"
                                  onClick={() => handleColorwayChange(model.id, colorway.id)}
                                  className={[
                                    'flex items-center gap-2 rounded-full border px-2.5 py-2 text-xs font-medium transition-all duration-200',
                                    isSelected
                                      ? 'border-zinc-950 bg-zinc-950 text-white shadow-lg shadow-zinc-900/20'
                                      : 'border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300',
                                  ].join(' ')}
                                  aria-label={`Seleccionar colorway ${colorway.name}`}
                                >
                                  <img
                                    src={colorway.image}
                                    alt={colorway.name}
                                    className="h-8 w-8 rounded-full border border-black/10 object-cover"
                                  />
                                  {colorway.name}
                                </button>
                              );
                            })}
                          </div>

                          <div className="rounded-2xl bg-zinc-100 p-3">
                            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-zinc-500">
                              Colorway seleccionado
                            </p>
                            <p className="mt-2 text-lg font-black text-zinc-950">{selectedColorway.name}</p>
                            <p className="mt-1 text-sm text-zinc-600">Ref: {selectedColorway.reference}</p>
                          </div>

                        </div>

                        <a
                          href={buildWhatsAppUrl(model, selectedColorway)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#111111] to-[#3a3a3a] px-5 py-3 text-sm font-bold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-zinc-900/20"
                        >
                          Lo quiero
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
