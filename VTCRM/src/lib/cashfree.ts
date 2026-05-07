export const createPaymentLink = async (amount: number, customerName: string, customerPhone: string, description: string) => {
  const appId = import.meta.env.VITE_CASHFREE_APP_ID;
  const secretKey = import.meta.env.VITE_CASHFREE_SECRET_KEY;
  const isProd = import.meta.env.VITE_CASHFREE_ENV === 'production';

  if (!appId || !secretKey) {
    throw new Error('Cashfree credentials are not configured in environment variables.');
  }

  const baseUrl = isProd ? 'https://api.cashfree.com/pg' : 'https://sandbox.cashfree.com/pg';
  
  const linkId = `link_${Date.now()}_${Math.floor(Math.random() * 1000)}`;

  const response = await fetch(`${baseUrl}/links`, {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'x-client-id': appId,
      'x-client-secret': secretKey,
      'x-api-version': '2023-08-01',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      link_id: linkId,
      link_amount: amount,
      link_currency: 'INR',
      link_purpose: description,
      customer_details: {
        customer_phone: customerPhone,
        customer_name: customerName
      },
      link_notify: {
        send_sms: false,
        send_email: false
      }
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to create payment link');
  }

  const data = await response.json();
  return data.link_url;
};
