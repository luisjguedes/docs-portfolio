# Create a basic workflow

!!! info "At a glance"  
    **Audience:** Developers implementing a simple webhook handler  
    **Prerequisites:** An endpoint that accepts HTTP `POST`, JSON parsing, and the ability to return JSON  
    **Success criteria:** A valid request returns **200 OK** with a JSON body  
    **Common pitfalls:** Missing required fields, incorrect `Content-Type`, returning non-JSON responses

## Goal
Receive a webhook request and return a JSON response.

## Before you begin
You need:
- An endpoint that can receive an HTTP `POST` request (for example, `/webhook`)
- Support for parsing JSON in your application/framework
- A way to return an HTTP status code and a JSON body

## Steps
1. Create a new workflow or route that listens for `POST` requests (for example, `/webhook`).
2. Add a **Webhook trigger** to start the workflow when a request arrives.
3. Validate the input:
   - Require a `name` field (string).
4. Return a JSON response.

## Expected result

Send this request:

```json
{
  "name": "Luís"
}
```

You receive this response:

```json
{
  "status": "ok"
}
```

## Example behavior
- If `name` is present and valid, return **200 OK** and a JSON body.
- If `name` is missing, return **400 Bad Request** and a JSON error.

### Example response (missing field)

```json
{
  "error": {
    "code": "invalid_request",
    "message": "Missing required field: name"
  }
}
```

## Notes
- You should send `Content-Type: application/json`.
- Keep success and error responses consistent (predictable fields and shapes).
