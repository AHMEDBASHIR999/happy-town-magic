import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { Resend } from "resend";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read .env manually
try {
  const envContent = fs.readFileSync(path.join(__dirname, ".env"), "utf8");
  const match = envContent.match(/RESEND_API_KEY\s*=\s*(.*)/);
  const apiKey = match ? match[1].trim() : null;

  if (!apiKey) {
    console.error("Error: RESEND_API_KEY not found in .env file.");
    process.exit(1);
  }

  console.log("Found RESEND_API_KEY:", apiKey.slice(0, 10) + "..." + apiKey.slice(-5));
  
  const resend = new Resend(apiKey);
  
  console.log("Sending test email...");
  resend.emails.send({
    from: "Happy Town <booking@happytownkw.com>",
    to: ["info@happytownkw.com"],
    cc: ["ahmedbashir824@gmail.com"],
    subject: "Test Resend Connection",
    html: "<p>If you see this, your Resend API integration is working correctly!</p>"
  }).then(response => {
    if (response.error) {
      console.error("\n❌ API Test Failed!");
      console.error("Error Code:", response.error.name);
      console.error("Error Message:", response.error.message);
      console.error("Full Error details:", JSON.stringify(response.error, null, 2));
    } else {
      console.log("\n✅ API Test Succeeded!");
      console.log("Email sent successfully!");
      console.log("Response data:", JSON.stringify(response.data, null, 2));
    }
  }).catch(err => {
    console.error("\n❌ Request failed:", err);
  });

} catch (err) {
  console.error("Error reading .env file:", err.message);
}
