import { Resend } from 'resend'
import { NextResponse } from 'next/server'
import GraciasPorContactar from 'src/_emails/gracias-por-contactar'
import automaticResponseEmail from 'src/_emails/mensaje-interno'

const resend = new Resend(process.env.NEXT_RESEND_API_KEY)

export async function POST(req) {
  const res = await req.json()
  const { name, email, message } = res

  try {
    await resend.emails.send({
      from: 'info@desiacostanutricion.com',
      to: 'desiacostanutri@gmail.com',
      subject: `Consulta Web - ${name}`,
      react: automaticResponseEmail({
        name,
        message,
        email,
      }),
    })

    await resend.emails.send({
      from: 'info@desiacostanutricion.com',
      to: email,
      subject: `${name}, gracias por contactarnos`,
      react: GraciasPorContactar({
        name,
      }),
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json({ success: false, error: error.toString() })
  }
}
