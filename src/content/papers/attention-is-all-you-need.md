---
id: attention-is-all-you-need
title: "Attention Is All You Need"
authors: "Ashish Vaswani et al."
venue: NeurIPS
year: 2017
dateRead: "2026-01-15"
tags:
  - Machine Learning
  - Transformers
  - NLP
---

Introduces the Transformer architecture based entirely on self-attention mechanisms, dispensing with recurrence and convolutions entirely. Multi-head attention allows the model to attend to different representation subspaces. Remarkably parallelizable training and state-of-the-art results on translation tasks.

## The Key Innovation

Before Transformers, the dominant sequence models were recurrent (LSTM, GRU) or convolutional. Both have fundamental limitations:

- **Recurrent models**: Sequential processing prevents parallelization. Long-range dependencies are hard to learn due to vanishing gradients.
- **Convolutional models**: Fixed kernel size limits the range of dependencies that can be captured.

The Transformer replaces both with self-attention, which computes interactions between *all* pairs of positions in O(n²) time. While the quadratic cost is a limitation for very long sequences, the parallelizability makes training dramatically faster on modern hardware.

## Architecture

The Transformer consists of an encoder and decoder, each composed of stacked layers:

### Encoder

Each layer has two sub-layers:
1. **Multi-head self-attention**: Computes attention over the entire input sequence
2. **Position-wise feed-forward network**: Applied independently to each position

Each sub-layer has residual connections and layer normalization.

### Decoder

Each layer has three sub-layers:
1. **Masked multi-head self-attention**: Prevents attending to future positions
2. **Multi-head attention over encoder output**: Attends to the source sequence
3. **Position-wise feed-forward network**

## Multi-Head Attention

Instead of performing a single attention function, the Transformer runs multiple attention heads in parallel, each with different learned projection matrices. The outputs are concatenated and linearly projected. This allows the model to jointly attend to information from different representation subspaces at different positions.

## Positional Encoding

Since the model contains no recurrence or convolution, it has no notion of position. Positional encodings are added to the input embeddings to inject positional information. The paper uses sinusoidal encodings, which allow the model to extrapolate to sequence lengths longer than those seen in training.

## Results

The Transformer achieved state-of-the-art results on English-to-German and English-to-French translation while requiring significantly less training time than previous models. The parallelizability of self-attention was a key factor -- the model could fully utilize modern GPU/TPU hardware.
