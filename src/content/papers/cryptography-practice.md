---
id: cryptography-practice
title: "Practical Cryptography for Developers"
authors: "Nadia Heninger et al."
venue: ACM CCS
year: 2020
dateRead: "2026-03-12"
tags:
  - Cryptography
  - Security
  - Software Engineering
---

A systematic study of cryptographic misuse in real-world applications. Analyzes thousands of open-source projects and finds prevalent patterns of insecure randomness, hardcoded keys, and misconfigured TLS. Provides concrete guidelines for developers to avoid common pitfalls.

## Methodology

The authors analyzed 1,786 open-source projects across multiple languages (Java, Python, Go, JavaScript, C/C++) using static analysis to detect cryptographic misuse patterns. They also surveyed 201 developers about their cryptographic knowledge and practices.

## Key Findings

### Insecure Randomness

The most common misuse: 43% of projects that use randomness for cryptographic purposes use non-cryptographic PRNGs (`Math.random()`, `rand()`, `random.random()`). These are predictable and render any security guarantees void.

### Hardcoded Keys

17% of projects contain hardcoded cryptographic keys in source code. These keys cannot be rotated without a code change and are exposed to anyone with access to the repository (including public repositories).

### Weak Hash Functions

31% of projects use MD5 or SHA-1 for security-sensitive purposes. While these functions are still acceptable for non-security use cases (checksums, data indexing), they are broken for collision resistance and should not be used for passwords, signatures, or certificates.

### TLS Misconfiguration

28% of projects that use TLS have misconfigured settings, including:

- Disabled certificate verification
- Use of TLS 1.0 or 1.1 (deprecated)
- Weak cipher suites (RC4, DES, 3DES)
- Missing certificate pinning for sensitive connections

## Developer Survey Results

The developer survey revealed a significant knowledge gap:

- 67% of developers could not correctly identify the properties of authenticated encryption
- 54% did not know that AES-ECB is insecure
- 78% could not describe the difference between encryption and hashing

## Recommendations

The paper makes several practical recommendations:

1. **Use high-level APIs** that make the secure path the easy path (libsodium, Tink, Web Crypto API)
2. **Run automated checks** as part of CI/CD pipelines to detect common misuse patterns
3. **Deprecate insecure APIs** in standard libraries rather than maintaining backward compatibility
4. **Provide concrete examples** in documentation rather than abstract descriptions
