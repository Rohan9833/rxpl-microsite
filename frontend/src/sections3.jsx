import { Icon } from './icons.jsx';
import { TEAMS, LEAGUE, PLAYERS } from './data.js';
import { SectionHead, Crest, IllustrativeBadge, Btn, LogoPlate } from './parts.jsx';
import { go } from './sections1.jsx';

import { useState } from 'react';

/* ---------- Head Office dashboard (illustrative) ---------- */

const NAV_ICONS = ['grid', 'users', 'activity', 'file', 'calendar', 'list', 'trophy'];
const fmt = (n) => n.toLocaleString('en-IN');
const TOTAL = LEAGUE.reduce((s, r) => s + r.runs, 0);

function Kpi({ label, value, sub }) {
  return (
    <div className="rounded-xl bg-white p-3.5 ring-1 ring-ink/[.07]">
      <div className="text-[10px] font-bold uppercase tracking-[.16em] text-muted">{label}</div>
      <div className="mt-1 font-score text-[28px] font-bold leading-none text-ink tnum">{value}</div>
      {sub && <div className="mt-1 text-[11px] text-muted">{sub}</div>}
    </div>
  );
}

function Table({ head, rows, align = [] }) {
  return (
    <div className="overflow-x-auto rounded-xl bg-white ring-1 ring-ink/[.07]">
      <table className="w-full min-w-[460px] text-left text-[12.5px] tnum">
        <thead><tr className="border-b border-ink/10 text-[10px] uppercase tracking-[.14em] text-muted">{head.map((h, i) => <th key={h} className={`px-3 py-2.5 font-bold ${align[i] || ''}`}>{h}</th>)}</tr></thead>
        <tbody>{rows.map((r, i) => <tr key={i} className="border-b border-ink/[.05] last:border-0">{r.map((c, j) => <td key={j} className={`px-3 py-2.5 ${align[j] || ''}`}>{c}</td>)}</tr>)}</tbody>
      </table>
    </div>
  );
}

const teamCell = (t) => <span className="flex items-center gap-2 font-semibold"><Crest t={t} size={18} />{TEAMS[t].name}</span>;

function PortalView({ v }) {
  if (v === 'Dashboard') {
    const max = LEAGUE[0].runs;
    return (
      <div className="grid gap-3">
        <div className="grid grid-cols-2 gap-3 @desk:grid-cols-4">
          <Kpi label="Total runs" value={fmt(TOTAL)} sub="All teams" />
          <Kpi label="Centuries" value="6" />
          <Kpi label="Half-centuries" value="21" />
          <Kpi label="Boundaries" value="412" sub="4s and 6s" />
        </div>
        <div className="grid gap-3 @desk:grid-cols-5">
          <div className="rounded-xl bg-white p-4 ring-1 ring-ink/[.07] @desk:col-span-3">
            <div className="flex items-center justify-between"><div className="text-[12px] font-bold">Team scores</div><div className="text-[10px] text-muted">Runs</div></div>
            <div className="mt-3 space-y-2">
              {LEAGUE.map((r) => (
                <div key={r.t} className="grid grid-cols-[88px_minmax(0,1fr)_40px] items-center gap-2 text-[11.5px]">
                  <span className="truncate font-semibold">{TEAMS[r.t].name}</span>
                  <span className="h-2.5 rounded-full bg-lavender"><span className="block h-full rounded-full bg-gradient-to-r from-royal to-magenta" style={{ width: `${(r.runs / max) * 100}%` }} /></span>
                  <span className="text-right font-bold tnum">{fmt(r.runs)}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl bg-white p-4 ring-1 ring-ink/[.07] @desk:col-span-2">
            <div className="text-[12px] font-bold">Top scorers</div>
            <ol className="mt-3 space-y-2.5">
              {PLAYERS.slice(0, 5).map((p, i) => (
                <li key={p.n} className="flex items-center gap-2.5 text-[12px]">
                  <span className={`grid h-5 w-5 place-items-center rounded font-score text-[12px] font-bold ${i === 0 ? 'bg-gold' : 'bg-lavender text-royal'}`}>{i + 1}</span>
                  <span className="flex-1 truncate font-semibold">{p.n}</span>
                  <span className="font-score text-[15px] font-bold tnum">{p.r}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    );
  }
  return null;
}

export function Dashboard() {
    return (
    <section id="dashboard" className="section relative overflow-hidden bg-night py-20 text-white @tab:py-28">
      <div className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(60% 40% at 50% 100%, rgba(122,53,190,.45), transparent 70%)' }} />
      <div className="relative mx-auto max-w-[1240px] px-5 @tab:px-10">
        <SectionHead dark eyebrow="Head Office portal" title={<>From the Field to Head Office.<br />Complete Visibility.</>}
          intro="Head Office sees every run as it happens: team standings, top performers and reports, without chasing spreadsheets." />

        <div className="mx-auto mt-12 max-w-[1080px]">
          <div className="mb-4 flex justify-center"><IllustrativeBadge>Illustrative visualization with sample data, not a screenshot of the existing portal</IllustrativeBadge></div>
          <div className="rounded-[22px] bg-gradient-to-b from-[#3a3350] to-[#17121f] p-2 shadow-[0_60px_120px_-50px_rgba(0,0,0,.9)] ring-1 ring-white/10 @tab:rounded-[26px] @tab:p-3">
            <div className="overflow-hidden rounded-[14px] bg-mist text-ink @tab:rounded-[16px]">
              <div className="flex items-center gap-2 border-b border-ink/10 bg-white px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" /><span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" /><span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-3 flex-1 truncate rounded-md bg-mist px-3 py-1 text-[11px] text-muted">Head Office Admin Portal</span>
              </div>
              <div className="min-w-0 p-4 @tab:p-6">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3"><img src="/assets/rxpl-logo.png" alt="RxPL logo" className="h-11 w-auto" /><div><div className="text-[10px] font-bold uppercase tracking-[.2em] text-muted">Sample tournament</div><div className="font-display text-xl font-extrabold">Tournament overview</div></div></div>
                  <span className="flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[11px] font-bold ring-1 ring-ink/10"><span className="live-dot h-2 w-2 rounded-full bg-magenta" />Live</span>
                </div>
                <PortalView v="Dashboard" />
              </div>
            </div>
          </div>
          <div className="mx-auto hidden h-3 w-[110%] -translate-x-[4.5%] rounded-b-[18px] bg-gradient-to-b from-[#4a4360] to-[#1d1726] @desk:block" />
        </div>

        <ul className="mx-auto mt-12 grid max-w-[1080px] gap-x-8 gap-y-3 text-[14.5px] font-semibold text-white/80 @md:grid-cols-2 @desk:grid-cols-4">
          {['Live tournament overview', 'Team and player performance', 'Leaders and top scorers', 'Head Office reports'].map((x) => (
            <li key={x} className="flex items-center gap-2.5 border-t border-white/10 pt-3"><Icon name="check" className="h-4 w-4 text-gold" stroke={2.4} />{x}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- Benefits (editorial) ---------- */

const BENEFITS = [
  ['Drive Brand Focus', 'Encourage participation in priority brand activities. The runs you assign tell every MR where the effort should go.', 'Configurable scoring', 'scoring'],
  ['Motivate Field Teams', 'Create excitement through cricket-based competition between regional and zonal teams.', 'Leagues and knockouts', 'tournament'],
  ['Strengthen Accountability', 'Support managerial review of submitted activities, with approval or rejection for each entry.', 'Manager approval', 'approval'],
  ['Improve Visibility', 'Track tournament and player performance through Head Office reports and dashboards.', 'Head Office portal', 'dashboard'],
];

export function Benefits() {
  return (
    <section id="benefits" className="section bg-mist py-20 text-ink @tab:py-28">
      <div className="mx-auto grid max-w-[1240px] gap-12 px-5 @tab:px-10 @desk:grid-cols-12">
        <div className="@desk:col-span-5">
          <div className="@desk:sticky @desk:top-28">
            <div className="eyebrow flex items-center gap-2.5 text-magenta" style={{ textTransform: 'none' }}><span className="h-px w-8 bg-current" />Why RxPL</div>
            <h2 className="h-section mt-4">More Than a Tournament.</h2>
            <p className="mt-5 max-w-[30ch] font-display text-[1.45rem] font-bold leading-snug text-royal">A smarter way to engage your field force.</p>
            <p className="mt-5 max-w-[42ch] text-[15.5px] leading-relaxed text-muted">For Brand Managers, Marketing, Sales and BU Heads who want the field to put energy behind the right activities, and want to see it happen.</p>
          </div>
        </div>
        <ol className="@desk:col-span-7">
          {BENEFITS.map(([t, d, link, id], i) => (
            <li key={t} className="group grid grid-cols-[auto_1fr] gap-x-6 border-t border-ink/15 py-8 first:border-t-0 first:pt-0 @tab:gap-x-10">
              <span className="font-score text-[64px] font-bold leading-[.8] text-transparent tnum @tab:text-[88px]" style={{ WebkitTextStroke: '1.5px #7A35BE' }}>0{i + 1}</span>
              <div>
                <h3 className="text-2xl font-extrabold tracking-tight @tab:text-[1.75rem]">{t}</h3>
                <p className="mt-2 max-w-[48ch] text-[16px] leading-relaxed text-muted">{d}</p>
                <button onClick={() => go(id)} className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-bold text-magenta hover:gap-2.5 transition-all">{link}<Icon name="arrow" className="h-4 w-4" /></button>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- Request a demo ---------- */

const FIELDS = [
  ['name', 'Full Name', 'text', 'name', true],
  ['company', 'Company', 'text', 'organization', true],
  ['designation', 'Designation', 'text', 'organization-title', true],
  ['email', 'Business Email', 'email', 'email', true],
  ['mobile', 'Mobile Number', 'tel', 'tel', true],
];

function validate(f) {
  const e = {};
  if (!f.name.trim()) e.name = 'Enter your full name.';
  if (!f.company.trim()) e.company = 'Enter your company name.';
  if (!f.designation.trim()) e.designation = 'Enter your designation, for example Brand Manager.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.trim())) e.email = 'Enter an email address like name@company.com.';
  const digits = f.mobile.replace(/[\s()-]/g, '');
  if (!/^(\+?\d{1,3})?\d{10}$/.test(digits)) e.mobile = 'Enter a 10-digit mobile number, with country code if outside India.';
  return e;
}

export function Demo() {
  const blank = { name: '', company: '', designation: '', email: '', mobile: '', message: '', website: '' };
  const [f, setF] = useState(blank);
  const [err, setErr] = useState({});
  const [touched, setTouched] = useState(false);
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);
  const [serverError, setServerError] = useState('');
  const upd = (k) => (ev) => {
    const nf = { ...f, [k]: ev.target.value };
    setF(nf);
    setServerError('');
    if (touched) setErr(validate(nf));
  };
  const submit = async (ev) => {
    ev.preventDefault();
    setTouched(true);
    const e = validate(f);
    setErr(e);
    if (Object.keys(e).length) return;

    setSending(true);
    setServerError('');
    try {
      const response = await fetch('/api/demo-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(f),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || !result.success) {
        if (result.errors) setErr(result.errors);
        else setServerError(result.message || 'We could not send your request. Please try again.');
        return;
      }
      setDone(true);
    } catch {
      setServerError('Unable to connect to the server. Please try again in a moment.');
    } finally {
      setSending(false);
    }
  };
  return (
    <section id="demo" className="section relative overflow-hidden bg-night py-20 text-white @tab:py-28">
      <div className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(45% 60% at 0% 30%, rgba(227,18,122,.3), transparent 70%), radial-gradient(50% 60% at 100% 100%, rgba(122,53,190,.45), transparent 70%)' }} />
      <div className="beam" style={{ left: '-4%', transform: 'rotate(-24deg)', opacity: .5 }} />
      <div className="relative mx-auto grid max-w-[1240px] gap-12 px-5 @tab:px-10 @desk:grid-cols-12">
        <div className="@desk:col-span-5">
          <div className="eyebrow flex items-center gap-2.5 text-pink"><span className="h-px w-8 bg-current" />Request a demo</div>
          <h2 className="h-section mt-4 desktop-two-lines">Ready to Launch Your Own<br />Premier League?</h2>
          <p className="mt-5 max-w-[42ch] text-[1.05rem] leading-relaxed text-white/70">Engage your field force, activate your brand priorities, and create a competitive experience across your regions and zones.</p>
          <ul className="mt-8 space-y-3 text-[15px] font-semibold text-white/85">
            {['See the iOS and Android app in action', 'Walk through scoring rules for your brands', 'Plan teams, zones and tournament format', 'Preview manager approval and Head Office reports'].map((x) => (
              <li key={x} className="flex items-center gap-3"><span className="grid h-6 w-6 place-items-center rounded-full bg-white/10"><Icon name="check" className="h-3.5 w-3.5 text-gold" stroke={2.6} /></span>{x}</li>
            ))}
          </ul>
        </div>
        <div className="@desk:col-span-7">
          <div className="rounded-3xl bg-white p-6 text-ink shadow-[0_50px_100px_-40px_rgba(0,0,0,.8)] @tab:p-8">
            {done ? (
              <div className="pop grid min-h-[420px] place-items-center text-center">
                <div>
                  <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-royal to-magenta text-white"><Icon name="check" className="h-8 w-8" stroke={2.6} /></span>
                  <h3 className="mt-5 text-2xl font-extrabold">Thank you, {f.name.trim().split(' ')[0]}.</h3>
                  <p className="mx-auto mt-2 max-w-[38ch] text-muted">Your demo request has been sent successfully. Our team will contact you soon.</p>
                  <button onClick={() => { setDone(false); setF(blank); setTouched(false); setErr({}); setServerError(''); }} className="mt-6 text-[14px] font-bold text-magenta">Start over</button>
                </div>
              </div>
            ) : (
              <form noValidate onSubmit={submit} className="grid gap-4 @tab:grid-cols-2">
                <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
                  <label htmlFor="f-website">Leave this field empty</label>
                  <input id="f-website" name="website" type="text" tabIndex="-1" autoComplete="off" value={f.website} onChange={upd('website')} />
                </div>
                {FIELDS.map(([k, label, type, ac]) => (
                  <div key={k} className={k === 'email' || k === 'mobile' ? '' : k === 'name' ? '@tab:col-span-2' : ''}>
                    <label htmlFor={`f-${k}`} className="text-[13px] font-bold text-ink">{label}</label>
                    <input id={`f-${k}`} type={type} autoComplete={ac} value={f[k]} onChange={upd(k)} aria-invalid={!!err[k]} aria-describedby={err[k] ? `e-${k}` : undefined}
                      className={`mt-1.5 h-12 w-full rounded-xl border bg-mist px-4 text-[15px] outline-none transition focus:bg-white focus:ring-4 ${err[k] ? 'border-rose-400 focus:ring-rose-100' : 'border-ink/10 focus:border-violet focus:ring-violet/15'}`} />
                    {err[k] && <p id={`e-${k}`} className="mt-1.5 text-[12.5px] font-semibold text-rose-600">{err[k]}</p>}
                  </div>
                ))}
                <div className="@tab:col-span-2">
                  <label htmlFor="f-message" className="text-[13px] font-bold text-ink">Message <span className="font-semibold text-muted">(optional)</span></label>
                  <textarea id="f-message" rows="3" value={f.message} onChange={upd('message')} placeholder="Number of MRs, zones, brands you want to focus on…"
                    className="mt-1.5 w-full resize-none rounded-xl border border-ink/10 bg-mist px-4 py-3 text-[15px] outline-none transition focus:border-violet focus:bg-white focus:ring-4 focus:ring-violet/15" />
                </div>
                <div className="flex flex-col gap-3 @tab:col-span-2 @tab:flex-row @tab:items-center @tab:justify-between">
                  <p className="text-[12px] text-muted">We use these details only to arrange your demo.</p>
                  {serverError && <p role="alert" className="text-[12.5px] font-semibold text-rose-600 @tab:col-span-2">{serverError}</p>}
                  <Btn type="submit" icon="arrow" disabled={sending} className="h-14 px-8 text-base">{sending ? 'Sending…' : 'Request a Demo'}</Btn>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */

export function Footer() {
  const links = [['how', 'How it works'], ['scoring', 'Scoring'], ['tournament', 'Tournament'], ['app', 'App'], ['approval', 'Approval'], ['dashboard', 'Head Office']];
  return (
    <footer className="bg-lavender text-ink">
      <div className="mx-auto grid max-w-[1240px] gap-10 px-5 py-14 @tab:px-10 @desk:grid-cols-12">
        <div className="@desk:col-span-5">
          <img src="/assets/rxpl-logo.png" alt="RxPL — Rxns • Players • Leaders" className="h-20 w-auto" />
          <p className="mt-5 max-w-[40ch] text-[14.5px] leading-relaxed text-muted">RxPL is a cricket-inspired field-force engagement and gamification platform for pharmaceutical companies. MRs score runs for priority brand activities and compete in regional teams.</p>
        </div>
        <nav className="@desk:col-span-3" aria-label="Footer">
          <div className="text-[11px] font-bold uppercase tracking-[.2em] text-muted">Explore</div>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 text-[14px] font-semibold @desk:grid-cols-1">
            {links.map(([id, l]) => <li key={id}><button onClick={() => go(id)} className="hover:text-magenta">{l}</button></li>)}
          </ul>
        </nav>
        <div className="@desk:col-span-4">
          <div className="text-[11px] font-bold uppercase tracking-[.2em] text-muted">See it for your brands</div>
          <Btn onClick={() => go('demo')} icon="arrow" className="mt-4">Request a Demo</Btn>
          <div className="mt-8 text-[11px] font-bold uppercase tracking-[.2em] text-muted">A product by</div>
          <img src="/assets/digilateral.png" alt="digiLATERAL — Think Lateral, Think Digital. Digital solutions for pharma marketeers" className="mt-3 h-12 w-auto" />
        </div>
      </div>
      <div className="border-t border-ink/10">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-2 px-5 py-5 text-[12.5px] text-muted @tab:flex-row @tab:items-center @tab:justify-between @tab:px-10">
          <span>© 2026 digiLATERAL. All rights reserved.</span>
          <a href="#privacy" onClick={(e) => e.preventDefault()} className="font-semibold hover:text-ink">Privacy Policy <span className="font-normal">(placeholder)</span></a>
        </div>
      </div>
    </footer>
  );
}
