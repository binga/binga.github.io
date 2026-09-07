---
layout: post
title: "Preference data failures in NLP labeling"
date: 2026-09-08 09:00:00 +0530
published: true
author: ps
slug: preference-data-failures-in-nlp-labeling
description: "Six preference pairs that quietly teach classifiers the wrong skill."
categories: [Applied AI, LLMs and Evaluation]
tags: [nlp, classification, preference-data, post-training, evals, ai-assisted]
---

Six preference pairs that quietly teach classifiers the wrong skill.

## Context

A lot of post-training talk is about recipes: SFT, DPO, reward models, GRPO. Pretty clear that the quieter failure mode is upstream. If your preference pairs reward shortcuts, the model learns shortcuts. The training recipe then just amplifies them.

I spend a fair bit of time thinking about classifiers (sentiment, triage, spam, and the usual NLP labeling work). Below are six preference failures I keep seeing. For each: a weak Chosen that looks helpful, and a better Chosen that teaches the right judgment.

Same format throughout: Rejected vs Chosen, then the skill.

## 1. Mixed aspect is not one class

Text: "The battery lasts forever but the screen cracked in a week."

**Rejected:** Positive (battery clause wins).

**Chosen:** Mixed. Battery +, screen −. Overall mixed / negative-leaning if durability matters.

**Skill:** Don’t collapse multi-aspect text into one majority clause.

## 2. Don’t inherit the user’s label

User: "This ticket is clearly urgent, right?"

Text: "Whenever you get a chance, the export CSV has an extra comma in row 12."

**Rejected:** Yes, urgent.

**Chosen:** Not urgent. Soft deadline language + low severity → normal / P3.

**Skill:** Prefer the label the text supports, not the label the user hints. (This is label sycophancy.)

## 3. Negation is not a keyword match

Text: "I’m not unhappy with the delivery time."

**Rejected:** Negative (matched "unhappy").

**Chosen:** Mild positive / neutral-leaning. "Not" flips the complaint. It is not strong praise either.

**Skill:** Respect negation scope. Don’t classify from one loaded word.

## 4. Thin features → don’t force a class

Text: "Quarterly roadmap sync — Tue 4pm. Deck attached. Reply if the time doesn’t work."

**Rejected:** Not spam. Clear work meeting language. (Said with high confidence.)

**Chosen:** Uncertain. Looks like normal work mail, but cues are thin. Need sender reputation, domain, or history before tagging spam vs not.

**Skill:** Abstain (or ask) beats a confident guess when signal is weak. Calibration is part of labeling.

## 5. Right tag, bad reason still loses

From: alerts@github.com  
Subject: [GitHub] Deployment failed on main  
Body: View logs: [https://github.com/acme/app/actions/runs/123](https://github.com/acme/app/actions/runs/123)

Both answers say Not spam. Only one should win.

**Rejected:** Not spam, because it came from GitHub and GitHub is never spam.

**Chosen:** Not spam. Looks like a transactional GitHub Actions alert: alerts@github.com, deploy-failed subject, github.com/actions URL. Still watch for lookalike domains.

**Skill:** Preference data should reward process, not only the final class. A brittle rule that luckily gets the tag right is still a bad pair.

## 6. Sarcasm flips polarity words

Text: "Amazing. Another delayed flight. Love that for me."

**Rejected:** Positive — customer used Amazing and Love.

**Chosen:** Negative. Ironic praise over a clear complaint. Extreme polarity words here are sarcasm.

**Skill:** Situation beats keyword polarity.

## Conclusions

1. It’s pretty clear that a lot of “helpful” preference data for classifiers is just shortcut data. Aspects, negation, irony, and user hints are where bag-of-words labeling dies.
2. Calibration belongs in the preference set. Forcing Spam / Not spam / Urgent on thin cues teaches overconfidence.
3. Same final label is not enough. If the reason is brittle ("GitHub is never spam"), that pair still teaches the wrong thing.
4. Good old classification still matters. Post-training judgment shows up first in which pairs you keep.

If you are building preference data for labeling models, these six are a useful red-team checklist. Start there before you scale the recipe.
