@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

:root {
  --bg-primary: #0d0b09;
  --bg-secondary: #171310;
  --bg-surface: #1d1916;
  --bg-elevated: #221e1b;
  --border: rgba(255,255,255,0.08);
  --text: #f5f0ea;
  --text-muted: #b4a89e;
  --gold: #d4ba85;
  --hydro: #6ec7ff;
  --pyro: #ff7d5c;
  --geo: #f0c66a;
  --electro: #b985ff;
  --anemo: #7be0c3;
  --dendro: #7fe07b;
  --shadow: rgba(0,0,0,0.28);
  --radius: 14px;
  --panel-gap: 18px;
}

* {
  box-sizing: border-box;
}

html, body, #root {
  margin: 0;
  min-height: 100%;
  background: var(--bg-primary);
  color: var(--text);
  font-family: 'Inter', sans-serif;
}

body {
  background:
    radial-gradient(circle at top, rgba(255, 165, 90, 0.08), transparent 30%),
    var(--bg-primary);
}

button, input, select {
  font: inherit;
}

button {
  border: 1px solid var(--border);
  background: rgba(255,255,255,0.02);
  color: var(--text);
  border-radius: 10px;
  padding: 0.8rem 1.1rem;
  cursor: pointer;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

button:hover {
  transform: translateY(-1px);
  border-color: rgba(255,255,255,0.15);
}

button.primary {
  background: linear-gradient(135deg, var(--gold), rgba(255,255,255,0.12));
  border-color: rgba(212,186,133,0.3);
  color: #1c140f;
  font-weight: 700;
}

img {
  display: block;
  max-width: 100%;
}

.page-shell {
  max-width: 1480px;
  margin: 0 auto;
  padding: 28px 22px 48px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 18px;
}

.topbar h1 {
  margin: 0;
  font-size: clamp(1.8rem, 2vw, 2.8rem);
  letter-spacing: -0.04em;
}

.topbar-actions {
  display: flex;
  gap: 10px;
}

.eyebrow {
  color: var(--text-muted);
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.eyebrow.muted {
  opacity: 0.9;
}

.account-panel,
.panel {
  background: rgba(29, 25, 22, 0.95);
  border: 1px solid var(--border);
  box-shadow: 0 18px 40px var(--shadow);
  border-radius: var(--radius);
}

.content-grid {
  display: grid;
  grid-template-columns: 1.7fr 1.1fr;
  gap: var(--panel-gap);
}

.account-panel {
  grid-column: 1 / -1;
  padding: 18px 20px;
}

.account-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.account-name {
  margin-top: 6px;
  font-size: 2rem;
  letter-spacing: -0.04em;
}

.uid-pill {
  background: rgba(212,186,133,0.12);
  border: 1px solid rgba(212,186,133,0.3);
  color: var(--gold);
  border-radius: 999px;
  padding: 0.5rem 0.8rem;
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.meta-row {
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
  margin-top: 14px;
  color: var(--text-muted);
  font-size: 0.82rem;
}

.hero {
  grid-column: 1 / -1;
  position: relative;
  overflow: hidden;
  min-height: 360px;
  background: linear-gradient(135deg, rgba(110,199,255,0.15), rgba(0,0,0,0.32));
}

.hero.hydro {
  border-color: rgba(110,199,255,0.35);
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 75% 20%, rgba(110,199,255,0.28), transparent 30%);
}

.hero-content {
  position: relative;
  z-index: 1;
  height: 100%;
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  align-items: end;
  gap: 18px;
  padding: 30px 28px 24px;
}

.hero-copy {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 10px;
}

.hero-copy h2 {
  margin: 0;
  font-size: clamp(2.3rem, 4vw, 4rem);
  letter-spacing: -0.06em;
}

.hero-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  color: var(--text-muted);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.72rem;
}

.hero-subcopy {
  color: #e1e1e1;
  font-size: 1rem;
}

.hero-art {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}

.hero-art img {
  width: min(100%, 430px);
  height: 280px;
  object-fit: cover;
  border-radius: 16px 16px 0 0;
  border: 1px solid rgba(255,255,255,0.08);
  filter: saturate(1.2) contrast(1.1);
}

.stats-row {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(4, minmax(150px, 1fr));
  gap: var(--panel-gap);
}

.stat-card {
  padding: 16px 18px;
  min-height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.stat-card div {
  color: var(--text-muted);
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.stat-card strong {
  margin-top: 8px;
  font-size: clamp(1.3rem, 2vw, 2rem);
  letter-spacing: -0.04em;
}

.stat-card.neutral {
  border-color: rgba(255,255,255,0.04);
}

.stat-card.positive {
  border-color: rgba(127,224,123,0.22);
}

.stat-card.warning {
  border-color: rgba(255, 132, 80, 0.22);
}

.overview-panel,
.list-panel,
.goal-panel,
.banner-panel,
.guide-panel {
  padding: 18px 18px 12px;
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--border);
  margin-bottom: 12px;
  font-size: 0.72rem;
  color: var(--text-muted);
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.section-header a {
  color: var(--gold);
  text-decoration: none;
}

.card-grid.compact {
  display: grid;
  grid-template-columns: repeat(2, minmax(180px, 1fr));
  gap: 12px;
}

.mini-card {
  padding: 12px 14px;
  background: rgba(255,255,255,0.02);
  border: 1px solid var(--border);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  min-height: 96px;
}

.mini-card label {
  color: var(--text-muted);
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.mini-card strong {
  margin-top: 12px;
  font-size: 1.08rem;
}

.mini-card small {
  margin-top: 6px;
  color: var(--text-muted);
}

.character-list,
.goal-stack,
.banner-stack {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.character-row,
.goal-row,
.banner-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 12px;
  background: rgba(255,255,255,0.02);
  border: 1px solid var(--border);
  border-radius: 12px;
}

.char-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.char-left img {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  object-fit: cover;
}

.char-left strong,
.goal-label-row strong,
.banner-row strong {
  display: block;
}

.char-left small,
.banner-row small {
  color: var(--text-muted);
}

.char-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  color: var(--text-muted);
  font-size: 0.76rem;
}

.char-right em {
  color: var(--gold);
  font-style: normal;
  font-size: 0.82rem;
}

.wish-box {
  display: grid;
  grid-template-columns: repeat(3, minmax(140px, 1fr));
  gap: 12px;
}

.wish-box > div {
  padding: 14px 12px;
  border: 1px solid var(--border);
  background: rgba(255,255,255,0.02);
  border-radius: 12px;
}

.wish-box label {
  display: block;
  color: var(--text-muted);
  font-size: 0.72rem;
  letter-spacing: 0.09em;
  text-transform: uppercase;
}

.wish-box strong {
  display: block;
  margin-top: 8px;
  font-size: 1.3rem;
}

.guide-panel {
  grid-column: 1 / 2;
}

.guide-article {
  color: #f0e9e4;
  line-height: 1.75;
}

.guide-article h2,
.guide-article h3 {
  color: var(--gold);
  margin: 1.1rem 0 0.6rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-size: 0.8rem;
}

.guide-article p,
.guide-article li {
  color: var(--text-muted);
}

.guide-article ul {
  margin: 0.6rem 0 0.8rem 1.1rem;
  padding: 0;
}

.goal-row {
  flex-direction: column;
  align-items: stretch;
}

.goal-label-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

.goal-label-row span {
  color: var(--gold);
}

.progress-bar {
  width: 100%;
  height: 8px;
  border-radius: 999px;
  background: rgba(255,255,255,0.05);
  overflow: hidden;
  margin-top: 10px;
}

.progress-bar span {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, var(--hydro), var(--gold));
}

.banner-row span {
  color: var(--gold);
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

@media (max-width: 900px) {
  .content-grid {
    grid-template-columns: 1fr;
  }

  .guide-panel {
    grid-column: auto;
  }

  .stats-row,
  .wish-box,
  .card-grid.compact {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 620px) {
  .page-shell {
    padding-left: 14px;
    padding-right: 14px;
  }

  .topbar,
  .account-header,
  .hero-content {
    grid-template-columns: 1fr;
    display: grid;
  }

  .topbar-actions {
    justify-content: flex-start;
    flex-wrap: wrap;
  }

  .stats-row,
  .wish-box,
  .card-grid.compact {
    grid-template-columns: 1fr;
  }

  .hero-art {
    justify-content: center;
  }
}
