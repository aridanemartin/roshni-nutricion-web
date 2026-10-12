'use client'

import Link from 'next/link'
import { useActionState, useEffect, useRef } from 'react'
import {
  type ContactState,
  sendContactMessage,
} from '@/app/(site)/contacto/actions'
import { CLINICS, CONTACT_EMAIL, ROUTES } from '@/content/site'
import buttonStyles from '@components/Button/Button.module.css'
import styles from '@components/ContactForm/ContactForm.module.css'

const initialState: ContactState = { status: 'idle' }

const fallbackContacts = [
  { href: `mailto:${CONTACT_EMAIL}`, label: CONTACT_EMAIL },
  ...CLINICS.flatMap((clinic) =>
    clinic.phones.map((phone) => ({
      href: phone.href,
      label: phone.note ? `${phone.label} (${phone.note})` : phone.label,
    })),
  ),
]

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    sendContactMessage,
    initialState,
  )
  const startedAt = useRef<HTMLInputElement>(null)

  // Timestamp used by the server to reject forms submitted too fast to be human
  useEffect(() => {
    if (startedAt.current) startedAt.current.value = String(Date.now())
  }, [])

  if (state.status === 'sent') {
    return (
      <div className={styles.form} role="status">
        <h2 className={styles.doneTitle}>Mensaje enviado</h2>
        <p className={styles.doneText}>Gracias por contactarnos.</p>
      </div>
    )
  }

  const { errors = {}, values } = state

  return (
    <form action={formAction} className={styles.form} noValidate>
      {state.status === 'failed' && (
        <div className={styles.alert} role="alert">
          <p className={styles.alertTitle}>No hemos podido enviar tu mensaje</p>
          <p>
            El servicio de envío de emails no está disponible en este momento.
            Puedes contactarnos directamente por email o teléfono:
          </p>
          <ul>
            {fallbackContacts.map(({ href, label }) => (
              <li key={href}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className={styles.field}>
        <label htmlFor="contact-name">Nombre y Apellidos</label>
        <input
          aria-describedby={errors.name ? 'contact-name-error' : undefined}
          aria-invalid={Boolean(errors.name)}
          autoComplete="name"
          defaultValue={values?.name}
          id="contact-name"
          maxLength={100}
          name="name"
          placeholder="Nombre y Apellidos"
          type="text"
        />
        <span className={styles.error} id="contact-name-error">
          {errors.name}
        </span>
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-email">Email</label>
        <input
          aria-describedby={errors.email ? 'contact-email-error' : undefined}
          aria-invalid={Boolean(errors.email)}
          autoComplete="email"
          defaultValue={values?.email}
          id="contact-email"
          name="email"
          placeholder="email@ejemplo.com"
          type="email"
        />
        <span className={styles.error} id="contact-email-error">
          {errors.email}
        </span>
      </div>

      {/* Honeypot: hidden from people, bots fill it in */}
      <input
        aria-hidden="true"
        autoComplete="off"
        className={styles.honeypot}
        name="website"
        tabIndex={-1}
        type="text"
      />
      <input name="startedAt" ref={startedAt} type="hidden" />

      <div className={styles.field}>
        <label htmlFor="contact-message">Mensaje</label>
        <textarea
          aria-describedby={
            errors.message ? 'contact-message-error' : undefined
          }
          aria-invalid={Boolean(errors.message)}
          defaultValue={values?.message}
          id="contact-message"
          maxLength={5000}
          name="message"
          placeholder="Escribe aquí tu mensaje"
        />
        <span className={styles.error} id="contact-message-error">
          {errors.message}
        </span>
      </div>

      <button
        className={`${buttonStyles.button} ${buttonStyles.solid}`}
        disabled={isPending}
        type="submit"
      >
        {isPending ? 'Enviando…' : 'Enviar'}
      </button>

      <p className={styles.privacy}>
        Utilizaremos sus datos únicamente para responder consultas y realizar
        análisis estadísticos. Para más información sobre el tratamiento y sus
        derechos, consulte la{' '}
        <Link href={ROUTES.privacy}>política de privacidad</Link>.
      </p>
    </form>
  )
}
