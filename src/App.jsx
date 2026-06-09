const {
  checklist,
  emergency,
  hero,
  metrics,
  navigation,
  quickStart,
  savingCards,
  sections,
} = window.SummerSavingContent;

const accentClass = {
  aqua: "border-aqua/40 bg-aqua/10 text-aqua",
  leaf: "border-leaf/40 bg-leaf/10 text-leaf",
  coral: "border-coral/40 bg-coral/10 text-coral",
  night: "border-night/40 bg-night/10 text-night",
};

function App() {
  const [doneItems, setDoneItems] = React.useState(() => {
    try {
      const savedItems = window.localStorage.getItem("summerSavingChecklist");
      const parsedItems = savedItems ? JSON.parse(savedItems) : [];
      return Array.isArray(parsedItems) ? parsedItems.filter((item) => checklist.includes(item)) : [];
    } catch (error) {
      return [];
    }
  });

  React.useEffect(() => {
    try {
      window.localStorage.setItem("summerSavingChecklist", JSON.stringify(doneItems));
    } catch (error) {
      // The checklist still works during this session if storage is unavailable.
    }
  }, [doneItems]);

  function toggleChecklist(item) {
    setDoneItems((current) =>
      current.includes(item) ? current.filter((value) => value !== item) : [...current, item]
    );
  }

  const progress = Math.round((doneItems.length / checklist.length) * 100);

  return (
    <div className="min-h-screen bg-paper text-ink">
      <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/88 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#top" className="flex items-center gap-3 font-black tracking-wide">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-lemon text-ink">涼</span>
            <span>夏の節約術</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-bold text-muted md:flex">
            {navigation.map((item) => (
              <a key={item.href} className="transition hover:text-ink" href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden border-b border-line bg-surf/45">
          <div className="mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl items-center gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:py-16">
            <div className="reveal z-10 max-w-2xl">
              <p className="inline-flex rounded-full border border-aqua/30 bg-white/70 px-4 py-2 text-sm font-bold text-aqua">
                {hero.eyebrow}
              </p>
              <h1 className="mt-6 text-4xl font-black leading-tight text-ink sm:text-6xl lg:text-7xl">
                {hero.title}
              </h1>
              <p className="mt-6 text-lg leading-9 text-muted sm:text-xl">{hero.lead}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a className="rounded-full bg-ink px-6 py-3 text-sm font-bold text-white shadow-lift transition hover:bg-night" href={hero.primaryCta.href}>
                  {hero.primaryCta.label}
                </a>
                <a className="rounded-full border border-ink/15 bg-white px-6 py-3 text-sm font-bold text-ink transition hover:border-aqua" href={hero.secondaryCta.href}>
                  {hero.secondaryCta.label}
                </a>
              </div>
            </div>
            <div className="reveal relative">
              <div className="hero-frame overflow-hidden rounded-[2rem] border border-white bg-white shadow-lift">
                <img className="h-full w-full object-cover" src={hero.image} alt="夏の室内で暑さ対策と節約術を実践する涼しげなイメージ" />
              </div>
            </div>
          </div>
        </section>

        <section id="basics" className="border-b border-line bg-white">
          <div className="mx-auto grid max-w-7xl gap-px bg-line px-5 sm:px-8 md:grid-cols-4">
            {metrics.map((item) => (
              <article key={item.label} className="bg-white py-8 md:px-6">
                <p className="text-4xl font-black text-aqua">{item.value}</p>
                <h2 className="mt-3 font-bold">{item.label}</h2>
                <p className="mt-2 text-sm leading-6 text-muted">{item.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="quick-start" className="px-5 py-16 sm:px-8 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-black text-coral">QUICK START</p>
              <h2 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">今日から効く、最初の4手</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {quickStart.map((item, index) => (
                <article key={item} className="rounded-2xl border border-line bg-white p-6 shadow-sm">
                  <span className="text-sm font-black text-leaf">0{index + 1}</span>
                  <p className="mt-4 text-lg font-bold leading-8">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-line bg-surf/35 px-5 py-16 text-ink sm:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-black text-coral">SAVE TIPS</p>
                <h2 className="mt-3 text-3xl font-black sm:text-5xl">節約ワザをカテゴリで確認</h2>
              </div>
              <p className="max-w-xl leading-8 text-muted">無理な我慢ではなく、冷房効率を上げる工夫を重ねます。</p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {savingCards.map((card) => (
                <article key={card.title} className="rounded-2xl border border-line bg-white p-6 text-ink shadow-sm">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`rounded-full border px-3 py-1 text-xs font-black ${accentClass[card.accent]}`}>
                      {card.category}
                    </span>
                    <span className="rounded-full bg-lemon/30 px-3 py-1 text-xs font-bold">{card.impact}</span>
                    <span className="rounded-full bg-line/60 px-3 py-1 text-xs font-bold">{card.cost}</span>
                  </div>
                  <h3 className="mt-5 text-2xl font-black">{card.title}</h3>
                  <p className="mt-4 leading-8 text-muted">{card.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {sections.map((section) => (
          <section key={section.id} id={section.id} className="border-b border-line bg-paper px-5 py-16 sm:px-8 lg:py-24">
            <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-sm font-black text-aqua">{section.label}</p>
                <h2 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">{section.title}</h2>
                <p className="mt-5 leading-8 text-muted">{section.intro}</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {section.tips.map((tip) => (
                  <article key={tip.name} className="rounded-2xl border border-line bg-white p-6">
                    <h3 className="text-xl font-black">{tip.name}</h3>
                    <p className="mt-3 leading-7 text-muted">{tip.detail}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ))}

        <section id="checklist" className="bg-white px-5 py-16 text-ink sm:px-8 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-black text-coral">CHECKLIST</p>
              <h2 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">できた項目をチェック</h2>
              <div className="mt-8 max-w-sm rounded-2xl border border-line bg-paper p-5">
                <div className="flex items-center justify-between text-sm font-bold">
                  <span>進捗</span>
                  <span>{progress}%</span>
                </div>
                <div className="mt-3 h-3 overflow-hidden rounded-full bg-line">
                  <div className="h-full rounded-full bg-leaf transition-all" style={{ width: `${progress}%` }} />
                </div>
              </div>
            </div>
            <div className="grid gap-3">
              {checklist.map((item) => {
                const checked = doneItems.includes(item);
                return (
                  <label
                    key={item}
                    className={`flex cursor-pointer items-center gap-4 rounded-2xl border p-5 text-left transition ${
                      checked ? "border-leaf bg-leaf/10 text-ink" : "border-line bg-white text-ink hover:border-aqua"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleChecklist(item)}
                      className="h-6 w-6 shrink-0 accent-leaf"
                    />
                    <span className="font-bold leading-7">{item}</span>
                  </label>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-coral px-5 py-10 text-white sm:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-black">熱中症のサインに注意</p>
            <p className="mt-3 max-w-5xl leading-8 text-white/92">{emergency}</p>
          </div>
        </section>
      </main>
    </div>
  );
}

window.SummerSavingApp = App;
