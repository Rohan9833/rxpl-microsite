import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import { Icon } from './icons.jsx';
import { Nav, Hero, HowItWorks, Scoring } from './sections1.jsx';
import { Tournament, AppShowcase, Approval } from './sections2.jsx';
import { Dashboard, Benefits, Demo, Footer } from './sections3.jsx';
import { DesignSystem } from './design.jsx';


function Site() {
  return (
    <div className="site-root">
      <Nav />
      <main>
        <Hero /><HowItWorks /><Scoring /><Tournament /><AppShowcase /><Approval /><Dashboard /><Benefits /><Demo />
      </main>
      <Footer />
    </div>
  );
}

const DEVICES = [
  ['desktop', 'Desktop', 'monitor'],
  ['tablet', 'Tablet', 'tablet'],
  ['mobile', 'Mobile', 'phone'],
];

function readHash() {
  const h = (location.hash || '').replace('#', '');
  return ['desktop', 'tablet', 'mobile', 'design-system'].includes(h) ? h : 'desktop';
}

function App() {
  const [view, setView] = useState(readHash());
  const [wide, setWide] = useState(window.innerWidth >= 900);
  useEffect(() => {
    const r = () => setWide(window.innerWidth >= 900);
    const h = () => setView(readHash());
    window.addEventListener('resize', r); window.addEventListener('hashchange', h);
    return () => { window.removeEventListener('resize', r); window.removeEventListener('hashchange', h); };
  }, []);
  const choose = (v) => { setView(v); try { history.replaceState(null, '', `#${v}`); } catch (e) { /* hash not available */ } window.scrollTo(0, 0); };
  const device = !wide && view !== 'design-system' ? 'desktop' : view;

  return (
    <div className="min-h-full">
      {/* <div className="flex h-14 items-center gap-3 border-b border-ink/10 bg-white px-4">
        <div className="flex min-w-0 items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-royal to-magenta text-white"><Icon name="palette" className="h-4 w-4" /></span>
          <span className="truncate font-display text-[14px] font-extrabold text-ink">RxPL microsite <span className="hidden font-semibold text-muted sm:inline">· design prototype</span></span>
        </div>
        <div className="ml-auto flex items-center gap-2">
          {wide && (
            <div className="flex rounded-full bg-lavender p-1" role="tablist" aria-label="Preview size">
              {DEVICES.map(([v, label, ic]) => (
                <button key={v} role="tab" aria-selected={device === v} onClick={() => choose(v)}
                  className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[13px] font-bold transition ${device === v ? 'bg-white text-ink shadow' : 'text-muted hover:text-ink'}`}>
                  <Icon name={ic} className="h-4 w-4" />{label}
                </button>
              ))}
            </div>
          )}
          {!wide && (
            <button onClick={() => choose('desktop')} aria-pressed={device !== 'design-system'} className={`rounded-full px-3.5 py-1.5 text-[13px] font-bold ${device !== 'design-system' ? 'bg-ink text-white' : 'text-muted'}`}>Site</button>
          )}
          <button onClick={() => choose('design-system')} aria-pressed={device === 'design-system'}
            className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[13px] font-bold transition ${device === 'design-system' ? 'bg-ink text-white' : 'border border-ink/15 text-ink hover:bg-ink/5'}`}>
            <Icon name="palette" className="h-4 w-4" />Design system
          </button>
        </div>
      </div> */}

      {device === 'desktop' && <Site />}
      {device === 'design-system' && <DesignSystem />}
      {(device === 'tablet' || device === 'mobile') && (
        <div className="flex justify-center bg-[#E9E3F2] px-4 py-6" style={{ minHeight: 'calc(100vh - 56px)' }}>
          <div className={`shrink-0 bg-[#16121f] shadow-[0_40px_80px_-30px_rgba(20,8,50,.6)] ${device === 'mobile' ? 'rounded-[54px] p-3' : 'rounded-[36px] p-4'}`}>
            <div className={`hide-scroll overflow-y-auto overflow-x-hidden bg-night ${device === 'mobile' ? 'rounded-[42px]' : 'rounded-[22px]'}`}
              style={{ width: device === 'mobile' ? 390 : 834, height: `min(${device === 'mobile' ? 844 : 1112}px, calc(100vh - 56px - 48px - ${device === 'mobile' ? 24 : 32}px))` }}>
              <Site />
            </div>
          </div>
          <div className="ml-6 hidden max-w-[220px] self-center text-[13px] leading-relaxed text-muted xl:block">
            <div className="font-display text-[15px] font-extrabold text-ink">{device === 'mobile' ? 'Mobile · 390px' : 'Tablet · 834px'}</div>
            Scroll inside the {device === 'mobile' ? 'phone' : 'tablet'}. The layout is composed for this width, not scaled down.
          </div>
        </div>
      )}
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
