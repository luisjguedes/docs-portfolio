# Start here

This portfolio is a small, public set of samples showing how I approach documentation as a product: clear information architecture, consistent patterns, and developer-first content that is easy to maintain.

## Suggested reading order
A quick path through the materials (10–15 minutes total):

1. **How I structure information:** [Mental model](concepts/mental-model.md)  
   The framing and boundaries: what belongs where, and why.

2. **How I guide users through a task:** [Send your first event](how-to/send-first-event.md)  
   A practical flow with prerequisites, success criteria, and clear steps.

3. **How I document an API:** [Event Intake API (reference)](reference/event-intake-api.md)  
   Reference patterns, examples, and the “what developers need at integration time”.

4. **How I handle failure modes:** [Event Intake API issues](troubleshooting/event-intake.md)  
   Symptom → likely cause → fix, written to reduce back-and-forth.

## Conventions used across the docs
- **Topic-based writing:** concept / how-to / reference / troubleshooting
- **Task-first structure:** prerequisites, steps, expected results, and pitfalls
- **Consistency:** terminology and style are treated as part of quality, not an afterthought
- **Maintainability:** content is designed to be reviewed, versioned, and iterated

## What I would extend next (if scaling this)
- **Findability:** tune labels/navigation to match common entry points and search terms
- **Reference depth:** add auth, error model consistency, pagination, and idempotency patterns
- **Operational model:** define ownership, review cadence, and “definition of done” per doc type
- **Feedback loop:** add lightweight signals (page feedback, support patterns) to guide iteration
