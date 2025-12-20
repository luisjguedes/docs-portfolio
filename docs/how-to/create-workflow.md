Paste:

```md
# Create a basic workflow

## Goal
Receive a webhook request and return a JSON response.

## Steps
1. Create a new workflow.
2. Add a **Webhook trigger**.
3. Validate input:
   - Require a `name` field (string).
4. Return a JSON response.

## Expected result
Send:
```json
{ "name": "Luís" }
