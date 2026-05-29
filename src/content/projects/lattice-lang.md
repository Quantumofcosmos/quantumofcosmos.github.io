---
id: lattice-lang
title: "Lattice Programming Language"
tags:
  - OCaml
  - LLVM
  - Compilers
sourceUrl: "https://github.com/quantumofcosmos/lattice"
featured: false
---

A small statically-typed functional language with algebraic data types, pattern matching, and an LLVM backend. Includes a REPL and a VS Code extension.

## Overview

Lattice is a programming language designed to explore the design space between minimal toy languages and production-grade compilers. It's large enough to demonstrate real compiler techniques but small enough to understand completely.

## Language Features

- **Algebraic data types**: Define types as sums of products, like Haskell or ML
- **Pattern matching**: Exhaustive and redundant pattern checking
- **Type inference**: Hindley-Milner type inference with let-polymorphism
- **First-class functions**: Closures, partial application, and higher-order functions
- **Modules**: Simple module system with signatures and implementations

## Compiler Pipeline

The compiler follows a traditional multi-pass architecture:

1. **Lexer/Parser**: Hand-written lexer, Menhir-generated parser (OCaml parser generator)
2. **Type checker**: Bidirectional type checking with unification-based inference
3. **IR generation**: Translation to an internal IR (CPS-based)
4. **Optimization**: Constant folding, dead code elimination, tail call optimization
5. **Code generation**: LLVM IR emission via the LLVM OCaml bindings

## REPL

The REPL supports incremental compilation:

- Type definitions and declarations are processed immediately
- Expressions are compiled to LLVM IR, JIT-compiled, and executed
- Results are pretty-printed with inferred types

## VS Code Extension

The extension provides:

- Syntax highlighting via TextMate grammar
- Go-to-definition and find-references via a language server
- Inline type annotations on hover
- Error diagnostics from the type checker
