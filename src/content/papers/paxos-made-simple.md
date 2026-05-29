---
id: paxos-made-simple
title: "Paxos Made Simple"
authors: "Leslie Lamport"
venue: ACM Sigact News
year: 2001
dateRead: "2025-11-22"
tags:
  - Distributed Systems
  - Consensus
  - Algorithms
---

A clearer explanation of the Paxos consensus algorithm. Lamport walks through the protocol step by step, showing how it guarantees safety (no two values chosen) and liveness (a value is eventually chosen). The key insight is that consensus can be achieved even with message loss and process failures.

## Why This Paper Matters

The original Paxos paper ("The Part-Time Parliament") was famously difficult to understand, written as a fictional archaeological account of a parliamentary protocol. "Paxos Made Simple" is Lamport's attempt to explain the same algorithm clearly and directly.

## The Protocol

Paxos achieves consensus through a two-phase protocol:

### Phase 1: Prepare

A proposer chooses a proposal number n and sends a prepare request with number n to all acceptors. An acceptor responds to a prepare request with number n only if it has not yet responded to a prepare request with a number greater than n. If the acceptor has already accepted a proposal, it includes that proposal in its response.

### Phase 2: Accept

If the proposer receives responses from a majority of acceptors, it can now issue an accept request with number n and a value v, where v is the value from the highest-numbered proposal among the responses (or any value if no proposals were reported). An acceptor accepts an accept request with number n only if it has not responded to a prepare request with a number greater than n.

## Safety Proof

The safety property (no two values are chosen) follows from a key invariant: if a proposal with number n and value v is chosen, then any higher-numbered proposal also has value v. This is maintained by the prepare phase, which forces proposers to learn about previously accepted values before proposing new ones.

## Liveness

Liveness requires that a value is eventually chosen if enough processes are alive and communicating. The basic protocol can deadlock if two proposers continuously issue increasing proposal numbers. In practice, this is resolved by electing a single "distinguished proposer" (making Paxos equivalent to Multi-Paxos with a stable leader).

## Practical Considerations

- **Multi-Paxos**: For a sequence of values, the prepare phase can be skipped after the first instance if the leader is stable
- **Learners**: The protocol as described only guarantees that acceptors know the chosen value. Learners must be informed, typically through the leader broadcasting the result
- **Membership changes**: The basic protocol assumes a fixed set of acceptors. Handling membership changes requires additional mechanisms
