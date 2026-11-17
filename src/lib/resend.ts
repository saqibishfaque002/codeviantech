import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
export const resend = resendApiKey && resendApiKey !== "re_demo_key" ? new Resend(resendApiKey) : null;

export interface SendInquiryEmailParams {
  name: string;
  email: string;
  company?: string;
  service: string;
  budget?: string;
  message: string;
}

/**
 * Sends branded inquiry emails using Resend:
 * 1. An alert to CodvianTech's inquiry team
 * 2. An automated receipt & welcome note to the client
 */
export async function sendInquiryEmails(params: SendInquiryEmailParams) {
  const { name, email, company, service, budget, message } = params;
  const adminNotificationEmail = process.env.CONTACT_NOTIFICATION_EMAIL || "inquiries@codeviantech.com";

  // If no live Resend key is configured, log in development mode gracefully
  if (!resend) {
    console.warn(
      "[Resend Mock] No valid RESEND_API_KEY detected. Simulating successful email dispatch for:",
      { to: email, adminTo: adminNotificationEmail, service }
    );
    return {
      success: true,
      simulated: true,
      message: "Inquiry processed (Simulated mode: Add a valid RESEND_API_KEY in .env.local to send live emails).",
    };
  }

  try {
    // 1. Send Internal Notification to Team
    const adminEmailResult = await resend.emails.send({
      from: "CodvianTech Inquiries <onboarding@resend.dev>",
      to: [adminNotificationEmail],
      replyTo: email,
      subject: `🚨 New Project RFP: ${name} (${company || "Individual"}) — ${service}`,
      html: `
        <!DOCTYPE html>
        <html>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #081326; color: #f4f7fc; padding: 32px 16px;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #10213b; border-radius: 16px; border: 1px solid rgba(180, 203, 238, 0.15); padding: 32px;">
            <div style="border-bottom: 1px solid rgba(180, 203, 238, 0.15); padding-bottom: 20px; margin-bottom: 24px;">
              <h2 style="color: #55d6e8; margin: 0; font-size: 22px;">CodvianTech Team Notification</h2>
              <p style="color: #a8b5c9; font-size: 14px; margin: 6px 0 0;">A new project consultation was just submitted through the website.</p>
            </div>
            
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr>
                <td style="padding: 10px 0; color: #8db3ff; width: 140px; font-weight: 600;">Client Name:</td>
                <td style="padding: 10px 0; color: #ffffff;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #8db3ff; font-weight: 600;">Email:</td>
                <td style="padding: 10px 0; color: #ffffff;"><a href="mailto:${email}" style="color: #55d6e8;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #8db3ff; font-weight: 600;">Company / Org:</td>
                <td style="padding: 10px 0; color: #ffffff;">${company || "Not specified"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #8db3ff; font-weight: 600;">Requested Service:</td>
                <td style="padding: 10px 0; color: #ffffff;">${service}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #8db3ff; font-weight: 600;">Estimated Budget:</td>
                <td style="padding: 10px 0; color: #ffffff;">${budget || "Flexible / Not defined"}</td>
              </tr>
            </table>

            <div style="margin-top: 24px; padding: 20px; background-color: #0b1a30; border-radius: 10px; border-left: 4px solid #5b8cff;">
              <h4 style="margin: 0 0 8px 0; color: #ffffff; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Project Details:</h4>
              <p style="margin: 0; color: #d6e1f2; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>

            <p style="margin-top: 28px; font-size: 12px; color: #71839e; text-align: center;">
              CodvianTech Automated Inbound Lead Pipeline
            </p>
          </div>
        </body>
        </html>
      `,
    });

    // 2. Send Professional Confirmation to Client
    await resend.emails.send({
      from: "CodvianTech <onboarding@resend.dev>",
      to: [email],
      subject: `Thank you for contacting CodvianTech — We received your inquiry`,
      html: `
        <!DOCTYPE html>
        <html>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #081326; color: #f4f7fc; padding: 32px 16px;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #10213b; border-radius: 16px; border: 1px solid rgba(180, 203, 238, 0.15); padding: 32px;">
            <div style="text-align: center; margin-bottom: 28px;">
              <h1 style="color: #ffffff; font-size: 24px; margin: 0;">Codvian<span style="color: #7da8ff;">Tech</span></h1>
              <p style="color: #55d6e8; font-size: 13px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; margin-top: 6px;">Build What's Next</p>
            </div>

            <h2 style="font-size: 18px; color: #ffffff; margin-bottom: 12px;">Hello ${name},</h2>
            <p style="color: #afbdd1; font-size: 15px; line-height: 1.6;">
              Thank you for reaching out to CodvianTech regarding your <strong>${service}</strong> project. We have received your inquiry and our technical solutions team is reviewing your requirements.
            </p>

            <div style="margin: 24px 0; padding: 20px; background-color: #0b1a30; border-radius: 12px; border: 1px solid rgba(180, 203, 238, 0.1);">
              <h4 style="margin: 0 0 10px 0; color: #8db3ff; font-size: 13px; text-transform: uppercase;">What to expect next:</h4>
              <ul style="margin: 0; padding-left: 20px; color: #d6e1f2; font-size: 14px; line-height: 1.7;">
                <li>A dedicated technical lead will review your project scope within 24 hours.</li>
                <li>We will reach out with preliminary questions or schedule an introductory discovery call.</li>
                <li>We'll provide an initial architectural overview and project estimate.</li>
              </ul>
            </div>

            <p style="color: #afbdd1; font-size: 14px; line-height: 1.6;">
              In the meantime, feel free to reply directly to this email if you have any supplementary documentation, wireframes, or RFP files.
            </p>

            <div style="border-top: 1px solid rgba(180, 203, 238, 0.15); margin-top: 32px; padding-top: 20px; text-align: center; color: #71839e; font-size: 12px;">
              <p style="margin: 0;">CodvianTech — Purposeful Engineering. Scalable Solutions.</p>
              <p style="margin: 6px 0 0;">Worldwide Remote Collaboration</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    return {
      success: true,
      data: adminEmailResult,
      message: "Email notifications successfully delivered via Resend.",
    };
  } catch (error: any) {
    console.error("[Resend Error]:", error);
    return {
      success: false,
      error: error?.message || "Failed to deliver email through Resend API.",
    };
  }
}
