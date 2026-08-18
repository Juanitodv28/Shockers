import { useEffect, useState } from 'react';
import CatalogGrid from './components/CatalogGrid';

function ShockersLogo({ compact = false }: { compact?: boolean }) {
  return (
    <img
      src="/S.png"
      alt="Shockers logo"
      className={compact ? 'h-12 w-auto object-contain sm:h-16' : 'h-24 w-auto object-contain sm:h-32'}
      style={{ display: 'block', background: 'transparent' }}
    />
  );
}

function CustomOrderBlock({ active, pulseKey }: { active: boolean; pulseKey: number }) {
  return (
    <div
      key={`custom-pulse-${pulseKey}`}
      id="custom"
      className={[
        'mb-10 overflow-hidden rounded-[28px] border border-zinc-200 bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-800 p-6 text-white shadow-xl shadow-zinc-900/10 transition-all duration-500 ease-out',
        active ? 'shadow-zinc-900/25 md:p-8' : 'md:p-7',
      ].join(' ')}
      style={{
        transformOrigin: 'center center',
        animation: active ? 'customZoom 0.7s cubic-bezier(0.22, 1, 0.36, 1) both' : 'none',
      }}
    >
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-zinc-300">
            Pedido especial
          </p>
          <h2 className="text-2xl font-black tracking-tight md:text-3xl">
            ⚡️ ¿Buscas un modelo o colorway que no ves aquí? Traemos cualquier par sobre pedido. ¡Escríbenos directamente!
          </h2>
        </div>

        <a
          href="https://wa.me/573203634494?text=Hola%20Shockers%20%E2%9A%A1%EF%B8%8F%2C%20me%20interesa%20un%20modelo%20o%20colorway%20que%20no%20veo%20aqu%C3%AD.%20%C2%BFPueden%20tra%C3%A9rmelo%20bajo%20pedido%3F"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-bold text-zinc-900 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/20"
        >
          Pedir por WhatsApp
        </a>
      </div>
    </div>
  );
}

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('catalogo');
  const [customPulseKey, setCustomPulseKey] = useState(0);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const targetSections = ['brand-NIKE', 'custom', 'nosotros'];
    const sectionNodes = targetSections
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!sectionNodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActiveSection(visible.target.id === 'brand-NIKE' ? 'catalogo' : visible.target.id);
        }
      },
      {
        rootMargin: '-15% 0px -50% 0px',
        threshold: [0.2, 0.45, 0.7],
      },
    );

    sectionNodes.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (!target) return;

    if (id === 'custom') {
      setCustomPulseKey((prev) => prev + 1);
    }

    setActiveSection(id === 'brand-NIKE' ? 'catalogo' : id);
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const navLinkClass = (id: string) =>
    [
      'text-sm font-medium transition-all duration-200 hover:translate-y-[-1px]',
      activeSection === (id === 'brand-NIKE' ? 'catalogo' : id)
        ? 'text-zinc-950'
        : 'text-zinc-600 hover:text-zinc-950',
    ].join(' ');

  return (
    <div className="min-h-screen bg-[#f5f5f3] text-zinc-900">
      <header
        className={[
          'fixed inset-x-0 top-0 z-40 border-b border-zinc-200/80 transition-all duration-300',
          isScrolled ? 'bg-white/60 shadow-[0_10px_30px_rgba(24,24,27,0.05)] backdrop-blur-xl' : 'bg-[#f5f5f3]/80 backdrop-blur-md',
        ].join(' ')}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => scrollToSection('brand-NIKE')}
            className="flex items-center transition-transform duration-200 hover:scale-[1.02]"
            aria-label="Shockers home"
          >
            <ShockersLogo compact />
          </button>

          <div className="hidden items-center gap-8 md:flex">
            <button type="button" onClick={() => scrollToSection('brand-NIKE')} className={navLinkClass('brand-NIKE')}>
              Catálogo
            </button>
            <button type="button" onClick={() => scrollToSection('custom')} className={navLinkClass('custom')}>
              Personalizados
            </button>
            <button type="button" onClick={() => scrollToSection('nosotros')} className={navLinkClass('nosotros')}>
              Nosotros
            </button>
            <a
              href="https://wa.me/573203634494?text=Hola%20Shockers%20%E2%9A%A1%EF%B8%8F%2C%20quiero%20hacer%20una%20consulta."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-zinc-950 px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-zinc-900/20"
            >
              Escríbenos
            </a>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-7xl px-4 pb-8 pt-24 sm:px-6 lg:px-8 lg:pt-28">
        <section id="catalogo" className="scroll-mt-28">
          <CustomOrderBlock active={activeSection === 'custom'} pulseKey={customPulseKey} />
          <CatalogGrid />
        </section>
      </main>

      <footer id="nosotros" className="border-t border-zinc-200 bg-[#efefec]">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex items-center gap-4">
            <ShockersLogo compact />
          </div>

          <div className="flex flex-col gap-3 text-sm text-zinc-600 sm:flex-row sm:items-center sm:gap-8">
            <button type="button" onClick={() => scrollToSection('brand-NIKE')} className="transition-colors hover:text-zinc-900">
              Catálogo
            </button>
            <button type="button" onClick={() => scrollToSection('custom')} className="transition-colors hover:text-zinc-900">
              Personalizados
            </button>
            <a
              href="https://wa.me/573203634494?text=Hola%20Shockers%20%E2%9A%A1%EF%B8%8F%2C%20quiero%20hacer%20una%20consulta."
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-zinc-900"
            >
              +57 320 3634494
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
