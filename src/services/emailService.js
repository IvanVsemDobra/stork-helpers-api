import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export const sendVerifyEmail = async (email, token) => {
  const link = `${process.env.FRONTEND_URL}/verify-email?token=${token}`;

  await transporter.sendMail({
    to: email,
    subject: 'Confirm email change',
    html: `
      <p>Confirm your new email:</p>
      <a href="${link}">${link}</a>
    `,
  });
};
