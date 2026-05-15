import { getWhatsAppClient } from './src/lib/whatsapp-client';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
dotenv.config({ path: '.env' });

async function run() {
  try {
    const response = await fetch("http://localhost:3000/api/templates/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: "919000000000",
        templateName: "introduction",
        languageCode: "en",
        parameters: ["John", "Test Service"],
        parameterInfo: {
          parameters: [
            { name: "1", component: "BODY" },
            { name: "2", component: "BODY" }
          ]
        }
      })
    });
    console.log(response.status);
    console.log(await response.text());
  } catch (e) {
    console.error(e);
  }
}
run();
