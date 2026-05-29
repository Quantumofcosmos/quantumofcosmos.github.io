---
id: paxos-vs-raft
paperTitle: "In Search of an Understandable Consensus Algorithm"
headline: "Understandability as a First-Class Design Goal"
date: "2026-02-12"
tags:
  - Distributed Systems
  - Consensus
  - Software Engineering
---

Raft's core contribution isn't technical novelty -- it's the demonstration that understandability is a legitimate design objective with measurable consequences.

The Raft paper led to far more correct implementations than Paxos ever did, which is a real engineering outcome, not just a pedagogical one. That said, Paxos is more flexible in some edge cases (no strong leader requirement). I think the field needs more work on "understandability by composition" -- building complex protocols from simple, independently verifiable building blocks rather than monolithic algorithms.

## The Implementation Gap

One of the most striking facts in distributed systems is how many Paxos implementations are subtly broken. Google's own Chubby paper mentions that their Paxos implementation was difficult to get right, and they're one of the most sophisticated engineering organizations in the world.

Raft's design explicitly optimizes for the reader. The decomposition into sub-problems (leader election, log replication, safety) means each piece can be understood and verified independently. The strong leader model eliminates the complexity of multiple proposers competing.

## But Is Understandability Enough?

Raft trades flexibility for clarity. The strong leader requirement means:

- All client requests must go through the leader
- Leader failures require an election timeout before progress resumes
- Read-only operations still need leader involvement for linearizability

Multi-Paxos and EPaxos demonstrate that leaderless designs can achieve lower latency in geo-distributed settings. The question is whether we can design protocols that are both understandable *and* flexible.

## Composition as a Path Forward

I believe the answer is yes, through protocol composition. Instead of designing one monolithic consensus algorithm, we should design:

1. **A simple leader election protocol** (like Raft's)
2. **A simple log replication protocol** (like Raft's)
3. **A simple safety verification protocol** (independent checker)

Each component is small enough to be formally verified. The composition rules ensure that the combined system maintains safety. This approach has been explored in the Dafny verification of Raft, but I think we can go further -- make composition the primary design principle, not just a verification technique.

The future of distributed protocols isn't a better Paxos or a better Raft. It's a framework for composing simple, verifiable building blocks into complex, correct systems.
