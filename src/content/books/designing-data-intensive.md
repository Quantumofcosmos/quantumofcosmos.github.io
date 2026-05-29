---
id: designing-data-intensive
title: "Designing Data-Intensive Applications"
author: "Martin Kleppmann"
status: read
rating: 5
tags:
  - Distributed Systems
  - Databases
  - Architecture
---

The single best book on distributed systems for practitioners. Kleppmann weaves theory and practice seamlessly -- every concept is grounded in real systems (Kafka, Cassandra, ZooKeeper). The chapters on consistency models and consensus are worth the price alone. This is the book I wish existed when I started working on distributed systems.

## What Makes It Stand Out

Most distributed systems books fall into one of two traps: either they're too theoretical (proofs without context) or too practical (recipes without understanding). Kleppmann avoids both by constantly connecting theory to real systems.

## Key Takeaways

### Consistency Models Are a Spectrum

The book's treatment of consistency models is the clearest I've seen. Linearizability, sequential consistency, causal consistency, eventual consistency -- each is defined precisely and illustrated with real-world examples. The key insight: stronger consistency models are not "better"; they're more restrictive. The right choice depends on your workload and fault tolerance requirements.

### The Replication Chapters

The chapters on replication (single-leader, multi-leader, leaderless) and partitioning are immediately applicable. If you're building or operating a distributed database, these chapters will save you from making mistakes that have been made many times before.

### Consensus and Linearizability

The chapter on consensus (Paxos, Raft) and linearizability is the most accessible rigorous treatment I've found. Kleppmann explains why linearizability is expensive (requires coordination) and when you can avoid it (use causal consistency instead).

## Who Should Read This

Anyone who builds, operates, or reasons about distributed systems. This includes backend engineers, data engineers, SREs, and architects. Even if you never implement a consensus algorithm, understanding how distributed databases work under the hood will make you a better engineer.

## Companion Reading

- *Distributed Systems: Principles and Paradigms* (Tanenbaum & van Steen) for a more theoretical treatment
- *Database Internals* (Alex Petrov) for a deeper dive into storage engine design
- The original Raft and Paxos papers for primary sources
