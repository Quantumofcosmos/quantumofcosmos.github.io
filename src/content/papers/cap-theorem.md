---
id: cap-theorem
title: "CAP Twelve Years Later: How the Rules Have Changed"
authors: "Eric Brewer"
venue: IEEE Computer
year: 2012
dateRead: "2025-10-18"
tags:
  - Distributed Systems
  - CAP Theorem
  - Databases
---

Brewer revisits the CAP theorem a decade later, clarifying common misinterpretations. The key nuance: the choice between C and A is not binary but exists only during a partition. Modern systems use "delayed consistency" and "partition tolerance by design" to navigate the trade-off space more gracefully.

## Original CAP Theorem

The CAP theorem states that a distributed system can provide at most two of the following three guarantees:

- **Consistency**: Every read returns the most recent write or an error
- **Availability**: Every request receives a non-error response (without guarantee of recency)
- **Partition tolerance**: The system continues to operate despite network partitions

The theorem proves that during a network partition, a system must choose between consistency and availability for the affected data.

## Common Misinterpretations

Brewer identifies three widespread misunderstandings:

### 1. "You Must Choose C or A at Design Time"

The CAP choice only applies *during a partition*. In normal operation (no partition), a system can be both consistent and available. The design question is what happens during the relatively rare event of a partition.

### 2. "AP Means Always Available"

Choosing availability during a partition doesn't mean the system is always available. It means the system continues to serve requests during a partition, possibly returning stale data. The system can still be unavailable for other reasons (node failures, overload).

### 3. "CP Means Never Available During a Partition"

Choosing consistency during a partition doesn't mean the system becomes completely unavailable. It means the system refuses operations that might violate consistency. Operations on data that isn't affected by the partition can still proceed normally.

## The Refined View

Brewer's refined view introduces several important nuances:

### Partition Recovery

The most important aspect of CAP is not the behavior during a partition but the *recovery* after the partition heals. A system that serves stale data during a partition (AP) must have a reconciliation strategy when the partition ends. This strategy (merge, conflict resolution, last-write-wins) has its own consistency implications.

### Delayed Consistency

Many modern systems use a form of "delayed consistency": they serve requests during a partition (AP behavior) but provide mechanisms to detect and resolve inconsistencies afterward. This is a middle ground that the original CAP statement doesn't capture.

### Partition Tolerance by Design

Rather than treating partitions as exceptional events, modern systems design for partitions as a normal occurrence. This includes:

- **Chaos engineering**: Deliberately inducing partitions in production to test behavior
- **Quorum systems**: Configurable read and write quorums that allow trade-offs between consistency and availability
- **Multi-region architectures**: Designing for the reality that cross-region links will fail
