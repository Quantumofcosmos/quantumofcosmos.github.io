---
id: cryptoshare
title: "CryptoShare"
tags:
  - Go
  - Cryptography
  - Secret Sharing
sourceUrl: "https://github.com/quantumofcosmos/cryptoshare"
featured: false
---

End-to-end encrypted file sharing using Shamir's Secret Sharing scheme. Files are split into shares that must be recombined to decrypt, with no single point of trust.

## Overview

CryptoShare addresses a fundamental problem in file sharing: how do you share a secret without trusting any single party? Traditional solutions rely on a trusted server or a single password. CryptoShare uses Shamir's Secret Sharing (SSS) to split the encryption key into multiple shares, distributed to different parties.

## How Shamir's Secret Sharing Works

SSS is based on polynomial interpolation: given a secret s, choose a random polynomial f(x) of degree t-1 such that f(0) = s. Evaluate f at n distinct non-zero points to create n shares. Any t shares can reconstruct f(x) via Lagrange interpolation and recover s = f(0). Fewer than t shares reveal no information about s.

For example, with t=3 and n=5 (a 3-of-5 scheme), the secret is split into 5 shares. Any 3 shares can reconstruct the secret. An adversary who holds 2 shares learns nothing.

## Architecture

- **Client**: CLI tool written in Go that handles file encryption, splitting, and reassembly
- **Share distribution**: Shares are stored on independent servers (S3, GCS, local filesystem, or any HTTP server)
- **Metadata**: A metadata file lists the share locations and the threshold t, but contains no secret material

## Security Properties

- **No single point of trust**: Compromising any single server reveals nothing
- **Forward secrecy**: Share files can be deleted after reassembly
- **Integrity verification**: Each share includes a MAC to detect tampering
- **Key rotation**: Re-share the secret with new shares to invalidate old ones

## Usage

```bash
# Split a file into 5 shares, requiring 3 to reconstruct
cryptoshare split --threshold 3 --shares 5 secret.txt

# Reconstruct from 3+ shares
cryptoshare reconstruct share1.json share2.json share3.json
```
