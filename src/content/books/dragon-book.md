---
id: dragon-book
title: "Compilers: Principles, Techniques, and Tools"
author: "Alfred Aho et al."
status: read
rating: 4
tags:
  - Compilers
  - Programming Languages
  - CS Theory
---

The definitive reference on compiler construction. Dense but comprehensive -- covers lexical analysis through code optimization with thorough formal treatment. Not a weekend read, but an essential reference. Best used as a textbook alongside a compiler project for hands-on reinforcement.

## Structure and Approach

The Dragon Book is organized in the traditional pipeline order: lexical analysis, parsing, semantic analysis, intermediate code generation, code optimization, and code generation. Each chapter is self-contained enough to serve as a reference, but the book is best read sequentially on first pass.

## Strengths

### Parsing Theory

The chapters on LL and LR parsing are the most thorough treatment available in a textbook. The formal treatment of parsing table construction, conflict resolution, and error recovery is indispensable if you're building a parser.

### Code Optimization

The optimization chapters cover the classic dataflow analysis framework (available expressions, live variables, reaching definitions) with enough mathematical rigor to be precise. The treatment of SSA form is relatively modern and well-integrated.

### Code Generation

The register allocation and instruction selection chapters are practical and grounded. The coverage of graph-coloring register allocation is particularly well done.

## Weaknesses

- **Dense**: The mathematical notation can be overwhelming on first reading
- **Limited modern topics**: JIT compilation, garbage collection, and type inference get relatively little coverage
- **Example language**: The examples use a simple C-like language, which limits the exploration of language features that complicate compilation (closures, pattern matching, type classes)

## How to Use It

Don't try to read it cover-to-cover without a project. Build a compiler for a small language (a calculator, then a simple functional language) and read the relevant chapters as you implement each phase. The theory becomes concrete when you're debugging a shift-reduce conflict in your own parser.
