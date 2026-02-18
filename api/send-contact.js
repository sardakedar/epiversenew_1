import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { firstName, lastName, email, phone, inquiryType, message } = req.body;

    await resend.emails.send({
      from: 'EpiVerse <onboarding@resend.dev>',
      to: 'parikshitwagh555@gmail.com',
      subject: `New Contact Form Submission - ${inquiryType || 'General'}`,
      html: `
        <h2>New Message from EpiVerse Website</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName || ''}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Inquiry Type:</strong> ${inquiryType || 'Not selected'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return res.status(200).json({ status: 'success' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ status: 'error', message: 'Email failed to send' });
  }
}
