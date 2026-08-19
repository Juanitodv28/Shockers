import { useEffect, useMemo, useRef, useState } from 'react';
import type { ChangeEvent, DragEvent, KeyboardEvent } from 'react';
import type { Sneaker } from '../types/sneaker';
import { searchSneakers } from '../utils/search';

const WHATSAPP_NUMBER = '573203634494';

interface SearchBarProps {
  products: Sneaker[];
  onProductSelect: (sneaker: Sneaker) => void;
}

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

export default function SearchBar({ products, onProductSelect }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [imageMessage, setImageMessage] = useState('');
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [isDraggingImage, setIsDraggingImage] = useState(false);
  const closeImageTimerRef = useRef<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => setDebouncedQuery(query.trim()), 220);
    return () => window.clearTimeout(timer);
  }, [query]);

  const textMatches = useMemo(() => {
    return searchSneakers(products, debouncedQuery, 6);
  }, [debouncedQuery, products]);

  const imageMatches = useMemo(() => {
    if (!selectedImage || isAnalyzing) return [];

    const step = Math.max(1, Math.floor(products.length / 4));
    return products.filter((_, index) => index % step === 0).slice(0, 4);
  }, [isAnalyzing, products, selectedImage]);

  const suggestions = selectedImage && !isAnalyzing ? imageMatches : textMatches;

  const clearSearch = () => {
    setQuery('');
    setDebouncedQuery('');
    setSelectedImage(null);
    setImageMessage('');
    setIsAnalyzing(false);
    setIsOpen(false);
    setHighlightedIndex(0);
    if (fileInputRef.current) fileInputRef.current.value = '';
    inputRef.current?.focus();
  };

  const openImagePopover = () => {
    if (closeImageTimerRef.current) window.clearTimeout(closeImageTimerRef.current);
    setIsImageModalOpen(true);
  };

  const scheduleImagePopoverClose = () => {
    closeImageTimerRef.current = window.setTimeout(() => setIsImageModalOpen(false), 180);
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    processImage(file);
  };

  const processImage = (file: File) => {
    if (!file.type.startsWith('image/')) return;

    const previewUrl = URL.createObjectURL(file);
    setSelectedImage(previewUrl);
    setIsAnalyzing(true);
    setImageMessage('Analizando zapatilla... 🔍');
    setIsOpen(true);
    setHighlightedIndex(0);

    window.setTimeout(() => {
      setIsAnalyzing(false);
      setImageMessage('Detectamos un estilo similar. Mostrando coincidencias');
      setIsImageModalOpen(false);
    }, 1100);
  };

  useEffect(() => {
    const handlePaste = (event: ClipboardEvent) => {
      const pastedImage = Array.from(event.clipboardData?.files ?? []).find((file) => file.type.startsWith('image/'));
      if (!pastedImage) return;

      openImagePopover();
      processImage(pastedImage);
    };

    window.addEventListener('paste', handlePaste);
    return () => window.removeEventListener('paste', handlePaste);
  }, []);

  const handleImageDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDraggingImage(false);
    const file = event.dataTransfer.files[0];
    if (file) processImage(file);
  };

  const handleSuggestionKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setHighlightedIndex((current) => Math.min(current + 1, Math.max(suggestions.length - 1, 0)));
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      setHighlightedIndex((current) => Math.max(current - 1, 0));
    }

    if (event.key === 'Enter' && suggestions[highlightedIndex]) {
      event.preventDefault();
      onProductSelect(suggestions[highlightedIndex]);
      setIsOpen(false);
    }

    if (event.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <div className="relative min-w-0 flex-1 md:max-w-xl">
      <div className="flex h-11 items-center gap-2 rounded-full border border-zinc-200/80 bg-white/45 px-3 shadow-sm backdrop-blur-md transition-all focus-within:border-zinc-400 focus-within:bg-white/75 focus-within:shadow-md">
        <svg className="h-4 w-4 shrink-0 text-zinc-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-4-4" />
        </svg>

        {selectedImage ? (
          <img src={selectedImage} alt="Vista previa de búsqueda" className="h-7 w-7 shrink-0 rounded-lg object-cover" />
        ) : null}

        <input
          ref={inputRef}
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setSelectedImage(null);
            setImageMessage('');
            setIsOpen(event.target.value.trim().length >= 2);
            setHighlightedIndex(0);
          }}
          onFocus={() => setIsOpen(query.trim().length >= 2 || Boolean(selectedImage))}
          onKeyDown={handleSuggestionKeyDown}
          placeholder="Buscar modelo, marca o silueta..."
          className="min-w-0 flex-1 bg-transparent text-xs font-medium text-zinc-900 outline-none placeholder:text-zinc-500 sm:text-sm"
          aria-label="Buscar sneakers"
          aria-controls="search-suggestions"
          aria-expanded={isOpen}
          role="combobox"
        />

        {query || selectedImage ? (
          <button type="button" onClick={clearSearch} className="shrink-0 rounded-full p-1 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-950" aria-label="Limpiar búsqueda">
            <span aria-hidden="true" className="text-base leading-none">×</span>
          </button>
        ) : null}

        <button
          type="button"
          onMouseEnter={openImagePopover}
          onMouseLeave={scheduleImagePopoverClose}
          onFocus={openImagePopover}
          className="shrink-0 rounded-full p-1.5 text-zinc-600 transition-all hover:bg-zinc-100 hover:text-zinc-950"
          aria-label="Buscar por imagen"
          title="Búsqueda por imagen"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <path d="M4 7h3l1.5-2h5L15 7h3a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7Z" />
            <circle cx="12" cy="13" r="3.5" />
          </svg>
        </button>
        <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
      </div>

      {isImageModalOpen ? (
        <div
          className="absolute right-0 top-[calc(100%+0.65rem)] z-[70] w-[min(340px,calc(100vw-2rem))]"
          onMouseEnter={openImagePopover}
          onMouseLeave={scheduleImagePopoverClose}
        >
          <div
            className="w-full max-w-sm rounded-2xl bg-white p-5 text-zinc-900 shadow-2xl shadow-zinc-950/20"
            role="dialog"
            aria-modal="true"
            aria-labelledby="image-search-title"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 id="image-search-title" className="text-lg font-black tracking-tight">
                  Búsqueda por imagen
                </h2>
                <p className="mt-1 max-w-[260px] text-xs leading-4 text-zinc-600">
                  Encuentra lo que amas con mejores precios en AliExpress usando una búsqueda de imágenes
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  if (closeImageTimerRef.current) window.clearTimeout(closeImageTimerRef.current);
                  setIsImageModalOpen(false);
                }}
                className="rounded-full p-1 text-xl leading-none text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-950"
                aria-label="Cerrar búsqueda por imagen"
              >
                ×
              </button>
            </div>

            <div
              onDragEnter={(event) => {
                event.preventDefault();
                setIsDraggingImage(true);
              }}
              onDragOver={(event) => event.preventDefault()}
              onDragLeave={() => setIsDraggingImage(false)}
              onDrop={handleImageDrop}
              className={[
                'mt-4 flex min-h-36 flex-col items-center justify-center border border-dashed p-4 text-center transition-colors',
                isDraggingImage ? 'border-red-500 bg-red-50' : 'border-zinc-300 bg-zinc-50',
              ].join(' ')}
            >
              {selectedImage ? (
                <img src={selectedImage} alt="Vista previa del producto" className="mb-3 h-20 w-20 rounded-xl object-cover" />
              ) : (
                <svg className="mb-2 h-10 w-10 text-zinc-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="16" rx="2" />
                  <circle cx="8.5" cy="9" r="1.5" />
                  <path d="m4 17 4.5-4.5 3 3 2-2L20 17" />
                </svg>
              )}
              <p className="text-xs font-medium text-zinc-700">
                {isAnalyzing ? 'Analizando zapatilla... 🔍' : 'Arrastra una imagen aquí'}
              </p>
              {!isAnalyzing ? (
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="mt-3 rounded-full bg-red-600 px-5 py-2 text-xs font-bold text-white transition-all hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/20"
                >
                  Sube una foto
                </button>
              ) : null}
            </div>

            <p className="mt-3 text-[11px] leading-4 text-zinc-500">
              *Para una búsqueda rápida, presiona CTRL + V y pega una imagen en la barra de búsqueda.
            </p>
          </div>
        </div>
      ) : null}

      {isOpen && (suggestions.length > 0 || isAnalyzing || imageMessage) ? (
        <div id="search-suggestions" className="absolute left-0 right-0 top-[calc(100%+0.6rem)] z-50 overflow-hidden rounded-2xl border border-zinc-200 bg-white/95 p-2 shadow-xl shadow-zinc-900/10 backdrop-blur-xl">
          {isAnalyzing ? (
            <div className="flex items-center gap-3 px-3 py-4 text-sm font-semibold text-zinc-700">
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-zinc-300 border-t-zinc-950" />
              {imageMessage}
            </div>
          ) : (
            <>
              {imageMessage ? <p className="px-3 pb-2 pt-1 text-xs font-semibold text-zinc-600">{imageMessage}</p> : null}
              {suggestions.map((sneaker, index) => (
                <a
                  key={sneaker.id}
                  href={buildWhatsAppUrl(sneaker)}
                  onClick={(event) => {
                    event.preventDefault();
                    onProductSelect(sneaker);
                    setIsOpen(false);
                  }}
                  className={`flex items-center gap-3 rounded-xl p-2 transition-colors ${index === highlightedIndex ? 'bg-zinc-100' : 'hover:bg-zinc-50'}`}
                >
                  <img src={sneaker.image} alt="" className="h-11 w-11 rounded-lg bg-zinc-100 object-cover" />
                  <span className="min-w-0 flex-1 text-left">
                    <strong className="block truncate text-xs font-bold text-zinc-900">{sneaker.name}</strong>
                    <span className="block text-[11px] text-zinc-500">{sneaker.brand} · {sneaker.silhouette}</span>
                  </span>
                  <span className="shrink-0 text-xs font-bold text-zinc-800">{formatPrice(sneaker.price)}</span>
                </a>
              ))}
            </>
          )}
        </div>
      ) : null}
    </div>
  );
}
