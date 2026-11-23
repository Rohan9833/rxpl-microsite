RxPL microsite, final version (React 18 + Tailwind CSS 3.4, frontend only)

dist/          Ready-to-host site. Upload this folder to any static host
               (Netlify, Vercel, S3, cPanel) and open index.html.
src/           Source: main.jsx (preview shell), sections1-3.jsx (site sections),
               design.jsx (design system page), parts.jsx, icons.jsx, data.js, styles.css
build.sh       Rebuilds dist/assets/app.css and dist/assets/app.js from src/

To edit and rebuild:
  npm install
  npm run build

Notes
- React loads from cdnjs; fonts from Google Fonts.
- Layouts use container queries (@tab = 760px, @desk = 1060px), so the
  Desktop/Tablet/Mobile switcher shows true responsive layouts.
- The demo form validates in the browser only; connect src/sections3.jsx -> Demo()
  submit handler to your backend or CRM before going live.
- The top preview bar (device switcher, design system) is for review. To ship the
  plain site, render <Site /> instead of <App /> at the end of src/main.jsx.
- Privacy Policy link is a placeholder.
