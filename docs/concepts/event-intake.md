# Event Intake API — concept

The **Event Intake API** lets you send events (for example, `user.created`, `invoice.paid`) to a system through a single HTTP endpoint. Think of it as a *reliable inbox* for events.

## When to use it
Use the API when you need to:
- capture events from a service you control
- validate payloads consistently
- support retries and idempotency (avoid duplicates)
- standardize event formats across teams

## Mental model
You send a JSON payload to `POST /v1/events`. The server validates it and returns an acknowledgement.

- If the payload is valid, you receive an `event_id`.
- If the payload is invalid, you get a 4xx response with an error message.

### Key terms
- **event_type**: a stable name for the event (example: `user.created`)
- **occurred_at**: when the event happened (ISO-8601 timestamp)
- **data**: the event details (object)
- **idempotency_key**: a client-generated key to prevent duplicates

## Data flow (high level)
1. Your system creates an event payload.
2. You call `POST /v1/events` with authentication.
3. The API validates the request.
4. The API returns:
   - `202 Accepted` + `event_id` for valid events
   - a 4xx response for invalid requests

## Reliability: retries + idempotency
Network issues happen. Your client can retry safely when:
- you send an **idempotency_key**
- you retry with the **same payload** and **same idempotency_key**

The server treats repeated requests with the same key as the *same event*, and returns the original `event_id`.

## Authentication
Use a bearer token:

`Authorization: Bearer <token>`

Tokens identify the sender and scope access. (In a real system, tokens would be issued by an auth service.)

## Rate limits (example)
- 60 requests/minute per token
- `429 Too Many Requests` if exceeded

## What “good” looks like
A good event payload is:
- predictable (stable keys + types)
- complete (has timestamps and identifiers)
- safe to log (avoid secrets in `data`)
