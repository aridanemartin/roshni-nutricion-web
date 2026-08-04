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

const domainUrl = 'https://roshninutricion.com'

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
            <Img
              alt="Roshni Nutrición Logo"
              height="75"
              src="https://roshninutricion.com/static/logoVerde.png"
            />
          </Section>

          <Section style={content}>
            <Row style={headerBackground}>{null}</Row>
            <Row style={{ ...boxInfos, paddingBottom: '0' }}>
              <Column>
                <Heading
                  style={{
                    color: '#8eb86f',
                    fontSize: 32,
                    marginBottom: '0',
                    textAlign: 'center',
                  }}
                >
                  Estimado/a <b>{getName(name)}</b>,
                </Heading>
                <Heading
                  as="h2"
                  style={{
                    color: '#8eb86f',
                    fontSize: 26,
                    margin: 0,
                    marginBottom: '2rem',
                    textAlign: 'center',
                  }}
                >
                  gracias por contactarnos
                </Heading>
                <Text
                  style={{
                    ...paragraph,
                    marginBottom: '3rem',
                    marginTop: -5,
                  }}
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
              <Column colSpan={2} style={containerButton}>
                <Button href={domainUrl} style={button}>
                  Volver a la web
                </Button>
              </Column>
            </Row>
          </Section>
          <Text
            style={{
              color: 'rgb(0,0,0, 0.7)',
              fontSize: 12,
              textAlign: 'center',
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
  height: 'fit-content',
  justifyContent: 'center',
  padding: '2rem 0',
}

const containerButton = {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
}

const button = {
  backgroundColor: '#8eb86f',
  border: '1px solid rgb(0,0,0, 0.1)',
  borderRadius: 3,
  color: '#FFF',
  cursor: 'pointer',
  fontWeight: 'bold',
  padding: '12px 30px',
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
  backgroundImage: 'url(https://roshninutricion.com/static/roshniProfile2.png)',
  backgroundPosition: '0 20%',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '300px',
}
