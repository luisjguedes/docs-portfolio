# Troubleshooting — Event Intake API

## Common issues

### 401 Unauthorized
**Symptoms**
- Response status: `401`
- Message indicates missing/invalid credentials

**Likely causes**
- Missing `Authorization` header
- Token expired or malformed

**Fix**
- Ensure you send: `Authorization: Bearer <token>`
- Re-issue a token (in real systems)

---

### 400 validation_error
**Symptoms**
- Response status: `400`
- Error payload contains `validation_error`

**Likely causes**
- missing required fields (`event_type`, `occurred_at`, `idempotency_key`, `data`)
- `occurred_at` not ISO-8601
- `data` not an object

**Fix**
- Compare your payload to the reference schema
- Start from the “Send your first event” example and modify gradually

---

### Duplicate events
**Symptoms**
- You see the same event processed twice (downstream)

**Likely causes**
- missing or changing `idempotency_key` on retries

**Fix**
- generate the `idempotency_key` once per event
- reuse the same key when retrying the request

---

### 429 Too Many Requests
**Symptoms**
- Response status: `429`

**Likely causes**
- burst traffic above token rate limit

**Fix**
- implement exponential backoff (for example: 1s, 2s, 4s)
- batch or reduce event frequency

---

### “It works locally but fails in CI”
**Symptoms**
- local build succeeds, GitHub Actions fails

**Likely causes**
- missing dependencies in CI (MkDocs plugins, Material theme)

**Fix**
- ensure CI installs the same packages as your local environment
- pin versions in a requirements file
