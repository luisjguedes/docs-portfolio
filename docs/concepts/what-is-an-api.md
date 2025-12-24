# What is an API?

An API (Application Programming Interface) is a **contract** that lets one system request data or actions from another system in a predictable way.

---

=== "Developer"

    ## API — Developer view

    An API is a set of endpoints that accept requests and return responses. With HTTP APIs, you send a request (method + URL + headers + body) and you receive a response (status code + headers + body).

    Key concepts:
    - **Contract:** documented inputs/outputs (often OpenAPI)
    - **Auth:** how you prove identity (Bearer tokens, OAuth, etc.)
    - **Errors:** consistent error shape + status codes
    - **Idempotency:** safe retries without duplicates
    - **Rate limits:** how many requests you can make per time window

    ### Minimal example

    **Request**
    ```http
    POST /v1/events
    Authorization: Bearer <token>
    Content-Type: application/json

    {
      "event_type": "user.created",
      "occurred_at": "2025-12-22T10:30:00Z",
      "idempotency_key": "0f3f6f9b-9f0b-4c8d-9f18-5b6a9d9d2d41",
      "data": { "user_id": "u_12345" }
    }
    ```

    **Response**
    ```http
    202 Accepted
    Content-Type: application/json

    { "status": "accepted", "event_id": "evt_123" }
    ```

=== "Product / Business"

    ## API — Product / Business view

    An API is the interface that lets your product integrate with other tools and customers’ systems **without manual work**.

    It defines:
    - **What’s possible** (operations/capabilities)
    - **What data is exchanged** (schemas)
    - **The rules** (authentication, limits, errors, versioning)

    A good API reduces integration time, increases adoption, and lowers support costs. A weak API creates churn: integrations break, customers lose trust, and every change becomes risky.

    What strong APIs and docs make clear:
    - Capabilities and constraints (what it does / doesn’t do)
    - Versioning and backward-compatibility expectations
    - Reliability behaviors (retries, idempotency, rate limits)
    - Security model (auth, scopes, least privilege)

=== "Support / QA"

    ## API — Support / QA view

    An API is where integrations succeed or fail. When something breaks, Support and QA need fast answers:

    - Was the request valid?
    - Was the caller authorized?
    - Did the system accept, reject, or partially process it?
    - Is it safe to retry?

    What good API docs enable:
    - Repro steps (copy/paste HTTP or curl examples)
    - Clear signals (status codes, error codes, request IDs)
    - Deterministic behavior (validation rules, timestamp rules, idempotency)
    - Useful IDs for escalation (correlation IDs / request IDs)

    ### What to capture in a bug/support ticket

    - Endpoint + method
    - Status code + response body
    - Request headers (**redact secrets**)
    - Request ID / correlation ID (if provided)
    - Timestamp and retry attempts
