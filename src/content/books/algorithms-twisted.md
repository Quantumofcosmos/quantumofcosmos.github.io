---
id: algorithms-twisted
title: "The Algorithm Design Manual"
author: "Steven Skiena"
status: reading
rating: 0
tags:
  - Algorithms
  - Problem Solving
  - CS Theory
---

Skiena's war stories are what set this apart from CLRS. Real-world problem framing before diving into formalism makes the algorithms stick. Currently on graph algorithms and dynamic programming. The catalog of algorithmic problems at the back is an incredibly practical reference.

## Why This Over CLRS

CLRS is the standard algorithms textbook, and it's excellent for what it is: a rigorous mathematical treatment of algorithms. But it's also abstract and disconnected from the messy reality of applying algorithms to real problems.

Skiena takes the opposite approach. Every algorithm is motivated by a real problem. The "war stories" are first-person accounts of consulting engagements where algorithm design made the difference. They're entertaining, educational, and they teach you to *think* like an algorithm designer rather than just memorize algorithms.

## The War Stories

The war stories are the highlight of the book. Some examples:

- **Escaping a speeding ticket**: Using geometry and optimization to argue that a police officer's speed measurement was unreliable
- **Estimating the size of a political rally**: Using sampling and statistical estimation
- **Designing a winning poker strategy**: Using combinatorial game theory and expected value calculations

Each war story illustrates a different algorithmic technique in a context where the problem is real, the constraints are messy, and the solution requires creativity.

## The Algorithm Catalog

The second half of the book is a catalog of algorithmic problems organized by type. For each problem, Skiena provides:

- A description of the problem
- The input format
- The output format
- Known efficient solutions with references
- Discussion of trade-offs and alternatives

This is the most practical section of the book. When you encounter a problem that might have an algorithmic solution, you can look it up in the catalog and quickly find relevant algorithms and references.

## Progress

Currently working through the graph algorithms chapter (BFS, DFS, topological sort, shortest paths, minimum spanning trees). Next up: dynamic programming, which Skiena approaches through the lens of recurrence relations and memoization rather than the "table-filling" approach of CLRS.
