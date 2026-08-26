function InfoPage({
  title,
  subtitle,
  intro,
  highlights = [],
  details = [],
  bullets = [],
  cta,
}) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 rounded-[28px] border border-[#15342d]/10 bg-[#edf1ee] p-8 shadow-[0_20px_60px_rgba(24,58,51,0.08)] sm:p-10">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.26em] text-[#317567]">MOVE Co.</p>
        <h1 className="text-4xl font-black tracking-tight text-[#15342d] md:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-[#183a33]/75">{subtitle}</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.4fr_0.9fr]">
        <div className="space-y-6">
          <section className="rounded-[28px] border border-[#15342d]/10 bg-white p-7 shadow-sm">
            <p className="text-lg leading-8 text-[#183a33]/80">{intro}</p>
          </section>

          {highlights.length > 0 && (
            <section className="grid gap-4 md:grid-cols-3">
              {highlights.map(({ title: itemTitle, text }) => (
                <div key={itemTitle} className="rounded-[24px] border border-[#15342d]/10 bg-[#f4f8f5] p-5">
                  <h3 className="mb-2 text-base font-bold text-[#15342d]">{itemTitle}</h3>
                  <p className="text-sm leading-6 text-[#183a33]/70">{text}</p>
                </div>
              ))}
            </section>
          )}

          {details.length > 0 && (
            <section className="rounded-[28px] border border-[#15342d]/10 bg-white p-7 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-[#15342d]">Detalhes</h2>
              <div className="space-y-4">
                {details.map(({ title: itemTitle, text }) => (
                  <div key={itemTitle} className="border-b border-[#15342d]/10 pb-4 last:border-b-0 last:pb-0">
                    <h3 className="mb-2 text-base font-bold text-[#15342d]">{itemTitle}</h3>
                    <p className="text-sm leading-6 text-[#183a33]/70">{text}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        <aside className="space-y-6">
          <div className="rounded-[28px] bg-[#15342d] p-7 text-white shadow-[0_20px_60px_rgba(21,52,45,0.2)]">
            <h2 className="mb-4 text-xl font-bold">Atendimento</h2>
            <ul className="space-y-3 text-sm text-white/80">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#9ed3ac]" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {cta && (
            <div className="rounded-[28px] border border-[#15342d]/10 bg-[#edf1ee] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#317567]">Importante</p>
              <p className="mt-3 text-base leading-7 text-[#183a33]/75">{cta}</p>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}

export default InfoPage;
