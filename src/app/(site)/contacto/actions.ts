'use server'

import { Resend } from 'resend'
import GraciasPorContactar from '@/_emails/gracias-por-contactar'
import automaticResponseEmail from '@/_emails/mensaje-interno'
import { CONTACT_EMAIL } from '@/content/site'

export type ContactFields = { email: string; message: string; name: string }

export type ContactState = {
  errors?: Partial<ContactFields>
  status: 'idle' | 'invalid' | 'sent' | 'failed'
  values?: ContactFields
}

// Real users need at least a few seconds to fill the form
const MIN_FILL_TIME_MS = 3000
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

// Bot strings like "PCqHAjJKSVtJsCckEPq": one long run of letters, no spaces,
// with several capitals after the first character
function isGibberish(value: string) {
  const trimmed = value.trim()
  if (!/^[A-Za-z]{12,}$/.test(trimmed)) return false
  const innerUppercase = trimmed.slice(1).replace(/[^A-Z]/g, '').length
  return innerUppercase >= 3
}

function isSpam(
  { email, message, name }: ContactFields,
  website: string,
  startedAt: number,
) {
  if (website) return true // honeypot filled
  if (!startedAt || Date.now() - startedAt < MIN_FILL_TIME_MS) return true
  if (isGibberish(name) || isGibberish(message)) return true
  // Dotted Gmail variants are used to bomb a victim's inbox via our auto-reply
  const [localPart, domain] = email.toLowerCase().split('@')
  return domain === 'gmail.com' && (localPart.match(/\./g) ?? []).length >= 3
}

function validate({ email, message, name }: ContactFields) {
  const errors: Partial<ContactFields> = {}
  if (!name) errors.name = 'Por favor introduzca su nombre y apellidos.'
  else if (name.length > 100) errors.name = 'El nombre es demasiado largo.'
  if (!EMAIL_REGEX.test(email)) {
    errors.email = 'Por favor introduzca un email válido.'
  }
  if (!message) errors.message = 'Por favor introduzca su mensaje.'
  else if (message.length > 5000) {
    errors.message = 'El mensaje no puede superar los 5000 caracteres.'
  }
  return errors
}

export async function sendContactMessage(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const field = (key: string) => String(formData.get(key) ?? '').trim()
  const values: ContactFields = {
    email: field('email'),
    message: field('message'),
    name: field('name'),
  }

  const errors = validate(values)
  if (Object.keys(errors).length > 0) {
    return { errors, status: 'invalid', values }
  }

  // Pretend it worked so bots don't adapt
  if (isSpam(values, field('website'), Number(field('startedAt')))) {
    return { status: 'sent' }
  }

  const apiKey = process.env.NEXT_RESEND_API_KEY
  if (!apiKey) return { status: 'failed', values }

  try {
    const resend = new Resend(apiKey)
    await resend.emails.send({
      from: 'info@roshninutricion.com',
      react: automaticResponseEmail(values),
      subject: `Consulta Web - ${values.name}`,
      to: CONTACT_EMAIL,
    })
    await resend.emails.send({
      from: 'info@roshninutricion.com',
      react: GraciasPorContactar({ name: values.name }),
      subject: `${values.name}, gracias por contactarnos`,
      to: values.email,
    })
    return { status: 'sent' }
  } catch {
    return { status: 'failed', values }
  }
}
