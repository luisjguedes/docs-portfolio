# Documentation strategy (sample)

This page outlines how I approach documentation as a product: prioritization, quality, governance, and continuous improvement.

## Goals
- Help users complete real tasks quickly (time-to-first-success).
- Reduce support load by closing common knowledge gaps.
- Keep docs accurate and maintainable as the product changes.

## Content model
I structure content using a simple, scalable pattern:

- **Concepts**: mental models, boundaries, “how it works”
- **How-to guides**: task completion, copy/paste friendly steps
- **Reference**: precise and complete (APIs, configuration, fields)
- **Troubleshooting**: symptom → cause → confirm → fix

## Information architecture principles
- Design for how users **search and skim**, not how teams are organized.
- Use consistent page types and predictable headings.
- Keep navigation shallow where possible; use cross-links for depth.

## Quality bar
Minimum quality checks before publishing:
- Technical accuracy validated through hands-on testing where possible
- Clear prerequisites and success criteria
- Examples that are runnable/copyable
- Known edge cases captured (or explicitly out of scope)
- Terminology consistency and UI label fidelity

## Review workflow (lightweight and scalable)
- **Draft**: writer owns structure and first-pass accuracy
- **Technical review**: engineer/SME validates correctness and edge cases
- **Editorial review**: clarity, structure, tone, accessibility
- **Publish**: versioned release notes or change log entry when needed

## Metrics and feedback loops
Signals I monitor:
- Top search queries with poor click-through
- Pages with high exits / low engagement
- Support ticket themes that repeat
- “Doc bug” reports from engineers and users

## Where AI helps (responsibly)
- Draft scaffolding (headings, checklists, templates)
- Style and consistency checks
- Summarization for release notes
- Never used as a substitute for technical validation
