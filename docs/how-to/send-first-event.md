# Send your first event

!!! info "At a glance"  
    **Audience:** Developers integrating the Event Intake API  
    **Prerequisites:** API base URL, bearer token, and `curl`  
    **Success criteria:** You receive **200 OK** with a JSON response  
    **Common pitfalls:** Missing required fields, invalid timestamps, duplicate requests

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
  "occurred_at": "2025-12-22T10:30:00Z",
  "idempotency_key": "0f3f6f9b-9f0b-4c8d-9f18-5b6a9d9d2d41",
  "data": {
    "user_id": "u_12345",
    "plan": "pro"
  }
}
```

## Step 2: Send the event

Send a `POST` request to `/v1/events`.

```bash
curl -X POST "https://api.example.com/v1/events" \
  -H "Authorization: Bearer test_123" \
  -H "Content-Type: application/json" \
  -d '{
    "event_type": "user.created",
    "occurred_at": "2025-12-22T10:30:00Z",
    "idempotency_key": "0f3f6f9b-9f0b-4c8d-9f18-5b6a9d9d2d41",
    "data": {
      "user_id": "u_12345",
      "plan": "pro"
    }
  }'
```

## Step 3: Confirm success

A successful request returns **200 OK** with a JSON body.

Example response:

```json
{
  "status": "ok",
  "event_id": "evt_9a2f4c1e",
  "received_at": "2025-12-22T10:30:03Z"
}
```

## Step 4: Test idempotency (optional)

Idempotency prevents duplicate processing if you retry the same request.

1. Re-send the **same request** with the **same** `idempotency_key`.
2. Confirm the response indicates the event was not processed twice.

Example response on retry (one possible pattern):

```json
{
  "status": "ok",
  "event_id": "evt_9a2f4c1e",
  "deduplicated": true,
  "received_at": "2025-12-22T10:31:10Z"
}
```

> Note: The exact field names may differ by implementation. What matters is that retries with the same `idempotency_key` do not create a second event.

## Troubleshooting (quick fixes)

- **400 Bad Request:** confirm required fields and ISO 8601 `occurred_at`.
- **401 Unauthorized:** verify `Authorization: Bearer <token>`.
- **Duplicates on retry:** reuse the same `idempotency_key`.

For deeper diagnostics, see: **[Event Intake API issues](../troubleshooting/event-intake.md)**

## Related resources

- **Reference:** [Event Intake API (reference)](../reference/event-intake-api.md)
- **OpenAPI source:** `api/openapi-event-intake.yaml`
