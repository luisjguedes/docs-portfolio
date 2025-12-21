# Markdown authoring guide

This guide defines the Markdown conventions used in this portfolio site. It’s intentionally practical: copy, paste, ship.

## Scope

Use this guide when you:
- add or update content under `docs/`
- create new pages (concept, how-to, reference, troubleshooting)
- contribute examples (OpenAPI, code snippets, diagrams)

## Quick principles

- Write for scanning: short sections, meaningful headings, clear steps.
- Prefer examples over explanation.
- Use consistent patterns so contributors can follow the same structure.

---

## File and folder conventions

### Location
- Site content lives under `docs/`
- Images live under `docs/assets/` (if needed)
- JavaScript for the site lives under `docs/javascripts/`

### Naming
Use lowercase and hyphens:
- ✅ `send-first-event.md`
- ✅ `event-intake-api.md`
- ❌ `Send First Event.md`
- ❌ `EventIntakeAPI.md`

### One topic per page
Each page should answer one primary question.

---

## Page types and templates

### Concept page
Use concepts to explain “what” and “why”.

Template:

    # <Concept name>

    ## What it is
    ## When to use it
    ## Mental model
    ## Key terms
    ## How it works (high level)
    ## Common pitfalls
    ## Next steps

### How-to guide
Use how-to guides to help users complete a task.

Template:

    # <Task in verb form>

    ## Before you begin
    ## Step 1: ...
    ## Step 2: ...
    ## Step 3: ...
    ## Troubleshooting (optional)
    ## Next steps

### Reference page
Use reference for “look-up” information: fields, endpoints, parameters.

Template:

    # <API / Component name> — reference

    ## Overview
    ## Authentication / prerequisites
    ## Endpoints / parameters
    ## Request / response examples
    ## Errors

### Troubleshooting page
Use troubleshooting for failures + fixes.

Template:

    # Troubleshooting — <Topic>

    ## <Problem name>
    **Symptoms**
    **Likely causes**
    **Fix**

---

## Headings and structure

### Heading levels
- Use one `#` (H1) per page.
- Use `##` for major sections.
- Use `###` for sub-sections.

Example:

    # Send your first event
    ## Before you begin
    ## Step 1: Prepare the request
    ### Example payload

Avoid deep nesting beyond `####` unless there’s a strong reason.

### Headings should be scannable
Prefer clear, plain headings:
- ✅ “Before you begin”
- ✅ “Step 2: Send the request”
- ❌ “Some important information you might want to know”

---

## Links

### Relative links for internal pages
Prefer relative links when linking within docs:

    See [Send your first event](../how-to/send-first-event.md).

### Descriptive link text
Use meaningful link text:

    See [Authentication requirements](#authentication).

Avoid vague text like “click here”.

---

## Lists

### Use bullets for sets, numbers for steps
Bullets:

    - predictable payloads
    - stable event names
    - safe retries

Steps:

    1. Create a token.
    2. Send the request.
    3. Validate the response.

Keep list items parallel (all verbs or all nouns).

---

## Code blocks

### Use fenced code blocks for snippets
Always use triple backticks and specify a language.

Bash example:

    ```bash
    curl -X GET https://api.example.com/health
    ```

JSON example:

    ```json
    { "status": "ok" }
    ```

YAML example:

    ```yaml
    version: 1
    ```

### Avoid broken code fences
Every opening fence must have a matching closing fence.

Good:

    ```json
    { "a": 1 }
    ```

Broken (missing closing fence):

    ```json
    { "a": 1 }
    ## This becomes code by accident

### Keep examples realistic
- Include headers for API examples (`Authorization`, `Content-Type`)
- Show at least one common error response where relevant
- Keep payloads small and readable

---

## Inline code

Use backticks for:
- file names: `mkdocs.yml`
- commands: `mkdocs serve`
- UI labels: `Settings`
- parameters: `event_id`

Example:

    Set `Authorization: Bearer <token>` on every request.

---

## Tables

Use tables for reference-style lookups, not prose.

Example:

    | Field | Type | Required | Notes |
    |---|---|:---:|---|
    | event_type | string | yes | Example: `user.created` |

Keep tables small; split if too wide.

---

## Admonitions (notes, warnings)

Use admonitions to highlight important points (not for decoration).

Examples:

    !!! note
        Use an `idempotency_key` when retrying requests to prevent duplicates.

    !!! warning
        Do not include secrets (tokens, passwords) in example payloads.

---

## Diagrams (Mermaid)

Use Mermaid for quick mental models. Keep diagrams simple.

Example:

    ```mermaid
    flowchart LR
      A[Client] -->|POST /v1/events| B[Event Intake API]
      B --> C[(Queue)]
      C --> D[Downstream processors]
    ```

Conventions:
- Prefer left-to-right diagrams (`LR`) for workflows
- Use short node labels
- Label edges with verbs when helpful (“validates”, “retries”, “publishes”)

---

## Tone and voice (authoring basics)

- Be direct and concrete.
- Prefer “do X” over “you can do X”.
- Avoid marketing language.
- Avoid vague claims (“simple”, “easy”, “powerful”) unless you prove it with an example.

Good:

    “Send the same request again with the same `idempotency_key`.”

Avoid:

    “This makes it super easy to avoid duplicates.”

---

## Content quality checklist (before you commit)

- [ ] The page has a single clear purpose.
- [ ] Headings are scannable and consistent.
- [ ] Steps are complete and reproducible.
- [ ] Code blocks have language tags.
- [ ] Links work (internal + external).
- [ ] Examples don’t contain secrets or proprietary data.
- [ ] You included at least one common error case where relevant.

---

## Local preview (optional)

If you’re working locally:

    pip install -r requirements-docs.txt
    mkdocs serve

Then open the local URL shown in the terminal (usually `http://127.0.0.1:8000/`).

---

## Questions or improvements

If you notice friction while using this guide, improve the guide. Authoring conventions are a product: they should evolve with real usage.
