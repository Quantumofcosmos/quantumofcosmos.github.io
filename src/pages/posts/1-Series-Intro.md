---
layout: ../../layouts/MarkdownPostLayout.astro
title: "Diving into GNU Core Utils"
pubDate: 2025-10-27
description: "Motivation behind the core utils blog series."
author: "Venkat Yandapalli"
tags: ["GNU", "CoreUtils", "learning in public"]
---

## What is GNU Coreutils

The GNU Core Utilities (often shortened to coreutils) are the fundamental building blocks of the Unix and Linux command-line environment.

Coreutils is a collection of numerous programs grouped broadly into three categories:

1. **File utilities**: manage files and directories (`cp`, `mv`,`rm`,`ls`,`mkdir`,`touch`, etc.)

2. **Text utilities**: manipulate or analyze text data (`cat`, `sort`, `uniq`, `tr`, `cut`, etc.)

3. **Shell utilities** — handle shell and user-level operations (`date`,`who`,`id`,`uname`, etc.)

Collectively, they form the backbone of majority of the Linux operations

## What sparked this series

Starting version 25.10 (Noble Numbat), Ubuntu is aggressively pushing Rust-based reimplemetation of coreutils. While there has been a considerable backlash against the departure from `C` based, battle-tested utils and numerous bugs being reported, it made me realize how solid the implementation of the original coreutils was and how I work with these tools regularly, but have no idea of their internals.


## What's next

With this series, I aim to go through each util and document its working, starting with file utilities.
