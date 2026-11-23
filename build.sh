set -e
cd "$(dirname "$0")"
npx tailwindcss -i src/styles.css -o dist/assets/app.css --minify 2>&1 | tail -1
npx esbuild src/main.jsx --bundle --minify --jsx-factory=React.createElement --jsx-fragment=React.Fragment --target=es2019 --outfile=dist/assets/app.js 2>&1 | tail -3
cp src/index.html dist/index.html
ls -la dist dist/assets | head -30
