# Sithija Ranathunga Portfolio (MERN)
## Run locally
    cd server && cp .env.example .env && npm install && npm run dev
    cd client && npm install && npm run dev      # http://localhost:5173 (proxies /api to :5000)
Add your photo, CV and screenshots under `client/public/` using the filenames in `client/src/data/portfolio.js`.
Missing images show a labelled "Replace me" placeholder. Contact messages are stored only if `MONGODB_URI` is set.
