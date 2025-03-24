'use server';
import nodemailer from 'nodemailer';

export async function sendEmail(formData) {
  const {name, firstname, email, subject, message} = formData;
  if (!subject || !name || !firstname || !email || !message) {
    return {
      error: 'formulaire incomplet'
    };
  }
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: `${process.env.EMAIL_USER}`, // Votre adresse Gmail
        pass: `${process.env.EMAIL_PASS}` // Mot de passe ou mot de passe d'application
      }
    });

    // Options de l'email
    const mailOptions = {
      from: `${firstname} ${name} <${email}>`,
      to: `${process.env.EMAIL_RECEIVER}`, // L'adresse email du destinataire
      subject: subject || 'Contact depuis le site',
      text: `Nom : ${name}\nPrénom : ${firstname}\nEmail : ${email}\nMessage : ${message}`
    };

    // Envoi de l'email
    await transporter.sendMail(mailOptions);
    console.log(mailOptions);
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email :", error);
    //throw new Error('message')
    return {
      error: 'email impossible'
    };
  }
}
