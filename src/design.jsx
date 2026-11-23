import { Icon } from './icons.jsx';
import { LogoPlate, Btn, RunChip, Crest, IllustrativeBadge, Phone, Tag } from './parts.jsx';

const COLORS = [
  ['Night', '#0E0826', 'Primary dark canvas: hero, scoring, app, portal, demo', 'text-white'],
  ['Deep Purple', '#1C0D3D', 'Raised dark surfaces, gradients start', 'text-white'],
  ['Logo Indigo', '#33248A', 'Sampled from the RxPL wordmark', 'text-white'],
  ['Royal Purple', '#51218A', 'Headings accents, numbers on light', 'text-white'],
  ['Violet', '#7A35BE', 'Gradient mid-stop, focus rings', 'text-white'],
  ['Magenta', '#E3127A', 'Primary CTA, eyebrows, active states', 'text-white'],
  ['Electric Pink', '#FF4DA8', 'Highlights on dark only', 'text-ink'],
  ['Scoreboard Gold', '#F6CD20', 'From the logo’s tagline dots. Runs, 4s, leaders. Use sparingly', 'text-ink'],
  ['Soft Lavender', '#F3EAFB', 'Light section band, chips', 'text-ink'],
  ['Mist', '#FAF6FE', 'Light section background', 'text-ink'],
  ['Ink', '#241239', 'Body text on light', 'text-white'],
  ['Muted', '#6B5C86', 'Secondary text on light', 'text-white'],
];

const TYPE = [
  ['Display XL · H1', 'Plus Jakarta Sans 800', 'clamp(40px, 6.4cqi, 86px) / 1.02 / -3.5%', 'Your Premier League.', 'font-display text-[52px] font-extrabold leading-none tracking-[-0.035em]'],
  ['Section · H2', 'Plus Jakarta Sans 800', 'clamp(32px, 4.3cqi, 58px) / 1.05 / -3%', 'Every Run Matters.', 'font-display text-[38px] font-extrabold leading-tight tracking-[-0.03em]'],
  ['Card title · H3', 'Plus Jakarta Sans 800', '20–28px / 1.2', 'Manager reviews', 'font-display text-2xl font-extrabold'],
  ['Eyebrow', 'Plus Jakarta Sans 700', '12px / caps / +22% tracking', 'CONFIGURABLE SCORING', 'eyebrow text-magenta'],
  ['Body L', 'Manrope 400–600', '17–19px / 1.6', 'Turn priority brand activities into cricket runs.', 'font-body text-[18px] leading-relaxed'],
  ['Body', 'Manrope 400–700', '14–16px / 1.6', 'Doctor, speciality, brand and proof in one form.', 'font-body text-[15px] leading-relaxed'],
  ['Scoreboard numerals', 'Barlow Condensed 700, tabular', '24–120px', '4 · 6 · 2,148', 'font-score text-[44px] font-bold tnum text-royal'],
];

const RESP = [
  ['Mobile', '< 760px', 'Single column. Hero copy and CTA first, phones below with a fade. Menu collapses to a drop-down sheet. Scoring tabs scroll sideways with the scoreboard on top. League table drops P/W/L/form. Knockout shows one round at a time. App screens become a full-width swipe carousel. Form fields stack.'],
  ['Tablet', '760–1059px', 'Two-column grids where content allows. Scoreboard sits beside the rule list. Three-phone showcase appears. League table shows P/W/L. Bracket still steps by round.'],
  ['Desktop', '≥ 1060px (designed at 1440)', 'Content max width 1240px with 40px gutters on a 12-column grid. Full section navigation. Hero splits 7/5. Full bracket with trophy. Laptop frame around the portal view.'],
];

function Block({ title, children, note }) {
  return (
    <section className="border-t border-ink/10 py-12">
      <div className="grid gap-8 @desk:grid-cols-12">
        <div className="@desk:col-span-3">
          <h2 className="font-display text-2xl font-extrabold tracking-tight">{title}</h2>
          {note && <p className="mt-2 text-[14px] leading-relaxed text-muted">{note}</p>}
        </div>
        <div className="@desk:col-span-9">{children}</div>
      </div>
    </section>
  );
}

export function DesignSystem() {
  return (
    <div className="site-root text-ink" style={{ background: '#FAF6FE' }}>
      <div className="mx-auto max-w-[1240px] px-5 py-14 @tab:px-10">
        <div className="flex flex-col gap-6 @desk:flex-row @desk:items-end @desk:justify-between">
          <div>
            <div className="eyebrow text-magenta">Deliverable 4</div>
            <h1 className="mt-3 font-display text-[44px] font-extrabold leading-none tracking-[-0.03em] @tab:text-[64px]">RxPL Design System</h1>
            <p className="mt-4 max-w-[60ch] text-[16px] leading-relaxed text-muted">Tokens, components and rules behind the microsite. The palette is drawn from the official logo; the cricket energy comes from broadcast-style scoreboards, not decoration.</p>
          </div>
          <img src="assets/rxpl-logo.png" alt="RxPL logo" className="h-24 w-auto" />
        </div>

        <Block title="Logo" note="Use the supplied file only. Never redraw, recolour, crop the batsman or drop the tagline.">
          <div className="grid gap-4 @tab:grid-cols-3">
            <div className="grid place-items-center rounded-2xl bg-white p-8 ring-1 ring-ink/10"><img src="assets/rxpl-logo.png" alt="RxPL logo on white" className="h-28 w-auto" /></div>
            <div className="grid place-items-center rounded-2xl bg-lavender p-8"><img src="assets/rxpl-logo.png" alt="RxPL logo on lavender" className="h-28 w-auto" /></div>
            <div className="overflow-hidden rounded-2xl bg-night">
              <div className="flex h-[80px] items-center bg-white px-5"><img src="assets/rxpl-logo.png" alt="RxPL logo in the white navigation bar" className="h-[62px] w-auto" /></div>
              <div className="h-[3px] bg-gradient-to-r from-indigo via-magenta to-violet" />
              <div className="px-5 pb-5 pt-4 text-[12px] text-white/60">On dark pages: a white navigation bar carries the logo</div>
            </div>          </div>
          <ul className="mt-5 grid gap-2 text-[14px] text-ink/80 @tab:grid-cols-2">
            <li className="flex gap-2"><Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" stroke={2.4} />The logo always sits on white or lavender. On dark pages it lives in the white navigation bar, never in a box or plate.</li>
            <li className="flex gap-2"><Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" stroke={2.4} />Logo height 54px (mobile) / 62px (tablet and up) in the nav so the tagline stays legible.</li>
            <li className="flex gap-2"><Icon name="close" className="mt-0.5 h-4 w-4 shrink-0 text-rose-600" stroke={2.4} />Do not place the indigo logo directly on Night or Deep Purple.</li>
            <li className="flex gap-2"><Icon name="close" className="mt-0.5 h-4 w-4 shrink-0 text-rose-600" stroke={2.4} />Do not replace the logo with typed “RxPL” text.</li>
          </ul>
        </Block>

        <Block title="Colour" note="Dark night bands alternate with lavender and mist bands. Magenta drives action; gold is reserved for runs and leaders.">
          <div className="grid grid-cols-2 gap-3 @tab:grid-cols-3 @desk:grid-cols-4">
            {COLORS.map(([n, hex, use, fg]) => (
              <div key={n} className="overflow-hidden rounded-2xl bg-white ring-1 ring-ink/10">
                <div className={`flex h-24 items-end p-3 font-score text-lg font-bold ${fg}`} style={{ background: hex }}>{hex}</div>
                <div className="p-3"><div className="text-[14px] font-extrabold">{n}</div><div className="mt-0.5 text-[12px] leading-snug text-muted">{use}</div></div>
              </div>
            ))}
          </div>
          <div className="mt-4 grid gap-3 @tab:grid-cols-2">
            <div className="h-16 rounded-2xl bg-gradient-to-r from-royal to-magenta p-3 text-[12px] font-bold text-white">Action gradient · Royal → Magenta (active tabs, icons)</div>
            <div className="h-16 rounded-2xl p-3 text-[12px] font-bold text-white" style={{ background: 'linear-gradient(100deg,#E3127A,#B4127E 60%,#7A35BE)' }}>CTA gradient · Magenta → Violet (primary buttons only)</div>
          </div>
        </Block>

        <Block title="Typography" note="Plus Jakarta Sans for display, Manrope for reading, Barlow Condensed for every score and statistic.">
          <div className="divide-y divide-ink/10 rounded-2xl bg-white ring-1 ring-ink/10">
            {TYPE.map(([n, face, spec, sample, cls]) => (
              <div key={n} className="grid gap-2 p-5 @tab:grid-cols-[200px_1fr]">
                <div><div className="text-[13px] font-extrabold">{n}</div><div className="text-[12px] text-muted">{face}</div><div className="text-[11px] text-muted">{spec}</div></div>
                <div className={`${cls} min-w-0 truncate`}>{sample}</div>
              </div>
            ))}
          </div>
        </Block>

        <Block title="Spacing & radius" note="4px base unit. Sections breathe at 80px (mobile) and 112px (desktop).">
          <div className="flex flex-wrap items-end gap-4">
            {[4, 8, 12, 16, 20, 24, 32, 40, 56, 80, 112].map((s) => (
              <div key={s} className="text-center"><div className="rounded bg-gradient-to-t from-royal to-violet" style={{ width: 24, height: s }} /><div className="mt-2 font-score text-sm font-bold">{s}</div></div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            {[['Chip', 8], ['Input · row', 12], ['Card', 16], ['Panel', 24], ['Pill · button', 999], ['Phone frame', 42]].map(([n, r]) => (
              <div key={n} className="grid h-20 w-28 place-items-center border-2 border-royal/40 bg-white text-center text-[12px] font-bold" style={{ borderRadius: Math.min(r, 40) }}>{n}<span className="block font-score text-muted">{r === 999 ? 'full' : `${r}px`}</span></div>
            ))}
          </div>
        </Block>

        <Block title="Buttons" note="One primary action per view. Primary is always “Request a Demo”. Height 48px (56px in hero and form).">
          <div className="grid gap-4 @tab:grid-cols-2">
            <div className="flex flex-wrap items-center gap-3 rounded-2xl bg-night p-6">
              <Btn icon="arrow">Request a Demo</Btn><Btn variant="ghost">Explore RxPL</Btn>
            </div>
            <div className="flex flex-wrap items-center gap-3 rounded-2xl bg-white p-6 ring-1 ring-ink/10">
              <Btn icon="arrow">Request a Demo</Btn><Btn variant="light">Secondary</Btn>
              <button className="text-[14px] font-bold text-magenta">Text link →</button>
            </div>
          </div>
          <p className="mt-3 text-[13px] text-muted">Hover lifts 2px and deepens the glow. Focus shows a 2px gold ring offset 3px. Pressed and disabled states use 90% scale and 40% opacity.</p>
        </Block>

        <Block title="Cards & panels" note="Each surface has one job. Avoid stacking identical feature cards.">
          <div className="grid gap-4 @tab:grid-cols-3">
            <div className="scoreboard rounded-3xl p-5 text-white">
              <div className="text-[11px] font-bold uppercase tracking-[.2em] text-white/45">Scoreboard panel</div>
              <div className="mt-3 flex items-center gap-4"><span className="led text-6xl leading-none">6</span><span className="font-score text-2xl font-bold tracking-widest">SIX</span></div>
              <div className="mt-3 flex gap-1.5">{[1, 2, 3, 4, 6].map((n) => <RunChip key={n} n={n} size="sm" />)}</div>
            </div>
            <div className="rounded-3xl bg-white p-5 ring-1 ring-ink/10">
              <div className="text-[11px] font-bold uppercase tracking-[.2em] text-muted">Light card</div>
              <div className="mt-3 flex items-center gap-3"><Crest t="MW" /><div><div className="font-extrabold">Mumbai Winners</div><div className="text-[12px] text-muted">West Zone</div></div></div>
              <div className="mt-3"><IllustrativeBadge tone="light" /></div>
            </div>
            <div className="rounded-3xl bg-night p-5">
              <div className="glass rounded-2xl p-4 text-white">
                <div className="text-[11px] font-bold uppercase tracking-[.2em] text-white/45">Glass card</div>
                <p className="mt-2 text-[14px] text-white/80">For supporting info on dark bands. 8% white fill, 12% white border, 14px blur.</p>
              </div>
            </div>
          </div>
        </Block>

        <Block title="Content labels" note="Honesty rules are part of the system.">
          <div className="flex flex-wrap gap-3">
            <Tag tone="light"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />Actual screens from the app demo</Tag>
            <IllustrativeBadge tone="light">Illustrative · sample data</IllustrativeBadge>
            <IllustrativeBadge tone="light">Illustrative concept, not a product screen</IllustrativeBadge>
          </div>
          <ul className="mt-4 space-y-2 text-[14px] text-ink/80">
            <li>• Phone mockups contain only frames captured from the RxPL reference video, unaltered. Show at most three on the public site.</li>
            <li>• Keep detailed scoring criteria, form fields and admin menus out of public pages. They belong in the demo.</li>
            <li>• Manager review and Head Office portal views are not in the video, so they carry the illustrative label wherever they appear.</li>
            <li>• Every team name, score and rule outside the app screenshots is fictional sample data.</li>
          </ul>
        </Block>

        <Block title="Navigation" note="Sticky white bar, 80px (72px on mobile), with a 3px Indigo → Magenta → Violet rule that hands over to the dark hero.">
          <div className="space-y-3">
            <div className="overflow-hidden rounded-2xl ring-1 ring-ink/10">
              <div className="flex h-[64px] items-center gap-4 bg-white px-4"><img src="assets/rxpl-logo.png" alt="" className="h-12 w-auto" /><span className="ml-auto hidden gap-4 text-[13px] font-semibold text-ink/70 @tab:flex"><span>How it works</span><span>Scoring</span><span>Tournament</span><span>App</span></span><span className="btn-primary rounded-full px-4 py-2 text-[13px] font-bold text-white">Request a Demo</span></div>
              <div className="h-[3px] bg-gradient-to-r from-indigo via-magenta to-violet" />
              <div className="h-10 bg-night" />
            </div>
            <p className="text-[13px] text-muted">Desktop: logo, six section links, demo button. Mobile: logo, compact demo button and a menu button that opens a numbered drop-down sheet. Links scroll smoothly to each section, offset by the bar height.</p>
          </div>
        </Block>

        <Block title="Responsive rules" note="Layouts respond to the width of the page itself, so the preview switcher shows true mobile and tablet layouts.">
          <div className="overflow-hidden rounded-2xl bg-white ring-1 ring-ink/10">
            {RESP.map(([n, w, d]) => (
              <div key={n} className="grid gap-2 border-b border-ink/10 p-5 last:border-0 @tab:grid-cols-[160px_1fr]">
                <div><div className="flex items-center gap-2 font-extrabold"><Icon name={n === 'Mobile' ? 'phone' : n === 'Tablet' ? 'tablet' : 'monitor'} className="h-4 w-4 text-magenta" />{n}</div><div className="font-score text-[14px] text-muted">{w}</div></div>
                <p className="text-[14px] leading-relaxed text-ink/80">{d}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-[13px] text-muted">Touch targets are 40px minimum (48px for primary actions). No horizontal page scroll at 390px; only tab rows and the carousel scroll sideways.</p>
        </Block>

        <Block title="Motion" note="Motion explains state. It never hides content.">
          <div className="grid gap-3 @tab:grid-cols-2">
            {[
              ['Step cycle', 'How-it-works highlights one step every 2.4s; dashed connector flows left to right.'],
              ['Score pop', 'Scoreboard digit scales 0.7 → 1.08 → 1 in 450ms with a gold LED glow.'],
              ['Rise', 'Tab content enters 10px upward in 500ms, ease-out.'],
              ['Float', 'Hero notification drifts 8px over 6s.'],
              ['Hover', 'Buttons lift 2px; rows brighten border and fill in 200ms.'],
              ['Reduced motion', 'All animation and the step cycle switch off under prefers-reduced-motion.'],
            ].map(([t, d]) => (
              <div key={t} className="rounded-2xl bg-white p-4 ring-1 ring-ink/10"><div className="font-extrabold">{t}</div><div className="mt-1 text-[13.5px] text-muted">{d}</div></div>
            ))}
          </div>
        </Block>

        <Block title="Device frames" note="Screens are cropped from the video at 622×1342 and set in a neutral titanium frame.">
          <div className="flex items-end gap-6">
            <Phone src="assets/app-player-profile.jpg" alt="RxPL app: Player Profile" className="w-40" />
            <Phone src="assets/app-compare-players.jpg" alt="RxPL app: Player vs Player" className="w-32" />
            <p className="max-w-[40ch] text-[14px] text-muted">Frame: 42px radius, 9px titanium bezel, deep drop shadow. Never add a second notch or status bar; the screenshots already carry them.</p>
          </div>
        </Block>
      </div>
    </div>
  );
}
