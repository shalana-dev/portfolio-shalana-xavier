function Hero() {
  return (
    <section id="inicio">
      <div className="hero-left">
        <div className="hero-tag">Disponível para projetos</div>
        <p className="hero-name">Shalana Xavier</p>
        <h1 className="hero-title">
          Full Stack
          <br />
          <span className="line2">Developer</span>
        </h1>
        <p className="hero-quote">
          "Transformando ideias em experiências digitais modernas."
        </p>
        <div className="hero-tags">
          <span>JavaScript</span>
          <span>Node.js</span>
          <span>APIs</span>
          <span>Express</span>
        </div>
        <div className="hero-cta">
          <a href="#projetos" className="btn-primary">
            Ver projetos
          </a>
          <a href="#contato" className="btn-outline">
            Contato
          </a>
        </div>
      </div>
      <div className="hero-card">
        <img src="/eufoto.png" alt="Shalana Xavier" />
      </div>
      <div className="red-line">ARACAJU, SE — BRASIL</div>
    </section>
  );
}

export default Hero;
