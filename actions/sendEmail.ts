"use server"

import { validateString } from '@/lib/utils';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  
  const senderEmail = formData.get('senderEmail');
  const message = formData.get('message');

  //server side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: 'Invalid sender email'
    }
  }

  if (!validateString(message, 5000)) {
    return {
      error: 'Invalid sender email'
    }
  }

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'aaronbau@umich.edu',
      subject: 'Message from contact form',
      reply_to: senderEmail as string,
      text: message as string,
    })
  } catch (error: unknown) {
    return {
      error: error.message
    }
  }
  
}