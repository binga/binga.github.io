---
layout: post
title: "Frequent uv Commands"
date: 2025-10-01
author: ps
categories: [Python]
tags: [uv, python, tooling, developer-tools]
---

### Install all packages from pyproject.toml

`uv pip install --editable .` reads pyproject.toml and installs every declared dependency.

`uv sync`

`uv sync -v` for verbose logs

### Delete uv cache to save disk space

`uv cache clean`

### Running python scripts without activating the venv

`uv run script.py`

### Invoke CLI tools in terminal (works even without activating virtual environment)

`uv run -- trl`

`uv run -- trackio`

`uv run -- python`
