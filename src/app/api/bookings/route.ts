import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { serviceName, date, slot, notes, email } = body;

    // Send email to Admin (You)
    await resend.emails.send({
      from: 'Hampstead On-Demand <onboarding@resend.dev>', // Update this with your verified domain
      to: 'your-email@example.com', // Update this
      subject: `New Booking Request: ${serviceName}`,
      html: `
        <h1>New Booking Request</h1>
        <p><strong>Service:</strong> ${serviceName}</p>
        <p><strong>Date:</strong> ${new Date(date).toLocaleDateString()}</p>
        <p><strong>Slot:</strong> ${slot}</p>
        <p><strong>Customer Email:</strong> ${email}</p>
        <p><strong>Notes:</strong> ${notes}</p>
        <br/>
        <a href="${process.env.NEXT_PUBLIC_APP_URL}/admin">View in Dashboard</a>
      `
    });

    // Send confirmation to User
    if (email) {
        await resend.emails.send({
            from: 'Hampstead On-Demand <onboarding@resend.dev>',
            to: email,
            subject: `Booking Received: ${serviceName}`,
            html: `
              <h1>We received your request!</h1>
              <p>Thanks for booking <strong>${serviceName}</strong>.</p>
              <p>We are checking availability for <strong>${new Date(date).toLocaleDateString()} (${slot})</strong>.</p>
              <p>You will receive a confirmation email shortly.</p>
            `
          });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
