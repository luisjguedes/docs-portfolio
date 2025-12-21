# Send your first event

This guide shows how to send a minimal event to the **Event Intake API** and interpret the response.

## Before you begin
You need:
- an API base URL (example: `https://api.example.com`)
- a bearer token (example: `test_123`)
- a terminal with `curl`

## Step 1: Prepare the request
Choose an `idempotency_key`. Any stable string works (UUID recommended).

Example payload:

```json
{
  "event_type": "user.created",
  "occurred_at": "2025-12-21T10:30:00Z",
  "idempotency_key": "0f3f6f9b-9f0b-4c8d-9f18-5b6a9d9d2d41",
  "data": {
    "user_id": "u_12345",
    "plan": "pro"
  }
}
