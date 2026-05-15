import { WhatsAppClient } from '@kapso/whatsapp-cloud-api';
const client = new WhatsAppClient({ kapsoApiKey: 'test' });
console.log(Object.keys(client.templates || {}));
