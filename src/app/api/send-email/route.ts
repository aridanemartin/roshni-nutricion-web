import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import GraciasPorContactar from 'src/_emails/gracias-por-contactar';
import automaticResponseEmail from 'src/_emails/mensaje-interno';

function getResend() {
	const apiKey = process.env.NEXT_RESEND_API_KEY;
	if (!apiKey) {
		throw new Error('NEXT_RESEND_API_KEY is not set');
	}
	return new Resend(apiKey);
}

export async function POST(req) {
	const res = await req.json();
	const { name, email, message } = res;

	try {
		const resend = getResend();

		await resend.emails.send({
			from: 'info@roshninutricion.com',
			react: automaticResponseEmail({
				email,
				message,
				name,
			}),
			subject: `Consulta Web - ${name}`,
			to: 'roshninutricion@gmail.com', // Change this to the email you want to receive the contact form
		});

		await resend.emails.send({
			from: 'info@roshninutricion.com',
			react: GraciasPorContactar({
				name,
			}),
			subject: `${name}, gracias por contactarnos`,
			to: email,
		});

		return NextResponse.json({ success: true });
	} catch (error) {
		return NextResponse.json({ error: error.toString(), success: false });
	}
}
