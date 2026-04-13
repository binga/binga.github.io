---

## layout: post
title: "Improving search for coding agents"
date: 2026-04-14
author: ps
slug: search-for-coding-agents
categories: [AI, Agents, Tooling]
tags: [search, colgrep, code-search, semantic-search, benchmarking, llm-agents]



[View tweet on X](https://x.com/phanisrikanth33/status/2043774790922904022)

## Context

Agents are everywhere in software industry now. They are the gateway to accomplishing real work. While the models inside these agents decide what to do, the harnesses in these agents do the work. For example, calling a `web_search` tool or executing a `bash` command is done by the harness.

For agents to be effective, the tools exposed inside the harness need to be effective. One such critical tool for coding agents to be effective is the search tool. This tool allows the agent to find relevant context from the codebase so that the agents can modify the code as needed.

This brings us to the work by LightOn team. They released a tool called ColGrep earlier today. This is a Rust-based CLI tool that combined keyword search + semantic search on your codebase.

Claude says.....

> [ColGrep](https://github.com/lightonai/next-plaid) is a semantic code search tool from LightOn, powered by their [LateOn-Code](https://huggingface.co/blog/lightonai/colgrep-lateon-code) late-interaction retrieval models. It mirrors the familiar grep interface but replaces pure pattern matching with semantic ranking. It runs entirely locally, supports hybrid regex + semantic queries, and plugs directly into Claude Code, Codex, and OpenCode.

## Benchmarking

Curious to see if it performs well, I quickly tested in on an ML workspace of 228 indexed files across multiple ML projects.

I would like to capture metrics, for a few queries, across the trifecta - search recall, token efficiency, and latency. Here are the results.


|                              |              |             |           |                 |                |              |
| ---------------------------- | ------------ | ----------- | --------- | --------------- | -------------- | ------------ |
| Query                        | grep Matches | grep Tokens | grep Time | colgrep Matches | colgrep Tokens | colgrep Time |
| ensemble                     | 52           | 1,762       | 0.13s     | 15              | 315            | 2.45s        |
| preventing overfitting       | 1            | 16          | 0.13s     | 15              | 255            | 2.06s        |
| learning rate scheduling     | 1            | 14          | 0.14s     | 15              | 334            | 2.15s        |
| GPU memory optimization      | 1            | 14          | 0.13s     | 15              | 245            | 2.12s        |
| data augmentation strategies | 1            | 14          | 0.14s     | 15              | 323            | 2.09s        |
| **TOTAL**                    | **56**       | **1,820**   | **0.67s** | **75**          | **1,472**      | **10.87s**   |



| Use case                                      | Tool         | Why                                                                              |
| --------------------------------------------- | ------------ | -------------------------------------------------------------------------------- |
| Find a specific function, variable, or string | grep         | Exact match, instant results                                                     |
| "Where does this codebase handle X?"          | colgrep      | Understands intent, surfaces implementations across different naming conventions |
| Hybrid: regex filter + semantic ranking       | colgrep `-e` | Pre-filter with regex, then rank by meaning                                      |
| Large unfamiliar codebase                     | colgrep      | No need to guess the right keywords                                              |


## Conclusions

1. It's pretty clear that the ColGrep search tool is able to capture intent while grep admittedly cannot. What's impressive is the speed at which ColGrep operates. This is an insignificant increase in latency for which we are able to see semantically similar results from our search. That's pretty cool!
2. Nifty little CLI tools are here to stay. They help agents with specific functionality outside the model layer.
3. Every great coding agent needs access to a code search tool for retrieval. ColGrep direction is promising as it efficiently packages a great BM25 search with a competent and strong late interaction model for semantic search. This combo is powerful!

*References:* *[ColGrep / NextPlaid (GitHub)](https://github.com/lightonai/next-plaid)* *|* *[LateOn-Code blog post (HuggingFace)](https://huggingface.co/blog/lightonai/colgrep-lateon-code)* 