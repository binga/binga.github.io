---
layout: post
title: "Dissecting the FrontierSWE benchmark"
date: 2026-09-03 09:00:00 +0530
published: true
author: ps
slug: dissecting-the-frontierswe-benchmark
description: "What FrontierSWE gets right about evaluating long-horizon software engineering and AI research agents—and where it can improve."
categories: [Applied AI, Agents and Evaluation]
tags: [agents, benchmarks, evals, software-engineering, ai-research]
---

Proximal released a new benchmark yesterday that contains 34 tasks across five categories.

| Task category | Brief description |
| --- | --- |
| Code implementation | Given a problem statement, write code that matches the specification and passes the tests. |
| Performance optimization | Given an existing software implementation, improve it by making it faster or smaller. |
| Scientific computing | Given a scientific problem statement, identify and implement an algorithm that solves it. |
| Visual reasoning | Given a problem statement, implement code to understand or create a visual world and solve the problem. |
| AI research | Given a problem statement in AI/ML, implement an algorithm while improving or optimizing cost, latency, or accuracy. |

## What does the benchmark provide?

Proximal provides 34 tasks, a 20-hour time budget, and a verifier that scores—or rewards—the solution. Depending on the task, the score combines correctness, speedup, and solution quality.

Is there a gold solution for every task against which submissions are measured? Or, rather:

## Is there an oracle?

Yes. It is enforced through tests and improvements in solution quality. If a solution from model A achieves a greater speedup than a solution from model B, model A receives a higher score—or reward—than model B.

This is very different from how machine learning was done in the previous decade, when gold labels were considered a prerequisite for solving supervised ML problems.

The modern approach—with a verifier that includes tests and a reward function—is enough to let humans and agents take on problems and discover novel solutions.

For some tasks, such as the optimizer task, there is an oracle solution.

## What was done well?

1. **Guardrails:** The guardrails for each AI research task are set up very well.

   - **Compute:** The compute allocation—A100, B200, two T4 GPUs, and so on—is called out in the task description. Together with the runtime limit, this allows users to estimate the dollar budget for experimentation upfront.
   - **Runtime:** The 20-hour runtime allocation is explicit. The task description and system prompt state, "You have a total time budget of 20h for this task," encouraging models to use an external utility to track elapsed and remaining time.
   - **Long-horizon behavior:** The system prompt encourages the agent to be persistent: "Do not stop early. Keep improving while meaningful time remains."

2. **Benchmark UX:** The experience of exploring the benchmark is very well designed.

   - Begin with the tasks and categories.
   - View the top models on each task through the leaderboard.
   - For each model, inspect the individual runs, since the final score is either mean@5 or best@5. This reveals variance across runs and shows how reliable—or unreliable—the models can be.
   - For each model run, browse the trace from start to finish.

3. **Harness and verification:** Models can observe intermediate results and outcomes through a `view_image` tool in the harness. This allows them to inspect their work, identify gaps, and improve output quality.

## What could have been better?

1. **Low volume:** Thirty-four tasks is not enough to establish high-signal differences between models. This is perhaps the most greenfield area for new practitioners and companies to make an impact.

2. **No reasoning traces:** Showing the traces is a great idea for learners and for identifying opportunities in a future version of the benchmark. The lack of reasoning traces, however, is a bummer. This is not on Proximal—if only the labs had been more open. :)
