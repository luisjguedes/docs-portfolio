# Send your first event

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

Send the same request again with the same idempotency_key.

Expected result:
	•	still 202 Accepted
	•	the same event_id returned

## Event Intake API — reference

This page is a human-readable reference for the API.  
The authoritative contract is the OpenAPI file: `api/openapi.yaml`.

## Endpoint summary

| Method | Path | Purpose |
|---:|---|---|
| POST | /v1/events | Submit a single event |
| GET | /v1/events/{event_id} | Retrieve an event (sample) |

## Authentication
All requests require:

`Authorization: Bearer <token>`

## POST /v1/events

### Headers
- `Authorization: Bearer <token>` (required)
- `Content-Type: application/json` (required)

### Request body
| Field | Type | Required | Notes |
|---|---|:---:|---|
| event_type | string | yes | Example: `user.created` |
| occurred_at | string | yes | ISO-8601 timestamp |
| idempotency_key | string | yes | Prevents duplicate ingestion |
| data | object | yes | Event payload (JSON object) |

### Responses
- `202 Accepted` — event acknowledged
- `400 Bad Request` — validation error
- `401 Unauthorized` — missing/invalid token
- `429 Too Many Requests` — rate limit exceeded
- `500 Internal Server Error` — unexpected error

## GET /v1/events/{event_id} (sample)
This endpoint is included as an example of a read operation.

### Responses
- `200 OK` — event returned
- `404 Not Found` — unknown `event_id`

  
