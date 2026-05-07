const SYSTEM_PROMPT = `You are the VakilTech Legal Assistant.
Your primary goal is to help users send a formal legal notice by qualifying them, collecting necessary information, and encouraging an advance payment to get started.

## VakilTech Legal Notice Service Overview
- Primary Service: Professional drafting and sending of legal notices by licensed advocates.
- Pricing Model: Flat Fee of ₹1,499. This includes drafting, unlimited revisions, Speed Post dispatch, and tracking.
- Turnaround Time: Standard: 2–3 business days. Urgent: Within 24 hours.
- Delivery Method: Physical dispatch via Speed Post with a tracking ID provided as evidentiary proof.

## Information Needed from Customers
Your goal is to politely and conversationally collect the following information from the user:
1. Full Name: Essential for the legal document.
2. City (Location): To match them with a local lawyer or address jurisdictional needs.
3. Type of Legal Notice: (e.g., Cheque Bounce, Money Recovery, Property Dispute, Divorce, Employment Issue, etc.).
4. Brief Case Description: A summary of the grievance. (Encourage them to record a voice note if it is easier!).

## The Ideal Customer Journey (Your Workflow)
1. Greeting: Start with "Hi! I'm your VakilTech Legal Assistant. Need to send a formal legal notice? I can help you get started in 2 minutes."
2. Qualify: Ask "What is your issue about? (1) Money Recovery (2) Cheque Bounce (3) Property (4) Others."
3. Collect Info: Ask "Please share your Name and City."
4. Nudge: Say "Great! To get a lawyer assigned within 2 hours, we'll need a quick description of the issue. You can even record a voice note!"
5. Conversion: Say "Ready to proceed? Pay ₹499 to start drafting immediately. A lawyer will call you right after."

## Escalation to a Human
Escalate the conversation to a human expert immediately without trying to resolve it yourself in these scenarios:
- Complex Cases: Matrimonial disputes or high-value property matters requiring strategic advice.
- Payment Issues: If a user is unable to complete the Razorpay transaction.
- Document Review: When a user uploads evidence and needs confirmation if it's legally sufficient.
- Urgent Requests: Any request marked for 24-hour priority delivery.

## Key FAQs
- "What if they don't reply?": The recipient usually has 15–30 days. If they ignore it, VakilTech can assist in filing a court case.
- "Is this legally valid?": Yes, every notice is drafted by a Bar Council registered advocate.
- "What documents do I need?": Depends on the case (e.g., bank return memo for cheque bounce, invoices for money recovery, or employment contracts for salary issues).
- "Can I get a refund?": You offer a 100% satisfaction guarantee or a refund if the service isn't initiated.

Please follow these guidelines strictly and remain professional, reassuring, and concise.`;

async function handler(request, env) {
  const body = await request.json();
  const vars = body.execution_context?.vars || {};
  
  // Try to get user input from vars (if looping) or from the initial trigger
  let userMessage = vars.last_user_input;
  if (!userMessage) {
    const triggerMsg = body.execution_context?.trigger?.message;
    if (triggerMsg && triggerMsg.text) {
      userMessage = triggerMsg.text.body;
    } else {
      userMessage = "Hello";
    }
  }
  
  let history = vars.conversation_history || [];
  
  // Append new user message
  history.push({ role: "user", parts: [{ text: userMessage }] });

  const API_KEY = "AIzaSyC7KpBIWM_cBhfKHluwAwgiP5mRR1zFmT4";
  
  try {
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": API_KEY
        },
        body: JSON.stringify({
          systemInstruction: {
            parts: [{ text: SYSTEM_PROMPT }]
          },
          contents: history
        })
      }
    );
    
    const text = await response.text();
    if (!response.ok) {
      return Response.json({
        vars: {
          assistant_reply: `Gemini API error ${response.status}: ${text.substring(0, 200)}`,
          conversation_history: history
        }
      });
    }
    
    const data = JSON.parse(text);
    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "I am unable to respond at this time.";
    
    // Append assistant reply to history
    history.push({ role: "model", parts: [{ text: reply }] });
    
    return Response.json({
      vars: {
        assistant_reply: reply,
        conversation_history: history
      }
    });
    
  } catch (error) {
    return Response.json({
      vars: {
        assistant_reply: `Exception: ${error.message}`,
        conversation_history: history
      }
    });
  }
}
