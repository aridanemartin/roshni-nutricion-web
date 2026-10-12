import {
  CLINICS,
  type Clinic,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  ROUTES,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  SOCIAL_LINKS,
} from '@/content/site'

/**
 * Structured data (schema.org / JSON-LD) builders.
 *
 * Every node gets a stable `@id` so other nodes can reference it without
 * duplicating data. All URLs are absolute and all dates ISO-8601 — see
 * the schema validation checklist in the project SEO docs.
 */

const ID = {
  logo: `${SITE_URL}/static/logoVerde.png`,
  photo: `${SITE_URL}/static/roshniProfile2.png`,
  practice: `${SITE_URL}/#practice`,
  roshni: `${SITE_URL}/#roshni`,
  website: `${SITE_URL}/#website`,
} as const

type SchemaNode = Record<string, unknown>

function telHref(phone: string) {
  return phone.replace(/^tel:/, '')
}

function postalAddress({ address }: Clinic): SchemaNode {
  const [streetAddress, locality] = address
  const match = locality.match(/^(\d{5})\s+(.*)$/)
  return {
    '@type': 'PostalAddress',
    addressCountry: 'ES',
    addressLocality: match ? match[2] : locality,
    addressRegion: 'Las Palmas',
    postalCode: match ? match[1] : undefined,
    streetAddress,
  }
}

function clinicPlace(clinic: Clinic): SchemaNode {
  return {
    '@type': 'MedicalClinic',
    address: postalAddress(clinic),
    name: clinic.fullName ?? clinic.name,
    telephone: clinic.phones.map((phone) => telHref(phone.href)),
  }
}

export function localBusinessSchema(): SchemaNode {
  return {
    '@context': 'https://schema.org',
    '@id': ID.practice,
    '@type': 'LocalBusiness',
    address: postalAddress(CLINICS[0]),
    areaServed: { '@type': 'City', name: 'Las Palmas de Gran Canaria' },
    email: CONTACT_EMAIL,
    employee: { '@id': ID.roshni },
    founder: { '@id': ID.roshni },
    image: ID.photo,
    legalName: 'Roshni Peswani',
    location: CLINICS.map(clinicPlace),
    logo: ID.logo,
    name: SITE_NAME,
    sameAs: [
      SOCIAL_LINKS.instagram,
      SOCIAL_LINKS.linkedin,
      SOCIAL_LINKS.doctoralia,
    ],
    telephone: CONTACT_PHONE,
    url: SITE_URL,
  }
}

export function personSchema(): SchemaNode {
  return {
    '@context': 'https://schema.org',
    '@id': ID.roshni,
    '@type': 'Person',
    alumniOf: [
      {
        '@type': 'CollegeOrUniversity',
        name: 'Universidad Complutense de Madrid',
      },
      {
        '@type': 'CollegeOrUniversity',
        name: 'Universidad CEU Cardenal Herrera',
      },
    ],
    email: CONTACT_EMAIL,
    image: ID.photo,
    jobTitle: 'Dietista-Nutricionista',
    knowsAbout: [
      'Nutrición clínica',
      'Patologías digestivas',
      'Microbiota intestinal',
      'Intolerancias alimentarias',
      'Composición corporal',
    ],
    name: 'Roshni Peswani',
    sameAs: [
      SOCIAL_LINKS.instagram,
      SOCIAL_LINKS.linkedin,
      SOCIAL_LINKS.doctoralia,
    ],
    url: `${SITE_URL}${ROUTES.about}`,
    worksFor: { '@id': ID.practice },
  }
}

export function websiteSchema(): SchemaNode {
  return {
    '@context': 'https://schema.org',
    '@id': ID.website,
    '@type': 'WebSite',
    description: SITE_DESCRIPTION,
    inLanguage: 'es-ES',
    name: SITE_NAME,
    publisher: { '@id': ID.practice },
    url: SITE_URL,
  }
}

/** Entities present on every public page, emitted as separate JSON-LD blocks. */
export function siteGraph(): SchemaNode[] {
  return [websiteSchema(), localBusinessSchema(), personSchema()]
}

export function breadcrumbSchema(
  items: { name: string; path: string }[],
): SchemaNode {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      item: `${SITE_URL}${item.path}`,
      name: item.name,
      position: index + 1,
    })),
  }
}

export function webPageSchema({
  description,
  name,
  path,
  type = 'WebPage',
}: {
  description?: string
  name: string
  path: string
  type?: 'CollectionPage' | 'ContactPage' | 'ProfilePage' | 'WebPage'
}): SchemaNode {
  return {
    '@context': 'https://schema.org',
    '@type': type,
    description,
    inLanguage: 'es-ES',
    isPartOf: { '@id': ID.website },
    name,
    url: `${SITE_URL}${path}`,
  }
}
