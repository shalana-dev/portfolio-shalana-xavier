import { useEffect } from "react";

function Contato() {
  useEffect(() => {
    // Efeito do cursor branco no botão CONTATE-ME
    const btn = document.getElementById("btnContate");
    const cursor = document.querySelector(".cursor");
    const ring = document.querySelector(".cursor-ring");

    if (btn && cursor && ring) {
      const enterHandler = () => {
        cursor.style.background = "#fff";
        cursor.style.boxShadow = "0 0 12px rgba(255,255,255,0.5)";
        ring.style.borderColor = "rgba(255,255,255,0.6)";
        ring.style.width = "64px";
        ring.style.height = "64px";
      };

      const leaveHandler = () => {
        cursor.style.background = "var(--red)";
        cursor.style.boxShadow = "none";
        ring.style.borderColor = "rgba(232, 25, 44, 0.5)";
        ring.style.width = "36px";
        ring.style.height = "36px";
      };

      btn.addEventListener("mouseenter", enterHandler);
      btn.addEventListener("mouseleave", leaveHandler);

      return () => {
        btn.removeEventListener("mouseenter", enterHandler);
        btn.removeEventListener("mouseleave", leaveHandler);
      };
    }
  }, []);

  return (
    <section id="contato">
      <div>
        <div className="section-label reveal">vamos conversar</div>
        <h2 className="contato-title reveal reveal-delay-1">
          Bora
          <br />
          <span>trabalhar</span>
          <br />
          juntos?
        </h2>
        <p className="contato-text reveal reveal-delay-2">
          Estou disponível para projetos, freelas e oportunidades de estágio.
          Gosto de desafios e de transformar ideias em soluções reais. Se você
          tem algo em mente, vamos conversar.
        </p>
        <div className="contato-links reveal reveal-delay-3">
          <a href="mailto:shalana@email.com" className="contato-link">
            <span className="contato-link-icon">EMAIL</span>
            shalana.dev@email.com
          </a>
          <a
            href="https://github.com/shalana-dev"
            target="_blank"
            className="contato-link"
          >
            <span className="contato-link-icon">GITHUB</span>
            github.com/shalana-dev
          </a>
          <a
            href="https://www.linkedin.com/in/shalanaxyz/"
            target="_blank"
            className="contato-link"
          >
            <span className="contato-link-icon">LINKEDIN</span>
            https://www.linkedin.com/in/shalanaxyz
          </a>
        </div>
      </div>
      <div className="reveal reveal-delay-2">
        <div className="form-group">
          <input type="text" placeholder="Seu nome" />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Seu e-mail" />
        </div>
        <div className="form-group">
          <textarea placeholder="Sua mensagem..."></textarea>
        </div>
        <button
          className="btn-primary"
          id="btnContate"
          style={{ cursor: "none" }}
        >
          <span>
            <b>CONTATE-ME</b>
          </span>
        </button>
      </div>
    </section>
  );
}

export default Contato;
