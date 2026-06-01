# Start here

This portfolio is a small, public set of samples showing how I approach documentation as a product: clear information architecture, consistent patterns, developer-first content, docs-as-code workflows, and AI-assisted documentation governance.

## Suggested project path

For the clearest picture, review the portfolio in this order:

1. **docs-portfolio** - baseline documentation samples and working style
2. **docs-ai-operating-model** - flagship AI DocsOps operating model for quality gates, PromptOps, governance, and evaluation
3. **openapi-to-human-reference** - API documentation transformation from OpenAPI source to readable Markdown reference
4. **docsops-quality-gate** - reusable documentation quality gate for PR workflows

## Suggested reading order for this site

A quick path through the materials in this site:

1. **How I structure information:** [Mental model](concepts/mental-model.md)  
   The framing and boundaries: what belongs where, and why.

2. **How I guide users through a task:** [Send your first event](how-to/send-first-event.md)  
   A practical flow with prerequisites, success criteria, and clear steps.

3. **How I document an API:** [Event Intake API reference](reference/event-intake-api.md)  
   Reference patterns, examples, and what developers need at integration time.

4. **How I handle failure modes:** [Event Intake API issues](troubleshooting/event-intake.md)  
   Symptom -> likely cause -> fix, written to reduce back-and-forth.

## Conventions used across the docs

- **Topic-based writing:** concept, how-to, reference, and troubleshooting
- **Task-first structure:** prerequisites, steps, expected results, and pitfalls
- **Consistency:** terminology and style are treated as part of quality, not an afterthought
- **Maintainability:** content is designed to be reviewed, versioned, and iterated

## What I would extend next

- **Findability:** tune labels and navigation to match common entry points and search terms
- **Reference depth:** add auth, error model consistency, pagination, and idempotency patterns
- **Operational model:** define ownership, review cadence, and definition of done per doc type
- **Feedback loop:** add lightweight signals such as page feedback and support patterns to guide iteration
