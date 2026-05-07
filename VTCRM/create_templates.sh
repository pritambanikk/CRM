#!/bin/bash

# WhatsApp Template Creation Script for VakilTech CRM
# Creates all 11 templates via Kapso API

WABA_ID="1266681284759205"
API_KEY="55da7fe3d76d08d99248c94aafb7dd896ca44905a56d54398694f46165548b3f"
BASE_URL="https://api.kapso.ai/meta/whatsapp/v24.0/${WABA_ID}/message_templates"

create_template() {
    local name=$1
    local body=$2
    local examples=$3
    
    echo "Creating template: $name"
    
    response=$(curl -s -w "\n%{http_code}" -X POST "$BASE_URL" \
        -H "Content-Type: application/json" \
        -H "X-API-Key: $API_KEY" \
        -d "$body")
    
    http_code=$(echo "$response" | tail -1)
    body_response=$(echo "$response" | sed '$d')
    
    if [ "$http_code" = "200" ]; then
        echo "  ✅ Created successfully"
    else
        echo "  ❌ Failed (HTTP $http_code): $body_response"
    fi
    echo ""
    
    # Small delay to avoid rate limiting
    sleep 1
}

# T1: lawyer_assigned
create_template "lawyer_assigned" '{
    "name": "lawyer_assigned",
    "language": "en_US",
    "category": "UTILITY",
    "parameter_format": "NAMED",
    "components": [
        {
            "type": "BODY",
            "text": "Hi {{name}}, your {{service}} request has been assigned to {{lawyer_name}}. They will be reviewing your case and will reach out to you shortly. Thank you for choosing VakilTech.",
            "example": {
                "body_text_named_params": [
                    {"param_name": "name", "example": "Rahul"},
                    {"param_name": "service", "example": "Legal Notice"},
                    {"param_name": "lawyer_name", "example": "Prachi"}
                ]
            }
        }
    ]
}'

# T2: payment_confirmed
create_template "payment_confirmed" '{
    "name": "payment_confirmed",
    "language": "en_US",
    "category": "UTILITY",
    "parameter_format": "NAMED",
    "components": [
        {
            "type": "BODY",
            "text": "Hi {{name}}, we have received your payment of Rs.{{amount}} for ticket #{{ticket_id}}. Our team will begin working on your case immediately. Thank you for your trust in VakilTech.",
            "example": {
                "body_text_named_params": [
                    {"param_name": "name", "example": "Rahul"},
                    {"param_name": "amount", "example": "5000"},
                    {"param_name": "ticket_id", "example": "TKT-001"}
                ]
            }
        }
    ]
}'

# T3: draft_ready
create_template "draft_ready" '{
    "name": "draft_ready",
    "language": "en_US",
    "category": "UTILITY",
    "parameter_format": "NAMED",
    "components": [
        {
            "type": "BODY",
            "text": "Hi {{name}}, your {{service}} draft for ticket #{{ticket_id}} is ready for review. Please check and share your feedback at your earliest convenience so we can finalize it.",
            "example": {
                "body_text_named_params": [
                    {"param_name": "name", "example": "Rahul"},
                    {"param_name": "service", "example": "Legal Notice"},
                    {"param_name": "ticket_id", "example": "TKT-001"}
                ]
            }
        }
    ]
}'

# T4: case_completed
create_template "case_completed" '{
    "name": "case_completed",
    "language": "en_US",
    "category": "UTILITY",
    "parameter_format": "NAMED",
    "components": [
        {
            "type": "BODY",
            "text": "Hi {{name}}, your {{service}} case has been completed and archived. All documents have been finalized. If you need any further assistance, feel free to reach out. Thank you for choosing VakilTech.",
            "example": {
                "body_text_named_params": [
                    {"param_name": "name", "example": "Rahul"},
                    {"param_name": "service", "example": "Legal Notice"}
                ]
            }
        }
    ]
}'

# T5: client_nudge
create_template "client_nudge" '{
    "name": "client_nudge",
    "language": "en_US",
    "category": "UTILITY",
    "parameter_format": "NAMED",
    "components": [
        {
            "type": "BODY",
            "text": "Hi {{name}}, we noticed we have not heard back from you regarding your {{service}} case. We need your input to move forward. Please reply at your convenience or let us know if you have any questions.",
            "example": {
                "body_text_named_params": [
                    {"param_name": "name", "example": "Rahul"},
                    {"param_name": "service", "example": "Legal Notice"}
                ]
            }
        }
    ]
}'

# T6: welcome_message
create_template "welcome_message" '{
    "name": "welcome_message",
    "language": "en_US",
    "category": "UTILITY",
    "parameter_format": "NAMED",
    "components": [
        {
            "type": "BODY",
            "text": "Hi {{name}}, welcome to VakilTech! We have received your {{service}} request. Our team will review it and get back to you shortly. Thank you for reaching out to us.",
            "example": {
                "body_text_named_params": [
                    {"param_name": "name", "example": "Rahul"},
                    {"param_name": "service", "example": "Legal Notice"}
                ]
            }
        }
    ]
}'

# T7: followup_reminder
create_template "followup_reminder" '{
    "name": "followup_reminder",
    "language": "en_US",
    "category": "UTILITY",
    "parameter_format": "NAMED",
    "components": [
        {
            "type": "BODY",
            "text": "Hi {{name}}, this is a follow-up regarding your {{service}} request. Our team is ready to assist you. Please reply to this message or call us to proceed with your case.",
            "example": {
                "body_text_named_params": [
                    {"param_name": "name", "example": "Rahul"},
                    {"param_name": "service", "example": "Legal Notice"}
                ]
            }
        }
    ]
}'

# T8: approval_needed
create_template "approval_needed" '{
    "name": "approval_needed",
    "language": "en_US",
    "category": "UTILITY",
    "parameter_format": "NAMED",
    "components": [
        {
            "type": "BODY",
            "text": "Attention: Ticket #{{ticket_id}} for client {{client_name}} has been submitted for approval. Please review and approve or reject at your earliest convenience.",
            "example": {
                "body_text_named_params": [
                    {"param_name": "ticket_id", "example": "TKT-001"},
                    {"param_name": "client_name", "example": "Rahul"}
                ]
            }
        }
    ]
}'

# T9: ticket_approved
create_template "ticket_approved" '{
    "name": "ticket_approved",
    "language": "en_US",
    "category": "UTILITY",
    "parameter_format": "NAMED",
    "components": [
        {
            "type": "BODY",
            "text": "Ticket #{{ticket_id}} has been approved. You may now proceed with the final steps. Please deliver the completed documents to the client.",
            "example": {
                "body_text_named_params": [
                    {"param_name": "ticket_id", "example": "TKT-001"}
                ]
            }
        }
    ]
}'

# T10: ticket_rejected
create_template "ticket_rejected" '{
    "name": "ticket_rejected",
    "language": "en_US",
    "category": "UTILITY",
    "parameter_format": "NAMED",
    "components": [
        {
            "type": "BODY",
            "text": "Ticket #{{ticket_id}} has been rejected. Reason: {{reason}}. Please make the necessary changes and resubmit for approval.",
            "example": {
                "body_text_named_params": [
                    {"param_name": "ticket_id", "example": "TKT-001"},
                    {"param_name": "reason", "example": "Missing client signature"}
                ]
            }
        }
    ]
}'

# T11: feedback_request
create_template "feedback_request" '{
    "name": "feedback_request",
    "language": "en_US",
    "category": "UTILITY",
    "parameter_format": "NAMED",
    "components": [
        {
            "type": "BODY",
            "text": "Hi {{name}}, your {{service}} case was recently completed. We would love to hear about your experience with VakilTech. Your feedback helps us serve you better. Please reply with your thoughts.",
            "example": {
                "body_text_named_params": [
                    {"param_name": "name", "example": "Rahul"},
                    {"param_name": "service", "example": "Legal Notice"}
                ]
            }
        }
    ]
}'

echo "==============================="
echo "All template creation requests sent!"
echo "Templates will be in PENDING state until approved by Meta."
echo "==============================="
