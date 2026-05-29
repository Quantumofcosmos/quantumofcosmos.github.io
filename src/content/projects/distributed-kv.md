---
id: distributed-kv
title: "Distributed KV Store"
tags:
  - Rust
  - Raft
  - Distributed Systems
sourceUrl: "https://github.com/quantumofcosmos/distributed-kv"
featured: true
---

A fault-tolerant distributed key-value store implementing Raft consensus, supporting linearizable reads and multi-region replication with automatic failover.

## Overview

Building a correct distributed key-value store is one of the best ways to understand distributed systems fundamentals. This project implements Raft consensus from scratch and uses it as the foundation for a linearizable key-value store.

## Architecture

The store is composed of nodes that communicate via RPC:

- **Raft layer**: Implements leader election, log replication, and commit handling per the Raft specification
- **KV layer**: A state machine that applies committed log entries to the key-value store
- **Client layer**: A linearizable client that redirects requests to the current leader and handles leadership changes

## Raft Implementation

The Raft implementation follows the Ongaro-Ousterhout paper closely:

- **Leader election**: Term-based elections with randomized timeouts
- **Log replication**: Leader-driven replication with consistency checks
- **Safety**: Election restriction ensures committed entries are never lost
- **Membership changes**: Supports joint-consensus configuration changes

### Linearizable Reads

Linearizable reads require that a read sees the most recently committed write. The implementation uses the "read index" approach:

1. Client sends a read request to the leader
2. Leader records the current commit index
3. Leader sends heartbeats to a majority of followers to confirm it's still the leader
4. Leader waits until the state machine has applied up to the commit index
5. Leader returns the result

## Performance

Benchmark results on a 5-node cluster (c5.large instances):

- **Write throughput**: ~10,000 ops/sec (1 KB values)
- **Read throughput**: ~50,000 ops/sec (linearizable reads)
- **Write latency (p99)**: ~15ms
- **Read latency (p99)**: ~5ms

## Future Work

- Multi-region deployment with cross-region replication
- Lease-based reads for lower read latency
- Snapshot compaction for long-running clusters
- TTL-based key expiration
