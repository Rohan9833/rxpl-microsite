// All team names, scores and rules below are fictional, illustrative sample data.
export const TEAMS = {
  MW: { name: 'Mumbai Winners', short: 'MW', zone: 'West', c1: '#1E4FD8', c2: '#F6CD20' },
  CC: { name: 'Chennai Chargers', short: 'CC', zone: 'South', c1: '#F2A100', c2: '#1A1A40' },
  DS: { name: 'Delhi Strikers', short: 'DS', zone: 'North', c1: '#D7263D', c2: '#1B2A6B' },
  KT: { name: 'Kolkata Titans', short: 'KT', zone: 'East', c1: '#5B2A9E', c2: '#E8B53A' },
  HH: { name: 'Hyderabad Hawks', short: 'HH', zone: 'South', c1: '#F06A1D', c2: '#231F20' },
  AA: { name: 'Ahmedabad Aces', short: 'AA', zone: 'West', c1: '#0E8A7E', c2: '#F3EAFB' },
  LL: { name: 'Lucknow Lions', short: 'LL', zone: 'North', c1: '#11A3D8', c2: '#0E2A47' },
  BB: { name: 'Bhubaneswar Blazers', short: 'BB', zone: 'East', c1: '#C2185B', c2: '#FFD54F' },
};

export const LEAGUE = [
  { t: 'MW', p: 7, w: 6, l: 1, runs: 2148, pts: 12, form: 'WWLWW' },
  { t: 'DS', p: 7, w: 5, l: 2, runs: 1986, pts: 10, form: 'WLWWW' },
  { t: 'CC', p: 7, w: 5, l: 2, runs: 1932, pts: 10, form: 'WWWLW' },
  { t: 'KT', p: 7, w: 4, l: 3, runs: 1760, pts: 8, form: 'LWWLW' },
  { t: 'HH', p: 7, w: 3, l: 4, runs: 1644, pts: 6, form: 'WLLWL' },
  { t: 'AA', p: 7, w: 2, l: 5, runs: 1512, pts: 4, form: 'LLWLW' },
  { t: 'LL', p: 7, w: 2, l: 5, runs: 1468, pts: 4, form: 'LWLLL' },
  { t: 'BB', p: 7, w: 1, l: 6, runs: 1301, pts: 2, form: 'LLLWL' },
];

export const KNOCKOUT = {
  qf: [
    { a: 'MW', b: 'BB', sa: 342, sb: 287, w: 'MW' },
    { a: 'KT', b: 'HH', sa: 298, sb: 311, w: 'HH' },
    { a: 'DS', b: 'LL', sa: 326, sb: 274, w: 'DS' },
    { a: 'CC', b: 'AA', sa: 319, sb: 301, w: 'CC' },
  ],
  sf: [
    { a: 'MW', b: 'HH', sa: 356, sb: 330, w: 'MW' },
    { a: 'DS', b: 'CC', sa: 0, sb: 0, w: null, date: 'Upcoming' },
  ],
  final: { a: 'MW', b: null, date: 'Final' },
};

export const SCORING = [
  { id: 'rx', label: 'Prescriptions', icon: 'rx', rules: [
    { act: 'Brand A prescription', runs: 4 },
    { act: 'Brand B prescription', runs: 6 },
  ] },
  { id: 'pob', label: 'POB', icon: 'receipt', rules: [
    { act: 'Order booked', runs: 2 },
    { act: 'Qualifying POB milestone', runs: 6 },
  ] },
  { id: 'camp', label: 'Camps', icon: 'flag', rules: [
    { act: 'Camp conducted', runs: 2 },
    { act: 'Camp target met', runs: 4 },
  ] },
  { id: 'conv', label: 'Doctor Conversion', icon: 'userCheck', rules: [
    { act: 'Doctor converted', runs: 3 },
    { act: 'Priority doctor converted', runs: 6 },
  ] },
];

export const SCREENS = [
  { id: 'profile', src: 'assets/app-player-profile.jpg', title: 'Player Profile', text: 'Every MR gets a personal scorecard with runs, boundaries and recent form.' },
  { id: 'compare', src: 'assets/app-compare-players.jpg', title: 'Player vs Player', text: 'Head-to-head comparison that keeps the competition personal.' },
  { id: 'match', src: 'assets/app-match-scorecard.jpg', title: 'Match Centre', text: 'Live, upcoming and previous matches with full scorecards.' },
];

export const ADMIN_NAV = ['Dashboard', 'TeamWise Stats', 'RealTime Overview', 'Reports', 'Match Schedule', 'All Players', 'Matches'];

export const PLAYERS = [
  { n: 'Ananya Kulkarni', t: 'MW', m: 7, r: 412, c: 2, h: 3, f: 38, s: 22 },
  { n: 'Rahul Menon', t: 'CC', m: 7, r: 388, c: 1, h: 4, f: 41, s: 17 },
  { n: 'Vikram Sethi', t: 'DS', m: 7, r: 361, c: 1, h: 3, f: 33, s: 19 },
  { n: 'Sneha Banerjee', t: 'KT', m: 7, r: 344, c: 1, h: 2, f: 30, s: 18 },
  { n: 'Arjun Reddy', t: 'HH', m: 6, r: 317, c: 0, h: 4, f: 35, s: 12 },
  { n: 'Meera Joshi', t: 'AA', m: 7, r: 298, c: 0, h: 3, f: 29, s: 13 },
];

export const FIXTURES = [
  { d: 'Mon 08 Dec', a: 'MW', b: 'DS', s: 'League match' },
  { d: 'Tue 09 Dec', a: 'CC', b: 'KT', s: 'League match' },
  { d: 'Thu 11 Dec', a: 'HH', b: 'AA', s: 'League match' },
  { d: 'Fri 12 Dec', a: 'LL', b: 'BB', s: 'League match' },
];
