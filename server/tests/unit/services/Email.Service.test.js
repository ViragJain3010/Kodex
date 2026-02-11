import { describe, it, expect, vi, beforeEach } from 'vitest';
import nodemailer from 'nodemailer';
import { sendPasswordResetEmail } from '../../../services/Email.Service.js';

vi.mock('nodemailer', () => ({
  default: {
    createTransport: vi.fn().mockReturnValue({
      sendMail: vi.fn().mockResolvedValue({ messageId: 'test-id' }),
    }),
  },
}));

describe('Email Service', () => {
  const mockEmail = 'test@example.com';
  const mockLink = 'http://localhost:3000/reset-password/abc';

  beforeEach(() => {
    vi.clearAllMocks();
    process.env.EMAIL_USER = 'test@gmail.com';
    process.env.EMAIL_PASSWORD = 'password';
  });

  describe('sendPasswordResetEmail', () => {
    it('sends an email successfully', async () => {
      const result = await sendPasswordResetEmail(mockEmail, mockLink);

      expect(result).toBe(true);
      const transporter = nodemailer.createTransport();
      expect(transporter.sendMail).toHaveBeenCalledWith(
        expect.objectContaining({
          to: mockEmail,
          subject: 'Password Reset Request',
        })
      );
    });

    it('returns false if sending fails', async () => {
      const transporter = nodemailer.createTransport();
      transporter.sendMail.mockRejectedValueOnce(new Error('SMTP Error'));

      const result = await sendPasswordResetEmail(mockEmail, mockLink);

      expect(result).toBe(false);
    });
  });
});
