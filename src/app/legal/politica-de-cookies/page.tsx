import Header from '@components/Header/Header'
import Layout from '@components/Layout/Layout'
import banner from '@assets/pictures/legal.webp'
import '@styles/Legal.scss'

export default function PoliticaDeCookies() {
  return (
    <>
      <Header title="Política de Cookies" image={banner} />
      <Layout>
        <div className="legalText">
          <h2 className="legalTextTitle">Política de Cookies</h2>
          <p>
            El sitio Web utiliza un analizador de tráfico que emplea pequeños
            archivos de información denominados y conocidos como “cookies” que
            el servidor envía al ordenador de quien accede a la página web para
            el correcto funcionamiento y visualización de los sitios web por
            parte del usuario, así como la recogida de datos estadísticos sobre
            el uso y navegación por nuestro sitio web. Podemos recabar
            información sobre su ordenador, incluido en su caso, su dirección de
            IP, sistema operativo y tipo de navegador. Las cookies contienen
            información que se transfiere al disco duro de su ordenador. Las
            cookies también nos ayudan a mejorar nuestro sitio Web y a prestar
            un servicio mejor y máspersonalizado. En concreto, nos permiten:
          </p>
          <ul>
            <li>Hacer una estimación sobre números y patrones de uso.</li>
            <li>
              Almacenar información acerca de sus preferencias y personalizar
              nuestro sitio web de conformidad con sus intereses individuales.
            </li>
            <li>Acelerar sus búsquedas.</li>
            <li>Reconocerle cuando regrese de nuevo a nuestro sitio.</li>
          </ul>
          <h2>ACEPTACIÓN Y/O RECHAZO DE LA POLÍTICA DE COOKIES</h2>
          <p>
            Este sitio web muestra información sobre su Política de Cookies en
            la parte inferior o superior del portal en cada inicio de sesión con
            el objeto de que usted sea consciente e informado de ello. Puede
            usted aceptar la instalación de las cookies en su navegador web
            mediante una acción afirmativa y positiva. También puede usted
            rechazar el uso de cookies mediante la selección de negarse a la
            instalación y su uso en su navegador. Sin embargo, debe saber que si
            lo hace puede ser que no pueda usar la plena funcionalidad de este
            sitio Web. Este sitio web realiza tratamiento de información acerca
            de usted por Google. A estos efectos, se informa que Google Inc.
            tiene la consideración de “puerto seguro” en cuanto a la normativa
            de protección de datos personales. El Usuario debe dar su previo
            consentimiento, salvo indicación en contrario, al uso de “cookies” y
            autoriza también los seguimientos de su IP durante la navegación en
            el sitio Web. A menos que haya ajustado la configuración de su
            navegador web de forma que rechace cookies, nuestro sistema
            producirá cookies cuando se conecte a nuestro sitio. Siguiendo las
            directrices europeas de la normativa de protección de datos que
            puedan verse afectados por el uso de cookies, los distintos
            navegadores de Internet cuentan con herramientas de configuración
            para que el Usuario, si lo desea, pueda desactivar y/o eliminar
            estas cookies o bien activar en su navegador el modo de navegación
            privada. Puede usted permitir, bloquear o eliminar las cookies
            instaladas en su equipo mediante la configuración de las opciones
            del navegador instalado en su ordenador: Chrome:
            https://support.google.com/chrome/answer/95647?hl=es Explorer:
            http://windows.microsoft.com/es-es/windows7/how-to-manage-cookies-ininternetexplorer-
            9 Firefox:
            https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-web
            Safari: https://support.apple.com/kb/ph5042?locale=es_ES
          </p>
          <h2>¿QUÉ COOKIES UTILIZAMOS Y PARA QUÉ?</h2>
          <p>
            A continuación, se presenta una explicación más detallada de cada
            tipo de cookie, temporalidad, titularidad, finalidad y dominios:
            Google Analytics es un servicio analítico de web prestado por
            Google, Inc., una compañía de Delaware cuya oficina principal está
            en 1600 Amphitheatre Parkway, Mountain View (California), CA94043,
            Estados Unidos (“Google”): Google Analytics usa las siguientes
            cookies: _ga, _gat, _gid, y otras posibles cookies a cargar por el
            servicio de monitorización de visitas de Google. Sirven para:
          </p>
          <ul>
            <li>Hacer una estimación sobre números y patrones de uso.</li>
            <li>
              Almacenar información acerca de sus preferencias y personalizar
              nuestro sitio web de conformidad con sus intereses individuales.
            </li>
            <li>Acelerar sus búsquedas.</li>
            <li>Reconocerle cuando regrese de nuevo a nuestro sitio.</li>
            <li>
              Generar un identificador de usuario único, que es el que se
              utiliza para hacer recuento de cuántas veces visita el sitio un
              usuario, así como la fecha de la primera y la última vez que
              visitó la web.
            </li>
            <li>
              Registrar la fecha y hora de acceso a cualquiera de las páginas
              del Sitio.
            </li>
            <li>
              Comprobar la necesidad de mantener la sesión de un usuario abierta
              o crear una nueva.
            </li>
            <li>
              Identificar la sesión del usuario, para recoger la ubicación
              geográfica aproximada del ordenadorque accede al Sitio con efectos
              estadísticos.
            </li>
          </ul>
          <p>Pueden ser tanto temporales como persistentes.</p>
        </div>
      </Layout>
    </>
  )
}
