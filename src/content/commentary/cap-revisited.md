---
id: cap-revisited
paperTitle: "CAP Twelve Years Later"
headline: "CAP is Not a Trilemma -- It Is a Design Space Map"
date: "2026-03-28"
tags:
  - Distributed Systems
  - CAP Theorem
  - Databases
---

The most damaging misunderstanding of CAP is treating it as a binary choice between consistency and availability. Brewer's revisitation makes clear that the trade-off only activates during partitions, and that most systems operate in a "CA" mode most of the time.

The real design question is: what happens during the rare partition? This reframes the problem from "choose C or A" to "define your degradation strategy." Modern systems like CockroachDB and TiDB exemplify this -- they don't pick a side, they navigate the space with sophisticated fallback strategies.

## The Binary Fallacy

When people say "we chose AP" or "we chose CP," they're oversimplifying in a way that leads to bad design decisions. The CAP theorem says:

> During a network partition, a system must choose between consistency and availability.

This is a statement about behavior *during a specific failure mode*, not a permanent property of the system. Most of the time, there is no partition, and the system can be both consistent and available.

## The Real Question: Degradation Strategy

Instead of asking "C or A?", we should ask:

1. **How do we detect a partition?** (timeout-based? heartbeat-based?)
2. **What operations remain available during a partition?** (reads? writes? specific keys?)
3. **How do we reconcile when the partition heals?** (last-write-wins? CRDTs? manual merge?)
4. **How do we communicate degradation to users?** (stale data warnings? read-only mode?)

These are the questions that actually matter in practice. A system that gracefully degrades with clear user communication is better than one that claims "AP" but silently serves stale data.

## Modern Approaches

The most sophisticated modern databases don't pick a side:

- **CockroachDB**: Uses a range-based partitioning model. If the replicas for a range are all available, operations proceed with full consistency. If a partition affects a range, that range becomes unavailable (CP for that range), while other ranges remain fully available (CA).
- **TiDB**: Similar approach with region-based placement. The TiKV layer handles per-region consistency decisions.
- **FaunaDB**: Uses a global ordering protocol (Calvin-inspired) that provides serializable isolation without coordination during normal operation, with defined behavior during partitions.

These systems prove that the future is not "CP vs AP" but "intelligent navigation of the CAP space based on workload, region, and failure mode."
