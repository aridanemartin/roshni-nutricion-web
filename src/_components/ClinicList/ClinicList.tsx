import { CLINICS } from '@/content/site'
import { Button } from '@components/Button/Button'
import styles from '@components/ClinicList/ClinicList.module.css'

// Both variants sit on a dark ground. "list" shows phones as text (home page);
// "cards" turns them into call buttons (contact page).
export default function ClinicList({
  variant = 'list',
}: {
  variant?: 'list' | 'cards'
}) {
  return (
    <div className={styles[variant]}>
      {CLINICS.map((clinic) => (
        <address className={styles.clinic} key={clinic.name}>
          <span className={styles.sub}>{clinic.fullName ?? ' '}</span>
          <h3>{clinic.name}</h3>
          <p>
            {clinic.address[0]}
            <br />
            {clinic.address[1]}
          </p>
          {variant === 'list' ? (
            <div className={styles.phones}>
              {clinic.phones.map((phone) => (
                <a href={phone.href} key={phone.href}>
                  {phone.label}
                  {phone.note && <small>{phone.note}</small>}
                </a>
              ))}
            </div>
          ) : (
            <div className={styles.actions}>
              {clinic.phones.map((phone, i) => (
                <Button
                  href={phone.href}
                  key={phone.href}
                  variant={i === 0 ? 'leaf' : 'line'}
                >
                  {phone.note ?? 'Llamar'} · {phone.label}
                </Button>
              ))}
            </div>
          )}
        </address>
      ))}
    </div>
  )
}
