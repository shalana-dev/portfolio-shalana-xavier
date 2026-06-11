import { useEffect } from 'react';

function Sobre() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="sobre">
      <div>
        <div className="section-label reveal">sobre mim</div>
        <h2 className="sobre-title reveal reveal-delay-1">Quem<br />sou eu.</h2>
        <p className="sobre-text reveal reveal-delay-2">
          Olá, me chamo <strong>Shalana</strong> e estou em formação como
          desenvolvedora Full Stack.
        </p>
        <p className="sobre-text reveal reveal-delay-3">
          Desenvolvo aplicações modernas, bem estruturadas e orientadas a
          problemas reais, com foco em performance, usabilidade e código limpo.
        </p>
        <p className="sobre-text reveal reveal-delay-4">
          Atualmente, venho criando projetos práticos para consolidar minhas
          habilidades em front-end e back-end, evoluindo constantemente com foco
          em atuar em ambientes reais e entregar soluções de qualidade.
        </p>
      </div>
      <div>
        <div className="sobre-stats reveal reveal-delay-2">
          <div className="stat">
            <div className="stat-num">04</div>
            <div className="stat-label">Meses de estudo</div>
          </div>
          <div className="stat">
            <div className="stat-num">02+</div>
            <div className="stat-label">Projetos feitos</div>
          </div>
          <div className="stat">
            <div className="stat-num">02</div>
            <div className="stat-label">Linguagens</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
