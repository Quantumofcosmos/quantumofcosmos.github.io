---
id: quantum-sim
title: "Quantum Circuit Simulator"
tags:
  - TypeScript
  - WebGL
  - Quantum Computing
liveUrl: "https://quantum-sim.example.com"
sourceUrl: "https://github.com/quantumofcosmos/quantum-sim"
featured: true
---

A browser-based quantum circuit simulator that renders and executes quantum gates on qubits, with real-time state vector visualization and probability distributions.

## Overview

Quantum computing is notoriously difficult to learn because the mathematics of quantum mechanics is complex and counterintuitive. This simulator provides an interactive, visual way to explore quantum circuits without needing to install specialized software.

## Features

- **Drag-and-drop circuit editor**: Place gates (Hadamard, CNOT, Pauli X/Y/Z, T, S) onto qubit wires
- **Real-time state vector**: Shows the full quantum state after each gate application
- **Probability distribution**: Displays measurement probabilities for each basis state
- **Step-by-step execution**: Step through the circuit gate by gate to understand how the state evolves

## Technical Architecture

The simulator is built as a pure TypeScript application with WebGL rendering for the visualization layer. The quantum state is represented as a complex-valued vector of length 2^n, where n is the number of qubits. Each gate is represented as a unitary matrix that is multiplied into the state vector.

### Performance Considerations

The state vector grows exponentially with the number of qubits (2^n complex numbers). The simulator currently supports up to 12 qubits (4096-dimensional state vector) before performance degrades. For larger simulations, techniques like sparse state representation and GPU-accelerated matrix multiplication would be needed.

### Rendering Pipeline

The circuit diagram and state vector visualization are rendered using WebGL for smooth performance. The probability distribution is displayed as a bar chart with interactive tooltips showing exact values.

## Future Work

- Support for custom unitary gates
- Bloch sphere visualization for single-qubit states
- Entanglement entropy display
- Export circuits as QASM
