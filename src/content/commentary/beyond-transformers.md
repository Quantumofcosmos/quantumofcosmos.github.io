---
id: beyond-transformers
paperTitle: "Attention Is All You Need"
headline: "Why Transformers Won the War, But Might Not Win the Peace"
date: "2026-01-20"
tags:
  - Machine Learning
  - Transformers
  - Architecture
---

The Transformer architecture solved the parallelization bottleneck of RNNs, but at a cost: quadratic attention complexity. Sub-M quadratic approaches (Performer, Linformer, Mamba) show promise but none match vanilla attention quality at scale.

I believe the next breakthrough will come not from approximating attention, but from finding a fundamentally different composition primitive that scales linearly while preserving the ability to capture long-range dependencies. State space models are the most promising direction -- they offer O(n) sequence processing with implicit memory, but the theory for why they work is still underdeveloped.

## The Quadratic Bottleneck

Self-attention computes pairwise interactions between all positions in a sequence. For a sequence of length n, this means O(n²) time and memory. At short sequence lengths (< 512 tokens), this is manageable. But as we push toward longer contexts -- 4K, 32K, 128K, even 1M tokens -- the quadratic cost becomes the dominant constraint on both training and inference.

Several lines of work attempt to address this:

- **Sparse attention** (Longformer, BigBird): Only attend to a subset of positions. Reduces complexity but loses global context.
- **Linear attention** (Performer, Linear Transformer): Use kernel approximations to avoid the explicit n×n matrix. Fast but lower quality.
- **State space models** (Mamba, S4): Replace attention with structured state space layers that process sequences in O(n). Promising but early.

## Why State Space Models Are Different

Mamba's key innovation is a *selective* state space mechanism -- the transition matrices become input-dependent, which gives the model the ability to selectively propagate or forget information. This is closer to how an RNN would *want* to behave if it could learn its gating properly.

The empirical results are striking: Mamba matches or exceeds Transformer quality on many benchmarks at a fraction of the compute cost. But the theoretical understanding lags behind. We don't yet have a clean characterization of what these models can and cannot express, the way we understand the Turing-completeness of RNNs or the universal approximation properties of attention.

## What I'd Like to See

1. **A theory of expressiveness for SSMs** comparable to the attention-as-kernel view of Transformers
2. **Hybrid architectures** that combine local attention with global SSM processing
3. **Better scaling laws** -- Transformers have predictable scaling behavior; SSMs need the same

The next few years will determine whether Transformers are the final architecture or just the first successful one. I'm betting on the latter.
