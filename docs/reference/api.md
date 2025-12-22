# API reference (sample)

This page is a documentation sample based on the OpenAPI source in [`/api/openapi.yaml`](../../api/openapi.yaml).

!!! info "At a glance"  
    **Audience:** Developers integrating a webhook endpoint sample  
    **Auth:** Bearer token (example)  
    **Content-Type:** `application/json`  
    **Success criteria:** `200 OK` with a JSON body  
    **Common pitfalls:** missing required fields, wrong `Content-Type`, invalid JSON

---

## Base URL

Example:

`https://api.example.com`

---

## Authentication

This sample uses a Bearer token.

Send this header:

```http
Authorization: Bearer test_123
```

---

## Content type

Send:

```http
Content-Type: application/json
```

---

## POST `/webhooks/hello`

Returns a greeting message for the provided name.

### Request body

| Field | Type | Required | Notes |
|---|---|---:|---|
| `name` | string | Yes | Human-readable name to greet |

### Example request

```bash
curl -X POST "https://api.example.com/webhooks/hello" \
  -H "Authorization: Bearer test_123" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Luís"
  }'
```

### Responses

#### 200 OK

```json
{
  "ok": true,
  "message": "Hello Luís"
}
```

---

## Errors

This sample uses a small, consistent JSON error shape.

### Error model (example)

| Field | Type | Meaning |
|---|---|---|
| `error.code` | string | Machine-readable error code |
| `error.message` | string | Human-readable message |
| `error.request_id` | string | Correlation id for support |

### 400 Bad Request (validation)

Returned when the request is syntactically valid JSON, but missing required fields.

```json
{
  "error": {
    "code": "invalid_request",
    "message": "Missing required field: name",
    "request_id": "req_01HZYXABCDEF1234567890"
  }
}
```

### 415 Unsupported Media Type

Returned when `Content-Type` is not `application/json`.

```json
{
  "error": {
    "code": "unsupported_media_type",
    "message": "Content-Type must be application/json",
    "request_id": "req_01HZYXABCDEF1234567890"
  }
}
```

### 401 Unauthorized

Returned when the token is missing or invalid.

```json
{
  "error": {
    "code": "unauthorized",
    "message": "Missing or invalid token",
    "request_id": "req_01HZYXABCDEF1234567890"
  }
}
```

---

## Notes for reviewers

- The goal of this page is to demonstrate reference structure: prerequisites, request/response examples, and a predictable error model.
- For a more realistic API sample (idempotency, timestamps, richer payload), see **Event Intake API (reference)** in the navigation.
