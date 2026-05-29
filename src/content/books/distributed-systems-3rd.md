---
id: distributed-systems-3rd
title: "Distributed Systems: Principles and Paradigms"
author: "Andrew Tanenbaum, Maarten van Steen"
status: reading
rating: 0
tags:
  - Distributed Systems
  - Networking
  - Architecture
---

Working through the 3rd edition now. Tanenbaum's pedagogical clarity is unmatched -- each concept builds logically on the previous. Currently on the replication and consistency chapters. The coverage of virtual synchrony is more thorough than Kleppmann's treatment.

## Progress So Far

### Part I: Principles

The first half covers the fundamental principles of distributed systems: communication, processes, naming, synchronization, consistency, replication, and fault tolerance. Tanenbaum's approach is methodical -- each chapter introduces a problem, surveys solutions, and analyzes trade-offs.

### Communication

The coverage of message passing, remote procedure calls, and message-oriented middleware is comprehensive. The comparison between RPC and message queuing is particularly clear. The treatment of multicast communication (including reliable multicast and ordered multicast) provides the foundation for understanding group communication protocols.

### Synchronization

The synchronization chapter covers clocks (physical and logical), elections, mutual exclusion, and distributed transactions. The comparison between two-phase commit and three-phase commit is the most accessible I've found.

### Replication and Consistency

This is where I am now. The chapter covers:

- **Consistency models**: From strict consistency to eventual consistency, with formal definitions
- **Data-centric models**: Sequential consistency, causal consistency, and the CAP implications
- **Client-centric models**: Monotonic reads, monotonic writes, read-your-writes, and writes-follow-reads
- **Replication protocols**: Primary-backup, chain replication, and quorum-based protocols

The treatment of virtual synchrony is notably more thorough than in Kleppmann's book, which only mentions it in passing. This protocol underpins many practical group communication systems (ZooKeeper, etcd) and deserves the detailed treatment Tanenbaum provides.

## Remaining Chapters

Still to cover: fault tolerance, security, and distributed object-based systems. Looking forward to the fault tolerance chapter in particular, as it covers Byzantine fault tolerance in more detail than most textbooks.
