# Slice 11 — Water Forecasting Platform Case Study

## Objective

Build the Water Forecasting Platform case study.

This project demonstrates:

* Machine Learning Engineering
* Data Engineering
* Time-Series Forecasting
* Large-Scale Data Processing
* Production Analytics

This is the second flagship project in the portfolio and should be presented at the same quality level as the AI Resume Pipeline case study.

---

# Required Context

Read:

docs/master-prd.md

Read all previous slices.

Reuse architecture established in Slice 10.

---

# Scope

Implement ONLY:

* Water Forecasting Platform case study page
* Forecasting architecture diagram
* Impact section
* Technology stack section

Do NOT implement:

* Other case studies
* Resume page
* Contact page

---

# Route

```text
/projects/water-forecasting-platform
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
Architecture
↓
Impact
↓
Engineering Highlights
↓
Technology Stack
↓
Next Project Navigation
```

---

# Hero Section

## Title

```text
Water Forecasting Platform
```

## Subtitle

```text
Machine learning forecasting system for PRASA infrastructure digitization.
```

## Metadata

Display badges:

```text
Production System

Machine Learning

Jacobs Engineering

2026
```

---

# Overview

Key points:

* Forecasted water tank levels
* Built for PRASA initiative
* Processed 22M+ records
* Covered 1,107 tanks
* Used AutoGluon forecasting
* Delivered operational dashboards

---

# Problem

Explain:

Water utilities needed improved visibility into future tank levels.

Challenges:

* Massive historical datasets
* Sensor noise
* Missing values
* Regional variation
* Forecast reliability

---

# Solution

Describe:

* Data ingestion
* PySpark processing
* Feature engineering
* AutoGluon model training
* Quantile forecasting
* Dashboard integration

Focus on engineering decisions.

---

# Architecture Diagram

Build using reusable architecture component.

Flow:

```text
SCADA Data
      ↓
PySpark Processing
      ↓
Feature Engineering
      ↓
AutoGluon Models
      ↓
Forecast Generation
      ↓
Operational Dashboard
```

---

# Impact Section

Display:

## Metric 1

```text
22M+
Records Processed
```

---

## Metric 2

```text
1,107
Water Tanks
```

---

## Metric 3

```text
56%
Forecasting Improvement
```

---

## Metric 4

```text
30+
Predictive Features Engineered
```

---

# Engineering Highlights

Display examples:

* Time-series forecasting
* Quantile prediction
* Feature engineering
* Residual analysis
* Data contamination detection
* Regional validation framework

---

# Technology Stack

Display badges:

```text
PySpark

Python

AutoGluon

Machine Learning

Time-Series Forecasting

Palantir Foundry

SCADA Data
```

---

# Content Source

All content should come from:

```text
content/projects.ts
```

Expand the project model if necessary.

---

# Navigation

Bottom CTA:

```text
Next Case Study →
```

Destination:

```text
/projects/onboardos
```

---

# Animation Requirements

Reuse established animation patterns.

Allowed:

* Section reveals
* Diagram reveal
* Metric reveal

Maintain consistency with Slice 10.

---

# Accessibility Requirements

Requirements:

* Semantic HTML
* Proper heading hierarchy
* Accessible diagram structure
* Keyboard accessibility

---

# Deliverables

Create:

```text
app/projects/water-forecasting-platform/page.tsx
```

Reuse:

```text
ArchitectureDiagram

ImpactGrid
```

created in previous slice.

---

# Explicitly Out Of Scope

Do NOT build:

OnboardOS

Resume page

Contact page

Other case studies

---

# Acceptance Criteria

The slice is complete when:

* Route renders correctly.
* Architecture diagram renders.
* Impact metrics render.
* Content comes from content layer.
* Responsive behavior works.
* Accessibility requirements are met.
* Visual quality matches AI Resume Pipeline case study.
