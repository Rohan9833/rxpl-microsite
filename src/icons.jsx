// Line icons drawn on a 24px grid (Lucide-style geometry).
const P = {
  arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
  menu: <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h10" /></>,
  close: <><path d="M6 6l12 12" /><path d="M18 6 6 18" /></>,
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  checkCircle: <><circle cx="12" cy="12" r="9" /><path d="m8 12.3 2.8 2.8L16.2 9.6" /></>,
  xCircle: <><circle cx="12" cy="12" r="9" /><path d="m9 9 6 6" /><path d="m15 9-6 6" /></>,
  clipboard: <><rect x="6" y="4.5" width="12" height="16" rx="2" /><path d="M9 4.5V3.6c0-.3.3-.6.6-.6h4.8c.3 0 .6.3.6.6v.9" /><path d="M9 10h6" /><path d="M9 14h4" /></>,
  sliders: <><path d="M4 6h9" /><path d="M17 6h3" /><circle cx="15" cy="6" r="2" /><path d="M4 12h3" /><path d="M11 12h9" /><circle cx="9" cy="12" r="2" /><path d="M4 18h11" /><path d="M19 18h1" /><circle cx="17" cy="18" r="2" /></>,
  bat: <><path d="M14.5 3.5 20.5 9.5 10 20a2.1 2.1 0 0 1-3 0l-3-3a2.1 2.1 0 0 1 0-3z" /><path d="m3 21 2.5-2.5" /><circle cx="18.5" cy="18.5" r="2" /></>,
  trophy: <><path d="M8 4h8v5a4 4 0 0 1-8 0z" /><path d="M8 6H5a3 3 0 0 0 3 4" /><path d="M16 6h3a3 3 0 0 1-3 4" /><path d="M12 13v4" /><path d="M8.5 20h7" /><path d="M9.5 17h5v3h-5z" /></>,
  users: <><circle cx="9" cy="8" r="3.2" /><path d="M3.5 19c.6-3 2.8-4.6 5.5-4.6s4.9 1.6 5.5 4.6" /><circle cx="17" cy="9" r="2.4" /><path d="M16 14.4c2.3 0 4 1.3 4.5 3.8" /></>,
  chart: <><path d="M4 20V4" /><path d="M4 20h16" /><rect x="7" y="12" width="3" height="5" rx=".6" /><rect x="12" y="8" width="3" height="9" rx=".6" /><rect x="17" y="5" width="3" height="12" rx=".6" /></>,
  bell: <><path d="M6 16V11a6 6 0 1 1 12 0v5l1.5 2h-15z" /><path d="M10 20.5a2 2 0 0 0 4 0" /></>,
  phone: <><rect x="6.5" y="2.5" width="11" height="19" rx="2.5" /><path d="M10.5 18.5h3" /></>,
  shield: <><path d="M12 3 19.5 6v5.5c0 4.5-3.2 8-7.5 9.5-4.3-1.5-7.5-5-7.5-9.5V6z" /><path d="m8.8 12 2.3 2.3 4.2-4.4" /></>,
  eye: <><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" /><circle cx="12" cy="12" r="3" /></>,
  target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.3" /></>,
  zap: <path d="M13 2.5 4.5 13.5H12l-1 8 8.5-11H12z" />,
  rx: <><path d="M6 20V4h5.5a3.5 3.5 0 0 1 0 7H6" /><path d="m10.5 11 8 9" /><path d="m19 13-5 6" /></>,
  receipt: <><path d="M6 3h12v18l-3-2-3 2-3-2-3 2z" /><path d="M9 8h6" /><path d="M9 12h6" /><path d="M9 16h3" /></>,
  flag: <><path d="M5 21V4" /><path d="M5 4h11l-2 4 2 4H5" /></>,
  userCheck: <><circle cx="9" cy="8" r="3.5" /><path d="M3 20c.7-3.4 3-5.2 6-5.2 1.3 0 2.4.3 3.4.9" /><path d="m15 17 2 2 4-4.5" /></>,
  upload: <><path d="M12 15V4" /><path d="m7.5 8.5 4.5-4.5 4.5 4.5" /><path d="M4.5 15v3.5a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V15" /></>,
  calendar: <><rect x="3.5" y="5" width="17" height="15.5" rx="2" /><path d="M3.5 10h17" /><path d="M8 3v4" /><path d="M16 3v4" /></>,
  file: <><path d="M6 3h8l4 4v14H6z" /><path d="M14 3v4h4" /><path d="M9 13h6" /><path d="M9 17h6" /></>,
  activity: <path d="M3 12h4l2.5-6 5 12 2.5-6H21" />,
  grid: <><rect x="4" y="4" width="7" height="7" rx="1.5" /><rect x="13" y="4" width="7" height="7" rx="1.5" /><rect x="4" y="13" width="7" height="7" rx="1.5" /><rect x="13" y="13" width="7" height="7" rx="1.5" /></>,
  list: <><path d="M9 6h11" /><path d="M9 12h11" /><path d="M9 18h11" /><circle cx="4.5" cy="6" r="1" /><circle cx="4.5" cy="12" r="1" /><circle cx="4.5" cy="18" r="1" /></>,
  swap: <><path d="M7 4 3.5 7.5 7 11" /><path d="M3.5 7.5h13" /><path d="m17 13 3.5 3.5L17 20" /><path d="M20.5 16.5h-13" /></>,
  apple: <path d="M15.5 3c.2 1.4-.4 2.7-1.2 3.6-.9.9-2 1.4-3 1.3-.2-1.3.4-2.6 1.2-3.5.8-.8 2-1.4 3-1.4zM19 16.8c-.5 1.1-.7 1.6-1.4 2.6-.9 1.4-2.2 3.1-3.8 3.1-1.4 0-1.8-.9-3.7-.9s-2.3.9-3.7.9c-1.6 0-2.8-1.6-3.7-3C.3 15.6 0 11 1.7 8.6c1.2-1.7 3-2.6 4.7-2.6 1.8 0 2.9.9 4.3.9 1.4 0 2.3-.9 4.3-.9 1.5 0 3.1.8 4.2 2.2-3.7 2-3.1 7.3-.2 8.6z" />,
  android: <><path d="M6 10h12v7.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 17.5z" /><path d="M6.3 9a5.7 5.7 0 0 1 11.4 0z" /><path d="m8 4.5 1.2 1.8" /><path d="m16 4.5-1.2 1.8" /><path d="M3.5 11v5" /><path d="M20.5 11v5" /><path d="M9.5 19v2.5" /><path d="M14.5 19v2.5" /></>,
  chevron: <path d="m9 6 6 6-6 6" />,
  monitor: <><rect x="3" y="4" width="18" height="12" rx="1.8" /><path d="M8 20h8" /><path d="M12 16v4" /></>,
  palette: <><path d="M12 3a9 9 0 1 0 0 18c1.2 0 1.8-.8 1.8-1.7 0-1.2-1-1.6-1-2.6 0-.9.7-1.6 1.6-1.6H17a4 4 0 0 0 4-4C21 6.6 17 3 12 3z" /><circle cx="7.5" cy="11" r="1.1" /><circle cx="10" cy="7" r="1.1" /><circle cx="15" cy="7" r="1.1" /></>,
  tablet: <><rect x="4.5" y="2.5" width="15" height="19" rx="2.2" /><path d="M11 18.5h2" /></>,
};

export function Icon({ name, className = 'w-5 h-5', stroke = 1.8 }) {
  const filled = name === 'apple';
  return (
    <svg viewBox="0 0 24 24" className={className} fill={filled ? 'currentColor' : 'none'} stroke={filled ? 'none' : 'currentColor'}
      strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {P[name]}
    </svg>
  );
}
