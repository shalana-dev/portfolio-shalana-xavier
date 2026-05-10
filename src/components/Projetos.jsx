function Projetos() {
  return (
    <section id="projetos">
      <div className="projects-header">
        <div className="section-label reveal">o que eu construí</div>
        <h2 className="projects-title reveal reveal-delay-1">
          Projetos
          <br />
          <span style={{ color: "var(--red)" }}>em destaque</span>
        </h2>
      </div>
      <div className="projects-grid">
        <div className="project-card reveal">
          <span className="project-num">01 // CRUD</span>
          <div className="project-title">ESTOQUE PRO</div>
          <div className="project-desc">
            Aplicação full stack para gerenciamento de estoque com APIs REST,
            operações CRUD e persistência de dados em SQLite.
          </div>
          <div className="project-tags">
            <span>React</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>SQLite</span>
          </div>
        </div>
        <div className="project-card reveal reveal-delay-1">
          <span className="project-num">02 // WEB</span>
          <div className="project-title">Portfólio Pessoal</div>
          <div className="project-desc">
            Portfólio desenvolvido com foco em design moderno, responsividade,
            animações e interatividade.
          </div>
          <div className="project-tags">
            <span>React</span>
            <span>JavaScript</span>
            <span>CSS3</span>
            <span>Vite</span>
          </div>
        </div>
        <div className="project-card reveal reveal-delay-2">
          <span className="project-num">03 // PROJETO FUTURO</span>
          <div className="project-title">Meu próximo projeto</div>
          <div className="project-desc">A jornada está só começando.</div>
          <div className="project-tags">
            <span>Em desenvolvimento</span>
          </div>
        </div>
        <div className="project-card reveal reveal-delay-3">
          <span className="project-num">04 // PROJETO FUTURO</span>
          <div className="project-title">Meu próximo projeto</div>
          <div className="project-desc">A jornada está só começando.</div>
          <div className="project-tags">
            <span>Em desenvolvimento</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projetos;
