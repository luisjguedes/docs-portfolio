# Event Intake API — reference

This page is a human-readable reference for the Event Intake API.  
The authoritative contract is the OpenAPI file: `api/openapi-event-intake.yaml`.

## Endpoint summary

| Method | Path | Purpose |
|---:|---|---|
| POST | /v1/events | Submit a single event |
| GET | /v1/events/{event_id} | Retrieve an event (sample) |

## Authentication
All requests require a bearer token:

`Authorization: Bearer <token>`

## POST /v1/events

### Required headers
- `Authorization: Bearer <token>`
- `Content-Type: application/json`

### Request body fields

| Field | Type | Required | Notes |
|---|---|:---:|---|
| event_type | string | yes | Example: `user.created` |
| occurred_at | string | yes | ISO-8601 timestamp |
| idempotency_key | string | yes | Prevents duplicate ingestion on retries |
| data | object | yes | Event payload (JSON object) |

### Responses
- `202 Accepted` — event acknowledged
- `400 Bad Request` — validation error
- `401 Unauthorized` — missing/invalid token
- `429 Too Many Requests` — rate limit exceeded
- `500 Internal Server Error` — unexpected error

## GET /v1/events/{event_id} (sample)
This endpoint is included as a read-style example.

### Responses
- `200 OK` — event returned
- `404 Not Found` — unknown `event_id`

## Notes
- For exact field definitions and examples, see `api/openapi-event-intake.yaml`.
- For a walkthrough, see **Send your first event**.
- For common failures, see **Troubleshooting — Event Intake API**.
