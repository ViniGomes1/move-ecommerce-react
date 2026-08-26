function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 rounded-[32px] border border-[#15342d]/10 bg-[#edf1ee] p-8 shadow-[0_20px_60px_rgba(24,58,51,0.08)] sm:p-10">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.26em] text-[#317567]">Nossa história</p>
        <h1 className="text-4xl font-black tracking-tight text-[#15342d] md:text-5xl">Sobre a MOVE Co.</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <section className="rounded-[28px] border border-[#15342d]/10 bg-white p-7 shadow-sm">
          <p className="text-lg leading-8 text-[#183a33]/80">
            A MOVE Co. nasceu para democratizar o estilo esportivo e conectar movimento, comunidade e design.
            Nossa proposta é criar peças que ultrapassem a estética do dia a dia e se tornem companheiras de treino,
            rotina e experiências ao ar livre. Com uma linguagem urbana e autêntica, unimos performance, conforto e identidade.
          </p>
          <p className="mt-6 text-lg leading-8 text-[#183a33]/80">
            Somos uma marca fictícia inspirada por um estilo de vida ativo: pessoas que acreditam que roupas e acessórios
            devem acompanhar a energia do corpo e da rotina. Por isso, desenvolvemos coleções com atenção ao detalhe,
            materiais sustentáveis e uma experiência de compra que valoriza o cliente em cada etapa.
          </p>
        </section>

        <aside className="space-y-6">
          <div className="rounded-[28px] bg-[#15342d] p-6 text-white shadow-[0_20px_60px_rgba(21,52,45,0.2)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9ed3ac]">Valores</p>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li>• Performance com estilo</li>
              <li>• Movimento e bem-estar</li>
              <li>• Sustentabilidade consciente</li>
              <li>• Experiência acessível</li>
            </ul>
          </div>

          <div className="rounded-[28px] border border-[#15342d]/10 bg-[#f4f8f5] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#317567]">Nossa missão</p>
            <p className="mt-3 text-base leading-7 text-[#183a33]/75">
              Inspirar pessoas a se moverem com confiança, leveza e identidade, respeitando o planeta e o corpo.
            </p>
          </div>
        </aside>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {[
          {
            title: '2014',
            text: 'Primeira coleção com foco em conforto e movimento urbano.',
          },
          {
            title: '2020',
            text: 'Ampliação da linha de performance para treinos e estilo quotidiano.',
          },
          {
            title: 'Hoje',
            text: 'Marca em expansão com uma comunidade que vive a cultura do esporte.',
          },
        ].map(({ title, text }) => (
          <div key={title} className="rounded-[24px] border border-[#15342d]/10 bg-white p-6 shadow-sm">
            <p className="text-2xl font-black text-[#15342d]">{title}</p>
            <p className="mt-3 text-sm leading-6 text-[#183a33]/70">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutPage;