
import './App.css'

function App() {

  const proyectos = [
    {
      nombre: 'PokéAPI',
      descripcion: 'Página web que permite buscar Pokémon por nombre o ID y muestra su información, descripción, evoluciones y megaevoluciones',
      lenguajes: 'HTML, CSS y JavaScript',
      github: 'https://github.com/UrielTun/PokeApi.git',
      pagina: 'https://urieltun.github.io/PokeApi/'
    },
    {
      nombre: 'Mini DBeaver',
      descripcion: 'Aplicación de escritorio que permite conectarse a una base de datos remota mediante SSH, descargar tablas y realizar operaciones CRUD en una base de datos local, este proyecto lo hice en equipo con unos compañeros de mi carrera',
      lenguajes: 'Java, JavaFX, MariaDB y SQLite',
      github: 'https://github.com/Mauricio75710/Mini_DBeaver.git',
      pagina: ''
    },
    {
      nombre: 'Escapa de Justino',
      descripcion: 'Juego web donde tienes que escapar de un enemigo, incluye movimiento con teclado, detección de colisiones y opciones para cambiar la velocidad de los personajes',
      lenguajes: 'HTML, CSS y JavaScript',
      github: 'https://github.com/UrielTun/Justino.git',
      pagina: 'https://urieltun.github.io/Justino/'
    },
    {
      nombre: 'Guía Informativa',
      descripcion: 'Página web con información y consejos para las personas que quieren empezar a entrenar en el gimnasio',
      lenguajes: 'HTML, CSS y JavaScript',
      github: 'https://github.com/UrielTun/Guia_Informativa.git',
      pagina: 'https://urieltun.github.io/Guia_Informativa/'
    }
  ]

  return (
    <>
      <header className="encabezado">
        <a href="#inicio" className="logo">
          MI<span>PORTAFOLIO</span>
        </a>

        <nav className="menu">
          <a href="#inicio">Inicio</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <main>

        <section id="inicio" className="inicio">
          <div className="inicio_contenido">
            <span className="etiqueta">PORTAFOLIO URI</span>

            <h1>
              URIEL ALEJANDRO <br/>
              <span>TUN MUÑOZ</span>
            </h1>

            <p>
              Soy estudiante de Ingeniería en Tecnología de Software
              en la Universidad Autónoma de Campeche. Water is life
              <br />
              En esta página podrás ver algunos de los proyectos
              que he realizado durante la carrera
            </p>

            <a href="#proyectos" className="boton_principal">
              Ver proyectos
            </a>
          </div>

          <div className="inicio_imagen">
            <div className="circulo_pesa">
              <img src="/Uri.jpeg" alt="Imagen de perfil" className="foto_perfil"/>
            </div>
            <p>GTA VI • ITS • UACAM</p>
          </div>
        </section>

        <section id="habilidades" className="seccion seccion_alterna">
          <div className="titulo_seccion">
            <h2>Mis habilidades</h2>
            <p>
              Estos son algunos de los lenguajes y habilidades
              que he aprendido durante mi carrera
            </p>
          </div>

          <div className="tarjetas">
            <article className="tarjeta">
              <h3>Lenguajes de programación</h3>
              <p>
                Java, Python, JavaScript y C++
                <br />
                Los he utilizado para desarrollar aplicaciones,
                realizar diferentes prácticas y tareas
              </p>
            </article>

            <article className="tarjeta">
              <h3>Desarrollo web</h3>
              <p>
                HTML, CSS, JavaScript y React
                <br />
                He creado páginas web interactivas,
                trabajado con APIs y diseñado interfaces
              </p>
            </article>

            <article className="tarjeta">
              <h3>Bases de datos</h3>
              <p>
                MariaDB, SQLite, Apache Cassandra y Neo4j
                <br />
                Tengo conocimientos sobre consultas,
                procedimientos almacenados y operaciones CRUD
                Aunque todavía no domino todo, puedo realizar
                varias de estas operaciones
              </p>
            </article>

            <article className="tarjeta">
              <h3>Herramientas de desarrollo</h3>
              <p>
                Git, GitHub, Visual Studio Code, IntelliJ IDEA,
                Docker, Proteus y DBeaver
                <br />
                Las he utilizado para desarrollar, administrar
                y organizar diferentes proyectos
              </p>
            </article>
          </div>
        </section>

        <section id="proyectos" className="seccion">
          <div className="titulo_seccion">
            <h2>Mis proyectos</h2>
            <p>
              Estos son algunos de los proyectos que he desarrollado
              durante la carrera utilizando diferentes lenguajes
              y herramientas
            </p>
          </div>

          <div className="tarjetas">
            {proyectos.map((proyecto) => (
              <article className="tarjeta" key={proyecto.nombre}>
                <h3>{proyecto.nombre}</h3>

                <p>{proyecto.descripcion}</p>

                <p>
                  <strong>Lenguajes y herramientas:</strong> {proyecto.lenguajes}
                </p>

                <div className="botones_proyecto">
                  <a
                    href={proyecto.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="boton_principal"
                  >
                    Ver en GitHub
                  </a>

                  {proyecto.pagina && (
                    <a
                      href={proyecto.pagina}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="boton_principal boton_secundario"
                    >
                      Ver página
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contacto" className="seccion seccion_alterna">
          <div className="titulo_seccion">
            <h2>Contacto</h2>
            <p>
              Si quieres ponerte en contacto conmigo,
              puedes hacerlo por aquí
            </p>
          </div>

          <div className="tarjetas">
            <article className="tarjeta">
              <h3>GitHub</h3>
              <p>
                Aquí puedes encontrar los repositorios
                de mis proyectos y prácticas
              </p>

              <a
                href="https://github.com/urieltun"
                target="_blank"
                rel="noopener noreferrer"
                className="boton_principal"
              >
                Visitar GitHub
              </a>
            </article>

            <article className="tarjeta">
              <h3>Correo electrónico</h3>
              <p>
                También puedes contactarme mediante
                mi correo electrónico
              </p>
              <p>Correo: al069393@uacam.mx</p>
            </article>
          </div>
        </section>

      </main>

      <footer className="pie_pagina">
        <h3>Uriel Alejandro Tun Muñoz</h3>
        <p>Ingeniería en Tecnología de Software</p>
        <p>Universidad Autónoma de Campeche</p>
        <p>Portafolio :3</p>
      </footer>
    </>
  )
}

export default App