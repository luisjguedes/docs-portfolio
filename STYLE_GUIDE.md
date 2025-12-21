# Style guide

Baseline: Microsoft Writing Style Guide  
https://learn.microsoft.com/en-us/style-guide/welcome/

This repo adds lightweight, practical conventions so documentation is consistent, reviewable, and easy to maintain.

---

## Goals
- Help readers succeed quickly (task completion + confidence).
- Keep content accurate as systems evolve.
- Scale quality through consistent structure and automation.

---

## Voice and tone
- Friendly, professional, direct.
- Prefer short sentences and strong verbs.
- Use the imperative for instructions (“Select”, “Enter”, “Run”).
- Avoid filler/weak qualifiers: “simply”, “just”, “obviously”, “easy”.

✅ “Select **Run** to execute the workflow.”  
❌ “Simply click Run to easily execute the workflow.”

---

## Content model (page types)
Use a small set of page types that scale:

### Concept
Explains what something is and why it matters.  
Include: mental model, boundaries, key terms, diagram if helpful.

### How-to guide
Task completion.  
Include: goal, prerequisites, steps, expected result, common pitfalls.

### Reference
Precise information for a single surface area.  
Include: definitions, parameters, constraints, examples, error cases.

### Troubleshooting
Symptom-first guidance.  
Format: symptom → cause → confirm → fix.

---

## Headings and structure
- Sentence case headings.
- One `#` title per page.
- Use `##` for main sections and keep pages focused.
- Prefer lists/tables for scanability; keep paragraphs short.

---

## Terminology and UI labels
- Match UI labels exactly (case and punctuation).
- Use one term per concept; avoid casual synonyms.
- Define acronyms on first use (e.g., “continuous integration (CI)”).
- Keep a project vocabulary for approved terms.

---

## Procedures
- One action per step when possible.
- Include prerequisites when missing them causes failure.
- Include a success signal (“You should see…”) for non-trivial tasks.

---

## Examples and code
- Keep examples minimal and copy/paste friendly.
- Label pseudo-code explicitly.
- If a command is destructive or risky, add a warning and a safe alternative.

---

## API documentation
- Start with purpose (“what it does”).
- Show a request + response pair.
- Document common error cases first.
- Define parameters with type, required/optional, constraints, example.

---

## Accessibility and inclusive language
- Avoid idioms and culture-specific phrases.
- Use descriptive link text (avoid “click here”).
- Ensure diagrams are explained in text.

---

## Definition of done (DoD)
A doc change is done when:
- ✅ Accurate (validated hands-on when possible)
- ✅ Matches the correct page type
- ✅ Includes success signals and examples where appropriate
- ✅ Terminology and UI labels are consistent
- ✅ Review completed (technical/editorial as needed)

---

## Automation (planned)
This repo can optionally use Vale for style linting to flag clarity and consistency issues during PRs.
