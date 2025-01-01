import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components'
import * as React from 'react'

interface graciasPorContactarProps {
  name?: string
}

let domainUrl = 'https://www.desiacostanutricion.com'

export const GraciasPorContactarEmail = ({
  name,
}: graciasPorContactarProps) => {
  const year = new Date().getFullYear()
  const getName = (name: string) => {
    if (!name) return
    const nameSplitted = name.split(' ')
    if (nameSplitted.length > 3) {
      return `${nameSplitted[0]} ${nameSplitted[1]}`
    } else {
      return nameSplitted[0]
    }
  }

  return (
    <Html>
      <Head />
      <Preview>
        Apreciamos tu interés en cuidar de tu salud y bienestar, y estamos
        comprometidos a brindarte el mejor servicio posible.
      </Preview>
      <Body style={main}>
        <Container>
          {/* <Section style={logo}>
            <Img
              src={`${domainUrl}/static/logoDesi.png`}
              width="100"
              height="100"
            />
          </Section> */}

          <Section style={content}>
            <Row style={headerBackground}>{null}</Row>
            <Row style={{ ...boxInfos, paddingBottom: '0' }}>
              <Column>
                <Heading
                  style={{
                    fontSize: 32,
                    textAlign: 'center',
                    marginBottom: '0',
                    color: '#e8998d',
                  }}
                >
                  Estimado/a <b>{getName(name)}</b>,
                </Heading>
                <Heading
                  as="h2"
                  style={{
                    fontSize: 26,
                    textAlign: 'center',
                    margin: 0,
                    color: '#e8998d',
                    marginBottom: '2rem',
                  }}
                >
                  gracias por contactarnos
                </Heading>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  Gracias por tu interés en cuidar de tu salud y bienestar.
                </Text>
                <Text
                  style={{ ...paragraph, marginTop: -5, marginBottom: '3rem' }}
                >
                  Si necesitas realizar alguna modificación o tienes alguna
                  pregunta adicional, no dudes en contactarme a través de este
                  correo electrónico (desiacostanutri@gmail.com). Agradezco la
                  confianza que has depositado en mis servicios y espero tener
                  la oportunidad de conocerte pronto y tratar tu caso en
                  consulta.
                  <br />
                  <br />
                  Atentamente,
                  <br />
                  Desirée Acosta
                </Text>
                {/* <Row style={mapaOficina}>{null}</Row> */}
              </Column>
            </Row>
            <Row style={{ ...boxInfos, paddingTop: '0' }}>
              <Column style={containerButton} colSpan={2}>
                <Button style={button} href={domainUrl}>
                  Volver a la web
                </Button>
              </Column>
            </Row>
          </Section>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 12,
              color: 'rgb(0,0,0, 0.7)',
            }}
          >
            © {`${year}`} | Desirée Acosta, Nutricionista / Dietista en Las
            Palmas | {`${domainUrl}`}
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

export default GraciasPorContactarEmail

const main = {
  backgroundColor: '#fff',
  fontFamily: 'forum',
}

const paragraph = {
  fontSize: 16,
}

const logo = {
  height: '100px',
  padding: '30px 20px',
}

const containerButton = {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
}

const button = {
  backgroundColor: '#e8998d',
  padding: '12px 30px',
  borderRadius: 3,
  color: '#FFF',
  fontWeight: 'bold',
  border: '1px solid rgb(0,0,0, 0.1)',
  cursor: 'pointer',
}

const content = {
  border: '1px solid rgb(0,0,0, 0.1)',
  borderRadius: '3px',
  overflow: 'hidden',
}

const boxInfos = {
  padding: '20px 40px',
}

const headerBackground = {
  backgroundImage: `url(${domainUrl}/static/contactoWithLogo.webp)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: '200px',
}

const mapaOficina = {
  backgroundImage: `url(${domainUrl}/static/mapaOficina.webp)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: '200px',
  marginBottom: '2rem',
}
