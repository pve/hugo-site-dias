---
date: '2026-06-17T00:00:00Z'
draft: false
title: 'Benchmarking Local Coding Models'
weight: 10
---

# Can IBM's Granite 4.1 code? I ran it against other local models to find out

**Full transparency**: Except for some initial prompting, most of this blog and the research behind it was AI generated. I did check everything manually though.
While I tried to include all relevant files in [this repo](https://github.com/pve/local-model-coding), reproducibility may be hampered by some of my older Claude contexts leaking into this process (e.g. about how opinionated I can be).

Inspiration came from [Adrian Cockcroft's retort](https://adrianco.medium.com/how-reliable-fast-and-expensive-is-each-version-of-claude-code-sonnet-through-opus-4-8-fast-272d74ffc869).
Consider this like a 'hello world' version that that.

Definitely reach out to comment.

-- Mostly genAI text follows --

I've been curious about how the newer IBM Granite models hold up for actual coding tasks, not just benchmarks designed to flatter them. So I set up a simple test on my M1 Pro MacBook: one identical prompt, five local models, six automated tests. Here's what happened.

## Setup

**Hardware:** MacBook Pro 14", M1 Pro, 32 GB unified memory. Ollama running locally, all models at default quantization.

**The lineup, smallest to largest:**

| Model | Size | Avg tok/s |
|---|---|---|
| granite4:latest | 2.1 GB | 49.6 |
| mistral:latest | 4.4 GB | 25.9 |
| deepseek-r1:8b | 5.2 GB | 20.0 |
| granite4.1:8b | 5.3 GB | 17.2 |
| devstral-small-2 | 15 GB | — (all runs timed out) |

I initially planned to include gemma3:27b and granite4.1:30b, but at 0.8 and 0.1 tok/s respectively, those aren't models you run — they're meditation exercises. Excluded before the benchmark started.

devstral-small-2 (Mistral's new coding model) is a different story. It downloaded fine, but at 15 GB it leaves almost no breathing room on a 32 GB machine. All three of its runs hit the 5-minute timeout. I'm treating it as a DNF.

That leaves four models that actually produced results.

## The task

One-shot prompt: write `transformer.py`, a Python CLI that converts between JSON and YAML. Standard library plus PyYAML. No explanation, just the code.

Then I run six automated tests:

| Test | What it checks |
|---|---|
| T1 | JSON → YAML, flat object |
| T2 | YAML → JSON, flat object |
| T3 | JSON → YAML, nested with list |
| T4 | JSON → YAML with `--indent` flag |
| T5 | YAML → JSON with `--indent` flag |
| T6 | Unknown format → non-zero exit code |

Each model ran three times. I'm reporting averages across valid runs (runs that completed within 5 minutes).

## Results

| Model | Tok/s | Avg score | Perfect runs |
|---|---|---|---|
| granite4:latest | 49.6 | 3.7/6 | 0/3 |
| mistral:latest | 25.9 | 3.0/6 | 0/3 |
| deepseek-r1:8b | 20.0 | 6.0/6 | 1/1 |
| granite4.1:8b | 17.2 | 6.0/6 | 3/3 |
| devstral-small-2 | — | — | — |

### Test matrix

| Model | T1 | T2 | T3 | T4 | T5 | T6 |
|---|---|---|---|---|---|---|
| granite4:latest | ✅ | ❌ | ✅ | ✅ | ❌ | 2/3 |
| mistral:latest | 2/3 | ❌ | 2/3 | 2/3 | ❌ | ✅ |
| deepseek-r1:8b | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| granite4.1:8b | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| devstral-small-2 | ⏱ | ⏱ | ⏱ | ⏱ | ⏱ | ⏱ |

The clear winner is **deepseek-r1:8b** — average 6.0/6, 1 perfect runs out of 1. The chain-of-thought model wins on quality, when it finishes. Reliability is another question.

One pattern stands out: T2 and T5 (YAML→JSON) failed consistently for granite4:latest, mistral:latest. JSON→YAML they handle fine. YAML→JSON they don't. My guess: the training data has far more JSON→YAML examples than the reverse. It's a one-line Python change to swap the direction, but somehow these models get it wrong.

granite4.1:8b scored +2.3 points higher than granite4:latest — which is what you'd hope for from a newer, larger model. The cost: it runs 2.9× slower (17.2 vs 49.6 tok/s). Whether that trade-off makes sense depends on whether you're batch processing or waiting for a response.

deepseek-r1:8b was the wild card. Its chain-of-thought reasoning is visible in the output, and when it works, the code is correct — 6/6 on the 1 run(s) that completed. But 2 of 3 runs hit the 5-minute timeout. The thinking process apparently sometimes goes off the rails and never stops. That's a problem if you're running automated benchmarks. Or, you know, want an answer today.

devstral-small-2 (15 GB) timed out on all three attempts with a 5-minute cap. I'm not surprised — 15 GB leaves very little headroom on a 32 GB machine once the OS and Ollama runtime take their cut. It might finish eventually, but "eventually" isn't useful. Excluded from results.

## What the speed numbers actually mean

granite4:latest at 49.6 tok/s is fast enough that you barely notice it's generating. granite4.1:8b at 17.2 tok/s feels noticeably slower — you watch the text appear. For interactive use, that matters. For batch processing (like this benchmark), it doesn't.

The anomaly worth noting: granite4.1:8b is slower than deepseek-r1:8b (17.2 vs 20.0 tok/s), despite being a similar size. IBM's quantization choices for the 4.1 series seem to trade speed for something — quality, presumably, though deepseek-r1 kept pace on score.

## What this doesn't tell you

A few honest caveats:

- **One task, one prompt.** JSON/YAML transformation is a clean, well-defined problem. Models that struggle here might shine on something messier, and vice versa.
- **No iteration.** Real coding involves debugging, follow-up questions, reading error messages. This tests one-shot instruction following only.
- **Default quantization throughout.** The same model at different quantization levels can behave quite differently. I didn't explore that.
- **No frontier comparison.** I'm not claiming granite4.1:8b beats GPT-4 or Claude. I'm asking what runs usably on 32 GB of unified memory.

## Verdict

For one-shot coding tasks on an M1 Pro MacBook:

- **granite4.1:8b** is the one to use if you want reliability. Slower than the baseline, but it actually writes correct code.
- **granite4:latest** is fine if speed matters more than correctness — good enough on JSON→YAML, falls apart on the reverse.
- **deepseek-r1:8b** is interesting but flaky. When it completes, the code is correct. Whether it completes is another question.
- **mistral:latest** underperformed expectations. The YAML→JSON blind spot is a real limitation.
- **devstral-small-2**: maybe on a 64 GB machine. Not here.

The gap between granite4:latest and granite4.1:8b on this specific task is significant enough to justify the speed trade-off — if you're doing code generation rather than quick lookups. Whether IBM's 4.1 series holds that advantage across a broader task set, I don't know. One benchmark, one task, one machine. Take it accordingly.

