import { Icon } from "./icons.jsx";
import { TEAMS, LEAGUE, KNOCKOUT, SCREENS, FIXTURES } from "./data.js";
import {
  Phone,
  SectionHead,
  Crest,
  Trophy,
  IllustrativeBadge,
  Tag,
} from "./parts.jsx";

import { useState, useRef, useEffect } from "react";

/* ---------- Teams & tournament ---------- */

function Segmented({ value, onChange, options, dark = false }) {
  return (
    <div
      className={`inline-flex rounded-full p-1 ${dark ? "bg-white/10" : "bg-white shadow-[0_8px_24px_-14px_rgba(36,18,57,.5)] ring-1 ring-ink/10"}`}
      role="tablist"
    >
      {options.map(([v, label, icon]) => (
        <button
          key={v}
          role="tab"
          aria-selected={value === v}
          onClick={() => onChange(v)}
          className={`flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2.5 text-[14px] font-bold transition @tab:px-5 ${value === v ? "bg-gradient-to-r from-royal to-magenta text-white shadow" : dark ? "text-white/70" : "text-muted hover:text-ink"}`}
        >
          {icon && <Icon name={icon} className="h-4 w-4" />}
          {label}
        </button>
      ))}
    </div>
  );
}

function LeagueTable() {
  return (
    <div className="grid gap-5 @desk:grid-cols-12">
      <div className="overflow-hidden rounded-3xl bg-white shadow-[0_30px_60px_-40px_rgba(36,18,57,.6)] ring-1 ring-ink/10 @desk:col-span-8">
        <div className="flex items-center justify-between gap-3 bg-gradient-to-r from-deep via-royal to-magenta px-5 py-4 text-white">
          <div>
            <div className="font-score text-[13px] font-bold uppercase tracking-[.25em] text-white/70">
              Zonal League · Standings
            </div>
            <div className="font-display text-lg font-extrabold">
              Sample tournament
            </div>
          </div>
          <IllustrativeBadge>Fictional teams &amp; scores</IllustrativeBadge>
        </div>
        <table className="w-full text-left text-[14px]">
          <thead>
            <tr className="border-b border-ink/10 text-[11px] font-bold uppercase tracking-widest text-muted">
              <th className="py-3 pl-5 pr-2 font-bold">#</th>
              <th className="py-3 pr-2 font-bold">Team</th>
              <th className="hidden py-3 pr-2 text-center font-bold @tab:table-cell">
                P
              </th>
              <th className="hidden py-3 pr-2 text-center font-bold @tab:table-cell">
                W
              </th>
              <th className="hidden py-3 pr-2 text-center font-bold @tab:table-cell">
                L
              </th>
              <th className="py-3 pr-2 text-right font-bold">Runs</th>
              <th className="hidden py-3 pr-2 font-bold @desk:table-cell">
                Form
              </th>
              <th className="py-3 pr-5 text-right font-bold">Pts</th>
            </tr>
          </thead>
          <tbody className="tnum">
            {LEAGUE.map((r, i) => {
              const t = TEAMS[r.t];
              return (
                <tr
                  key={r.t}
                  className={`border-b border-ink/[.06] last:border-0 ${i < 4 ? "" : "text-ink/70"}`}
                >
                  <td className="py-3 pl-5 pr-2">
                    <span
                      className={`inline-grid h-7 w-7 place-items-center rounded-lg font-score text-[15px] font-bold ${i === 0 ? "bg-gold text-ink" : i < 4 ? "bg-lavender text-royal" : "text-muted"}`}
                    >
                      {i + 1}
                    </span>
                  </td>
                  <td className="py-3 pr-2">
                    <div className="flex items-center gap-3">
                      <Crest t={r.t} size={28} />
                      <div>
                        <div className="font-bold leading-tight text-ink">
                          {t.name}
                        </div>
                        <div className="text-[12px] text-muted">
                          {t.zone} Zone
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="hidden py-3 pr-2 text-center @tab:table-cell">
                    {r.p}
                  </td>
                  <td className="hidden py-3 pr-2 text-center @tab:table-cell">
                    {r.w}
                  </td>
                  <td className="hidden py-3 pr-2 text-center @tab:table-cell">
                    {r.l}
                  </td>
                  <td className="py-3 pr-2 text-right font-semibold">
                    {r.runs.toLocaleString("en-IN")}
                  </td>
                  <td className="hidden py-3 pr-2 @desk:table-cell">
                    <div className="flex gap-1">
                      {r.form.split("").map((f, k) => (
                        <span
                          key={k}
                          className={`grid h-5 w-5 place-items-center rounded text-[10px] font-bold ${f === "W" ? "bg-emerald-500/15 text-emerald-700" : "bg-rose-500/10 text-rose-600"}`}
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-3 pr-5 text-right font-score text-lg font-bold text-royal">
                    {r.pts}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="grid content-start gap-5 @desk:col-span-4">
        <div className="rounded-3xl bg-night p-5 text-white">
          <div className="flex items-center justify-between">
            <div className="text-[11px] font-bold uppercase tracking-[.2em] text-white/50">
              Match schedule
            </div>
            <Icon name="calendar" className="h-4 w-4 text-pink" />
          </div>
          <ul className="mt-4 divide-y divide-white/10">
            {FIXTURES.map((f) => (
              <li key={f.d} className="flex items-center gap-3 py-3">
                <Crest t={f.a} size={24} />
                <span className="font-score text-sm font-bold text-white/40">
                  VS
                </span>
                <Crest t={f.b} size={24} />
                <div className="ml-auto text-right">
                  <div className="text-[13px] font-bold">{f.d}</div>
                  <div className="text-[11px] text-white/45">{f.s}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl bg-white p-5 ring-1 ring-ink/10">
          <div className="text-[11px] font-bold uppercase tracking-[.2em] text-muted">
            Top run-scorer
          </div>
          <div className="mt-3 flex items-end justify-between">
            <div>
              <div className="font-display text-lg font-extrabold">
                Mumbai Winners
              </div>
              <div className="text-[13px] text-muted">
                West Zone · 6 wins from 7
              </div>
            </div>
            <div
              className="led text-5xl leading-none"
              style={{ color: "#51218A", textShadow: "none" }}
            >
              2,148
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MatchCard({ m, final = false }) {
  const row = (t, s) => {
    const won = m.w && m.w === t;
    return (
      <div
        className={`flex items-center gap-2.5 px-3 py-2 ${won ? "text-ink" : "text-ink/60"}`}
      >
        <Crest t={t} size={22} />
        <span
          className={`flex-1 truncate text-[13px] ${won ? "font-extrabold" : "font-semibold"}`}
        >
          {t ? TEAMS[t].name : "Winner SF 2"}
        </span>
        {m.w ? (
          <span
            className={`font-score text-[15px] font-bold tnum ${won ? "text-royal" : ""}`}
          >
            {s}
          </span>
        ) : null}
        {won && <span className="h-2 w-2 rounded-full bg-gold" />}
      </div>
    );
  };
  return (
    <div
      className={`overflow-hidden rounded-xl bg-white ring-1 ${final ? "ring-gold shadow-[0_20px_40px_-24px_rgba(246,205,32,.9)]" : "ring-ink/10"}`}
    >
      {row(m.a, m.sa)}
      <div className="h-px bg-ink/[.07]" />
      {row(m.b, m.sb)}
      {!m.w && (
        <div className="bg-lavender px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-royal">
          {m.date}
        </div>
      )}
    </div>
  );
}

function Bracket() {
  const [round, setRound] = useState("qf");
  const rounds = [
    ["qf", "Quarter-finals", KNOCKOUT.qf],
    ["sf", "Semi-finals", KNOCKOUT.sf],
    ["final", "Final", [KNOCKOUT.final]],
  ];
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-night via-deep to-royal p-5 text-white @tab:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="font-score text-[13px] font-bold uppercase tracking-[.25em] text-white/60">
            Knockout · Road to the trophy
          </div>
          <div className="font-display text-lg font-extrabold">
            Sample bracket
          </div>
        </div>
        <IllustrativeBadge>Fictional teams &amp; scores</IllustrativeBadge>
      </div>

      {/* Compact: round picker */}
      <div className="mt-6 @desk:hidden">
        <div className="grid grid-cols-3 gap-2">
          {rounds.map(([id, label]) => (
            <button
              key={id}
              onClick={() => setRound(id)}
              className={`min-w-0 whitespace-nowrap rounded-full px-1 py-2 text-[11px] font-bold ${round === id ? "bg-white text-ink" : "bg-white/10 text-white/70"}`}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="mt-4 grid gap-3 @tab:grid-cols-2" key={round}>
          {rounds
            .find((r) => r[0] === round)[2]
            .map((m, i) => (
              <div key={i} className="rise">
                <MatchCard m={m} final={round === "final"} />
              </div>
            ))}
        </div>
        <div className="mt-6 flex items-center gap-4 rounded-2xl bg-white/5 p-4">
          <Trophy className="h-20 w-auto" />
          <div>
            <div className="font-display font-extrabold">The RxPL Trophy</div>
            <div className="text-[13px] text-white/60">
              One team lifts it. Every player’s runs count.
            </div>
          </div>
        </div>
      </div>

      {/* Wide: full bracket */}
      <div className="mt-8 hidden grid-cols-[1fr_1fr_1fr_.9fr] gap-6 @desk:grid">
        {rounds.map(([id, label, ms], ci) => (
          <div key={id} className="flex flex-col">
            <div className="mb-3 text-[11px] font-bold uppercase tracking-[.2em] text-white/50">
              {label}
            </div>
            <div className="flex flex-1 flex-col justify-around gap-4">
              {ms.map((m, i) => (
                <div key={i} className="relative">
                  <MatchCard m={m} final={id === "final"} />
                  {ci < 2 && (
                    <span className="absolute -right-6 top-1/2 h-px w-6 bg-white/30" />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="flex flex-col items-center justify-center text-center">
          <Trophy className="h-56 w-auto drop-shadow-[0_20px_40px_rgba(246,205,32,.35)]" />
          <div className="mt-2 font-display font-extrabold">Champions</div>
          <div className="text-[12px] text-white/55">To be decided</div>
        </div>
      </div>
    </div>
  );
}

export function Tournament() {
  const [mode, setMode] = useState("league");
  return (
    <section
      id="tournament"
      className="section bg-lavender py-20 text-ink @tab:py-28"
    >
      <div className="mx-auto max-w-[1240px] px-5 py-2 @tab:px-10">
        <SectionHead
          eyebrow="Teams & tournaments"
          title={
            <>
              Your Regions.
              <br />
              Your Teams.
              <br />
              Your Tournament.
            </>
          }
          intro="Group players into regional or zonal teams with their own cricket-style names, then run a league or a knockout."
        />
        <div className="mt-10 flex flex-col gap-5 @desk:flex-row @desk:items-center @desk:justify-between">
          <Segmented
            value={mode}
            onChange={setMode}
            options={[
              ["league", "League format", "list"],
              ["knockout", "Knockout format", "trophy"],
            ]}
          />
        </div>
        <div className="mt-8" key={mode}>
          <div className="rise">
            {mode === "league" ? <LeagueTable /> : <Bracket />}
          </div>
        </div>
        <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-2 text-[13.5px] font-semibold text-ink/75 @tab:flex @tab:flex-wrap">
          {[
            "Custom team names",
            "Regional & zonal competition",
            "Knockout or league",
            "Rankings & match schedules",
          ].map((x) => (
            <li key={x} className="flex items-center gap-2">
              <Icon
                name="check"
                className="h-4 w-4 shrink-0 text-magenta"
                stroke={2.4}
              />
              {x}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- App showcase ---------- */

export function AppShowcase() {
  const [sel, setSel] = useState(0);
  const scroller = useRef(null);
  const [slide, setSlide] = useState(0);
  const n = SCREENS.length;
  const at = (k) => SCREENS[(k + n) % n];
  const onScroll = () => {
    const el = scroller.current;
    if (!el) return;
    const physical = Math.round(el.scrollLeft / el.clientWidth);
    setSlide(Math.max(0, Math.min(n - 1, physical - 1)));
  };
  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    const jumpFromClone = () => {
      const physical = Math.round(el.scrollLeft / el.clientWidth);
      // Move from the duplicated slides to their matching real slides after scrolling settles.
      if (physical === 0)
        el.scrollTo({ left: n * el.clientWidth, behavior: "instant" });
      else if (physical === n + 1)
        el.scrollTo({ left: el.clientWidth, behavior: "instant" });
    };
    el.addEventListener("scrollend", jumpFromClone);
    el.scrollTo({ left: el.clientWidth, behavior: "instant" });
    return () => el.removeEventListener("scrollend", jumpFromClone);
  }, []);
  const toSlide = (k) => {
    const el = scroller.current;
    if (el)
      el.scrollTo({
        left: (((k + n) % n) + 1) * el.clientWidth,
        behavior: "smooth",
      });
  };
  const feats = [
    ["users", "Player profiles and statistics"],
    ["swap", "Head-to-head comparison"],
    ["chart", "Matches and leaderboards"],
    ["upload", "Quick activity logging"],
    ["bell", "Push and in-app notifications"],
    ["phone", "iOS and Android apps"],
  ];
  return (
    <section
      id="app"
      className="section relative overflow-hidden bg-night py-20 text-white @tab:py-28 @desk:h-[115svh] @desk:min-h-0 @desk:overflow-hidden @desk:py-0"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 40% at 50% 62%, rgba(227,18,122,.28), transparent 70%), radial-gradient(40% 40% at 10% 10%, rgba(122,53,190,.3), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-[1240px] px-5 @tab:px-10 @desk:flex @desk:h-full @desk:flex-col @desk:justify-center @desk:px-8 @desk:py-5">
        <SectionHead
          dark
          eyebrow="The RxPL app"
          title={
            <>
              A Premier League Experience.
              <br />
              In Every Player’s Pocket.
            </>
          }
        >
          <p className="max-w-[46ch] text-[0.7rem] leading-relaxed text-white/70">
            Every MR gets a profile, a scorecard and a seat in the Match Centre
            on iOS and Android.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Tag>
              <Icon name="apple" className="h-3.5 w-3.5" />
              iOS
            </Tag>
            <Tag>
              <Icon name="android" className="h-3.5 w-3.5" />
              Android
            </Tag>
            <Tag>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Actual app screens
            </Tag>
          </div>
        </SectionHead>

        {/* Wide: three phones, selectable */}
        <div className="mt-8 hidden @tab:block @desk:mt-4 @desk:flex-1 @desk:min-h-0 @desk:flex @desk:flex-col @desk:justify-center">
          <div className="relative flex items-end justify-center gap-[3%] @desk:max-h-[46svh]">
            <button
              onClick={() => setSel((sel - 1 + n) % n)}
              className="w-[17%] max-w-[180px] translate-y-4 -rotate-3 opacity-70 transition hover:opacity-100 @desk:w-[15%] @desk:max-w-[150px] @desk:translate-y-2"
              aria-label={`Show ${at(sel - 1).title}`}
            >
              <Phone
                src={at(sel - 1).src}
                alt={`RxPL app: ${at(sel - 1).title}`}
              />
              <div className="mt-4 text-center text-[13px] font-bold text-white/60">
                {at(sel - 1).title}
              </div>
            </button>
            <div className="w-[22%] max-w-[220px] @desk:w-[19%] @desk:max-w-[190px]" key={sel}>
              <Phone
                src={at(sel).src}
                alt={`RxPL app: ${at(sel).title}`}
                className="pop"
              />
              <div className="mt-4 text-center font-display text-lg font-extrabold">
                {at(sel).title}
              </div>
            </div>
            <button
              onClick={() => setSel((sel + 1) % n)}
              className="w-[17%] max-w-[180px] translate-y-4 rotate-3 opacity-70 transition hover:opacity-100 @desk:w-[15%] @desk:max-w-[150px] @desk:translate-y-2"
              aria-label={`Show ${at(sel + 1).title}`}
            >
              <Phone
                src={at(sel + 1).src}
                alt={`RxPL app: ${at(sel + 1).title}`}
              />
              <div className="mt-4 text-center text-[13px] font-bold text-white/60">
                {at(sel + 1).title}
              </div>
            </button>
          </div>
          <div className="mx-auto mt-3 max-w-[52ch] text-center text-[15px] text-white/65 @desk:mt-2 @desk:text-[13px]">
            {at(sel).text}
          </div>
          <div className="mt-5 flex flex-wrap justify-center gap-2 @desk:mt-3">
            {SCREENS.map((s, k) => (
              <button
                key={s.id}
                onClick={() => setSel(k)}
                aria-pressed={sel === k}
                className={`rounded-full px-4 py-2 text-[13px] font-bold transition ${sel === k ? "bg-white text-ink" : "border border-white/15 text-white/65 hover:border-white/40 hover:text-white"}`}
              >
                {s.title}
              </button>
            ))}
          </div>
        </div>

        {/* Compact: swipeable, full-width slides */}
        <div className="mt-5 @tab:hidden">
          <div
            ref={scroller}
            onScroll={onScroll}
            className="hide-scroll -mx-5 flex snap-x snap-mandatory overflow-x-auto"
          >
            {[SCREENS[n - 1], ...SCREENS, SCREENS[0]].map((s, k) => (
              <figure
                key={`slide-${k}`}
                className="w-full shrink-0 snap-center px-5"
              >
                <Phone
                  src={s.src}
                  alt={`RxPL app: ${s.title}`}
                  className="mx-auto w-[59%] max-w-[300px]"
                />
                <figcaption className="mt-5 text-center">
                  <div className="font-display text-lg font-extrabold">
                    {s.title}
                  </div>
                  <div className="mx-auto mt-1 max-w-[34ch] text-[14px] text-white/65">
                    {s.text}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-8 flex items-center justify-center gap-4 @tab:mt-5">
            <button
              onClick={() => toSlide(slide - 1)}
              aria-label="Previous screen"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/20"
            >
              <Icon name="chevron" className="h-4 w-4 rotate-180" />
            </button>
            <div className="flex gap-1.5">
              {SCREENS.map((_, k) => (
                <span
                  key={k}
                  className={`h-1.5 rounded-full transition-all ${slide === k ? "w-6 bg-pink" : "w-1.5 bg-white/25"}`}
                />
              ))}
            </div>
            <button
              onClick={() => toSlide(slide + 1)}
              aria-label="Next screen"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/20"
            >
              <Icon name="chevron" className="h-4 w-4" />
            </button>
          </div>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 @md:grid-cols-2 @desk:mt-4 @desk:grid-cols-3">
          {feats.map(([ic, label]) => (
            <li
              key={label}
              className="flex items-center gap-4 bg-night px-6 py-5 @desk:gap-3 @desk:px-4 @desk:py-3"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/[.06] text-pink @desk:h-8 @desk:w-8">
                <Icon name={ic} />
              </span>
              <span className="text-[15px] font-bold">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- Manager approval ---------- */

const QUEUE = [
  {
    id: 1,
    mr: "Priya Nair",
    team: "Chennai Chargers",
    act: "Brand A prescription",
    doc: "Dr. S. Iyer",
    runs: 6,
  },
  {
    id: 2,
    mr: "Karan Malhotra",
    team: "Delhi Strikers",
    act: "Camp conducted",
    doc: "Clinic camp",
    runs: 4,
  },
  {
    id: 3,
    mr: "Rohan Das",
    team: "Kolkata Titans",
    act: "Doctor conversion",
    doc: "Dr. A. Ghosh",
    runs: 3,
  },
];

export function Approval() {
  const [status, setStatus] = useState({});
  const set = (id, s) => setStatus((st) => ({ ...st, [id]: s }));
  const approved = Object.values(status).filter((s) => s === "ok").length;
  const rejected = Object.values(status).filter((s) => s === "no").length;
  const stages = [
    ["upload", "MR submits", "The MR logs the activity from the app."],
    [
      "eye",
      "Manager reviews",
      "Each submission is checked by the MR’s manager.",
    ],
    [
      "checkCircle",
      "Approved or rejected",
      "The manager approves or rejects each entry.",
    ],
  ];
  return (
    <section
      id="approval"
      className="section bg-white py-20 text-ink @tab:py-28"
    >
      <div className="mx-auto max-w-[1240px] px-5 @tab:px-10">
        <SectionHead
          eyebrow="Manager approval"
          title={
            <>
              Every Activity Reviewed.
              <br />
              Every Run Accountable.
            </>
          }
          intro="MRs submit. Managers review, then approve or reject. One clear review step puts a manager’s decision behind every entry."
        />
        <ol className="mt-10 grid gap-3 @tab:grid-cols-3">
          {stages.map(([ic, t, d], i) => (
            <li
              key={t}
              className="flex items-start gap-4 rounded-2xl bg-mist p-5 ring-1 ring-ink/[.06]"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-royal to-magenta text-white">
                <Icon name={ic} />
              </span>
              <div>
                <div className="font-score text-[13px] font-bold tracking-widest text-magenta">
                  0{i + 1}
                </div>
                <div className="font-display font-extrabold">{t}</div>
                <div className="mt-1 text-[14px] text-muted">{d}</div>
              </div>
            </li>
          ))}
        </ol>

        <div className="mx-auto mt-10 max-w-[880px]">
          <div>
            <div className="overflow-hidden rounded-3xl bg-night text-white shadow-[0_40px_80px_-40px_rgba(28,13,61,.9)]">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-5 py-4">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-[.2em] text-white/50">
                    Step 2 · Manager review
                  </div>
                  <div className="font-display text-lg font-extrabold">
                    Pending submissions
                  </div>
                </div>
                <IllustrativeBadge>
                  Illustrative concept, not a product screen
                </IllustrativeBadge>
              </div>
              <ul className="divide-y divide-white/10">
                {QUEUE.map((q) => {
                  const s = status[q.id];
                  return (
                    <li
                      key={q.id}
                      className="flex flex-col gap-4 px-5 py-4 @tab:flex-row @tab:items-center"
                    >
                      <div className="flex flex-1 items-center gap-4">
                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-violet to-magenta font-display font-extrabold">
                          {q.mr
                            .split(" ")
                            .map((w) => w[0])
                            .join("")}
                        </span>
                        <div className="min-w-0">
                          <div className="font-bold">
                            {q.mr}{" "}
                            <span className="font-semibold text-white/45">
                              · {q.team}
                            </span>
                          </div>
                          <div className="text-[14px] text-white/75">
                            {q.act}
                          </div>
                          <div className="flex items-center gap-2 text-[12px] text-white/45">
                            <span>{q.doc}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {s ? (
                          <span
                            className={`pop inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-bold ${s === "ok" ? "bg-emerald-400/15 text-emerald-300" : "bg-rose-400/15 text-rose-300"}`}
                          >
                            <Icon
                              name={s === "ok" ? "checkCircle" : "xCircle"}
                              className="h-4 w-4"
                            />
                            {s === "ok" ? "Approved" : "Rejected"}
                            <button
                              onClick={() => set(q.id, undefined)}
                              className="ml-1 text-white/50 underline-offset-2 hover:underline"
                            >
                              Undo
                            </button>
                          </span>
                        ) : (
                          <>
                            <button
                              onClick={() => set(q.id, "no")}
                              className="h-10 rounded-full border border-white/20 px-4 text-[13px] font-bold text-white/80 hover:bg-white/10"
                            >
                              Reject
                            </button>
                            <button
                              onClick={() => set(q.id, "ok")}
                              className="h-10 rounded-full bg-white px-4 text-[13px] font-bold text-ink hover:bg-lavender"
                            >
                              Approve
                            </button>
                          </>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/10 bg-white/[.03] px-5 py-3 text-[13px]">
                <span className="font-bold text-white/50">
                  Step 3 · Outcome
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Approved <b className="tnum">{approved}</b>
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-rose-400" />
                  Rejected <b className="tnum">{rejected}</b>
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-white/40" />
                  Pending{" "}
                  <b className="tnum">{QUEUE.length - approved - rejected}</b>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
