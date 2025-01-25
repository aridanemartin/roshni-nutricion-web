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

let domainUrl = 'https://www.roshninutricion.com'
domainUrl = ''

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
        Valoramos mucho tu interés en priorizar tu salud y bienestar, y nuestro
        compromiso es ofrecerte la mejor atención posible.
      </Preview>
      <Body style={main}>
        <Container>
          <Section style={logo}>
            <Img src={`${domainUrl}/static/logoVerde.png`} height="75" />
          </Section>

          <Section style={content}>
            <Row style={headerBackground}>{null}</Row>
            <Row style={{ ...boxInfos, paddingBottom: '0' }}>
              <Column>
                <Heading
                  style={{
                    fontSize: 32,
                    textAlign: 'center',
                    marginBottom: '0',
                    color: '#8eb86f',
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
                    color: '#8eb86f',
                    marginBottom: '2rem',
                  }}
                >
                  gracias por contactarnos
                </Heading>
                <Text
                  style={{ ...paragraph, marginTop: -5, marginBottom: '3rem' }}
                >
                  Si necesitas hacer alguna pregunta adicional, no dudes en
                  escribirme a este correo electrónico
                  (roshninutricion@gmail.com). Te agradezco el interés en mis
                  servicios y espero poder conocerte pronto para trabajar juntos
                  en consulta.
                  <br />
                  <br />
                  Atentamente,
                  <br />
                  Roshni Peswani
                </Text>
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
            © {`${year}`} | Roshni Peswani, Dietista - Nutricionista en Las
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
  display: 'flex',
  justifyContent: 'center',
  height: 'fit-content',
  padding: '2rem 0',
}

const containerButton = {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
}

const button = {
  backgroundColor: '#8eb86f',
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
  backgroundImage: `url(${domainUrl}/static/roshniProfile2.webp)`,
  backgroundSize: 'cover',
  backgroundPosition: '0 20%',
  backgroundRepeat: 'no-repeat',
  height: '300px',
}
