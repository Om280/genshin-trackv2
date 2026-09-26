import { characters, teams, banners, goals, guideHtml } from './seed';

const selectedCharacter = characters[1];

const summaryCards = [
  { label: 'Active goals', value: '3', tone: 'neutral' },
  { label: 'Mora required', value: '1.4M', tone: 'positive' },
  { label: 'Resin estimate', value: '128', tone: 'warning' },
  { label: 'Sync status', value: '2m ago', tone: 'neutral' }
];

const statBlocks = [
  { label: 'Weapon', value: 'Key of Khaj-Nisut', note: 'Signature weapon' },
  { label: 'Artifacts', value: 'Marechaussee Hunter', note: '4-piece set' },
  { label: 'Talents', value: 'Skill 10 / Burst 8', note: 'Guide target' },
  { label: 'Team', value: 'Vaporize core', note: 'Main DPS + support' }
];

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div>
          <div className="eyebrow">GENSHIN TRACK</div>
          <h1>Ultimate companion</h1>
        </div>
        <div className="topbar-actions">
          <button>Sync account</button>
          <button className="primary">Import wishes</button>
        </div>
      </header>

      <main className="content-grid">
        <section className="account-panel panel">
          <div className="account-header">
            <div>
              <div className="eyebrow muted">ACCOUNT HEADER</div>
              <div className="account-name">Om280</div>
            </div>
            <div className="uid-pill">UID 812123456</div>
          </div>
          <div className="meta-row">
            <span>Adventure Rank 60</span>
            <span>World Level 8</span>
            <span>Last sync 2 minutes ago</span>
          </div>
        </section>

        <section className="hero panel hydro">
          <div className="hero-overlay" />
          <div className="hero-content">
            <div className="hero-copy">
              <div className="eyebrow uppercase">CURRENT GUIDE</div>
              <h2>{selectedCharacter.name}</h2>
              <div className="hero-meta">
                <span>{selectedCharacter.element}</span>
                <span>{selectedCharacter.weapon}</span>
                <span>{selectedCharacter.rarity}★</span>
              </div>
              <div className="hero-subcopy">{selectedCharacter.buildLabel}</div>
            </div>
            <div className="hero-art">
              <img src={selectedCharacter.splash} alt={selectedCharacter.name} />
            </div>
          </div>
        </section>

        <section className="stats-row">
          {summaryCards.map((card) => (
            <article key={card.label} className={`stat-card panel ${card.tone}`}>
              <div>{card.label}</div>
              <strong>{card.value}</strong>
            </article>
          ))}
        </section>

        <section className="panel overview-panel">
          <div className="section-header">
            <span>OVERVIEW</span>
            <a href="#">Open build</a>
          </div>
          <div className="card-grid compact">
            {statBlocks.map((block) => (
              <div className="mini-card" key={block.label}>
                <label>{block.label}</label>
                <strong>{block.value}</strong>
                <small>{block.note}</small>
              </div>
            ))}
          </div>
        </section>

        <section className="panel list-panel">
          <div className="section-header">
            <span>CHARACTER BUILDS</span>
            <a href="#">View all</a>
          </div>
          <div className="character-list">
            {characters.slice(0, 6).map((character) => (
              <div className="character-row" key={character.id}>
                <div className="char-left">
                  <img src={character.icon} alt={character.name} />
                  <div>
                    <strong>{character.name}</strong>
                    <small>{character.element} • {character.weapon}</small>
                  </div>
                </div>
                <div className="char-right">
                  <span>{character.buildLabel}</span>
                  <em>{character.ascensionStatValue}</em>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="panel list-panel">
          <div className="section-header">
            <span>WISH STATUS</span>
            <a href="#">Open wishes</a>
          </div>
          <div className="wish-box">
            <div>
              <label>Pity</label>
              <strong>89</strong>
            </div>
            <div>
              <label>50/50</label>
              <strong>Won</strong>
            </div>
            <div>
              <label>Last 5★</label>
              <strong>Furina</strong>
            </div>
          </div>
        </section>

        <section className="panel guide-panel">
          <div className="section-header">
            <span>GUIDE</span>
            <a href="#">Source</a>
          </div>
          <div className="guide-article" dangerouslySetInnerHTML={{ __html: guideHtml }} />
        </section>

        <section className="panel goal-panel">
          <div className="section-header">
            <span>ACTIVE GOALS</span>
            <a href="#">Manage</a>
          </div>
          <div className="goal-stack">
            {goals.map((goal) => (
              <div className="goal-row" key={goal.title}>
                <div className="goal-label-row">
                  <strong>{goal.title}</strong>
                  <span>{goal.progress}%</span>
                </div>
                <div className="progress-bar">
                  <span style={{ width: `${goal.progress}%` }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="panel banner-panel">
          <div className="section-header">
            <span>CURRENT BANNERS</span>
            <a href="#">More</a>
          </div>
          <div className="banner-stack">
            {banners.map((banner) => (
              <div className="banner-row" key={banner.name}>
                <div>
                  <strong>{banner.name}</strong>
                  <small>{banner.phase}</small>
                </div>
                <span>{banner.type}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
