# Mental model

Most automation platforms can be understood through a simple model:

- A **trigger** starts a workflow when an event happens (time, webhook, message).
- A **step/node** transforms data or calls another system.
- A workflow is successful when it produces predictable results and clear failure modes.

Good documentation makes these boundaries explicit:
- What starts execution?
- What data is available and when?
- What errors look like and how to recover?

> If you can explain “what runs, when it runs, and what it needs,” users become confident fast.
