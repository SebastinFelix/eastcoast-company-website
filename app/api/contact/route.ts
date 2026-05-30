import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { COMPANY } from '@/lib/config';
import { saveSubmission } from '@/lib/storage';

// ─── RATE LIMITING (simple in-memory) ─────────────────────────────────────────
const rateMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 3;       // max submissions per window
const RATE_WINDOW = 60_000; // 1 minute window

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW });
    return false;
  }
  if (entry.count >= RATE_LIMIT) return true;
  entry.count++;
  return false;
}

// ─── EMAIL TEMPLATE ───────────────────────────────────────────────────────────
function buildEmailHtml(fields: Record<string, string>) {
  const rows = [
    ['Company', fields.company],
    ['Contact Name', fields.name],
    ['Email', fields.email],
    ['Phone / WhatsApp', fields.phone || '—'],
    ['Country', fields.country || '—'],
    ['Product Category', fields.category],
    ['Estimated MOQ', fields.moq],
  ];

  return `
  <!DOCTYPE html>
  <html>
  <head><meta charset="utf-8"/></head>
  <body style="margin:0;padding:0;background:#F8F8F8;font-family:system-ui,sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#F8F8F8;padding:40px 20px;">
      <tr><td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td style="background:#111111;padding:32px 40px;">
              <p style="margin:0;color:#ffffff;font-size:22px;font-weight:700;letter-spacing:-0.02em;">
                ${COMPANY.name}<span style="color:#D72638;">.</span>
              </p>
              <p style="margin:6px 0 0;color:rgba(255,255,255,0.5);font-size:12px;letter-spacing:0.1em;text-transform:uppercase;">
                New Buyer Inquiry
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px;">
              <p style="margin:0 0 24px;font-size:24px;font-weight:700;color:#111111;line-height:1.2;">
                New inquiry from ${fields.company}
              </p>

              <!-- Details table -->
              <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #E8E8E8;border-radius:12px;overflow:hidden;margin-bottom:24px;">
                ${rows.map(([label, value], i) => `
                  <tr style="background:${i % 2 === 0 ? '#FAFAFA' : '#ffffff'};">
                    <td style="padding:14px 20px;font-size:12px;font-weight:600;color:#666666;text-transform:uppercase;letter-spacing:0.08em;width:40%;border-bottom:1px solid #F0F0F0;">
                      ${label}
                    </td>
                    <td style="padding:14px 20px;font-size:14px;color:#111111;border-bottom:1px solid #F0F0F0;">
                      ${value}
                    </td>
                  </tr>
                `).join('')}
              </table>

              <!-- Requirements -->
              <div style="background:#F8F8F8;border-radius:12px;padding:20px;margin-bottom:24px;border-left:3px solid #D72638;">
                <p style="margin:0 0 8px;font-size:12px;font-weight:600;color:#666666;text-transform:uppercase;letter-spacing:0.08em;">
                  Product Requirements
                </p>
                <p style="margin:0;font-size:14px;color:#111111;line-height:1.7;white-space:pre-wrap;">${fields.requirements}</p>
              </div>

              ${fields.fileName ? `
              <div style="background:#FFF8F0;border-radius:12px;padding:16px 20px;margin-bottom:24px;border:1px solid #F0E0CC;">
                <p style="margin:0;font-size:13px;color:#C19A6B;">
                  📎 Attachment: <strong>${fields.fileName}</strong>
                </p>
              </div>
              ` : ''}

              <!-- Reply CTA -->
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="border-radius:50px;background:#D72638;">
                    <a href="mailto:${fields.email}" style="display:inline-block;padding:14px 28px;font-size:14px;font-weight:600;color:#ffffff;text-decoration:none;letter-spacing:0.02em;">
                      Reply to ${fields.name} →
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#F8F8F8;padding:24px 40px;border-top:1px solid #E8E8E8;">
              <p style="margin:0;font-size:11px;color:#AAAAAA;line-height:1.6;">
                This email was generated from the inquiry form on ${COMPANY.website}<br/>
                ${COMPANY.legalName} · ${COMPANY.cityLine}, ${COMPANY.country}
              </p>
            </td>
          </tr>

        </table>
      </td></tr>
    </table>
  </body>
  </html>
  `;
}

// ─── AUTO-REPLY TEMPLATE ──────────────────────────────────────────────────────
function buildAutoReplyHtml(name: string, company: string) {
  return `
  <!DOCTYPE html>
  <html>
  <head><meta charset="utf-8"/></head>
  <body style="margin:0;padding:0;background:#F8F8F8;font-family:system-ui,sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#F8F8F8;padding:40px 20px;">
      <tr><td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
          <tr>
            <td style="background:#111111;padding:32px 40px;">
              <p style="margin:0;color:#ffffff;font-size:22px;font-weight:700;">${COMPANY.name}<span style="color:#D72638;">.</span></p>
            </td>
          </tr>
          <tr>
            <td style="padding:40px;">
              <p style="margin:0 0 16px;font-size:24px;font-weight:700;color:#111111;">Thank you, ${name}.</p>
              <p style="margin:0 0 20px;font-size:15px;color:#666666;line-height:1.7;">
                We've received your inquiry from <strong>${company}</strong> and our team will get back to you within <strong>24 hours</strong>.
              </p>
              <p style="margin:0 0 32px;font-size:15px;color:#666666;line-height:1.7;">
                In the meantime, feel free to reach us directly at
                <a href="mailto:${COMPANY.email}" style="color:#D72638;text-decoration:none;">${COMPANY.email}</a>
                or WhatsApp us at <strong>${COMPANY.whatsapp}</strong>.
              </p>
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="border-radius:50px;background:#111111;">
                    <a href="${COMPANY.website}" style="display:inline-block;padding:14px 28px;font-size:14px;font-weight:600;color:#ffffff;text-decoration:none;">
                      Visit Our Website →
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="background:#F8F8F8;padding:24px 40px;border-top:1px solid #E8E8E8;">
              <p style="margin:0;font-size:11px;color:#AAAAAA;">
                ${COMPANY.legalName} · ${COMPANY.cityLine}, ${COMPANY.country}<br/>
                ${COMPANY.email} · ${COMPANY.phone}
              </p>
            </td>
          </tr>
        </table>
      </td></tr>
    </table>
  </body>
  </html>
  `;
}

// ─── ROUTE HANDLER ────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  // Rate limit by IP
  const ip = req.headers.get('x-forwarded-for') ?? req.headers.get('x-real-ip') ?? 'unknown';
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please wait a minute and try again.' },
      { status: 429 }
    );
  }

  try {
    const formData = await req.formData();

    // Extract fields
    const fields = {
      company:      (formData.get('company')      as string)?.trim() ?? '',
      name:         (formData.get('name')          as string)?.trim() ?? '',
      email:        (formData.get('email')         as string)?.trim() ?? '',
      phone:        (formData.get('phone')         as string)?.trim() ?? '',
      country:      (formData.get('country')       as string)?.trim() ?? '',
      category:     (formData.get('category')      as string)?.trim() ?? '',
      moq:          (formData.get('moq')           as string)?.trim() ?? '',
      requirements: (formData.get('requirements')  as string)?.trim() ?? '',
      fileName:     '',
    };

    // Validate required fields
    const missing = ['company', 'name', 'email', 'category', 'moq', 'requirements'].filter(
      (k) => !fields[k as keyof typeof fields]
    );
    if (missing.length) {
      return NextResponse.json(
        { error: `Missing required fields: ${missing.join(', ')}` },
        { status: 400 }
      );
    }

    // Basic email format check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    // Handle file attachment
    const attachments: { filename: string; content: Buffer }[] = [];
    const file = formData.get('file') as File | null;
    if (file && file.size > 0) {
      if (file.size > 10 * 1024 * 1024) {
        return NextResponse.json({ error: 'File too large. Max 10MB allowed.' }, { status: 400 });
      }
      const buffer = Buffer.from(await file.arrayBuffer());
      attachments.push({ filename: file.name, content: buffer });
      fields.fileName = file.name;
    }

    // ── Create SMTP transporter ────────────────────────────────────────────────
    // Configure via .env.local — see .env.local.example for options
    const transporter = nodemailer.createTransport({
      host:   process.env.SMTP_HOST   ?? 'smtp.gmail.com',
      port:   Number(process.env.SMTP_PORT ?? 587),
      secure: process.env.SMTP_SECURE === 'true', // true for port 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const toEmail   = process.env.CONTACT_EMAIL ?? process.env.SMTP_USER ?? COMPANY.email;
    const fromLabel = `"${COMPANY.name} Inquiries" <${process.env.SMTP_USER}>`;

    // ── Save to local storage (always runs, even if email fails) ──────────────
    const saved = saveSubmission({
      company:      fields.company,
      name:         fields.name,
      email:        fields.email,
      phone:        fields.phone,
      country:      fields.country,
      category:     fields.category,
      moq:          fields.moq,
      requirements: fields.requirements,
      fileName:     fields.fileName || undefined,
    });

    // ── Send emails (graceful — storage already done above) ────────────────────
    try {
      await transporter.sendMail({
        from:        fromLabel,
        to:          toEmail,
        replyTo:     `"${fields.name}" <${fields.email}>`,
        subject:     `[Inquiry #${saved.id}] ${fields.company} — ${fields.category} | MOQ: ${fields.moq}`,
        html:        buildEmailHtml(fields),
        attachments,
      });

      await transporter.sendMail({
        from:    fromLabel,
        to:      `"${fields.name}" <${fields.email}>`,
        subject: `We've received your inquiry — ${COMPANY.name}`,
        html:    buildAutoReplyHtml(fields.name, fields.company),
      });
    } catch (emailErr) {
      // Email failed but submission is saved — log and continue
      console.warn('[Contact] Email failed (submission saved):', emailErr);
    }

    return NextResponse.json({ success: true, id: saved.id });
  } catch (err) {
    console.error('[Contact API Error]', err);
    return NextResponse.json(
      { error: 'Failed to send your message. Please email us directly.' },
      { status: 500 }
    );
  }
}
