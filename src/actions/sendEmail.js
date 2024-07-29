"use server";

import React from "react";
import { Resend } from "resend";
import ContactFormEmail from "../email/contact-email-form";

// Initialize the Resend client
const key = 're_MUBn7adb_3XfhXS3Qvcn6Mbc76ZqbLR1T';
const resend = new Resend(key);

export const sendEmail = async (formData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");
  const senderName = formData.get("senderName");
  const senderGoal = formData.get("senderGoal");
  const senderCompany = formData.get("senderCompany");

  try {
    // Await the promise from resend.emails.send
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'spoofybhai@gmail.com',
      subject: "Message from contact form",
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message,
        senderEmail,
        senderName,
        senderGoal,
        senderCompany,
      }),
    });

    return { data };
  } catch (error) {
    console.error("Error sending email:", error);
    return { error: error.message || "An error occurred" };
  }
};
