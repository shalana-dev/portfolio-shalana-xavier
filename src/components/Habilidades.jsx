function Habilidades() {
  return (
    <section id="habilidades">
      <div className="skills-header">
        <div className="section-label reveal">o que eu sei</div>
        <h2 className="skills-title reveal reveal-delay-1">
          Habilidades
          <br />
          <span style={{ color: "var(--red)" }}> & Ferramentas</span>
        </h2>
      </div>
      <div className="skills-grid">
        <div className="skill-card reveal">
          <div className="skill-icon">01 // FRONTEND</div>
          <div className="skill-name">HTML & CSS</div>
          <div className="skill-desc">
            Estruturação de interfaces responsivas, criação de layouts modernos
            e foco em experiência do usuário.
          </div>
          <div className="skill-bar-wrap">
            <div className="skill-bar" style={{ width: "80%" }}></div>
          </div>
        </div>
        <div className="skill-card reveal reveal-delay-1">
          <div className="skill-icon">02 // FRONTEND</div>
          <div className="skill-name">JavaScript</div>
          <div className="skill-desc">
            Criação de aplicações web modernas com JavaScript e React,
            utilizando componentização, gerenciamento de estado, integração com
            APIs REST e interfaces responsivas.
          </div>
          <div className="skill-bar-wrap">
            <div className="skill-bar" style={{ width: "70%" }}></div>
          </div>
        </div>
        <div className="skill-card reveal reveal-delay-2">
          <div className="skill-icon">03 // BACKEND</div>
          <div className="skill-name">Node.Js</div>
          <div className="skill-desc">
            Desenvolvimento de APIs escaláveis, manipulação de dados no servidor
            e criação de aplicações back-end modernas com foco em performance e
            organização.
          </div>
          <div className="skill-bar-wrap">
            <div className="skill-bar" style={{ width: "70%" }}></div>
          </div>
        </div>
        <div className="skill-card reveal reveal-delay-3">
          <div className="skill-icon">04 // TOOLS</div>
          <div className="skill-name">EXPRESS & APIs</div>
          <div className="skill-desc">
            Desenvolvimento de APIs REST com Express, integração com SQLite,
            operações CRUD, validação de dados e arquitetura back-end para
            aplicações web modernas.
          </div>
          <div className="skill-bar-wrap">
            <div className="skill-bar" style={{ width: "60%" }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Habilidades;
