import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import GraciasPorContactar from 'src/_emails/gracias-por-contactar';
import automaticResponseEmail from 'src/_emails/mensaje-interno';

// Real users need at least a few seconds to fill the form
const MIN_FILL_TIME_MS = 3000;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function getResend() {
	const apiKey = process.env.NEXT_RESEND_API_KEY;
	if (!apiKey) {
		throw new Error('NEXT_RESEND_API_KEY is not set');
	}
	return new Resend(apiKey);
}

// Bot strings like "PCqHAjJKSVtJsCckEPq": one long run of letters, no spaces,
// with several capitals after the first character
function isGibberish(value: string) {
	const trimmed = value.trim();
	if (!/^[A-Za-z]{12,}$/.test(trimmed)) return false;
	const innerUppercase = trimmed.slice(1).replace(/[^A-Z]/g, '').length;
	return innerUppercase >= 3;
}

function isSpam({ name, email, message, website, startedAt }) {
	if (website) return true; // honeypot filled
	if (typeof startedAt !== 'number' || Date.now() - startedAt < MIN_FILL_TIME_MS) {
		return true;
	}
	if (isGibberish(name) || isGibberish(message)) return true;
	// Dotted Gmail variants are used to bomb a victim's inbox via our auto-reply
	const [localPart, domain] = email.toLowerCase().split('@');
	if (domain === 'gmail.com' && (localPart.match(/\./g) ?? []).length >= 3) {
		return true;
	}
	return false;
}

export async function POST(req) {
	const res = await req.json().catch(() => ({}));
	const { name, email, message, website, startedAt } = res;

	if (
		typeof name !== 'string' ||
		typeof email !== 'string' ||
		typeof message !== 'string' ||
		!name.trim() ||
		!message.trim() ||
		name.length > 100 ||
		message.length > 5000 ||
		!EMAIL_REGEX.test(email)
	) {
		return NextResponse.json({ error: 'Invalid form data', success: false }, { status: 400 });
	}

	// Pretend it worked so bots don't adapt
	if (isSpam({ email, message, name, startedAt, website })) {
		return NextResponse.json({ success: true });
	}

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
