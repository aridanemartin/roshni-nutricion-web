import stomachIcon from '@assets/icons/stomach.webp'
import intoleranceIcon from '@assets/icons/intolerance.webp'
import immunityIcon from '@assets/icons/immunity.webp'
import diabetesIcon from '@assets/icons/diabetes.webp'
import fatIcon from '@assets/icons/fat.webp'
import posts from '@/app/(site)/blog/posts.json'

export const SITE_URL = 'https://www.roshninutricion.com'

export const SITE_NAME = 'Roshni Peswani Nutricionista - Dietista en Las Palmas'

export const SITE_TITLE =
  'Roshni Peswani | Nutricionista - Dietista en Las Palmas'

export const SITE_DESCRIPTION =
  'Dietista-Nutricionista en Las Palmas especializada en patologías digestivas. Te acompaño a mejorar tu salud con alimentación y hábitos sostenibles.'

export const CONTACT_PHONE = '+34644011842'

export const DOCTORALIA_URL =
  'https://www.doctoralia.es/roshni-peswani-peswani/dietista-nutricionista/las-palmas-de-gran-canaria'

export const CONTACT_EMAIL = 'roshninutricion@gmail.com'

export const ROUTES = {
  about: '/roshni-peswani-nutricionista-dietista',
  blog: '/blog',
  contact: '/contacto',
  cookies: '/legal/politica-de-cookies',
  home: '/',
  legal: '/legal/aviso-legal',
  privacy: '/legal/politica-de-privacidad',
} as const

export const NAV_LINKS = [
  { href: '/#servicios', label: 'Servicios' },
  { href: '/#consulta', label: 'Consulta' },
  { href: ROUTES.about, label: 'Sobre mí' },
  { href: `${ROUTES.about}#resenas`, label: 'Reseñas' },
  { href: ROUTES.blog, label: 'Blog' },
  { href: ROUTES.contact, label: 'Contacto' },
]

export const LEGAL_LINKS = [
  { href: ROUTES.legal, label: 'Aviso Legal' },
  { href: ROUTES.privacy, label: 'Política de Privacidad' },
  { href: ROUTES.cookies, label: 'Política de Cookies' },
]

export const SOCIAL_LINKS = {
  doctoralia: DOCTORALIA_URL,
  instagram: 'https://www.instagram.com/roshninutricion/',
  linkedin:
    'https://www.linkedin.com/in/roshni-peswani-8057604b/?originalSubdomain=es',
  whatsapp: 'https://wa.me/34644011842',
}

export const WHATSAPP_LABEL = 'WhatsApp 644 011 842'

export const BOOKING_INTRO =
  'Reserva tu cita llamando al centro de tu elección o contactando directamente conmigo a través del siguiente formulario.'

export type Clinic = {
  address: [string, string]
  fullName?: string
  name: string
  phones: { href: string; label: string; note?: string }[]
}

export const CLINICS: Clinic[] = [
  {
    address: ['C/ León y Castillo, 407', '35007 Las Palmas de Gran Canaria'],
    fullName: 'Hospital Perpetuo Socorro',
    name: 'HPS',
    phones: [{ href: 'tel:+34928499900', label: '928 499 900' }],
  },
  {
    address: [
      'C. Fernando Guanarteme, 28, Bajo',
      '35010 Las Palmas de Gran Canaria',
    ],
    name: 'Cime',
    phones: [{ href: 'tel:+34928091419', label: '928 091 419' }],
  },
]

export const SERVICES = [
  {
    icon: stomachIcon,
    items: [
      'Digestiones lentas, hinchazón abdominal',
      'Gastritis / Reflujo',
      'Diarrea / Estreñimiento',
      'Sobrecrecimiento bacteriano',
    ],
    title: 'Salud Digestiva',
  },
  {
    icon: intoleranceIcon,
    items: ['Lactosa', 'Fructosa / Sorbitol', 'Gluten', 'Histamina'],
    title: 'Intolerancias Alimentarias',
  },
  {
    icon: immunityIcon,
    items: ['Hipotiroidismo Hashimoto', 'Artritis Reumatoide', 'Psoriasis'],
    title: 'Enfermedades Autoinmunes',
  },
  {
    icon: diabetesIcon,
    items: ['Obesidad', 'Diabetes', 'HTA'],
    title: 'Síndrome metabólico',
  },
  {
    icon: fatIcon,
    items: [
      'Pérdida de peso',
      'Ganancia de masa muscular',
      'Definición muscular',
    ],
    title: 'Composición Corporal',
  },
]

// Short excerpts of reviews.json entries for the home page quote
export const REVIEW_HIGHLIGHTS = [
  {
    author: 'A.',
    text: 'Llevo toda mi vida luchando con el peso y por primera vez he conseguido aprender a comer y he obtenido unos hábitos que ya forman parte de mi vida.',
  },
  {
    author: 'S. M.',
    text: 'Con ella logré resolver todos los problemas ocasionados por diversas intolerancias y aprendí a comer de forma saludable.',
  },
  {
    author: 'L. S.',
    text: 'En mi caso fui por que tengo Colon irritable y además quería bajar 10 kilos, consiguiendo buenos resultados en ambos casos, así que muy contenta...',
  },
  {
    author: 'C. F.',
    text: 'He seguido tratamiento con Roshni y he conseguido los objetivos de salud y peso que me propuso en un tiempo récord.',
  },
]

// Collaborator logos are referenced by path in posts.json
export const COLLABORATORS: Record<
  string,
  { height: number; name: string; width: number }
> = {
  '/static/collaborators/cadenaSerLogo.webp': {
    height: 212,
    name: 'Cadena SER',
    width: 498,
  },
  '/static/collaborators/canarias7Logo.webp': {
    height: 96,
    name: 'Canarias7',
    width: 521,
  },
  '/static/collaborators/laProvinciaLogo.webp': {
    height: 129,
    name: 'La Provincia',
    width: 864,
  },
  '/static/collaborators/sparLogo.webp': {
    height: 127,
    name: 'Spar',
    width: 800,
  },
}

export type Post = {
  collaborator?: { height: number; logo: string; name: string; width: number }
  description: string
  id: string
  image: string
  link: string
  title: string
}

export const POSTS: Post[] = posts.map((post) => {
  const collaborator = COLLABORATORS[post.collaboratorLogo]
  return {
    collaborator: collaborator
      ? { ...collaborator, logo: post.collaboratorLogo }
      : undefined,
    description: post.description,
    id: String(post.id),
    image: post.image,
    link: post.link,
    title: post.title,
  }
})
