
// api/send-contact.js
// IMPORTANT: Force Node.js runtime (required for Resend to work on Vercel)
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

import { Resend } from 'resend';

export default async function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    // Handle preflight OPTIONS request
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // Only allow POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { firstName, lastName, email, phone, inquiryType, message } = req.body;

        // Validate required fields
        if (!firstName || !email || !message) {
            return res.status(400).json({ 
                status: 'error', 
                message: 'First name, email, and message are required' 
            });
        }

        // Initialize Resend with API key from environment variables
        const resend = new Resend(process.env.RESEND_API_KEY);

        // Prepare email content
        const emailContent = `
            <h2>New Contact Form Submission from EpiVerse</h2>
            <p><strong>Name:</strong> ${firstName} ${lastName || ''}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Inquiry Type:</strong> ${inquiryType || 'Not specified'}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
        `;

        // Send email using Resend [citation:1][citation:8]
        const { data, error } = await resend.emails.send({
            from: process.env.FROM_EMAIL || 'EpiVerse <onboarding@resend.dev>', // Use verified domain in production
            to: ['parikshitwagh555@gmail.com'],
            subject: `New Contact Form Submission from ${firstName} ${lastName || ''}`,
            html: emailContent,
            reply_to: email, // So you can reply directly to the sender
        });

        if (error) {
            console.error('Resend error:', error);
            return res.status(500).json({ 
                status: 'error', 
                message: 'Failed to send email' 
            });
        }

        // Success response
        return res.status(200).json({ 
            status: 'success', 
            message: 'Message sent successfully!' 
        });

    } catch (error) {
        console.error('Server error:', error);
        return res.status(500).json({ 
            status: 'error', 
            message: 'Internal server error' 
        });
    }
}
