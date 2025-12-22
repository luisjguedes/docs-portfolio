# Event Intake API — reference

This page is a human-readable reference for the **Event Intake API**.  
The authoritative contract is the OpenAPI file: `api/openapi-event-intake.yaml`.

!!! info "At a glance"
    **Audience:** Developers integrating the Event Intake API  
    **Auth:** Bearer token  
    **Content-Type:** `application/json`  
    **Idempotency:** Required via `idempotency_key`  
    **Success criteria:** `202 Accepted` with an acknowledgment body  
    **Common pitfalls:** missing fields, invalid timestamps, reusing `idempotency_key`, wrong `Content-Type`

---

## Endpoint summary

| Method | Path | Purpose |
|---:|---|---|
| POST | `/v1/events` | Submit a single event |
| GET | `/v1/events/{event_id}` | Retrieve an event (sample) |

---

## Base URL

Example:

`https://api.example.com`

---

## Authentication

All requests require a bearer token:

```http
Authorization: Bearer <token>
```

---

## POST `/v1/events`

Submit a single event for ingestion.

### Required headers

```http
Authorization: Bearer <token>
Content-Type: application/json
```

### Request body fields

| Field | Type | Required | Notes |
|---|---|:---:|---|
| `event_type` | string | yes | Example: `user.created` |
| `occurred_at` | string | yes | ISO-8601 timestamp (UTC recommended) |
| `idempotency_key` | string | yes | Prevents duplicate ingestion on retries |
| `data` | object | yes | Event payload (JSON object) |

### Example request

```bash
curl -X POST "https://api.example.com/v1/events" \
  -H "Authorization: Bearer <token>" \
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

### Responses

#### 202 Accepted

Event acknowledged for ingestion.

```json
{
  "status": "accepted",
  "event_id": "evt_01HZYXABCDEF1234567890"
}
```

#### 400 Bad Request

Validation error (for example, missing required fields or invalid timestamps).

```json
{
  "error": {
    "code": "invalid_request",
    "message": "Missing required field: event_type",
    "request_id": "req_01HZYXABCDEF1234567890"
  }
}
```

#### 401 Unauthorized

Missing or invalid token.

```json
{
  "error": {
    "code": "unauthorized",
    "message": "Missing or invalid token",
    "request_id": "req_01HZYXABCDEF1234567890"
  }
}
```

#### 429 Too Many Requests

Rate limit exceeded.

```json
{
  "error": {
    "code": "rate_limited",
    "message": "Too many requests. Retry after 60 seconds.",
    "request_id": "req_01HZYXABCDEF1234567890"
  }
}
```

#### 500 Internal Server Error

Unexpected error.

```json
{
  "error": {
    "code": "internal_error",
    "message": "Unexpected error",
    "request_id": "req_01HZYXABCDEF1234567890"
  }
}
```

---

## GET `/v1/events/{event_id}` (sample)

This endpoint is included as a read-style example.

### Path parameters

| Parameter | Type | Required | Notes |
|---|---|:---:|---|
| `event_id` | string | yes | Example: `evt_01HZYXABCDEF1234567890` |

### Example request

```bash
curl -X GET "https://api.example.com/v1/events/evt_01HZYXABCDEF1234567890" \
  -H "Authorization: Bearer <token>"
```

### Responses

#### 200 OK

Event returned.

```json
{
  "event_id": "evt_01HZYXABCDEF1234567890",
  "event_type": "user.created",
  "occurred_at": "2025-12-22T10:30:00Z",
  "data": {
    "user_id": "u_12345",
    "plan": "pro"
  }
}
```

#### 404 Not Found

Unknown `event_id`.

```json
{
  "error": {
    "code": "not_found",
    "message": "Event not found",
    "request_id": "req_01HZYXABCDEF1234567890"
  }
}
```

---

## Notes

- For exact field definitions and examples, see `api/openapi-event-intake.yaml`.
- For a walkthrough, see [Send your first event](../how-to/send-first-event.md).
- For common failures, see [Troubleshooting — Event Intake API](../troubleshooting/event-intake.md).
