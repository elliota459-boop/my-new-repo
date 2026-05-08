import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export const runtime = 'nodejs'

type ContactPayload = {
  name?: string
  email?: string
  company?: string
  projectType?: string
  budget?: string
  message?: string
}

const requiredConfig = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASSWORD'] as const

const clean = (value: unknown) => String(value ?? '').trim()

const isValidEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

export async function POST(request: Request) {
  const missingConfig = requiredConfig.filter((key) => !process.env[key])

  if (missingConfig.length > 0) {
    console.error(`Missing SMTP configuration: ${missingConfig.join(', ')}`)
    return NextResponse.json({ error: 'Email service is not configured.' }, { status: 500 })
  }

  let payload: ContactPayload

  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const name = clean(payload.name)
  const email = clean(payload.email)
  const company = clean(payload.company)
  const projectType = clean(payload.projectType)
  const budget = clean(payload.budget)
  const message = clean(payload.message)

  if (!name || !email || !projectType || !budget || !isValidEmail(email)) {
    return NextResponse.json({ error: 'Please complete the required fields.' }, { status: 400 })
  }

  const smtpPort = Number(process.env.SMTP_PORT ?? 465)
  const secure = process.env.SMTP_SECURE
    ? process.env.SMTP_SECURE === 'true'
    : smtpPort === 465
  const toEmail = process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: smtpPort,
    secure,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  })

  const submittedAt = new Date().toISOString()
  const subject = `New website enquiry from ${name}`
  const text = [
    `New website enquiry received at ${submittedAt}`,
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company || 'Not provided'}`,
    `Project type: ${projectType}`,
    `Budget: ${budget}`,
    '',
    'Message:',
    message || 'Not provided',
  ].join('\n')

  try {
    await transporter.sendMail({
      from: `"IBNAY Website" <${process.env.SMTP_USER}>`,
      to: toEmail,
      replyTo: email,
      subject,
      text,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Failed to send contact email:', error)
    return NextResponse.json({ error: 'Could not send message.' }, { status: 502 })
  }
}
