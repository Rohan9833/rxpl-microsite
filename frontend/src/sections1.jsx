import { Icon } from "./icons.jsx";
import { SCORING } from "./data.js";
import {
  Phone,
  SectionHead,
  Btn,
  RunChip,
  IllustrativeBadge,
} from "./parts.jsx";

import { useState, useEffect } from "react";

export const go = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const NAV = [
  ["how", "How it works"],
  ["scoring", "Scoring"],
  ["tournament", "Tournament"],
  ["app", "App"],
  ["approval", "Approval"],
  ["dashboard", "Head Office"],
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const jump = (id) => {
    setOpen(false);
    go(id);
  };
  return (
    <header className="sticky top-0 z-40 bg-white shadow-[0_10px_30px_-18px_rgba(14,8,38,.6)] backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-[1240px] items-center gap-6 px-5 @tab:h-[80px] @tab:px-10">
        <button
          onClick={() => jump("top")}
          aria-label="RxPL home"
          className="shrink-0"
        >
          <img
            src="/assets/rxpl-logo.png"
            alt="RxPL — Rxns • Players • Leaders"
            className="h-[54px] w-auto @tab:h-[62px]"
          />
        </button>
        <nav
          className="ml-auto hidden items-center gap-1 @desk:flex"
          aria-label="Sections"
        >
          {NAV.map(([id, label]) => (
            <button
              key={id}
              onClick={() => jump(id)}
              className="rounded-full px-3.5 py-2 text-[14px] font-semibold text-ink/70 transition hover:bg-lavender hover:text-ink"
            >
              {label}
            </button>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2 @desk:ml-2">
          <button
            onClick={() => jump("demo")}
            className="btn-primary hidden h-10 rounded-full px-4 font-display text-[13.5px] font-bold text-white @tab:px-5 @desk:inline-flex"
          >
            Request a Demo
          </button>
          <img
            src="/assets/Productbydigilateral.png"
            alt="Product by digiLATERAL"
            className="h-8 w-auto max-w-[118px] object-contain @tab:h-9 @desk:hidden"
          />
          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-10 w-10 place-items-center rounded-full border border-ink/15 text-ink @desk:hidden"
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>
      <div
        className="h-[3px] bg-gradient-to-r from-indigo via-magenta to-violet"
        aria-hidden="true"
      />
      {open && (
        <div className="rise absolute inset-x-0 top-full bg-white px-5 pb-6 pt-2 shadow-[0_30px_50px_-20px_rgba(14,8,38,.6)] @desk:hidden">
          {NAV.map(([id, label], i) => (
            <button
              key={id}
              onClick={() => jump(id)}
              className="flex w-full items-center justify-between border-b border-ink/10 py-4 text-left font-display text-lg font-bold text-ink"
            >
              <span>
                <span className="mr-3 font-score text-sm text-magenta tnum">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {label}
              </span>
              <Icon name="chevron" className="h-4 w-4 text-ink/30" />
            </button>
          ))}
          <Btn
            onClick={() => jump("demo")}
            className="mt-5 w-full"
            icon="arrow"
          >
            Request a Demo
          </Btn>
        </div>
      )}
    </header>
  );
}

function Stadium() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 60% at 78% 8%, rgba(122,53,190,.55), transparent 70%), radial-gradient(50% 50% at 10% 100%, rgba(227,18,122,.22), transparent 70%), linear-gradient(180deg, #0E0826 0%, #170B36 60%, #0E0826 100%)",
        }}
      />
      <div
        className="beam"
        style={{ right: "8%", transform: "rotate(18deg)", opacity: 0.7 }}
      />
      <div
        className="beam hidden @tab:block"
        style={{ right: "34%", transform: "rotate(-14deg)", opacity: 0.8 }}
      />
      <div
        className="lightbank hidden @tab:grid"
        style={{ right: "calc(8% + 17% - 22px)", top: "4%" }}
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <i key={i} />
        ))}
      </div>
      <div
        className="lightbank hidden @tab:grid"
        style={{ right: "calc(34% + 17% - 22px)", top: "2%" }}
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <i key={i} />
        ))}
      </div>
      <svg
        className="absolute bottom-0 left-0 h-[46%] w-full"
        viewBox="0 0 1440 420"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="stand" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#2a1660" />
            <stop offset="1" stopColor="#150a34" />
          </linearGradient>
          <linearGradient id="field" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#1c5b45" />
            <stop offset="1" stopColor="#0b2a22" />
          </linearGradient>
          <pattern
            id="crowd"
            width="9"
            height="7"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1.3" fill="#c9b6ff" opacity=".22" />
            <circle cx="6.5" cy="5" r="1.1" fill="#ff7cc0" opacity=".14" />
          </pattern>
          <pattern
            id="mow"
            width="80"
            height="420"
            patternUnits="userSpaceOnUse"
          >
            <rect width="40" height="420" fill="#fff" opacity=".035" />
          </pattern>
          <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#0E0826" stopOpacity="0" />
            <stop offset="1" stopColor="#0E0826" stopOpacity=".95" />
          </linearGradient>
        </defs>
        <ellipse cx="720" cy="470" rx="980" ry="330" fill="url(#stand)" />
        <ellipse cx="720" cy="470" rx="980" ry="330" fill="url(#crowd)" />
        <ellipse cx="720" cy="500" rx="800" ry="250" fill="url(#field)" />
        <ellipse cx="720" cy="500" rx="800" ry="250" fill="url(#mow)" />
        <ellipse
          cx="720"
          cy="505"
          rx="740"
          ry="225"
          fill="none"
          stroke="#fff"
          strokeOpacity=".28"
          strokeWidth="2"
        />
        <path d="M690 300h60l24 140h-108z" fill="#c9b48a" opacity=".22" />
        <rect width="1440" height="420" fill="url(#fade)" />
      </svg>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="section relative overflow-hidden bg-night text-white @desk:flex @desk:h-[calc(100svh-80px)] @desk:min-h-[680px] @desk:flex-col @desk:overflow-hidden"
    >
      <Stadium />
      <div className="relative mx-auto grid w-full max-w-[1320px] gap-2 px-5 pt-2 @tab:px-10 @tab:pt-14 @desk:flex-1 @desk:min-h-0 @desk:grid-cols-12 @desk:grid-rows-1 @desk:items-center @desk:gap-16 @desk:px-12 @desk:pt-8 @desk:pb-8">
        <div className="relative z-10 @desk:col-span-6 @desk:row-start-1 @desk:pt-0 @desk:max-w-[600px]">
          <div className="eyebrow flex items-center gap-1.5 !text-[0.6rem] text-white/70 whitespace-nowrap @desk:!text-[0.72rem]">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold shadow-[0_0_12px_#F6CD20]" />
            Field-force engagement for pharma
          </div>
          <h1 className="h-display mt-3 desktop-two-lines @desk:mt-5 @desk:max-w-[12ch]">
            Your Field Force.
            <br />
            <span className="bg-gradient-to-r from-pink via-[#FF2E93] to-magenta bg-clip-text text-transparent">
              Your Premier League.
            </span>
          </h1>
          <p className="hidden mt-5 max-w-[46ch] text-[1.05rem] leading-[1.8] text-white/75 @desk:block">
            Turn priority brand activities into cricket runs,
            <br className="hidden @desk:block" />
            regional competition, and measurable field-force
            <br className="hidden @desk:block" />
            engagement.
          </p>
          <div className="hidden mt-8 flex-row gap-3 @desk:flex">
            <Btn
              onClick={() => go("demo")}
              icon="arrow"
              className="h-14 justify-center px-8 text-base"
            >
              Request a Demo
            </Btn>
            <Btn
              onClick={() => go("how")}
              variant="ghost"
              className="h-14 justify-center px-8 text-base"
            >
              Explore RxPL
            </Btn>
          </div>
          <div className="hidden mt-8 w-full max-w-[570px] items-center justify-between gap-4 border-t border-white/10 pt-5 text-[13px] font-semibold text-white/55 @desk:flex @desk:text-[14px]">
            <span className="flex items-center gap-1.5 whitespace-nowrap">
              <Icon name="phone" className="h-4 w-4 shrink-0 text-pink" />
              iOS &amp; Android app
            </span>
            <span className="flex items-center gap-1.5 whitespace-nowrap">
              <Icon name="shield" className="h-4 w-4 shrink-0 text-pink" />
              Manager approval
            </span>
            <span className="flex items-center gap-1.5 whitespace-nowrap">
              <Icon name="chart" className="h-4 w-4 shrink-0 text-pink" />
              Head Office reports
            </span>
          </div>
        </div>
        <HeroVisual />
        <div className="flex flex-row gap-3 mt-7 @desk:col-span-6 @desk:row-start-3 @desk:hidden">
          <Btn
            onClick={() => go("demo")}
            icon="arrow"
            className="h-14 flex-1 justify-center px-3 text-sm @tab:px-8 @tab:text-base"
          >
            Request a Demo
          </Btn>
          <Btn
            onClick={() => go("how")}
            variant="ghost"
            className="h-14 flex-1 justify-center px-3 text-sm @tab:px-8 @tab:text-base"
          >
            Explore RxPL
          </Btn>
        </div>
        <p className="mt-2 max-w-[44ch] text-[0.8rem] leading-relaxed text-white/75 @tab:text-[1.2rem] @desk:col-span-6 @desk:row-start-2 @desk:hidden">
          Turn priority brand activities into cricket runs, regional
          competition, and measurable field-force engagement.
        </p>
        <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2 text-[13px] font-semibold text-white/55 @desk:hidden">
          <span className="flex items-center gap-2">
            <Icon name="phone" className="h-4 w-4 text-pink" />
            iOS &amp; Android app
          </span>
          <span className="flex items-center gap-2">
            <Icon name="shield" className="h-4 w-4 text-pink" />
            Manager approval
          </span>
          <span className="flex items-center gap-2">
            <Icon name="chart" className="h-4 w-4 text-pink" />
            Head Office reports
          </span>
        </div>
      </div>
      <Ticker />
    </section>
  );
}

const HERO_NOTIFICATION_TEXT = [
  ["It's gone all the way! A massive six! 🎉", "Mumbai Mavericks", "6 Runs"],
  ["Out of the park! Maximum six! 🎆", "Delhi Dynamos", "6 Runs"],
  ["He's cleared the ropes—six! 🎉", "Chennai Challengers", "6 Runs"],
  ["That ball disappears for six! ✨", "Jaipur Jaguars", "6 Runs"],
  ["The crowd erupts—six! 🎊", "Bengaluru Blasters", "6 Runs"],
  ["Timed to perfection—four runs! 🎉", "Punjab Panthers", "4 Runs"],
  ["Placed perfectly—four runs! 🎊", "Hyderabad Hawks", "4 Runs"],
  ["That shot races away for four! 🎊", "Kolkata Kings", "4 Runs"],
  ["He splits the field—four! ✨", "Lucknow Lions", "4 Runs"],
  ["Pure placement brings four! 🎉", "Gujarat Giants", "4 Runs"],
];

function HeroNotification() {
  const makeItem = (index) => {
    const [headline, team, score] = HERO_NOTIFICATION_TEXT[index];
    return { key: `${index}-${Math.random().toString(36).slice(2, 8)}`, index, headline, team, score };
  };

  const [queue, setQueue] = useState(() => [
    makeItem(0),
    makeItem(1 % HERO_NOTIFICATION_TEXT.length),
  ]);
  const [phase, setPhase] = useState("idle");

  // Use a chained timeout instead of an interval. Each cycle starts only
  // after the previous animation has fully settled.
  useEffect(() => {
    let startTimer;
    let finishTimer;
    let settleTimer;
    let cancelled = false;

    const scheduleNext = () => {
      startTimer = window.setTimeout(() => {
        if (cancelled) return;
        setPhase("animating");

        finishTimer = window.setTimeout(() => {
          if (cancelled) return;

          // Promote the exact incoming DOM item. In "settling", the promoted
          // item is styled at the center with transitions disabled, so it
          // cannot snap offscreen and back during the queue swap.
          setQueue(([current, next]) => {
            const newIncoming = makeItem((next.index + 1) % HERO_NOTIFICATION_TEXT.length);
            return [next, newIncoming];
          });
          setPhase("settling");

          settleTimer = window.setTimeout(() => {
            if (cancelled) return;
            setPhase("idle");
            scheduleNext();
          }, 30);
        }, 700);
      }, 3200);
    };

    scheduleNext();
    return () => {
      cancelled = true;
      window.clearTimeout(startTimer);
      window.clearTimeout(finishTimer);
      window.clearTimeout(settleTimer);
    };
  }, []);

  const renderNotification = (item, style) => (
    <div
      key={item.key}
      aria-label={`RxPL notification: ${item.headline}. ${item.team} · ${item.score}`}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        gap: "9px",
        boxSizing: "border-box",
        padding: "5px 12px",
        borderRadius: "18px",
        background: "linear-gradient(105deg, #281d49 0%, #57346b 55%, #793c68 100%)",
        border: "1px solid rgba(255,255,255,.16)",
        boxShadow: "0 14px 28px -12px rgba(0,0,0,.75)",
        color: "#fff",
        overflow: "hidden",
        ...style,
      }}
    >
      <img src="/assets/favicon.png" alt="" style={{ width: "40px", height: "40px", flexShrink: 0, objectFit: "contain", borderRadius: "0px", background: "#fff", padding: "3px", boxSizing: "border-box" }} />
      <div style={{ minWidth: 0, flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: "2px" }}>
        <div style={{ fontSize: "clamp(9px, 2.4vw, 13px)", lineHeight: "14px", fontWeight: 750, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{item.headline}</div>
        <div style={{ fontSize: "clamp(8px, 2.2vw, 12px)", lineHeight: "13px", fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{item.team} · {item.score}</div>
      </div>
      <span style={{ alignSelf: "flex-start", marginTop: "5px", flexShrink: 0, fontSize: "clamp(8px, 1.8vw, 10px)", lineHeight: "12px", color: "rgba(255,255,255,.7)" }}>now</span>
    </div>
  );

  const [outgoing, incoming] = queue;
  const transition = "transform 700ms cubic-bezier(.22,.68,.2,1), opacity 700ms ease";
  const isAnimating = phase === "animating";
  const isIdle = phase === "idle" || phase === "settling";

  const outgoingStyle = {
    transform: isAnimating ? "translateY(-110%)" : "translateY(0)",
    opacity: isAnimating ? 0 : 1,
    transition: isIdle ? "none" : transition,
    zIndex: 1,
  };
  const incomingStyle = {
    transform: isAnimating ? "translateY(0)" : "translateY(110%)",
    opacity: isAnimating ? 1 : 0,
    transition: isIdle ? "none" : transition,
    zIndex: 2,
  };

  return (
    <div
      className="absolute right-0 top-[38%] w-[78%] max-w-[360px] @tab:right-[2%] @desk:right-[3%] @desk:top-[54%] @desk:w-[65%] @desk:max-w-[340px]"
      style={{ height: "54px", overflow: "hidden" }}
    >
      {renderNotification(outgoing, outgoingStyle)}
      {renderNotification(incoming, incomingStyle)}
    </div>
  );
}
function HeroVisual() {
  return (
    <div className="relative h-[400px] @md:h-[460px] @tab:h-[560px] @desk:col-span-6 @desk:row-span-1 @desk:row-start-1 @desk:h-full @desk:min-h-0 @desk:overflow-hidden @desk:rounded-[36px]">
      <div className="pointer-events-none absolute inset-x-[8%] top-[8%] hidden h-[78%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(132,70,220,0.35),rgba(227,18,122,0.10)_45%,transparent_72%)] @desk:block" />
      <div className="pointer-events-none absolute inset-x-[12%] top-[12%] hidden aspect-square rounded-full border border-white/10 @desk:block" />
      <div className="absolute left-1/2 top-6 w-[52%] max-w-[250px] -translate-x-[95%] -rotate-[8deg] opacity-80 @desk:top-1/2 @desk:w-[33%] @desk:max-w-[210px] @desk:-translate-x-[90%] @desk:-translate-y-[38%]">
        <Phone
          src="/assets/app-upcoming-match.jpg"
          alt="RxPL app: Upcoming Match card"
        />
      </div>
      <div className="absolute left-1/2 top-0 w-[58%] max-w-[292px] -translate-x-[22%] rotate-[3deg] @desk:top-1/2 @desk:w-[39%] @desk:max-w-[240px] @desk:-translate-x-[18%] @desk:-translate-y-[40%]">
        <Phone
          src="/assets/app-player-profile.jpg"
          alt="RxPL app: Player Profile for Rohit Borah"
        />
      </div>
      <HeroNotification />
    </div>
  );
}

function Ticker() {
  return (
    <div className="relative shrink-0 border-y border-white/10 bg-[#0B061F]/90">
      <div className="ticker-window mx-auto max-w-[1240px] px-3 py-4 @tab:px-10 @desk:hidden">
        <div className="ticker-track flex w-max items-center gap-8">
          <div className="ticker-set flex shrink-0 items-center gap-2">
            <span className="eyebrow shrink-0 text-white/50">
              Runs on the board
            </span>
            <div className="flex shrink-0 gap-2">
              {[1, 2, 3, 4, 6].map((n) => (
                <RunChip key={n} n={n} size="sm" />
              ))}
            </div>
            <span className="h-5 w-px shrink-0 bg-white/15" />
            <span className="shrink-0 text-sm font-semibold text-white/70">
              Prescriptions
            </span>
            <span className="shrink-0 text-sm font-semibold text-white/70">
              POB
            </span>
            <span className="shrink-0 text-sm font-semibold text-white/70">
              Camps
            </span>
            <span className="shrink-0 text-sm font-semibold text-white/70">
              Doctor conversion
            </span>
          </div>
          <div
            className="ticker-set flex shrink-0 items-center gap-2"
            aria-hidden="true"
          >
            <span className="eyebrow shrink-0 text-white/50">
              Runs on the board
            </span>
            <div className="flex shrink-0 gap-2">
              {[1, 2, 3, 4, 6].map((n) => (
                <RunChip key={n} n={n} size="sm" />
              ))}
            </div>
            <span className="h-5 w-px shrink-0 bg-white/15" />
            <span className="shrink-0 text-sm font-semibold text-white/70">
              Prescriptions
            </span>
            <span className="shrink-0 text-sm font-semibold text-white/70">
              POB
            </span>
            <span className="shrink-0 text-sm font-semibold text-white/70">
              Camps
            </span>
            <span className="shrink-0 text-sm font-semibold text-white/70">
              Doctor conversion
            </span>
          </div>
        </div>
      </div>
      <div className="hide-scroll mx-auto hidden max-w-[1240px] items-center gap-2 overflow-x-auto px-3 py-4 @tab:px-10 @desk:flex @desk:justify-between @desk:gap-4">
        <span className="eyebrow shrink-0 text-white/50">
          Runs on the board
        </span>
        <div className="flex shrink-0 gap-2">
          {[1, 2, 3, 4, 6].map((n) => (
            <RunChip key={n} n={n} size="sm" />
          ))}
        </div>
        <span className="h-5 w-px shrink-0 bg-white/15" />
        <span className="shrink-0 text-sm font-semibold text-white/70">
          Prescriptions
        </span>
        <span className="shrink-0 text-sm font-semibold text-white/70">
          POB
        </span>
        <span className="shrink-0 text-sm font-semibold text-white/70">
          Camps
        </span>
        <span className="shrink-0 text-sm font-semibold text-white/70">
          Doctor conversion
        </span>
        <span className="hidden shrink-0 text-sm text-white/45 @desk:block">
          Scoring rules set by your company
        </span>
      </div>
    </div>
  );
}

/* ---------- How it works ---------- */

const STEPS = [
  {
    icon: "clipboard",
    title: "Business Activities",
    text: "MRs log the priority work you choose: prescriptions, POB, camps and doctor conversions.",
  },
  {
    icon: "sliders",
    title: "Scoring Rules",
    text: "Your company decides what each activity is worth on the scoreboard.",
  },
  {
    icon: "bat",
    title: "Cricket Runs",
    text: "Each approved activity becomes 1, 2, 3, 4 or 6 runs on the player’s scorecard.",
  },
  {
    icon: "trophy",
    title: "Team Competition",
    text: "Runs roll up to regional and zonal teams competing in a league or knockout.",
  },
];

function StepVisual({ i }) {
  if (i === 0)
    return (
      <div className="flex flex-wrap gap-1.5">
        {["Rx", "POB", "Camps", "Conversions"].map((c) => (
          <span
            key={c}
            className="rounded-md bg-lavender px-2 py-1 text-[11px] font-bold text-royal"
          >
            {c}
          </span>
        ))}
      </div>
    );
  if (i === 1)
    return (
      <div className="flex items-center justify-between rounded-lg bg-lavender px-3 py-2 text-[12px] font-semibold text-ink">
        <span>Brand B Rx</span>
        <span className="font-score text-base font-bold text-magenta">= 6</span>
      </div>
    );
  if (i === 2)
    return (
      <div className="flex items-center gap-2 rounded-lg bg-night px-3 py-2">
        <span className="led text-2xl leading-none">4</span>
        <span
          className="led text-2xl leading-none text-pink"
          style={{
            color: "#FF4DA8",
            textShadow: "0 0 14px rgba(255,77,168,.5)",
          }}
        >
          6
        </span>
        <span className="ml-auto text-[11px] font-bold uppercase tracking-wider text-white/60">
          runs
        </span>
      </div>
    );
  return (
    <div className="space-y-1">
      {[92, 74, 58].map((w, k) => (
        <div key={k} className="flex items-center gap-2">
          <span className="w-3 font-score text-[12px] font-bold text-muted">
            {k + 1}
          </span>
          <span
            className="h-2 rounded-full bg-gradient-to-r from-royal to-magenta"
            style={{ width: `${w}%` }}
          />
        </div>
      ))}
    </div>
  );
}

export function HowItWorks() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const t = setInterval(() => setActive((a) => (a + 1) % 4), 2400);
    return () => clearInterval(t);
  }, []);
  return (
    <section id="how" className="section bg-mist py-20 text-ink @tab:py-28">
      <div className="mx-auto max-w-[1240px] px-5 py-3 @tab:px-10">
        <SectionHead
          eyebrow="How RxPL works"
          title="Every Activity Counts. Every Run Matters."
          intro="RxPL is a business activity engagement platform built around cricket-style competition. It is not fantasy cricket, betting, a CRM or a sales report."
        />
        <ol className="relative mt-5 grid gap-4 @desk:grid-cols-4 @desk:gap-5">
          <div className="flowline absolute left-[12%] right-[12%] top-[38px] hidden h-[2px] opacity-50 @desk:block" />
          <div className="flowline-v absolute bottom-10 left-[27px] top-10 w-[2px] opacity-40 @desk:hidden" />
          {STEPS.map((s, i) => (
            <li
              key={s.title}
              onMouseEnter={() => setActive(i)}
              className={`relative flex gap-2 rounded-2xl border bg-white p-2 transition duration-500 @desk:flex-col @desk:gap-3 @desk:p-4 ${active === i ? "border-magenta/40 shadow-[0_24px_50px_-28px_rgba(227,18,122,.55)] @desk:-translate-y-1" : "border-ink/10"}`}
            >
              <div
                className={`relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-xl transition duration-500 @desk:h-11 @desk:w-11 ${active === i ? "bg-gradient-to-br from-royal to-magenta text-white" : "bg-lavender text-royal"}`}
              >
                <Icon name={s.icon} className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-score text-xs font-bold tracking-widest text-magenta tnum">
                  STEP {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-0.5 text-base font-extrabold tracking-tight @desk:text-lg">
                  {s.title}
                </h3>
                <p className="mt-1 text-sm leading-snug text-muted">{s.text}</p>
                <div className="mt-2">
                  <StepVisual i={i} />
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- Configurable scoring ---------- */

const CALL = { 1: "1 RUN", 2: "2 RUNS", 3: "3 RUNS", 4: "FOUR", 6: "SIX" };

export function Scoring() {
  const [cat, setCat] = useState(0);
  const [hit, setHit] = useState(null);
  const [log, setLog] = useState([]);
  const c = SCORING[cat];
  const total = log.reduce((s, r) => s + r, 0);
  const pick = (k) => {
    setCat(k);
    setHit(null);
  };
  const score = (r) => {
    setHit(r);
    setLog((l) => [...l, r.runs]);
  };
  const boundaries = log.filter((r) => r === 4).length;
  const sixes = log.filter((r) => r === 6).length;
  return (
    <section
      id="scoring"
      className="section relative overflow-hidden bg-night py-20 text-white @tab:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 85% 20%, rgba(122,53,190,.35), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-[1240px] px-5 @tab:px-10">
        <SectionHead
          dark
          eyebrow="Configurable scoring"
          title={
            <>
              You Set the Rules.
              <br />
              They Score the Runs.
            </>
          }
          intro="Every client sets its own scoring. Decide which activities matter most and what each one is worth on the scoreboard."
        />

        <div className="mt-5 grid gap-6 @desk:grid-cols-12">
          <div className="scoreboard overflow-hidden rounded-3xl @desk:col-span-8">
            <div
              className="flex w-full gap-1 border-b border-white/10 p-1"
              role="tablist"
              aria-label="Activity category"
            >
              {SCORING.map((s, k) => (
                <button
                  key={s.id}
                  role="tab"
                  aria-selected={cat === k}
                  onClick={() => pick(k)}
                  className={`flex min-w-0 flex-1 flex-col items-center justify-center gap-1 rounded-xl px-1 py-2 text-center text-[10px] font-bold leading-tight transition @tab:flex-row @tab:gap-2 @tab:px-3 @tab:py-3 @tab:text-sm ${cat === k ? "bg-white text-ink" : "text-white/65 hover:bg-white/5 hover:text-white"}`}
                >
                  <Icon name={s.icon} className="h-[18px] w-[18px] shrink-0" />
                  <span className="min-w-0 whitespace-normal">{s.label}</span>
                </button>
              ))}
            </div>
            <div className="grid @tab:grid-cols-[1fr_250px]">
              <div className="order-2 p-4 @tab:order-1 @tab:p-6">
                <div className="text-[11px] font-bold uppercase tracking-[.2em] text-white/40">
                  Tap an activity to score it
                </div>
                <ul className="mt-3 space-y-2" key={c.id}>
                  {c.rules.map((r, k) => (
                    <li
                      key={r.act}
                      className="rise"
                      style={{ animationDelay: `${k * 50}ms` }}
                    >
                      <button
                        onClick={() => score(r)}
                        className={`group flex w-full items-center gap-1.5 rounded-xl border px-2 py-3 text-left transition ${hit === r ? "border-gold/60 bg-gold/10" : "border-white/10 bg-white/[.03] hover:border-white/25 hover:bg-white/[.06]"}`}
                      >
                        <span className="flex-1">
                          <span className="block text-[15px] font-bold text-white">
                            {r.act}
                          </span>
                        </span>
                        <RunChip n={r.runs} />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-1 flex flex-col border-b border-white/10 bg-black/20 p-3 @tab:order-2 @tab:border-b-0 @tab:border-l">
                <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-[.2em] text-white/45">
                  <span>Scoreboard</span>
                  <span className="flex items-center gap-1.5 text-pink">
                    <span className="live-dot h-1.5 w-1.5 rounded-full bg-pink" />
                    Demo
                  </span>
                </div>
                <div className="flex flex-1 items-center gap-4 py-4 @tab:flex-col @tab:justify-center @tab:py-8">
                  <div
                    key={log.length}
                    className={`led pop text-[84px] leading-none tnum @tab:text-[120px] ${hit ? "" : "opacity-30"}`}
                  >
                    {hit ? hit.runs : "0"}
                  </div>
                  <div className="@tab:text-center">
                    <div className="font-score text-2xl font-bold tracking-[.12em] text-white">
                      {hit ? CALL[hit.runs] : "READY"}
                    </div>
                    <div className="mt-1 text-[12px] text-white/50">
                      {hit ? hit.act : "Pick an activity"}
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-4 text-center">
                  {[
                    ["Total", total],
                    ["4s", boundaries],
                    ["6s", sixes],
                  ].map(([k, v]) => (
                    <div key={k}>
                      <div className="font-score text-2xl font-bold tnum">
                        {v}
                      </div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                        {k}
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => {
                    setLog([]);
                    setHit(null);
                  }}
                  className="mt-4 text-[12px] font-semibold text-white/50 underline-offset-4 hover:text-white hover:underline"
                >
                  Reset scoreboard
                </button>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3 border-t border-white/10 px-4 py-3 @tab:px-6">
              <IllustrativeBadge>Illustrative example</IllustrativeBadge>
              <span className="text-[12px] text-white/45">
                Simplified example. Your scoring model is designed with you.
              </span>
            </div>
          </div>

          <aside className="grid content-start gap-6 @desk:col-span-4">
            <div className="glass rounded-3xl p-6">
              <div className="text-[11px] font-bold uppercase tracking-[.2em] text-white/45">
                Your priorities, your weighting
              </div>
              <p className="mt-3 text-[15px] leading-relaxed text-white/80">
                Weight runs by brand, dosage, doctor or business value. Put
                priority brands on 4s and 6s and everyday activity on singles.
              </p>
              <div className="mt-5 flex gap-2">
                {[1, 2, 3, 4, 6].map((n) => (
                  <RunChip key={n} n={n} />
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 p-6">
              <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.2em] text-gold">
                <Icon name="sliders" className="h-4 w-4" />
                In your demo
              </div>
              <p className="mt-3 text-[15px] leading-relaxed text-white/70">
                We map a scoring model to your brand plan, live, with your own
                brands and doctor segments.
              </p>
              <button
                onClick={() => go("demo")}
                className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-bold text-pink hover:gap-2.5 transition-all"
              >
                Book a scoring walkthrough
                <Icon name="arrow" className="h-4 w-4" />
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
