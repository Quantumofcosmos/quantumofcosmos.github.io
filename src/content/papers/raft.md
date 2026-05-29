---
id: raft
title: "In Search of an Understandable Consensus Algorithm"
authors: "Diego Ongaro, John Ousterhout"
venue: USENIX ATC
year: 2014
dateRead: "2026-02-05"
tags:
  - Distributed Systems
  - Consensus
  - Algorithms
---

Presents Raft as an alternative to Paxos with a focus on understandability. Decomposes consensus into leader election, log replication, and safety. Strong leader model simplifies the protocol. The result is a consensus algorithm that is easier to teach and implement correctly than Paxos.

## The Problem with Paxos

Paxos is notoriously difficult to understand and implement correctly. The original paper uses a complex metaphor, and even the simplified explanation requires careful study. More importantly, there is no widely agreed-upon approach for practical multi-Paxos (replicated state machines) -- the details of log compaction, membership changes, and client interaction are left unspecified.

## Raft's Design Principles

Raft is designed around three principles:

1. **Problem decomposition**: Break consensus into independent sub-problems (leader election, log replication, membership changes, safety)
2. **Reducing state space**: Minimize the amount of state that must be considered to understand the protocol
3. **Strong leader**: Use a stronger form of leadership than Multi-Paxos to simplify log management

## Leader Election

Raft uses term-based leadership with randomized election timeouts. If a follower doesn't hear from the leader within the election timeout, it transitions to candidate, increments the current term, votes for itself, and requests votes from other servers. A candidate wins the election if it receives votes from a majority of servers within the same term.

Randomized timeouts reduce the likelihood of split votes. This is a pragmatic choice that trades determinism for simplicity -- the protocol is correct regardless of the timeout values, and the randomized approach works well in practice.

## Log Replication

The leader manages log replication unilaterally:

1. Client requests arrive at the leader, which appends them to its log
2. The leader sends AppendEntries RPCs to followers with the new entries
3. Once an entry is replicated on a majority of servers, the leader commits the entry
4. The leader notifies followers of committed entries in subsequent AppendEntries RPCs

The strong leader model means that followers never independently propose entries. This eliminates the complexity of conflicting proposals and ensures that the leader's log is always authoritative.

## Safety

Raft guarantees that if any server has applied a log entry at a given index, no other server will ever apply a different entry at that index. This is enforced by the election restriction: a candidate must have an up-to-date log to win an election. An up-to-date log means the candidate's log is at least as long as any other server's log, and its term numbers at the end are at least as high.
