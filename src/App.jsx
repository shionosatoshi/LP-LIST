const {
  hero,
  navigation,
  philosophy,
  reservation,
  residentCats,
  service,
  stats,
  toneManner,
} = window.MaisonNekoContent;

function App() {
  const [activeCat, setActiveCat] = React.useState(residentCats[0]);
  const [reservationStatus, setReservationStatus] = React.useState("");

  function handleReservationSubmit(event) {
    event.preventDefault();
    setReservationStatus("予約リクエストを受け付けました。静かな確認キューでお席をお預かりします。");
  }

  return (
    <div className="min-h-screen bg-porcelain text-ink">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-ink/10 bg-porcelain/86 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#top" className="group flex items-center gap-3" aria-label="Maison Neko ホーム">
            <span className="h-px w-8 bg-champagne transition-all group-hover:w-10" aria-hidden="true" />
            <span className="font-serif text-lg tracking-[0.18em] text-ink">Maison Neko</span>
          </a>
          <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.2em] text-ink/70 md:flex">
            {navigation.map((item) => (
              <a key={item.href} className="transition hover:text-ink" href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-ivory pt-28">
          <img
            className="hero-image absolute inset-0 h-full w-full object-cover object-center"
            src={hero.image}
            alt="白いホテルラウンジのような空間で猫が静かに佇んでいる"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-porcelain via-porcelain/62 to-porcelain/14" />
          <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 sm:px-8 lg:pb-24">
            <div className="reveal max-w-5xl">
              <p className="mb-5 text-xs uppercase tracking-[0.32em] text-rosewood">{hero.eyebrow}</p>
              <h1 className="font-serif text-5xl leading-none text-black sm:text-7xl lg:whitespace-nowrap lg:text-8xl xl:text-9xl">
                {hero.title}
              </h1>
              <div className="shimmer-line my-7 h-px w-40 bg-champagne" />
              <p className="max-w-2xl text-lg leading-8 text-ink/76 sm:text-xl">{hero.lead}</p>
              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href={hero.primaryCta.href}
                  className="border border-ink bg-ink px-6 py-3 text-sm uppercase tracking-[0.18em] text-porcelain transition hover:bg-rosewood"
                >
                  {hero.primaryCta.label}
                </a>
                <a
                  href={hero.secondaryCta.href}
                  className="border border-ink/20 bg-porcelain/60 px-6 py-3 text-sm uppercase tracking-[0.18em] text-ink transition hover:border-champagne"
                >
                  {hero.secondaryCta.label}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-ink/10 bg-porcelain">
          <div className="mx-auto grid max-w-7xl grid-cols-2 px-5 sm:px-8 lg:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label} className="reveal border-ink/10 py-8 odd:border-r lg:border-r lg:last:border-r-0">
                <p className="font-serif text-4xl text-ink">{item.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.22em] text-ink/58">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="tone" className="bg-porcelain px-5 py-24 sm:px-8 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="reveal">
              <p className="text-xs uppercase tracking-[0.28em] text-rosewood">{toneManner.eyebrow}</p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-ink sm:text-5xl">{toneManner.title}</h2>
            </div>
            <div className="reveal">
              <p className="max-w-3xl text-lg leading-9 text-ink/70">{toneManner.body}</p>
              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {toneManner.notes.map((note) => (
                  <div key={note} className="flex items-center gap-4 border-t border-stone/50 py-4">
                    <span className="h-px w-10 bg-champagne" aria-hidden="true" />
                    <span className="text-sm uppercase tracking-[0.18em] text-ink/72">{note}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="grid bg-mist lg:grid-cols-2">
          <div className="min-h-[520px] overflow-hidden">
            <img
              className="float-soft h-full w-full object-cover"
              src={service.image}
              alt="白いテーブルに磁器のカップと菓子が置かれ、奥に猫の気配がある"
            />
          </div>
          <div className="flex items-center px-5 py-20 sm:px-8 lg:px-16">
            <div className="reveal max-w-xl">
              <p className="text-xs uppercase tracking-[0.28em] text-rosewood">{service.eyebrow}</p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-ink sm:text-5xl">{service.title}</h2>
              <p className="mt-6 text-base leading-8 text-ink/70">{service.body}</p>
              <dl className="mt-10 divide-y divide-stone/60 border-y border-stone/60">
                {service.menu.map((item) => (
                  <div key={item.name} className="grid gap-3 py-5 sm:grid-cols-[1fr_auto]">
                    <div>
                      <dt className="font-serif text-xl text-ink">{item.name}</dt>
                      <dd className="mt-1 text-sm text-ink/58">{item.detail}</dd>
                    </div>
                    <dd className="text-sm uppercase tracking-[0.16em] text-rosewood">{item.price}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section id="residents" className="bg-porcelain px-5 py-24 sm:px-8 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="reveal max-w-3xl">
              <p className="text-xs uppercase tracking-[0.28em] text-rosewood">猫たち</p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-ink sm:text-5xl">
                演出ではなく、そこにいる気配。
              </h2>
            </div>
            <div className="mt-12 grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {residentCats.map((cat) => (
                  <button
                    key={cat.name}
                    type="button"
                    onClick={() => setActiveCat(cat)}
                    className={`reveal border px-5 py-4 text-left transition ${
                      activeCat.name === cat.name
                        ? "border-champagne bg-ivory text-ink"
                        : "border-stone/50 bg-transparent text-ink/64 hover:border-ink/30"
                    }`}
                  >
                    <span className="block font-serif text-2xl">{cat.name}</span>
                    <span className="mt-1 block text-xs uppercase tracking-[0.18em]">{cat.role}</span>
                  </button>
                ))}
              </div>
              <article className="reveal border border-stone/50 bg-ivory p-8 sm:p-10">
                <p className="text-xs uppercase tracking-[0.24em] text-rosewood">本日の気配</p>
                <h3 className="mt-4 font-serif text-5xl text-ink">{activeCat.name}</h3>
                <p className="mt-5 max-w-3xl text-lg leading-9 text-ink/70">{activeCat.summary}</p>
                <div className="mt-10 grid gap-5 sm:grid-cols-3">
                  {[
                    ["居場所", activeCat.place],
                    ["距離感", activeCat.mood],
                    ["印象", activeCat.charm],
                  ].map(([label, value]) => (
                    <div key={label} className="border-t border-champagne/70 pt-4">
                      <p className="text-xs uppercase tracking-[0.18em] text-ink/45">{label}</p>
                      <p className="mt-2 font-serif text-xl text-ink">{value}</p>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-ink px-5 py-24 text-porcelain sm:px-8 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
            {philosophy.map((card) => (
              <article key={card.title} className="reveal border border-porcelain/14 p-8">
                <p className="text-xs uppercase tracking-[0.26em] text-champagne">{card.kicker}</p>
                <h3 className="mt-6 font-serif text-3xl leading-tight">{card.title}</h3>
                <p className="mt-5 leading-8 text-porcelain/68">{card.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="reservation" className="grid bg-ivory lg:grid-cols-[0.9fr_1.1fr]">
          <div className="min-h-[560px] overflow-hidden">
            <img
              className="h-full w-full object-cover"
              src={reservation.image}
              alt="猫が眠るラウンジ席と静かな予約席"
            />
          </div>
          <div className="px-5 py-20 sm:px-8 lg:px-16">
            <div className="reveal max-w-2xl">
              <p className="text-xs uppercase tracking-[0.28em] text-rosewood">{reservation.eyebrow}</p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-ink sm:text-5xl">{reservation.title}</h2>
              <p className="mt-6 text-base leading-8 text-ink/70">{reservation.body}</p>
            </div>
            <form className="reveal mt-10 grid gap-5" onSubmit={handleReservationSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm uppercase tracking-[0.16em] text-ink/58">
                  お名前
                  <input className="border border-stone/60 bg-porcelain px-4 py-3 text-base normal-case tracking-normal text-ink outline-none focus:border-champagne" name="name" type="text" required />
                </label>
                <label className="grid gap-2 text-sm uppercase tracking-[0.16em] text-ink/58">
                  メール
                  <input className="border border-stone/60 bg-porcelain px-4 py-3 text-base normal-case tracking-normal text-ink outline-none focus:border-champagne" name="email" type="email" required />
                </label>
              </div>
              <div className="grid gap-5 sm:grid-cols-3">
                <label className="grid gap-2 text-sm uppercase tracking-[0.16em] text-ink/58">
                  希望日
                  <input className="border border-stone/60 bg-porcelain px-4 py-3 text-base normal-case tracking-normal text-ink outline-none focus:border-champagne" name="date" type="date" required />
                </label>
                <label className="grid gap-2 text-sm uppercase tracking-[0.16em] text-ink/58">
                  時間
                  <select className="border border-stone/60 bg-porcelain px-4 py-3 text-base normal-case tracking-normal text-ink outline-none focus:border-champagne" name="time" required>
                    {reservation.times.map((time) => (
                      <option key={time}>{time}</option>
                    ))}
                  </select>
                </label>
                <label className="grid gap-2 text-sm uppercase tracking-[0.16em] text-ink/58">
                  プラン
                  <select className="border border-stone/60 bg-porcelain px-4 py-3 text-base normal-case tracking-normal text-ink outline-none focus:border-champagne" name="plan" required>
                    {reservation.plans.map((plan) => (
                      <option key={plan}>{plan}</option>
                    ))}
                  </select>
                </label>
              </div>
              <label className="grid gap-2 text-sm uppercase tracking-[0.16em] text-ink/58">
                ご要望
                <textarea className="min-h-32 border border-stone/60 bg-porcelain px-4 py-3 text-base normal-case tracking-normal text-ink outline-none focus:border-champagne" name="request" />
              </label>
              <button className="mt-2 border border-ink bg-ink px-6 py-4 text-sm uppercase tracking-[0.2em] text-porcelain transition hover:bg-rosewood" type="submit">
                予約内容を送信
              </button>
              {reservationStatus ? (
                <p className="border-l border-champagne bg-porcelain px-4 py-3 text-sm leading-6 text-ink/70" role="status" aria-live="polite">
                  {reservationStatus}
                </p>
              ) : null}
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

window.MaisonNekoApp = App;
