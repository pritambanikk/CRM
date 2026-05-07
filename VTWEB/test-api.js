async function testApi() {
  const apiEndpoint = `https://yp1ehsqhh1.execute-api.us-east-1.amazonaws.com/leads`;
  try {
    // 1. Create a lead
    const createRes = await fetch(apiEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Test Update Workflow",
        payment_status: "pending",
      }),
    });
    const createdData = await createRes.json();
    console.log("Created:", createdData);
    
    // 2. Try to update it by POSTing again with the new ID
    if (createdData.id) {
      const updateRes = await fetch(apiEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: createdData.id,
          payment_status: "advance_paid",
        }),
      });
      console.log("Update Status:", updateRes.status);
      console.log("Update Response:", await updateRes.text());
    }
  } catch(e) {
    console.error(e);
  }
}
testApi();
