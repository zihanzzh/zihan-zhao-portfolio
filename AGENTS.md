# AGENTS.md

Behavioral guidelines for Codex and other coding agents in this repository.

These rules bias toward caution, simplicity, and small safe changes. For trivial tasks, use judgment.

## 1. Think Before Coding

Do not assume. Do not hide confusion. Surface tradeoffs.

Before implementing:

- State important assumptions explicitly.
- If the request has multiple possible meanings, ask or briefly present the options.
- If a simpler approach exists, mention it.
- If something is unclear, stop and ask before editing.
- Read the relevant files before making changes.

## 2. Simplicity First

Use the minimum code needed to solve the problem.

- Do not add features beyond what was requested.
- Do not add abstractions for single-use code.
- Do not add unnecessary configurability.
- Do not add new dependencies unless clearly needed.
- Prefer simple, readable code over clever code.
- If a solution feels overcomplicated, simplify it.

## 3. Surgical Changes

Touch only what is necessary.

When editing existing code:

- Do not refactor unrelated code.
- Do not improve nearby code just because you noticed it.
- Match the existing style of the project.
- Do not delete unrelated dead code unless asked.
- Remove only unused imports, variables, or functions created by your own changes.

Every changed line should directly connect to the user's request.

## 4. Goal-Driven Execution

Turn tasks into verifiable goals.

For non-trivial tasks, first state a short plan like:

1. Change X → verify by Y.
2. Change A → verify by B.

For bug fixes:

- Identify the likely cause first.
- Reproduce the issue when possible.
- Make one fix at a time.
- Verify the fix before making more changes.

## 5. Git Safety

- Do not commit unless the user explicitly asks.
- Do not push to GitHub or any remote repository unless explicitly asked.
- Before risky edits, suggest checking `git status`.
- After editing, summarize exactly which files changed.

## 6. Running Commands

- Prefer safe inspection commands first, such as `pwd`, `ls`, `cat`, and `git status`.
- Do not run destructive commands.
- Do not delete files unless explicitly asked.
- Do not install packages globally unless explicitly asked.
- If a command may take a long time or change the environment, explain it first.

## 7. Web Project Rules

If this repository is a web project:

- Use the development server while iterating.
- For Next.js projects, prefer `npm run dev`.
- Do not run `npm run build` during interactive development unless explicitly asked.
- If dependencies are changed, update the lockfile and restart the dev server.

## 8. User Preference

The user prefers clear, step-by-step guidance in small chunks.

When explaining setup, debugging, or code changes:

- Give one step at a time.
- Avoid long bullet lists unless asked.
- Avoid overwhelming explanations.
- Explain important decisions in simple language.
- When explaining code, explain the logic first, then the details.

## 9. Final Response Style

After completing a task, respond briefly with:

1. What changed.
2. How to test it.
3. Any warning or next step.

Keep the response concise.

## 10. Portfolio Website Rules

This repository is a formal personal portfolio website for Henry / Zihan Zhao.

Project identity:

- Dark modern AI / Computer Engineering portfolio.
- Fancy but professional.
- Inspired by high-end 3D creator portfolio landing pages, but customized for Henry / Zihan.
- Do not make the website look like a plain resume page.

Technical direction:

- Use Next.js, React, TypeScript, and Tailwind CSS.
- Use GSAP, @gsap/react, and ScrollTrigger as the primary animation system, especially for timeline animations, scroll-driven effects, hero animations, marquees, and project card stacking.
- Framer Motion may be used as a secondary animation tool only when it is clearly simpler or better suited, such as small component entrance animations, hover states, or lightweight UI transitions.
- Do not let GSAP and Framer Motion animate the same CSS properties on the same element at the same time.
- When choosing between GSAP and Framer Motion for an animation, briefly explain the choice.
- Use relevant installed GSAP skills when planning or writing animation code.

Design direction:

- Main background should be close to #0C0C0C.
- Use large typography, smooth scroll-based animations, and strong visual hierarchy.
- Hero section should feature a centered 3D avatar image.
- Project sections should feel like visual case studies, not plain bullet lists.
- Keep the site responsive and polished on mobile and desktop.

Confirmed site sections:

1. Hero
2. About
3. Featured Projects
4. Skills / Tech Stack
5. Leadership & Impact
6. Contact

Workflow:

- Before coding, inspect existing files and propose a short plan.
- Make small, verifiable changes.
- Do not redesign everything at once.
- Do not commit or push unless the user explicitly asks.
- After each task, summarize changed files and how to test.
