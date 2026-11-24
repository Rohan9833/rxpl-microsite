import { Icon } from './icons.jsx';
import { TEAMS } from './data.js';

export const LOGO = '/assets/rxpl-logo.png';

export function LogoPlate({ className = 'h-11', plate = 'bg-white' }) {
  return (
    <span className={`inline-flex items-center rounded-xl ${plate} px-2.5 py-1 shadow-[0_6px_20px_-8px_rgba(20,8,50,.5)]`}>
      <img src={LOGO} alt="RxPL — Rxns • Players • Leaders" className={`${className} w-auto`} />
    </span>
  );
}

export function Phone({ src, alt, className = '', style }) {
  return (
    <div className={`phone ${className}`} style={style}>
      <img src={src} alt={alt} />
    </div>
  );
}

export function Crest({ t, size = 34 }) {
  const team = TEAMS[t];
  if (!team) return (
    <span className="inline-grid shrink-0 place-items-center rounded-lg border border-dashed text-[10px] font-bold opacity-60" style={{ width: size, height: size, borderColor: 'currentColor' }}>TBD</span>
  );
  const id = `cg-${t}`;
  return (
    <svg viewBox="0 0 40 44" width={size} height={size * 1.1} aria-hidden="true" className="shrink-0">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={team.c1} />
          <stop offset="1" stopColor={team.c1} stopOpacity=".72" />
        </linearGradient>
      </defs>
      <path d="M20 1.5 37 7v14c0 10.2-7.2 18-17 21.5C10.2 39 3 31.2 3 21V7z" fill={`url(#${id})`} stroke={team.c2} strokeWidth="2" />
      <path d="M3.5 15h33" stroke={team.c2} strokeOpacity=".5" strokeWidth="1" />
      <text x="20" y="31" textAnchor="middle" fontFamily="Barlow Condensed, sans-serif" fontWeight="700" fontSize="15" fill="#fff" letterSpacing=".5">{team.short}</text>
    </svg>
  );
}

export function SectionHead({ eyebrow, title, intro, dark = false, children }) {
  return (
    <div className="grid gap-3 @desk:grid-cols-12 @desk:items-start">
      <div className="@desk:col-span-12">
        <div className={`eyebrow flex items-center gap-2.5 ${dark ? 'text-pink' : 'text-magenta'}`}>
          <span className="h-px w-8 bg-current" />{eyebrow}
        </div>
        <h2 className={`h-section mt-4 @desk:max-w-[26ch] ${dark ? 'text-white' : 'text-ink'}`}>{title}</h2>
      </div>
      {(intro || children) && (
        <div className="@desk:col-span-12">
          {intro && <p className={`max-w-[46ch] text-[1.05rem] leading-relaxed @desk:max-w-[60ch] ${dark ? 'text-white/70' : 'text-muted'}`}>{intro}</p>}
          {children}
        </div>
      )}
    </div>
  );
}

export function Tag({ children, tone = 'dark' }) {
  const cls = tone === 'dark'
    ? 'border-white/15 bg-white/5 text-white/70'
    : 'border-ink/10 bg-white text-muted';
  return <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-semibold tracking-wide ${cls}`}>{children}</span>;
}

export function IllustrativeBadge({ tone = 'dark', children = 'Illustrative · sample data' }) {
  return (
    <Tag tone={tone}>
      <span className="h-1.5 w-1.5 rounded-full bg-gold" />{children}
    </Tag>
  );
}

export function RunChip({ n, size = 'md', active = false }) {
  const s = size === 'lg' ? 'h-12 w-12 text-2xl' : size === 'sm' ? 'h-7 w-7 text-sm' : 'h-9 w-9 text-lg';
  const tone = n === 6 ? 'bg-magenta text-white' : n === 4 ? 'bg-gold text-ink' : 'bg-white/10 text-white';
  return <span className={`inline-grid place-items-center rounded-full font-score font-bold tnum ${s} ${tone} ${active ? 'ring-2 ring-white/70' : ''}`}>{n}</span>;
}

export function Trophy({ className = '' }) {
  return (
    <svg viewBox="0 0 200 260" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="tg1" x1="0" x2="1">
          <stop offset="0" stopColor="#8a6410" />
          <stop offset=".35" stopColor="#ffe68a" />
          <stop offset=".55" stopColor="#f6cd20" />
          <stop offset="1" stopColor="#7a560b" />
        </linearGradient>
        <linearGradient id="tg2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2b1a5e" />
          <stop offset="1" stopColor="#120a2e" />
        </linearGradient>
        <radialGradient id="tg3" cx=".5" cy=".5" r=".5">
          <stop offset="0" stopColor="#fff6c8" stopOpacity=".9" />
          <stop offset="1" stopColor="#f6cd20" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="100" cy="70" rx="90" ry="70" fill="url(#tg3)" opacity=".35" />
      <path d="M52 28h96c0 0 2 62-22 86-8 8-17 12-26 12s-18-4-26-12C50 90 52 28 52 28z" fill="url(#tg1)" />
      <path d="M52 40c-30 0-34 40-4 52" fill="none" stroke="url(#tg1)" strokeWidth="9" strokeLinecap="round" />
      <path d="M148 40c30 0 34 40 4 52" fill="none" stroke="url(#tg1)" strokeWidth="9" strokeLinecap="round" />
      <ellipse cx="100" cy="28" rx="48" ry="8" fill="#ffe99a" />
      <ellipse cx="100" cy="28" rx="40" ry="5" fill="#a77d12" opacity=".6" />
      <path d="M74 44c4 30 14 52 26 60" stroke="#fff7cf" strokeWidth="4" strokeLinecap="round" opacity=".55" fill="none" />
      <path d="M92 126h16l6 34H86z" fill="url(#tg1)" />
      <ellipse cx="100" cy="162" rx="26" ry="7" fill="url(#tg1)" />
      <path d="M62 176h76l8 40H54z" fill="url(#tg2)" stroke="url(#tg1)" strokeWidth="3" />
      <rect x="76" y="188" width="48" height="14" rx="2" fill="url(#tg1)" opacity=".9" />
      <rect x="46" y="216" width="108" height="16" rx="3" fill="url(#tg1)" />
    </svg>
  );
}

export function Btn({ children, onClick, variant = 'primary', className = '', type = 'button', icon }) {
  const base = 'inline-flex items-center justify-center gap-2 rounded-full font-display font-bold text-[15px] px-6 h-12 transition';
  const v = {
    primary: 'btn-primary text-white',
    ghost: 'border border-white/25 text-white hover:bg-white/10',
    light: 'border border-ink/15 text-ink hover:bg-ink/5',
  }[variant];
  return (
    <button type={type} onClick={onClick} className={`${base} ${v} ${className}`}>
      {children}{icon && <Icon name={icon} className="h-4 w-4" stroke={2.2} />}
    </button>
  );
}
