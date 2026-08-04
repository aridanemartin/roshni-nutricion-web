import {
  Body,
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

interface automaticResponseEmailProps {
  name?: string
  message?: string
  email?: string
}

const domainUrl = 'https://roshninutricion.com'

export const automaticResponseEmail = ({
  name,
  message,
  email,
}: automaticResponseEmailProps) => {
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
          <Section style={logo}>
            <Img
              alt="Roshni Nutrición Logo"
              height="75"
              src={`${domainUrl}/static/logoVerde.png`}
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
                  Mensaje de <b>{getName(name)}</b>,
                </Heading>
                <Heading
                  as="h2"
                  style={{
                    color: '#8eb86f',
                    fontSize: 18,
                    margin: 0,
                    marginBottom: '2rem',
                    textAlign: 'center',
                  }}
                >
                  {email}
                </Heading>
                <Text style={{ ...paragraph, marginTop: -5 }}>{message}</Text>
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

export default automaticResponseEmail

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

const content = {
  border: '1px solid rgb(0,0,0, 0.1)',
  borderRadius: '3px',
  overflow: 'hidden',
}

const boxInfos = {
  padding: '20px 40px',
}

const headerBackground = {
  backgroundImage: `url(${domainUrl}/static/roshniProfile2.png)`,
  backgroundPosition: '0 20%',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '300px',
}
