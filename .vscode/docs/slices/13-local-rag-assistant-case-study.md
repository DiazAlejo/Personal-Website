# Slice 13 — Local RAG Assistant Case Study

## Objective

Build the Local RAG Assistant case study.

This project demonstrates:

* LLM Engineering
* Retrieval-Augmented Generation (RAG)
* Local AI Infrastructure
* Docker & Deployment
* API Design

This case study should showcase your ability to build AI systems end-to-end without relying on hosted AI services.

---

# Required Context

Read:

docs/master-prd.md

Read all previous slices.

Reuse the established case-study framework.

---

# Scope

Implement ONLY:

* Local RAG Assistant case study page
* RAG architecture visualization
* Engineering highlights
* Technology stack section
* Outcomes section

Do NOT implement:

* Resume page
* Contact page
* Other project pages

---

# Route

```text
/projects/local-rag-assistant
```

---

# Page Structure

```text
Hero
↓
Overview
↓
Problem
↓
Solution
↓
RAG Architecture
↓
Engineering Highlights
↓
Technology Stack
↓
Project Outcomes
↓
Next Project Navigation
```

---

# Hero Section

## Title

```text
Local RAG Assistant
```

## Subtitle

```text
Private document intelligence powered by local LLMs and retrieval-augmented generation.
```

## Metadata

Display badges:

```text
AI

RAG

Docker

Personal Project

2025
```

---

# Overview

Key points:

* Fully local deployment
* Document ingestion pipeline
* Embedding-based retrieval
* Ollama-powered inference
* Docker containerization
* REST API access

---

# Problem

Organizations often need:

* Private AI systems
* Offline operation
* Sensitive document access
* No external API dependency
* Reproducible deployments

Many hosted AI solutions do not satisfy these requirements.

---

# Solution

Describe:

* Document ingestion
* Chunking pipeline
* Embedding generation
* Vector retrieval
* Context assembly
* LLM response generation
* REST API layer

Focus on architecture and engineering decisions.

---

# RAG Architecture Diagram

Build using reusable architecture components.

Flow:

```text
Documents
      ↓
Chunking
      ↓
Embeddings
      ↓
Vector Store
      ↓
Retriever
      ↓
Ollama LLM
      ↓
Answer Generation
```

Requirements:

* Responsive
* Accessible
* Consistent with previous diagrams

---

# Project Outcomes

Display:

## Outcome 1

```text
100%
Local Inference
```

---

## Outcome 2

```text
Dockerized
Deployment
```

---

## Outcome 3

```text
REST API
Integration
```

---

## Outcome 4

```text
Private
Document Search
```

---

# Engineering Highlights

Examples:

* Retrieval-Augmented Generation
* Vector search
* Embedding pipelines
* Prompt construction
* Docker deployment
* Local inference architecture

---

# Technology Stack

Display badges:

```text
Python

Docker

Ollama

RAG

REST API

Vector Search

LLMs
```

---

# Content Source

All content must come from:

```text
content/projects.ts
```

Maintain strong typing.

---

# Navigation

Bottom CTA:

```text
Back to Projects →
```

Destination:

```text
/projects
```

---

# Animation Requirements

Reuse patterns established in previous case studies.

Consistency is more important than creativity.

---

# Accessibility Requirements

Requirements:

* Semantic HTML
* Accessible diagram
* Proper heading structure
* Keyboard support

---

# Deliverables

Create:

```text
app/projects/local-rag-assistant/page.tsx
```

Reuse architecture components.

Avoid duplication.

---

# Explicitly Out Of Scope

Do NOT build:

Resume page

Contact page

New homepage sections

Additional project pages

---

# Acceptance Criteria

The slice is complete when:

* Route renders correctly.
* RAG diagram renders.
* Outcomes section renders.
* Content comes from content layer.
* Responsive behavior works.
* Accessibility requirements are met.
* Design remains consistent with all previous case studies.
