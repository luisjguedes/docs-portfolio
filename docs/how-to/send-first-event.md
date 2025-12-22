# Send your first event

!!! info "At a glance"  
            **Audience:** Developers integrating the Event Intake API  
            **Prereqs:** Base URL + token + `curl`  
            **Success:** You receive `200 OK` with a JSON response  
            **Common pitfalls:** Missing required fields, invalid timestamps, duplicate requests  

This guide shows how to send a minimal event to the **Event Intake API** and interpret the response.  

## Before you begin
You need:
- an API base URL (example: `https://api.example.com`)
- a bearer token (example: `test_123`)
- a terminal with `curl`

## Step 1: Prepare the request
Choose an `idempotency_key`. Any stable string works (UUID recommended).

### Example payload:

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
```
## Step 2: Send the event

```bash
curl -X POST "https://api.example.com/v1/events" \
  -H "Authorization: Bearer test_123" \
  -H "Content-Type: application/json" \
  -d '{
    "event_type": "user.created",
    "occurred_at": "2025-12-21T10:30:00Z",
    "idempotency_key": "0f3f6f9b-9f0b-4c8d-9f18-5b6a9d9d2d41",
    "data": {
      "user_id": "u_12345",
      "plan": "pro"
    }
  }
```
## Step 3: Understand the response

### Success (accepted)

You should receive 202 Accepted and a response like:

```json
{
  "event_id": "evt_7m8k2p",
  "status": "accepted"
}
```

### Validation error

If a required field is missing or malformed, you’ll receive 400 Bad Request:

```json
{
  "error": "validation_error",
  "message": "occurred_at must be an ISO-8601 timestamp"
}
```

## Step 4: Test idempotency (optional)

Send the **same request again** with the same `idempotency_key`.

Expected result:
- `202 Accepted`
- the **same** `event_id` as the first request

If the `event_id` changes, your client is likely generating a new key (or changing the payload) between retries.

