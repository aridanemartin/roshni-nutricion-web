import Header from '@components/Header/Header'
import Layout from '@components/Layout/Layout'
import banner from '@assets/pictures/legal.webp'
import '@styles/Legal.scss'

export default function AvisoLegal() {
  return (
    <div className="legal">
      <Header title="Aviso Legal" image={banner} />
      <Layout maxWidth="1450px">
        <div className="legalText">
          <section>
            <p>
              ROSHNI PESWANI, responsable del sitio web, en adelante
              RESPONSABLE, pone a disposición de los usuarios el presente
              documento, con el que pretende dar cumplimiento a las obligaciones
              dispuestas en la Ley 34/2002, de 11 de julio, de Servicios de la
              Sociedad de la Información y de Comercio Electrónico (LSSICE), BOE
              N.º 166, así como informar a todos los usuarios del sitio web
              respecto a cuáles son las condiciones de uso.
            </p>
            <p>
              Toda persona que acceda a este sitio web asume el papel de
              usuario, comprometiéndose a la observancia y cumplimiento riguroso
              de las disposiciones aquí dispuestas, así como a cualquier otra
              disposición legal que fuera de aplicación.
            </p>
            <p>
              ROSHNI PESWANI se reserva el derecho de modificar cualquier tipo
              de información que pudiera aparecer en el sitio web, sin que
              exista obligación de preavisar o poner en conocimiento de los
              usuarios dichas obligaciones, entendiéndose como suficiente la
              publicación en el sitio web de ROSHNI PESWANI.
            </p>
          </section>

          <section>
            <h2>1. DATOS IDENTIFICATIVOS</h2>
            <ul>
              <li>
                <strong>Nombre de dominio:</strong> www.roshninutricion.com
              </li>
              <li>
                <strong>Nombre comercial:</strong> Roshni Peswani Dietista-
                Nutricionista
              </li>
              <li>
                <strong>Denominación social:</strong> ROSHNI PESWANI
              </li>
              <li>
                <strong>NIF:</strong> 78506723H
              </li>
              <li>
                <strong>Domicilio social:</strong> C/ Presidente Alvear 19 -
                35007 Las Palmas De Gran Canaria (Las Palmas)
              </li>
              <li>
                <strong>Teléfono:</strong> (+34) 667 34 01 46
              </li>
              <li>
                <strong>E-mail:</strong> roshninutricion@gmail.com
              </li>
              <li>
                <strong>Actividad reglada:</strong>
              </li>
              <ul>
                <li>
                  <strong>Colegio Profesional:</strong> Colegio Profesional de
                  Dietistas – Nutricionistas de las Islas Canarias
                </li>
                <li>
                  <strong>N.º Colegiado:</strong> IC-00007
                </li>
                <li>
                  <strong>Título académico oficial:</strong> Nutrición Humana y
                  Dietética en la Universidad Complutense de Madrid
                </li>
                <li>
                  <strong>Estado UE de expedición:</strong> España
                </li>
              </ul>
            </ul>
          </section>

          <section>
            <h2>2. DERECHOS DE PROPIEDAD INTELECTUAL E INDUSTRIAL</h2>
            <p>
              El sitio web, incluyendo a título enunciativo pero no limitativo
              su programación, edición, compilación y demás elementos necesarios
              para su funcionamiento, los diseños, logotipos, texto y/o
              gráficos, son propiedad del RESPONSABLE o, si es el caso, dispone
              de licencia o autorización expresa por parte de los autores. Todos
              los contenidos del sitio web se encuentran debidamente protegidos
              por la normativa de propiedad intelectual e industrial, así como
              inscritos en los registros públicos correspondientes.
            </p>
            <p>
              Independientemente de la finalidad para la que fueran destinados,
              la reproducción total o parcial, uso, explotación, distribución y
              comercialización, requiere en todo caso la autorización escrita
              previa por parte del RESPONSABLE. Cualquier uso no autorizado
              previamente se considera un incumplimiento grave de los derechos
              de propiedad intelectual o industrial del autor.
            </p>
            <p>
              Los diseños, logotipos, texto y/o gráficos ajenos al RESPONSABLE y
              que pudieran aparecer en el sitio web, pertenecen a sus
              respectivos propietarios, siendo ellos mismos responsables de
              cualquier posible controversia que pudiera suscitarse respecto a
              los mismos. El RESPONSABLE autoriza expresamente a que terceros
              puedan redirigir directamente a los contenidos concretos del sitio
              web, y en todo caso redirigir al sitio web principal de
              www.roshninutricion.com.
            </p>
          </section>

          <section>
            <h2>3. EXENCIÓN DE RESPONSABILIDADES</h2>
            <h3>Uso de Cookies</h3>
            <p>
              Este sitio web puede utilizar cookies técnicas (pequeños archivos
              de información que el servidor envía al ordenador de quien accede
              a la página) para llevar a cabo determinadas funciones que son
              consideradas imprescindibles para el correcto funcionamiento y
              visualización del sitio.
            </p>
          </section>

          <section>
            <h2>4. LEY APLICABLE Y JURISDICCIÓN</h2>
            <p>
              Para la resolución de todas las controversias o cuestiones
              relacionadas con el presente sitio web o de las actividades en él
              desarrolladas, será de aplicación la legislación española.
            </p>
          </section>
        </div>
      </Layout>
    </div>
  )
}
