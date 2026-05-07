import { START, Workflow } from '@kapso/workflows';

const workflow = new Workflow("ai-assist-vt", {
  name: "AI ASSIST_VT",
  status: "active",
});

workflow.addTrigger({
  active: true,
  type: "inbound_message",
  phoneNumberId: "1112155208644941",
});

workflow.addNode(START, {
  position: { x: 100, y: 100 },
});

workflow.addNode("call_gemini", {
  type: "function",
  functionSlug: "gemini-legal-assistant",
  position: { x: 300, y: 100 }
});

workflow.addNode("send_reply", {
  type: "send_text",
  message: "{{ assistant_reply }}",
  position: { x: 500, y: 100 }
});

workflow.addNode("wait_for_user", {
  type: "wait_for_response",
  saveResponseTo: "last_user_input",
  timeoutSeconds: 86400, // wait up to 24 hours
  position: { x: 500, y: 300 }
});

workflow.addEdge(START, "call_gemini");
workflow.addEdge("call_gemini", "send_reply");
workflow.addEdge("send_reply", "wait_for_user");
workflow.addEdge("wait_for_user", "call_gemini"); // Loop back to Gemini

export default workflow;
