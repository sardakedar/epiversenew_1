import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { firstName, lastName, email, phone, inquiryType, message } = req.body;

    if (!firstName || !email || !message) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    await resend.emails.send({
      from: 'Epiverse <onboarding@resend.dev>',  // change after domain verification
      to: 'hello@epiverse.in',  // 👈 where you want to receive mail
      subject: `New Contact Form Submission`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName || ''}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not Provided'}</p>
        <p><strong>Inquiry Type:</strong> ${inquiryType || 'Not Selected'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    return res.status(200).json({ status: 'success' });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Email sending failed' });
  }
}
