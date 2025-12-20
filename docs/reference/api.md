Paste:

```md
# API reference

This page is a documentation sample and references an OpenAPI file stored in `/api/openapi.yaml`.

## POST /webhooks/hello
Returns a greeting message.

### Request body
| Field | Type | Required |
|---|---|---:|
| `name` | string | Yes |

### Responses

**200 OK**
```json
{ "ok": true, "message": "Hello Luís" }
