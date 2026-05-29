---
id: practical-cryptography
title: "Serious Cryptography"
author: "Jean-Philippe Aumasson"
status: read
rating: 4
tags:
  - Cryptography
  - Security
  - Mathematics
---

The most accessible rigorous cryptography book available. Aumasson explains AES, SHA, elliptic curves, and TLS with just enough math to be precise without being impenetrable. The chapter on side-channel attacks is eye-opening. Paired with Real World Cryptography by Wong for a complete picture.

## What Sets It Apart

There are many cryptography books, but they tend to fall on a spectrum: either too mathematical (Stinson, Katz-Lindell) or too practical (Schneier's Applied Cryptography, which is now quite dated). Aumasson finds the sweet spot -- mathematically precise but always motivated by practical concerns.

## Highlights

### Block Ciphers and AES

The chapter on block ciphers provides the clearest explanation of AES's SubBytes-ShiftRows-MixColumns structure I've encountered. Aumasson explains *why* each step exists (confusion and diffusion) rather than just describing the algorithm.

### Hash Functions

The treatment of SHA-2 and SHA-3 is excellent, with clear explanations of the Merkle-Damgard construction (SHA-2) and the sponge construction (SHA-3). The comparison between the two approaches helps you understand why NIST standardized SHA-3 even though SHA-2 remains secure.

### Side-Channel Attacks

This chapter alone justifies the book. Aumasson covers timing attacks, cache attacks, power analysis, and fault attacks with concrete examples. The section on cache-timing attacks on AES is particularly relevant for practitioners.

### TLS 1.3

The TLS chapter covers version 1.3 in depth, including the simplified handshake and the removal of insecure legacy features. This is the most current treatment available in a textbook.

## Companion Reading

- *Real World Cryptography* (David Wong) for a more application-focused perspective
- *The Code Book* (Simon Singh) for historical context
- The original research papers for any specific topic you need to go deeper on
