import { createServerFn } from "@tanstack/react-start";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "re_dummy_key");

export const submitBooking = createServerFn({ method: "POST" })
  .validator((data: Record<string, any>) => {
    return data;
  })
  .handler(async ({ data }) => {
    try {
      const emailContent = Object.entries(data)
        .map(([key, value]) => `<strong>${key}</strong>: ${value}`)
        .join("<br/>");

      await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: ["info@happytownkw.com"],
        subject: `New Booking Request from ${data.name || data.contactPerson || "User"}`,
        html: `<p>You have received a new booking request:</p><p>${emailContent}</p>`,
      });

      return { success: true };
    } catch (error) {
      console.error("Error sending email", error);
      return { success: false, error: "Failed to send email" };
    }
  });
