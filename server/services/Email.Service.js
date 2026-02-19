// server/services/Email.Service.js
import nodemailer from 'nodemailer';

// Create a transporter using Gmail SMTP
const transporter = nodemailer.createTransport({
  host: 'smtp-relay.brevo.com',
  port: 587,
  auth: {
    user: process.env.BREVO_SMTP_USER,
    pass: process.env.BREVO_SMTP_KEY,
  },
});

/**
 * Send a password reset email to a user.
 *
 * @param {string} email - The recipient's email address.
 * @param {string} resetLink - The URL to the password reset page.
 * @returns {Promise<boolean>} True if the email was sent successfully, false otherwise.
 */
export const sendPasswordResetEmail = async (email, resetLink) => {
  try {
    const mailOptions = {
      from: '"no-reply@kodex.com" <' + process.env.EMAIL_USER + '>',
      to: email,
      subject: 'Password Reset Request',
      html: `
        <h1>Password Reset</h1>
        <p>You have requested to reset your password. Click the link below to reset:</p>
        <a href="${resetLink}">Reset Password</a>
        <p>If you did not request this, please ignore this email.</p>
        <p>This link will expire in 1 hour.</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};
