---
id: mapreduce
title: "MapReduce: Simplified Data Processing on Large Clusters"
authors: "Jeffrey Dean, Sanjay Ghemawat"
venue: OSDI
year: 2004
dateRead: "2025-12-10"
tags:
  - Distributed Systems
  - Data Processing
  - Google
---

Introduces the MapReduce programming model for processing large datasets across clusters. The abstraction elegantly hides fault tolerance, data distribution, and load balancing from the programmer.

## Key Insight

Separating computation into map and reduce phases enables automatic parallelization and recovery. The programmer specifies *what* to compute; the runtime handles *how* to distribute it across thousands of machines.

## The Programming Model

The model is elegantly simple:

- **Map**: Process each input record independently, emitting intermediate key-value pairs
- **Reduce**: Group intermediate pairs by key, process each group to produce output

This two-function interface is restrictive but powerful. Many real-world data processing tasks fit naturally into this pattern:

- **Word count**: Map emits (word, 1) pairs; Reduce sums counts per word
- **Distributed grep**: Map emits matching lines; Reduce is the identity function
- **Web link inversion**: Map emits (target, source) pairs; Reduce collects sources per target

## Implementation Details

The runtime handles several critical concerns transparently:

1. **Data locality**: Map tasks are scheduled on machines that hold the input data, minimizing network transfer
2. **Fault tolerance**: Failed tasks are re-executed on other machines. Intermediate data is written to local disk and served to reduce workers via HTTP
3. **Load balancing**: Tasks are smaller than the number of machines, so faster workers naturally take on more work
4. **Backup execution**: Near the end of a phase, backup tasks are spawned for in-progress tasks to mitigate stragglers

## Impact

MapReduce transformed large-scale data processing at Google and inspired the open-source Hadoop ecosystem. While the programming model itself has been superseded by more flexible frameworks (Spark, Flink), the principles of automatic parallelization, fault tolerance, and data locality remain foundational.
