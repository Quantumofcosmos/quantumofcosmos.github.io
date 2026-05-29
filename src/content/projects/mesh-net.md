---
id: mesh-net
title: "Mesh Network Visualizer"
tags:
  - Three.js
  - WebRTC
  - D3.js
liveUrl: "https://mesh-net.example.com"
featured: false
---

A 3D force-directed graph renderer for visualizing network topologies and message routing in peer-to-peer mesh networks.

## Overview

Understanding mesh network behavior is difficult without visualization. This tool provides a real-time 3D view of a mesh network, showing nodes, links, and message flow as they happen.

## Features

- **3D force-directed layout**: Nodes are positioned using a physics simulation that minimizes edge crossings while keeping connected nodes close
- **Real-time updates**: Network events (node join/leave, message routing) are reflected immediately
- **Message tracing**: Visualize the path of individual messages through the network with animated trails
- **Topology statistics**: Display network diameter, average path length, and clustering coefficient

## Technical Details

The visualizer connects to a mesh network via a WebSocket bridge:

- **Three.js** renders the 3D graph with GPU-accelerated instanced rendering for nodes and edges
- **D3-force-3d** computes the force-directed layout in a Web Worker to avoid blocking the main thread
- **WebRTC data channels** provide real-time network state updates

## Future Work

- Support for overlay network visualization
- Network simulation mode (simulate failures, partitions, and recovery)
- Export network topology as JSON or GraphML
