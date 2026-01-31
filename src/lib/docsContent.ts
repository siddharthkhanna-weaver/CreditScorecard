export const docTitles: Record<string, string> = {
  "Scorecard_Quick_Reference_Tables.md": "Quick Reference Tables",
  "Cohort_Movement_Tracker_Template.md": "Cohort Movement Tracker",
  "Crosstab_Cohort_Framework.md": "Crosstab Cohort Framework",
  "Housing_Finance_Applicant_Evaluation_Scorecard_Research.md": "Scorecard Research Detail",
  "Income_Imputation_Bureau_Only.md": "Bureau Based Income",
  "Income_Imputation_Bureau_Plus_BankStatement.md": "Bureau & Banking Based Income"
};

export const docsContent: Record<string, string> = {};

docsContent["Cohort_Movement_Tracker_Template.md"] = `# Cohort Movement Tracker - Operational Template

## 1. Master Crosstab Matrix (Visual)

\`\`\`
                              BUREAU SCORE (CIBIL)
              ┌─────────────────────────────────────────────────────────────────┐
              │    B1      │    B2      │    B3      │    B4      │    B5      │    NTC     │
              │   750+     │  700-749   │  650-699   │  600-649   │   <600     │  No Score  │
┌─────────────┼────────────┼────────────┼────────────┼────────────┼────────────┼────────────┤
│             │            │            │            │            │            │            │
│ A1 (80-100) │   🟢 G     │   🟢 G     │   🟡 A     │   🟡 A     │   🔴 R     │   🟡 A     │
│   Strong    │  [Auto]    │  [Auto]    │  [Review]  │  [Review]  │ [Decline]  │  [Review]  │
│             │            │            │   TEST→G   │            │   TEST→A   │   TEST→G?  │
├─────────────┼────────────┼────────────┼────────────┼────────────┼────────────┼────────────┤
│             │            │            │            │            │            │            │
│ A2 (65-79)  │   🟢 G     │   🟡 A     │   🟡 A     │   🟡 A     │   🔴 R     │   🟡 A     │
│    Good     │  [Auto]    │  [Review]  │  [Review]  │  [Review]  │ [Decline]  │  [Review]  │
│             │            │   TEST→G   │            │            │   TEST→A   │            │
├─────────────┼────────────┼────────────┼────────────┼────────────┼────────────┼────────────┤
│             │            │            │            │            │            │            │
│ A3 (50-64)  │   🟡 A     │   🟡 A     │   🟡 A     │   🔴 R     │   🔴 R     │   🔴 R     │
│  Moderate   │  [Review]  │  [Review]  │  [Review]  │ [Decline]  │ [Decline]  │ [Decline]  │
│             │   TEST→G   │            │            │   TEST→A   │            │   TEST→A   │
├─────────────┼────────────┼────────────┼────────────┼────────────┼────────────┼────────────┤
│             │            │            │            │            │            │            │
│ A4 (35-49)  │   🟡 A     │   🟡 A     │   🔴 R     │   🔴 R     │   🔴 R     │   🔴 R     │
│    Weak     │  [Review]  │  [Review]  │ [Decline]  │ [Decline]  │ [Decline]  │ [Decline]  │
│             │            │            │            │            │            │            │
├─────────────┼────────────┼────────────┼────────────┼────────────┼────────────┼────────────┤
│             │            │            │            │            │            │            │
│ A5 (<35)    │   🔴 R     │   🔴 R     │   🔴 R     │   🔴 R     │   🔴 R     │   🔴 R     │
│    Poor     │ [Decline]  │ [Decline]  │ [Decline]  │ [Decline]  │ [Decline]  │ [Decline]  │
│             │            │            │            │            │            │            │
└─────────────┴────────────┴────────────┴────────────┴────────────┴────────────┴────────────┘

Legend: 🟢 G = GREEN (Auto-Approve)  |  🟡 A = AMBER (Review)  |  🔴 R = RED (Decline)
        TEST→G = Candidate for AMBER→GREEN test  |  TEST→A = Candidate for RED→AMBER test
\`\`\`

---

## 2. Monthly Experiment Tracker

### Active Experiments - January 2026

| Experiment ID | Cell | Movement | Start Date | Cases | Cap | MOB | Status |
|---------------|------|----------|------------|-------|-----|-----|--------|
| AMBER-TO-GREEN-0126-01 | A1-B3 | AMBER→GREEN | 01-Jan-26 | 0 | 60 | 0 | NEW |
| AMBER-TO-GREEN-0126-02 | A2-B2 | AMBER→GREEN | 01-Jan-26 | 0 | 60 | 0 | NEW |
| AMBER-TO-GREEN-0126-03 | A3-B1 | AMBER→GREEN | 01-Jan-26 | 0 | 30 | 0 | NEW |
| RED-TO-AMBER-0126-01 | A3-NTC | RED→AMBER | 01-Jan-26 | 0 | 37 | 0 | NEW |
| RED-TO-AMBER-0126-02 | A3-B4 | RED→AMBER | 01-Jan-26 | 0 | 23 | 0 | NEW |
| RED-TO-AMBER-0126-03 | A1-B5 | RED→AMBER | 01-Jan-26 | 0 | 15 | 0 | NEW |

### Experiment Status Legend
- **NEW**: Just started, acquiring cases
- **ACTIVE**: Ongoing acquisition + tracking
- **PAUSED**: Acquisition stopped, tracking continues
- **REVIEW**: Under decision review (Month 3 or 6)
- **CLOSED-PASS**: Experiment successful, cohort moved
- **CLOSED-FAIL**: Experiment failed, cohort retained

---

## 3. Monthly Acquisition Log

### Month: January 2026

| Date | Experiment ID | Cases Added | Cumulative | Remaining Cap |
|------|---------------|-------------|------------|---------------|
| Week 1 | AMBER-TO-GREEN-0126-01 | 15 | 15 | 45 |
| Week 1 | AMBER-TO-GREEN-0126-02 | 12 | 12 | 48 |
| Week 1 | RED-TO-AMBER-0126-01 | 8 | 8 | 29 |
| Week 2 | ... | ... | ... | ... |
| **TOTAL** | | | | |

---

## 4. Performance Tracking Template

### MOB-wise Performance Dashboard

#### Experiment: AMBER-TO-GREEN-0126-01 (Cell A1-B3)

| MOB | Cases | DPD 0 | DPD 1-30 | DPD 31-60 | DPD 61-90 | DPD 90+ | NPA | Benchmark |
|-----|-------|-------|----------|-----------|-----------|---------|-----|-----------|
| 1 | 60 | 58 (97%) | 2 (3%) | 0 | 0 | 0 | 0 | DPD30: 2% |
| 2 | 60 | 57 (95%) | 2 (3%) | 1 (2%) | 0 | 0 | 0 | DPD30: 3% |
| 3 | 60 | 56 (93%) | 3 (5%) | 1 (2%) | 0 | 0 | 0 | DPD30: 3% |
| 4 | 60 | | | | | | | |
| 5 | 60 | | | | | | | |
| 6 | 60 | | | | | | | |

**Status:** 🟢 On Track / 🟡 Watch / 🔴 Alert

---

## 5. Monthly Review Checklist

### Pre-Review Data Preparation
- [ ] Pull DPD data for all experimental cohorts
- [ ] Calculate KPIs (DPD 30+, 60+, 90+, NPA)
- [ ] Compare against benchmarks
- [ ] Identify statistical significance
- [ ] Prepare vintage curves
- [ ] Document anomalies/outliers

### Review Meeting Agenda
- [ ] Review each active experiment
- [ ] Discuss early warning signals
- [ ] Recommend cap adjustments
- [ ] Decide on Month 3/6 cohorts
- [ ] Plan next month's experiments
- [ ] Document decisions

### Post-Review Actions
- [ ] Update experiment status
- [ ] Adjust caps in system
- [ ] Communicate changes to operations
- [ ] Update production matrix (if approved)
- [ ] Archive closed experiments

---

## 6. Decision Matrix Template

### Month 6 Decision - Experiment: AMBER-TO-GREEN-0126-01

| Criteria | Target | Actual | Variance | Pass/Fail |
|----------|--------|--------|----------|-----------|
| DPD 30+ Rate | ≤2.0% | 1.8% | -0.2% | ✅ PASS |
| DPD 60+ Rate | ≤1.0% | 0.7% | -0.3% | ✅ PASS |
| DPD 90+ Rate | ≤0.5% | 0.3% | -0.2% | ✅ PASS |
| NPA Rate | ≤0.3% | 0.2% | -0.1% | ✅ PASS |
| Sample Size | ≥100 | 180 | - | ✅ PASS |
| Statistical Significance | p<0.05 | p=0.03 | - | ✅ PASS |

**Overall Decision:** ✅ MOVE TO GREEN

**Approvals Required:**
- [ ] Risk Analytics Head
- [ ] Credit Policy Head
- [ ] Chief Risk Officer

---

## 7. Escalation Triggers

### Immediate Escalation (Within 24 hours)

| Trigger | Threshold | Action |
|---------|-----------|--------|
| FPD Spike | >5% in any experiment | Pause acquisition, escalate to CRO |
| Fraud Detection | Any confirmed fraud | Immediate review of selection criteria |
| Bounce Rate | >10% in first EMI | Pause + deep dive |

### Weekly Escalation

| Trigger | Threshold | Action |
|---------|-----------|--------|
| DPD 30+ | >1.5× benchmark | Reduce cap by 50% |
| SPD | >3% | Tighten selection criteria |
| Collection Efficiency | <90% | Review underwriting quality |

### Monthly Escalation

| Trigger | Threshold | Action |
|---------|-----------|--------|
| Cumulative DPD 90+ | >benchmark + 1% | Consider experiment termination |
| Trend Deterioration | 3 consecutive months | Review continuation |

---

## 8. Communication Templates

### New Experiment Launch - Email Template

\`\`\`
Subject: Launch of Experimental Cohort [EXPERIMENT_ID]

Dear Team,

We are launching a new experimental cohort effective [DATE].

Details:
- Experiment ID: [ID]
- Movement: [AMBER→GREEN / RED→AMBER]
- Cell: [CELL]
- Monthly Cap: [X] cases
- Duration: 6 months + review

Selection Criteria:
[List criteria]

Please ensure proper tagging in the system.

Regards,
Credit Policy Team
\`\`\`

### Experiment Closure - Email Template

\`\`\`
Subject: Closure of Experimental Cohort [EXPERIMENT_ID] - [PASS/FAIL]

Dear Team,

Experimental cohort [ID] has completed its 6-month observation period.

Result: [PASS - Move to [COHORT] / FAIL - Retain original cohort]

Key Findings:
- DPD 30+: [X%] vs target [Y%]
- DPD 90+: [X%] vs target [Y%]
- Sample size: [N]

Action:
[Production matrix updated / No changes required]

Effective Date: [DATE]

Regards,
Credit Policy Team
\`\`\`

---

## 9. System Configuration Checklist

### Decision Engine Rules

- [ ] Crosstab matrix logic implemented
- [ ] Cohort assignment rules configured
- [ ] Experiment cohort tagging enabled
- [ ] Cap enforcement logic active
- [ ] Randomization for test selection
- [ ] Audit trail for all decisions

### Reporting System

- [ ] Cohort performance dashboard
- [ ] Experiment tracking reports
- [ ] Early warning alerts configured
- [ ] Benchmark comparison views
- [ ] Vintage curve generation
- [ ] Export functionality

### Data Warehouse

- [ ] Cohort tagging fields added
- [ ] Historical performance linkage
- [ ] MOB calculation logic
- [ ] Benchmark data tables
- [ ] Experiment metadata tables

---

## 10. Key Metrics Quick Reference

### Performance Benchmarks (Illustrative)

| Cohort | DPD 30+ | DPD 60+ | DPD 90+ | NPA |
|--------|---------|---------|---------|-----|
| GREEN | 1.5% | 0.8% | 0.4% | 0.2% |
| AMBER | 3.0% | 1.5% | 0.8% | 0.5% |
| RED (if approved) | 5.0% | 2.5% | 1.5% | 1.0% |

### Tolerance Levels for Experiments

| Movement | Acceptable Variance | Watch Zone | Fail Zone |
|----------|--------------------| -----------|-----------|
| AMBER→GREEN | ≤ +0.3% vs GREEN | +0.3% to +0.5% | > +0.5% |
| RED→AMBER | ≤ +0.5% vs AMBER | +0.5% to +1.0% | > +1.0% |

---

*Operational Tracker Template - January 2026*
*Update monthly with actual data*
`;

docsContent["Crosstab_Cohort_Framework.md"] = `# Application Scorecard × Bureau Score Crosstab Framework
## Green-Amber-Red Cohort System with Experimental Movement

**Date:** January 2026
**Purpose:** Define cohort classification, experimental movement rules, and performance tracking

---

## Table of Contents

1. [Framework Overview](#framework-overview)
2. [Crosstab Matrix Design](#crosstab-matrix-design)
3. [Cohort Definitions](#cohort-definitions)
4. [Experimental Movement Framework](#experimental-movement-framework)
5. [Capped Acquisition Rules](#capped-acquisition-rules)
6. [Performance Tracking Methodology](#performance-tracking-methodology)
7. [Decision Rules for Cohort Movement](#decision-rules-for-cohort-movement)
8. [Governance & Reporting](#governance--reporting)
9. [Implementation Roadmap](#implementation-roadmap)

---

## Framework Overview

### Concept

\`\`\`
┌─────────────────────────────────────────────────────────────────┐
│                    DECISION MATRIX                               │
│                                                                  │
│   Bureau Score (CIBIL)  ×  Application Scorecard  →  Cohort     │
│                                                                  │
│   ┌─────────┐    ┌─────────┐    ┌─────────────────────────┐     │
│   │ External │ +  │ Internal │ =  │ GREEN / AMBER / RED     │     │
│   │ Credit   │    │ Risk     │    │ Decision & Treatment    │     │
│   └─────────┘    └─────────┘    └─────────────────────────┘     │
└─────────────────────────────────────────────────────────────────┘
\`\`\`

### Key Principles

1. **Dual-axis evaluation** - No single score determines outcome
2. **Clear decision rules** - Minimize subjectivity
3. **Controlled experimentation** - Test policy changes with limited exposure
4. **Performance-based evolution** - Data drives cohort boundary adjustments
5. **Risk containment** - Capped exposure to experimental cohorts

---

## Crosstab Matrix Design

### Axis Definitions

#### X-Axis: Bureau Score (CIBIL) Bands

| Band | CIBIL Range | Description |
|------|-------------|-------------|
| B1 | 750+ | Excellent |
| B2 | 700-749 | Good |
| B3 | 650-699 | Fair |
| B4 | 600-649 | Below Average |
| B5 | <600 | Poor |
| NTC | No Score | New to Credit |

#### Y-Axis: Application Scorecard Bands

| Band | Score Range | Description |
|------|-------------|-------------|
| A1 | 80-100 | Strong Application |
| A2 | 65-79 | Good Application |
| A3 | 50-64 | Moderate Application |
| A4 | 35-49 | Weak Application |
| A5 | <35 | Poor Application |

### Master Crosstab Matrix

\`\`\`
                        BUREAU SCORE (CIBIL)
                 ┌───────┬───────┬───────┬───────┬───────┬───────┐
                 │  B1   │  B2   │  B3   │  B4   │  B5   │  NTC  │
                 │ 750+  │700-749│650-699│600-649│ <600  │No Scr │
    ┌────────────┼───────┼───────┼───────┼───────┼───────┼───────┤
    │ A1 (80-100)│ GREEN │ GREEN │ AMBER │ AMBER │  RED  │ AMBER │
A   ├────────────┼───────┼───────┼───────┼───────┼───────┼───────┤
P   │ A2 (65-79) │ GREEN │ AMBER │ AMBER │ AMBER │  RED  │ AMBER │
P   ├────────────┼───────┼───────┼───────┼───────┼───────┼───────┤
L   │ A3 (50-64) │ AMBER │ AMBER │ AMBER │  RED  │  RED  │  RED  │
    ├────────────┼───────┼───────┼───────┼───────┼───────┼───────┤
S   │ A4 (35-49) │ AMBER │ AMBER │  RED  │  RED  │  RED  │  RED  │
C   ├────────────┼───────┼───────┼───────┼───────┼───────┼───────┤
O   │ A5 (<35)   │  RED  │  RED  │  RED  │  RED  │  RED  │  RED  │
R   └────────────┴───────┴───────┴───────┴───────┴───────┴───────┘
E
\`\`\`

### Matrix Cell Reference

| Cell ID | App Score | Bureau | Cohort | Cell Description |
|---------|-----------|--------|--------|------------------|
| A1-B1 | 80-100 | 750+ | GREEN | Best-in-class |
| A1-B2 | 80-100 | 700-749 | GREEN | Strong overall |
| A1-B3 | 80-100 | 650-699 | AMBER | Strong app, fair bureau |
| A1-B4 | 80-100 | 600-649 | AMBER | Strong app, weak bureau |
| A1-B5 | 80-100 | <600 | RED | Strong app, poor bureau |
| A1-NTC | 80-100 | No Score | AMBER | Strong app, no history |
| A2-B1 | 65-79 | 750+ | GREEN | Good overall |
| A2-B2 | 65-79 | 700-749 | AMBER | Good, needs review |
| A2-B3 | 65-79 | 650-699 | AMBER | Moderate risk |
| A2-B4 | 65-79 | 600-649 | AMBER | Elevated risk |
| A2-B5 | 65-79 | <600 | RED | High risk |
| A2-NTC | 65-79 | No Score | AMBER | Good app, no history |
| A3-B1 | 50-64 | 750+ | AMBER | Moderate app, strong bureau |
| A3-B2 | 50-64 | 700-749 | AMBER | Moderate both |
| A3-B3 | 50-64 | 650-699 | AMBER | Borderline |
| A3-B4 | 50-64 | 600-649 | RED | High risk |
| A3-B5 | 50-64 | <600 | RED | Very high risk |
| A3-NTC | 50-64 | No Score | RED | Moderate app, no history |
| A4-B1 | 35-49 | 750+ | AMBER | Weak app, strong bureau |
| A4-B2 | 35-49 | 700-749 | AMBER | Weak app, good bureau |
| A4-B3 | 35-49 | 650-699 | RED | Both weak |
| A4-B4 | 35-49 | 600-649 | RED | High risk |
| A4-B5 | 35-49 | <600 | RED | Very high risk |
| A4-NTC | 35-49 | No Score | RED | Weak app, no history |
| A5-* | <35 | Any | RED | Poor application |

---

## Cohort Definitions

### GREEN Cohort (Auto-Approve)

**Definition:** Applications that meet all criteria for automatic approval without manual underwriter intervention.

| Attribute | Specification |
|-----------|---------------|
| Decision | Auto-Approve |
| Processing Time | Same day / Next day |
| Manual Review | Not required |
| Deviation | Not applicable |
| Documentation | Standard checklist only |
| Pricing | Best available rates |

**Eligible Cells:** A1-B1, A1-B2, A2-B1

**Approval Conditions:**
- All documents verified (automated/API)
- No fraud flags triggered
- Property valuation within norms
- No negative list matches

---

### AMBER Cohort (Underwriter Review)

**Definition:** Applications requiring detailed underwriter assessment before decision.

| Attribute | Specification |
|-----------|---------------|
| Decision | Manual Review Required |
| Processing Time | 2-5 business days |
| Manual Review | Mandatory deep-dive |
| Deviation | Possible with approval authority |
| Documentation | Enhanced documentation |
| Pricing | Risk-adjusted (may be higher) |

**Eligible Cells:** A1-B3, A1-B4, A1-NTC, A2-B2, A2-B3, A2-B4, A2-NTC, A3-B1, A3-B2, A3-B3, A4-B1, A4-B2

**Review Focus Areas:**
- Income stability deep-dive
- Employment verification
- Property legal due diligence
- Compensating factors assessment
- Deviation justification (if any)

**Sub-Categories within AMBER:**

| Sub-Category | Cells | Review Intensity |
|--------------|-------|------------------|
| AMBER-Light | A1-B3, A2-B2, A3-B1 | Standard review |
| AMBER-Standard | A1-B4, A2-B3, A3-B2, A4-B1 | Enhanced review |
| AMBER-Deep | A1-NTC, A2-B4, A2-NTC, A3-B3, A4-B2 | Comprehensive review |

---

### RED Cohort (Decline)

**Definition:** Applications that do not meet minimum risk appetite criteria.

| Attribute | Specification |
|-----------|---------------|
| Decision | Decline |
| Processing Time | Immediate |
| Manual Review | Not required |
| Deviation | Not permitted |
| Re-application | After 6 months with improved profile |
| Communication | Adverse action notice required |

**Eligible Cells:** A1-B5, A2-B5, A3-B4, A3-B5, A3-NTC, A4-B3, A4-B4, A4-B5, A4-NTC, A5-*

**Hard Decline Triggers (Override Matrix):**
- Fraud confirmed
- Active default/NPA
- Legal proceedings
- Blacklisted entity
- Failed identity verification

---

## Experimental Movement Framework

### Concept: Champion-Challenger for Credit Policy

\`\`\`
┌─────────────────────────────────────────────────────────────────────┐
│                    EXPERIMENTAL MOVEMENT FLOW                        │
│                                                                      │
│  MONTH N                          MONTH N+6                          │
│  ┌─────┐                          ┌─────┐                           │
│  │ RED │ ──(Test)──> AMBER* ──────│Track│──> Permanent AMBER?       │
│  └─────┘             (Capped)     │Perf │    or Revert to RED       │
│                                   └─────┘                           │
│  ┌───────┐                        ┌─────┐                           │
│  │ AMBER │ ──(Test)──> GREEN* ────│Track│──> Permanent GREEN?       │
│  └───────┘             (Capped)   │Perf │    or Revert to AMBER     │
│                                   └─────┘                           │
│                                                                      │
│  * Experimental cohorts with capped monthly acquisition              │
└─────────────────────────────────────────────────────────────────────┘
\`\`\`

### Movement Types

#### Type 1: AMBER → GREEN (Upgrade Test)

**Objective:** Identify AMBER cells that can be safely moved to GREEN

**Candidate Cells for Testing:**
| Cell | Current | Test To | Priority | Rationale |
|------|---------|---------|----------|-----------|
| A1-B3 | AMBER | GREEN* | High | Strong app, fair bureau |
| A2-B2 | AMBER | GREEN* | High | Good combination |
| A3-B1 | AMBER | GREEN* | Medium | Strong bureau compensates |

**Selection Criteria for Test Population:**
- Random selection from eligible cell
- No additional risk flags
- Complete documentation
- Standard property type

---

#### Type 2: RED → AMBER (Expansion Test)

**Objective:** Identify RED cells that may be viable with underwriter review

**Candidate Cells for Testing:**
| Cell | Current | Test To | Priority | Rationale |
|------|---------|---------|----------|-----------|
| A1-B5 | RED | AMBER* | Low | Strong app may compensate |
| A3-B4 | RED | AMBER* | Medium | Borderline, worth testing |
| A3-NTC | RED | AMBER* | High | NTC with moderate app |

**Selection Criteria for Test Population:**
- First-time homebuyer preference
- Salaried with stable employer
- Property in Tier-1/2 city
- No past delinquency (for NTC, verify other obligations)

---

### Experimental Cohort Naming Convention

\`\`\`
[Original Cohort]-TO-[Test Cohort]-[MMYY]-[Batch]

Examples:
- AMBER-TO-GREEN-0126-01  (First batch, Jan 2026)
- RED-TO-AMBER-0126-01    (First batch, Jan 2026)
- AMBER-TO-GREEN-0226-02  (Second batch, Feb 2026)
\`\`\`

---

## Capped Acquisition Rules

### Monthly Cap Structure

| Movement Type | Monthly Cap (Count) | Monthly Cap (% of Total) | Max Outstanding Exposure |
|---------------|---------------------|--------------------------|--------------------------|
| AMBER → GREEN | 100-200 cases | 2-3% of monthly volume | 5% of portfolio |
| RED → AMBER | 50-100 cases | 1-2% of monthly volume | 2% of portfolio |

### Cap Calculation Example

\`\`\`
Monthly Disbursement Volume: 5,000 cases

AMBER → GREEN Test:
- Monthly cap: 150 cases (3%)
- After 6 months: Max 900 cases in observation

RED → AMBER Test:
- Monthly cap: 75 cases (1.5%)
- After 6 months: Max 450 cases in observation
\`\`\`

### Cap Allocation by Cell

| Cell | Movement | Allocation % | Monthly Cases (of cap) |
|------|----------|--------------|------------------------|
| A1-B3 | AMBER→GREEN | 40% | 60 |
| A2-B2 | AMBER→GREEN | 40% | 60 |
| A3-B1 | AMBER→GREEN | 20% | 30 |
| **Total** | | **100%** | **150** |

| Cell | Movement | Allocation % | Monthly Cases (of cap) |
|------|----------|--------------|------------------------|
| A3-NTC | RED→AMBER | 50% | 37 |
| A3-B4 | RED→AMBER | 30% | 23 |
| A1-B5 | RED→AMBER | 20% | 15 |
| **Total** | | **100%** | **75** |

### Dynamic Cap Adjustment

\`\`\`
IF early_warning_signals > threshold THEN
    Reduce cap by 50%

IF Month_3_performance significantly_worse THEN
    Pause new acquisition
    Continue tracking existing

IF Month_3_performance better_than_expected THEN
    Consider 25% cap increase (with approval)
\`\`\`

---

## Performance Tracking Methodology

### Tracking Timeline

\`\`\`
Month 0    Month 1    Month 2    Month 3    Month 4    Month 5    Month 6    Decision
  │          │          │          │          │          │          │            │
  ▼          ▼          ▼          ▼          ▼          ▼          ▼            ▼
┌────┐    ┌────┐    ┌────┐    ┌────┐    ┌────┐    ┌────┐    ┌────┐    ┌──────────┐
│Disb│───>│Track───>│Track───>│Review───>│Track───>│Track───>│Review───>│Final    │
│urs │    │MOB1 │    │MOB2 │    │MOB3  │    │MOB4 │    │MOB5 │    │MOB6  │    │Decision │
└────┘    └────┘    └────┘    └────┘    └────┘    └────┘    └────┘    └──────────┘
                              │                              │
                              ▼                              ▼
                         Interim                        Final
                         Review                         Review
\`\`\`

### Key Performance Indicators (KPIs)

#### Primary Metrics

| Metric | Definition | Target (AMBER→GREEN) | Target (RED→AMBER) |
|--------|------------|---------------------|-------------------|
| DPD 30+ Rate | % accounts 30+ days past due | ≤ GREEN benchmark + 0.5% | ≤ AMBER benchmark + 1% |
| DPD 60+ Rate | % accounts 60+ days past due | ≤ GREEN benchmark + 0.3% | ≤ AMBER benchmark + 0.5% |
| DPD 90+ Rate | % accounts 90+ days past due | ≤ GREEN benchmark + 0.2% | ≤ AMBER benchmark + 0.3% |
| NPA Rate | % accounts classified NPA | ≤ GREEN benchmark + 0.1% | ≤ AMBER benchmark + 0.2% |

#### Secondary Metrics

| Metric | Definition | Tracking Frequency |
|--------|------------|-------------------|
| First Payment Default (FPD) | Default on 1st EMI | Monthly |
| Second Payment Default (SPD) | Default on 2nd EMI | Monthly |
| Early Month Delinquency (EMD) | DPD in first 3 months | Monthly |
| Bounce Rate | EMI bounce % | Monthly |
| Collection Efficiency | Amount collected / Amount due | Monthly |
| Prepayment Rate | Early closure % | Quarterly |
| Restructuring Rate | Cases restructured % | Quarterly |

### Benchmark Comparison Framework

\`\`\`
┌─────────────────────────────────────────────────────────────────┐
│                    PERFORMANCE COMPARISON                        │
│                                                                  │
│  Test Cohort Performance vs. Three Benchmarks:                  │
│                                                                  │
│  1. Target Cohort Benchmark                                     │
│     AMBER→GREEN test vs. existing GREEN performance             │
│     RED→AMBER test vs. existing AMBER performance               │
│                                                                  │
│  2. Original Cohort Benchmark                                   │
│     Compare to what performance would be in original cohort     │
│                                                                  │
│  3. Portfolio Benchmark                                         │
│     Compare to overall portfolio performance                    │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
\`\`\`

### Tracking Dashboard Structure

| Dimension | Metrics Tracked |
|-----------|-----------------|
| By Cohort | All KPIs segmented by experimental cohort |
| By Cell | Performance by specific matrix cell |
| By Vintage | MOB-wise performance curves |
| By Month | Trend analysis over time |
| By Geography | Regional performance variation |
| By Ticket Size | Loan amount band analysis |

---

## Decision Rules for Cohort Movement

### Month 3 Interim Review

| Scenario | Observation | Action |
|----------|-------------|--------|
| Green Signal | DPD 30+ ≤ target | Continue acquisition |
| Yellow Signal | DPD 30+ = target + 0.5% to 1% | Reduce cap by 50%, monitor closely |
| Red Signal | DPD 30+ > target + 1% | Stop new acquisition, track existing |
| Critical | FPD/SPD > 2× benchmark | Immediate stop, escalate to Risk Committee |

### Month 6 Final Decision

#### For AMBER → GREEN Test

| Performance | Decision | Implementation |
|-------------|----------|----------------|
| **Outperform**: Better than GREEN benchmark | Permanent GREEN | Move cell to GREEN in production matrix |
| **Meet**: Within tolerance of GREEN benchmark | Permanent GREEN | Move cell with enhanced monitoring |
| **Marginal**: 0.5-1% worse than benchmark | Extended Test | Continue 3 more months with reduced cap |
| **Fail**: >1% worse than benchmark | Revert to AMBER | Cell remains AMBER, close experiment |

#### For RED → AMBER Test

| Performance | Decision | Implementation |
|-------------|----------|----------------|
| **Outperform**: Better than AMBER benchmark | Permanent AMBER | Move cell to AMBER in production matrix |
| **Meet**: Within tolerance of AMBER benchmark | Permanent AMBER with conditions | Move with enhanced underwriting criteria |
| **Marginal**: 0.5-1% worse than benchmark | Extended Test | Continue 3 more months, tighter selection |
| **Fail**: >1% worse than benchmark | Revert to RED | Cell remains RED, close experiment |

### Statistical Significance Check

Before making permanent decisions:

\`\`\`
Minimum Sample Size per Cell: 100 cases
Minimum MOB: 6 months
Statistical Test: Chi-square or proportion test
Confidence Level: 95%
Power: 80%

Decision valid only if:
- Sample size sufficient for statistical power
- Performance difference is statistically significant
- Trend is consistent (not volatile)
\`\`\`

### Cohort Degradation Rules

**When to Move Cohort Backward:**

| Trigger | From | To | Condition |
|---------|------|-----|-----------|
| Portfolio Stress | GREEN | AMBER | Overall NPA > threshold for 3 months |
| Cell Deterioration | GREEN | AMBER | Cell DPD 90+ > 2× historical for 3 months |
| Economic Downturn | All | One level down | Macro indicators trigger |
| Fraud Spike | Specific cells | One level down | Fraud rate > 2× in cell |

---

## Governance & Reporting

### Committee Structure

\`\`\`
┌─────────────────────────────────────────────────────────────────┐
│                    GOVERNANCE HIERARCHY                          │
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │                    BOARD / RISK COMMITTEE                 │   │
│  │  - Annual policy approval                                │   │
│  │  - Major cohort changes                                  │   │
│  │  - Portfolio risk appetite                               │   │
│  └──────────────────────────────────────────────────────────┘   │
│                              │                                   │
│                              ▼                                   │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │               CREDIT POLICY COMMITTEE (Monthly)           │   │
│  │  - Review experimental cohort performance                 │   │
│  │  - Approve/reject cohort movements                       │   │
│  │  - Adjust caps and selection criteria                    │   │
│  └──────────────────────────────────────────────────────────┘   │
│                              │                                   │
│                              ▼                                   │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │              UNDERWRITING REVIEW TEAM (Weekly)            │   │
│  │  - Monitor early warning signals                         │   │
│  │  - Flag exceptions                                       │   │
│  │  - Operational feedback                                  │   │
│  └──────────────────────────────────────────────────────────┘   │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
\`\`\`

### Reporting Calendar

| Report | Frequency | Audience | Content |
|--------|-----------|----------|---------|
| Early Warning Dashboard | Daily | Risk Ops | FPD, SPD, bounce alerts |
| Cohort Performance Report | Weekly | Underwriting Head | KPIs by cohort |
| Experimental Cohort Review | Monthly | Credit Policy Committee | Full analysis + recommendations |
| Portfolio Risk Report | Monthly | CRO / Risk Committee | Strategic view |
| Board Risk Report | Quarterly | Board | Executive summary |

### Monthly Report Template

\`\`\`
EXPERIMENTAL COHORT MONTHLY REPORT - [Month/Year]

1. EXECUTIVE SUMMARY
   - Total cases in experiment: [X]
   - Performance vs benchmark: [Summary]
   - Recommended actions: [List]

2. AMBER → GREEN EXPERIMENTS

   | Cell | Vintage | Cases | DPD30+ | DPD60+ | DPD90+ | Benchmark | Status |
   |------|---------|-------|--------|--------|--------|-----------|--------|
   | A1-B3| MOB 4   | 180   | 1.2%   | 0.5%   | 0.2%   | 1.0%      | AMBER  |
   | A2-B2| MOB 3   | 150   | 0.8%   | 0.3%   | 0.0%   | 1.0%      | GREEN  |

3. RED → AMBER EXPERIMENTS

   | Cell | Vintage | Cases | DPD30+ | DPD60+ | DPD90+ | Benchmark | Status |
   |------|---------|-------|--------|--------|--------|-----------|--------|
   | A3-NTC| MOB 2  | 75    | 2.5%   | 1.0%   | 0.0%   | 2.0%      | AMBER  |

4. RECOMMENDATIONS
   - Continue/Pause/Stop for each experiment
   - Cap adjustments
   - Selection criteria changes

5. NEXT MONTH PLAN
   - New cells to test
   - Updated caps
\`\`\`

---

## Implementation Roadmap

### Phase 1: Foundation (Month 1-2)

| Task | Owner | Deliverable |
|------|-------|-------------|
| Finalize scoring bands | Risk Analytics | Band definitions document |
| Build crosstab matrix | Risk Analytics | Production matrix |
| Define cohort rules | Credit Policy | Policy document |
| System configuration | Technology | Decision engine setup |
| Reporting framework | BI Team | Dashboard & reports |

### Phase 2: Pilot (Month 3-4)

| Task | Owner | Deliverable |
|------|-------|-------------|
| Launch GREEN/AMBER/RED | Operations | Production go-live |
| Manual tracking | Risk Ops | Weekly reports |
| Fine-tune thresholds | Risk Analytics | Adjusted matrix |
| Document learnings | Credit Policy | Pilot review |

### Phase 3: Experimentation Launch (Month 5-6)

| Task | Owner | Deliverable |
|------|-------|-------------|
| Identify test cells | Credit Policy | Test plan |
| Set up tracking cohorts | Technology | Cohort tagging |
| Begin AMBER→GREEN test | Operations | First batch |
| Begin RED→AMBER test | Operations | First batch |
| Monthly governance | Risk Committee | Review cadence |

### Phase 4: Steady State (Month 7+)

| Task | Owner | Deliverable |
|------|-------|-------------|
| Monthly cohort additions | Operations | Ongoing acquisition |
| 6-month reviews | Credit Policy | Decision recommendations |
| Matrix evolution | Risk Analytics | Updated production matrix |
| Continuous improvement | All | Refined framework |

---

## Appendix: Sample Data Structures

### Cohort Tagging Schema

\`\`\`sql
-- Application table fields for cohort tracking
application_id          VARCHAR(20)
app_scorecard_score     DECIMAL(5,2)
app_scorecard_band      VARCHAR(2)      -- A1, A2, A3, A4, A5
bureau_score            INT
bureau_band             VARCHAR(3)      -- B1, B2, B3, B4, B5, NTC
matrix_cell             VARCHAR(10)     -- A1-B1, A2-B3, etc.
base_cohort             VARCHAR(10)     -- GREEN, AMBER, RED
experiment_cohort       VARCHAR(30)     -- AMBER-TO-GREEN-0126-01
experiment_flag         BOOLEAN
experiment_start_date   DATE
cohort_decision_date    DATE
final_cohort            VARCHAR(10)
\`\`\`

### Performance Tracking Table

\`\`\`sql
-- Monthly performance snapshot
application_id          VARCHAR(20)
snapshot_date           DATE
mob                     INT             -- Months on book
dpd_current             INT
dpd_max                 INT
dpd_30_flag             BOOLEAN
dpd_60_flag             BOOLEAN
dpd_90_flag             BOOLEAN
npa_flag                BOOLEAN
emi_due                 DECIMAL(12,2)
emi_received            DECIMAL(12,2)
bounce_count            INT
prepaid_flag            BOOLEAN
restructured_flag       BOOLEAN
\`\`\`

---

*Crosstab Cohort Framework - January 2026*
*Version 1.0*
`;

docsContent["Housing_Finance_Applicant_Evaluation_Scorecard_Research.md"] = `# Housing Finance Applicant Evaluation Scorecard
## Comprehensive Research Document

**Date:** January 2026
**Purpose:** Product Manager Reference for Building an Applicant Evaluation Scorecard

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Core Scorecard Components](#core-scorecard-components)
3. [The Five C's of Credit](#the-five-cs-of-credit)
4. [Detailed Scorecard Variables](#detailed-scorecard-variables)
5. [Credit Bureau Integration](#credit-bureau-integration)
6. [Alternative Data Sources](#alternative-data-sources)
7. [Fraud Detection Components](#fraud-detection-components)
8. [Property & Collateral Assessment](#property--collateral-assessment)
9. [Regulatory Compliance](#regulatory-compliance)
10. [Scorecard Development Methodology](#scorecard-development-methodology)
11. [AI/ML Integration](#aiml-integration)
12. [India-Specific Considerations](#india-specific-considerations)
13. [Risk Tiers & Pricing](#risk-tiers--pricing)
14. [Implementation Recommendations](#implementation-recommendations)
15. [Sources](#sources)

---

## Executive Summary

A housing finance applicant evaluation scorecard is a statistically-derived decision support tool that evaluates borrower creditworthiness, predicts default probability, and standardizes loan approval decisions. Modern scorecards combine traditional credit metrics with alternative data, fraud detection, and increasingly, machine learning algorithms.

**Key Objectives:**
- Predict probability of default (PD) and loss given default (LGD)
- Standardize underwriting decisions across all applicants
- Optimize risk-based pricing
- Ensure regulatory compliance and fair lending
- Reduce manual underwriting effort while maintaining quality

---

## Core Scorecard Components

### 1. Borrower Profile Assessment

| Component | Variables | Weight Range |
|-----------|-----------|--------------|
| Credit History | Credit score, payment history, delinquencies | 25-35% |
| Income & Capacity | DTI, FOIR, income stability | 20-30% |
| Employment | Tenure, stability, industry risk | 10-15% |
| Collateral | LTV, property type, location | 15-25% |
| Demographics | Age, residence stability | 5-10% |

### 2. Decision Outputs

- **Accept/Approve**: Loan proceeds with standard terms
- **Refer**: Manual underwriter review required
- **Decline**: Does not meet minimum criteria

---

## The Five C's of Credit

### 1. Character
- Credit history and payment behavior
- Past defaults, bankruptcies, settlements
- Credit utilization patterns
- Length of credit history

### 2. Capacity
- Debt-to-Income Ratio (DTI)
- Fixed Obligation to Income Ratio (FOIR)
- Residual income after obligations
- Income stability and growth trajectory

### 3. Capital
- Down payment amount
- Savings and liquid assets
- Investment portfolio
- Ability to weather financial stress

### 4. Collateral
- Property value vs. loan amount (LTV)
- Property type and marketability
- Location and demand factors
- Title clarity and legal status

### 5. Conditions
- Loan purpose (purchase, refinance, construction)
- Economic conditions
- Industry/employment sector outlook
- Interest rate environment

---

## Detailed Scorecard Variables

### A. Credit Bureau Variables

#### Primary Credit Score
| Score Range | Risk Category | Typical Action |
|-------------|---------------|----------------|
| 750+ | Excellent | Auto-approve eligible |
| 700-749 | Good | Standard approval |
| 650-699 | Fair | Higher scrutiny, pricing adjustment |
| 580-649 | Poor | High down payment required |
| Below 580 | Very Poor | Likely decline |

**India (CIBIL Score):**
- 750+: Ideal for home loan approval
- 700-749: Good, may get approval with scrutiny
- 650-699: Fair, higher interest rates
- Below 650: Challenging, may require co-applicant

#### Credit History Depth
- **Optimal**: 7+ years of credit history
- **Acceptable**: 3-7 years
- **Thin file**: Less than 3 years (consider alternative data)

#### Payment History (35% of FICO)
- Number of on-time payments
- Number and severity of late payments (30, 60, 90+ days)
- Collections, charge-offs, bankruptcies
- Time since last derogatory event

#### Credit Utilization (30% of FICO)
- Credit utilization ratio (target: <30%)
- Individual account utilization
- Total revolving debt vs. limits

#### Credit Mix (10% of FICO)
- Secured vs. unsecured loan mix
- Types of credit accounts
- Higher secured loan ratio = positive indicator

#### New Credit Inquiries (10% of FICO)
- Number of hard inquiries in last 12 months
- Rate shopping behavior (multiple mortgage inquiries)

---

### B. Income & Employment Variables

#### Income Assessment
| Variable | Scoring Criteria |
|----------|------------------|
| Primary Income | Gross monthly/annual salary |
| Secondary Income | Bonus, commission, overtime (2-year average) |
| Other Income | Rental, investment, pension, alimony |
| Income Trend | Increasing (+), Stable (neutral), Declining (-) |

#### Employment Stability
| Tenure | Score Impact |
|--------|--------------|
| 5+ years same employer | High positive |
| 2-5 years | Positive |
| 1-2 years | Neutral |
| Less than 1 year | Requires compensating factors |
| Employment gaps >6 months | Negative (needs explanation) |

#### Self-Employment Considerations
- Business vintage (2+ years preferred)
- ITR filed and consistency
- Business cash flow analysis
- Industry risk assessment

#### Income Verification Methods
1. Pay stubs (most recent 30 days)
2. W-2/Form 16 (last 2 years)
3. Tax returns (2-3 years for self-employed)
4. Bank statements (6-12 months)
5. Employer verification letter
6. Third-party verification services (The Work Number)

---

### C. Debt-to-Income (DTI) Ratios

#### Front-End DTI (Housing Ratio)
\`\`\`
Front-End DTI = (Monthly Housing Expenses / Gross Monthly Income) × 100

Housing Expenses include:
- Principal & Interest (P&I)
- Property taxes
- Homeowners insurance
- HOA fees
- Mortgage insurance (if applicable)
\`\`\`

**Thresholds:**
- Ideal: ≤28%
- Acceptable: 28-31%
- Maximum (with compensating factors): 31-36%

#### Back-End DTI (Total Debt Ratio)
\`\`\`
Back-End DTI = (All Monthly Debt Payments / Gross Monthly Income) × 100

All Debts include:
- Proposed mortgage payment
- Existing loan EMIs
- Credit card minimum payments
- Auto loans
- Student loans
- Alimony/child support
\`\`\`

**Thresholds by Loan Type:**

| Loan Type | Maximum DTI |
|-----------|-------------|
| Conventional (manual) | 36% (45% with strong factors) |
| Conventional (AUS) | Up to 50% |
| FHA | 43% (up to 57% with AUS approval) |
| VA | No hard cap (41% benchmark) |

---

### D. Fixed Obligation to Income Ratio (FOIR) - India Specific

\`\`\`
FOIR = (Total Monthly Fixed Obligations / Gross Monthly Income) × 100

Fixed Obligations include:
- All existing loan EMIs
- Proposed home loan EMI
- Credit card dues
- Other recurring obligations
\`\`\`

**FOIR Thresholds (India):**

| FOIR Range | Assessment |
|------------|------------|
| Below 40% | Excellent - High approval probability |
| 40-50% | Good - Standard processing |
| 50-55% | Fair - Additional scrutiny |
| 55-65% | Marginal - Strong compensating factors needed |
| Above 65% | High risk - Likely decline or co-applicant required |

---

### E. Loan-to-Value (LTV) Ratio

\`\`\`
LTV = (Loan Amount / Appraised Property Value) × 100
\`\`\`

**LTV Risk Tiers:**

| LTV Range | Risk Level | Typical Requirements |
|-----------|------------|---------------------|
| ≤60% | Very Low | Best rates, minimal documentation |
| 61-75% | Low | Favorable terms |
| 76-80% | Moderate | Standard terms |
| 81-90% | Elevated | Mortgage insurance required |
| 91-95% | High | PMI + higher rates |
| >95% | Very High | Limited availability |

**India Typical LTV Limits:**
- Loans up to ₹30 lakhs: Up to 90% LTV
- Loans ₹30-75 lakhs: Up to 80% LTV
- Loans above ₹75 lakhs: Up to 75% LTV

---

### F. Demographic & Stability Variables

#### Age Factor
| Age Group | Consideration |
|-----------|---------------|
| 21-35 | Maximum tenure available (up to 30 years) |
| 36-45 | Standard tenure, higher income typically |
| 46-55 | Reduced tenure, verify retirement income |
| 56-65 | Short tenure, strong income verification needed |
| 65+ | Special assessment, pension/retirement income |

**Key Constraint:** Loan maturity age typically capped at 60-70 years

#### Residence Stability
- Years at current address
- Owned vs. rented accommodation
- Frequency of address changes

#### Family Status
- Number of dependents
- Co-applicant availability
- Joint income consideration

---

## Credit Bureau Integration

### India Credit Bureaus
1. **TransUnion CIBIL** - Most widely used
2. **Experian India**
3. **Equifax India**
4. **CRIF High Mark**

### Data Points Retrieved
- Credit score
- Active loans and credit lines
- Payment history (36-84 months)
- Enquiry history
- Defaults, settlements, write-offs
- DPD (Days Past Due) history

### Multi-Bureau Strategy
- Pull from all four bureaus
- Use lowest median score for conservative assessment
- Cross-verify for data completeness
- Flag discrepancies for review

---

## Alternative Data Sources

### Traditional Data Limitations
- 45 million Americans have thin/no credit files
- Disproportionately affects young, immigrant, and low-income populations
- Credit history alone doesn't capture full financial picture

### Alternative Data Types

| Data Type | Source | Predictive Value |
|-----------|--------|------------------|
| Utility Payments | Electric, gas, water bills | Medium |
| Rent Payments | Landlord verification, rent platforms | High |
| Telecom Payments | Mobile, internet bills | Medium |
| Bank Transactions | Cash flow, spending patterns | High |
| Insurance Payments | Auto, health premiums | Medium |
| Education History | Degree, institution | Low-Medium |
| Social/Professional | LinkedIn, employment verification | Low |

### Open Banking/Account Aggregator Data (India)
- Real-time bank statement analysis
- Transaction categorization
- Income pattern verification
- Expense analysis
- Savings behavior assessment

### Benefits of Alternative Data
- 20-30% increase in approval rates with maintained risk levels
- Better assessment of thin-file applicants
- Real-time income verification
- Improved fraud detection

---

## Fraud Detection Components

### Types of Mortgage Fraud

1. **Identity Fraud**
   - Stolen identity
   - Synthetic identity (fabricated from real data)
   - Identity manipulation

2. **Income Fraud**
   - Inflated income documentation
   - Fake employment verification
   - Fabricated bank statements

3. **Asset Fraud**
   - Undisclosed liabilities
   - Inflated asset values
   - Gift fund misrepresentation

4. **Property Fraud**
   - Inflated appraisals
   - Property flipping schemes
   - Occupancy misrepresentation

### Fraud Detection Variables

| Check | Method |
|-------|--------|
| Identity Verification | KYC, Aadhaar/PAN validation, biometric |
| Document Authentication | AI-powered document analysis, metadata checks |
| Income Verification | Third-party databases, bank statement analysis |
| Employment Verification | Direct employer contact, HR databases |
| Property Verification | Physical inspection, title search |
| Behavioral Analysis | Application velocity, IP analysis |

### Fraud Scoring Integration
- Real-time fraud score calculation
- Red flag triggers for manual review
- Integration with industry fraud databases
- Continuous monitoring through loan lifecycle

---

## Property & Collateral Assessment

### Property Valuation Methods

1. **Full Appraisal**
   - Licensed appraiser site visit
   - Comparable sales analysis
   - Property condition assessment
   - Most thorough but time-consuming

2. **Desktop Appraisal**
   - Remote valuation using data
   - Property records and AVMs
   - Faster, lower cost

3. **Automated Valuation Model (AVM)**
   - Algorithm-based valuation
   - Uses comparable sales data
   - Instant results

4. **Hybrid Appraisal**
   - Combination of desktop + drive-by/photos
   - Balance of speed and accuracy

### Property Risk Factors

| Factor | Risk Assessment |
|--------|-----------------|
| Property Type | Single family (lowest) → Multi-family → Condo → Land (highest) |
| Location | Urban (lower) vs. Rural (higher) |
| Marketability | Days on market, demand in area |
| Condition | New/Excellent → Good → Fair → Poor |
| Title Status | Clear → Encumbrances → Disputes |
| Builder/Developer | Approved vs. Unapproved |

### Collateral Scoring Components
- Loan-to-Value ratio
- Combined LTV (if multiple mortgages)
- Property type risk factor
- Location/market risk factor
- Title and legal risk factor

---

## Regulatory Compliance

### Fair Lending (US - ECOA/Regulation B)

**Prohibited Bases for Discrimination:**
- Race, color, national origin
- Religion
- Sex, marital status
- Age (with exceptions for credit scoring)
- Receipt of public assistance
- Exercise of consumer rights

**Scorecard Compliance Requirements:**
- No prohibited variables in model
- Disparate impact testing
- Model documentation and validation
- Adverse action notices

### India Regulatory Framework

**RBI Guidelines:**
- Fair Practices Code for lenders
- KYC/AML compliance
- Interest rate transparency
- Grievance redressal mechanism

**NHB Requirements:**
- Board-approved credit policies
- Credit Information Company membership
- Mandatory credit bureau data submission
- Asset classification norms

### Model Governance
- Regular model validation (annual minimum)
- Champion-challenger testing
- Documentation of model decisions
- Audit trail maintenance

---

## Scorecard Development Methodology

### Weight of Evidence (WoE) Transformation

\`\`\`
WoE = ln(% of Non-Events / % of Events)

Where:
- Non-Events = Good customers (non-defaulters)
- Events = Bad customers (defaulters)
\`\`\`

**Interpretation:**
- Positive WoE → Lower risk
- Negative WoE → Higher risk
- WoE centered around zero

### Information Value (IV)

\`\`\`
IV = Σ ((% of Events - % of Non-Events) × WoE)
\`\`\`

**IV Interpretation:**

| IV Range | Predictive Power |
|----------|------------------|
| < 0.02 | Not useful |
| 0.02 - 0.1 | Weak predictor |
| 0.1 - 0.3 | Medium predictor |
| 0.3 - 0.5 | Strong predictor |
| > 0.5 | Suspicious (may be overfit) |

### Development Process

1. **Data Collection & Preparation**
   - Historical loan performance data
   - Define good/bad outcome (e.g., 90+ DPD)
   - Minimum 12-24 months performance window
   - Sample size: 1,000+ bads recommended

2. **Variable Analysis**
   - Fine classing (20-50 bins per variable)
   - Calculate WoE and IV for each variable
   - Coarse classing (combine similar WoE bins)
   - Select variables with IV > 0.02

3. **Model Building**
   - Logistic regression (most common)
   - Variable selection (stepwise, LASSO)
   - Coefficient estimation
   - Model calibration

4. **Scorecard Scaling**
   - Convert log-odds to points
   - Define base score and PDO (points to double odds)
   - Typical scaling: 600 base score, 20 PDO

5. **Validation**
   - In-sample vs. out-of-sample testing
   - KS statistic (>0.3 is good)
   - Gini coefficient (>0.4 is good)
   - ROC-AUC (>0.7 is acceptable)

6. **Implementation & Monitoring**
   - Score distribution tracking
   - Population Stability Index (PSI)
   - Characteristic drift monitoring
   - Regular recalibration

---

## AI/ML Integration

### Current State
- AI can improve credit scoring accuracy by up to 85%
- 70% faster credit scoring processing
- 20-30% reduction in default rates
- 20-30% increase in approval rates

### ML Models Used

| Model Type | Use Case | Interpretability |
|------------|----------|------------------|
| Logistic Regression | Traditional scorecard | High |
| Decision Trees | Rule extraction | High |
| Random Forest | Ensemble predictions | Medium |
| Gradient Boosting (XGBoost) | High accuracy | Medium |
| Neural Networks | Complex patterns | Low |

### Key Applications

1. **Document Processing**
   - OCR for document extraction
   - Document authenticity verification
   - Automated data entry

2. **Income/Employment Verification**
   - Bank statement parsing
   - Transaction categorization
   - Income pattern detection

3. **Risk Prediction**
   - Default probability modeling
   - Early warning systems
   - Portfolio risk management

4. **Fraud Detection**
   - Anomaly detection
   - Pattern recognition
   - Real-time fraud scoring

### Challenges
- Regulatory compliance (explainability)
- Bias detection and mitigation
- Model validation requirements
- Integration with legacy systems

---

## India-Specific Considerations

### Regulatory Bodies
- **RBI**: Primary regulator for HFCs
- **NHB**: Supervisory role for housing finance

### Key Metrics (India)

| Metric | Typical Threshold |
|--------|-------------------|
| CIBIL Score | 700+ preferred |
| FOIR | 40-55% maximum |
| LTV | 75-90% based on loan amount |
| Age at maturity | 60-70 years |
| Employment tenure | 2+ years preferred |

### Documentation Requirements
- Identity: Aadhaar, PAN, Passport
- Address: Utility bills, Aadhaar
- Income: Salary slips, Form 16, ITR
- Bank statements: 6-12 months
- Property documents: Title, approvals, NOCs

### Segment-Specific Considerations

**Salaried Applicants:**
- Employer category (Govt, PSU, MNC, Private)
- Industry risk (IT, Banking = lower; Real Estate, Construction = higher)
- Designation and career trajectory

**Self-Employed:**
- Business vintage (3+ years preferred)
- ITR consistency (last 3 years)
- Business type and stability
- GST returns verification

**Informal Sector:**
- Bank statement based income assessment
- Alternative data sources
- Higher margin requirements
- Guarantor/co-applicant needs

---

## Risk Tiers & Pricing

### Risk-Based Pricing Framework

| Risk Tier | Credit Score | LTV | DTI/FOIR | Rate Adjustment |
|-----------|--------------|-----|----------|-----------------|
| Tier 1 (Prime) | 750+ | ≤75% | ≤40% | Base rate |
| Tier 2 (Near-Prime) | 700-749 | 76-80% | 41-50% | +25-50 bps |
| Tier 3 (Sub-Prime) | 650-699 | 81-85% | 51-55% | +75-150 bps |
| Tier 4 (Deep Sub-Prime) | <650 | >85% | >55% | +200+ bps or decline |

### Compensating Factors
Strong compensating factors can offset weakness in one area:
- Large down payment (lower LTV)
- Substantial liquid reserves (6+ months PITI)
- Minimal debt outside mortgage
- Strong income growth trend
- Long employment tenure
- Co-applicant with strong profile

---

## Implementation Recommendations

### Phase 1: Foundation (Months 1-3)

1. **Define Business Rules**
   - Minimum eligibility criteria
   - Hard declines vs. soft declines
   - Manual review triggers

2. **Data Infrastructure**
   - Credit bureau API integration
   - Document management system
   - Application data warehouse

3. **Basic Scorecard**
   - Credit score integration
   - DTI/FOIR calculation
   - LTV assessment
   - Simple point-based scoring

### Phase 2: Enhancement (Months 4-6)

1. **Advanced Scoring**
   - Develop statistical scorecard using WoE/IV
   - Implement risk-based pricing
   - Add employment/income scoring

2. **Automation**
   - Document OCR and extraction
   - Automated verification APIs
   - Workflow automation

3. **Fraud Detection**
   - Basic fraud rules engine
   - Identity verification integration
   - Document authentication

### Phase 3: Optimization (Months 7-12)

1. **Alternative Data**
   - Account aggregator integration
   - Alternative credit data sources
   - Behavioral scoring

2. **ML Enhancement**
   - ML-based underwriting assist
   - Continuous model improvement
   - A/B testing framework

3. **Monitoring & Governance**
   - Model performance dashboards
   - Drift detection
   - Regulatory reporting

### Technology Stack Recommendations

| Component | Recommended Approach |
|-----------|---------------------|
| Core Scoring Engine | Rule-based + Statistical model |
| Credit Bureau | Multi-bureau integration |
| Document Processing | OCR + AI document intelligence |
| Fraud Detection | Real-time scoring API |
| Decisioning | Business rules engine + ML models |
| Monitoring | Analytics dashboard + alerting |

---

## Sources

### Government & Regulatory Sources
- [FHFA 2025 Scorecard](https://www.fhfa.gov/document/2025-Scorecard.pdf)
- [HUD FHA TOTAL Scorecard](https://www.hud.gov/stat/sfh/fha-total)
- [CFPB Equal Credit Opportunity](https://www.consumerfinance.gov/compliance/compliance-resources/other-applicable-requirements/equal-credit-opportunity-act/)
- [FDIC Underwriting Guidelines](https://www.fdic.gov/regulations/examinations/credit_card/pdf_version/ch7.pdf)
- [NHB Guidelines](https://www.nhb.org.in/guidelines/)
- [Federal Reserve Credit Scoring Research](https://www.federalreserve.gov/pubs/bulletin/1996/796lead.pdf)
- [World Bank Credit Scoring Guidelines](https://thedocs.worldbank.org/en/doc/935891585869698451-0130022020/original/CREDITSCORINGAPPROACHESGUIDELINESFINALWEB.pdf)
- [OCC Fair Lending Handbook](https://www.occ.treas.gov/publications-and-resources/publications/comptrollers-handbook/files/fair-lending/pub-ch-fair-lending.pdf)

### Industry Sources
- [Fannie Mae Debt-to-Income Ratios](https://selling-guide.fanniemae.com/sel/b3-6-02/debt-income-ratios)
- [Fannie Mae Collateral Valuation](https://www.fanniemae.com/research-and-insights/perspectives/advancing-collateral-valuation)
- [Freddie Mac Loan Collateral Advisor](https://sf.freddiemac.com/faqs/loan-collateral-advisor-faq)
- [The Work Number Employment Verification](https://theworknumber.com/solutions/industries/mortgage-verification)
- [MeridianLink Custom Scorecards](https://www.meridianlink.com/blog/custom-scorecards-what-are-they-and-why-should-your-fi-use-them/)

### Credit Bureau & Data Sources
- [Experian Alternative Data Guide](https://www.experian.com/blogs/insights/what-is-alternative-data-a-guide-for-lenders/)
- [Equifax Alternative Data Sources](https://www.equifax.com/business/blog/-/insight/article/what-are-alternative-data-sources/)
- [Mastercard Open Finance](https://www.mastercard.com/us/en/news-and-trends/Insights/2025/Open-banking-unlocks-income-verification-data-for-lending.html)
- [PMC Alternative Data Research](https://pmc.ncbi.nlm.nih.gov/articles/PMC11108212/)

### India-Specific Sources
- [PNB Housing CIBIL Guide](https://www.pnbhousing.com/blog/importance-of-cibil-score-while-availing-home-loan-and-how-to-improve-cibil-score)
- [Bajaj Housing CIBIL Score](https://www.bajajhousingfinance.in/cibil-score-for-home-loan)
- [Bajaj Housing FOIR Calculator](https://www.bajajhousingfinance.in/what-is-foir)
- [Bank of Baroda FOIR Guide](https://bankofbaroda.bank.in/banking-mantra/loans-borrowings/articles/what-is-foir-and-how-is-it-calculated)
- [Credit Dharma FOIR Impact](https://creditdharma.in/home-loan/understanding-foir-in-banking/)

### Fraud Detection Sources
- [FHFA Fraud Prevention](https://www.fhfa.gov/programs/fraud-prevention)
- [Fannie Mae Mortgage Fraud Prevention](https://singlefamily.fanniemae.com/mortgage-fraud-prevention)
- [First American FraudGuard](https://dna.firstam.com/fraud-verification-solutions)
- [LexisNexis Real Estate Risk Solutions](https://risk.lexisnexis.com/real-estate)

### AI/ML in Credit Scoring
- [Netguru AI Credit Scoring Study](https://www.netguru.com/blog/ai-credit-scoring)
- [Experian AI-Driven Decisioning](https://www.experian.com/blogs/insights/ai-driven-credit-risk-decisioning/)
- [SAS WoE and IV Evolution](https://communities.sas.com/t5/SAS-Communities-Library/WOE-IV-and-Evolution-of-AI-Driven-Credit-Scoring-Models/ta-p/949855)

### Scorecard Development
- [UCanalytics WoE/IV Tutorial](https://ucanalytics.com/blogs/information-value-and-weight-of-evidencebanking-case/)
- [ListenData WoE/IV Explained](https://www.listendata.com/2015/03/weight-of-evidence-woe-and-information.html)
- [Altair Credit Scorecard Development](https://altair.com/blog/articles/credit-scoring-series-part-five-credit-scorecard-development)
- [Lancaster University Scorecard Guide](https://www.lancaster.ac.uk/stor-i-student-sites/katie-howgate/2021/02/07/how-to-build-a-credit-scorecard/)

---

*Document compiled: January 2026*
*For Housing Finance Applicant Evaluation Scorecard Development*
`;

docsContent["Income_Imputation_Bureau_Only.md"] = `# Income Imputation Using Bureau Data Only
## Methodology & Implementation Guide for Housing Finance

**Date:** January 2026
**Purpose:** Estimating applicant income using credit bureau data when traditional income documents are unavailable or unverifiable

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Use Cases & Business Context](#use-cases--business-context)
3. [Core Methodology](#core-methodology)
4. [Bureau Data Points Available](#bureau-data-points-available)
5. [Income Estimation Models](#income-estimation-models)
6. [EMI-Based Reverse Calculation](#emi-based-reverse-calculation)
7. [Credit Attribute-Based Statistical Models](#credit-attribute-based-statistical-models)
8. [Surrogate Income Methods](#surrogate-income-methods)
9. [Model Validation & Accuracy](#model-validation--accuracy)
10. [Implementation Framework](#implementation-framework)
11. [Risk & Limitations](#risk--limitations)
12. [Regulatory Considerations](#regulatory-considerations)
13. [Sources](#sources)

---

## Executive Summary

Bureau-based income estimation is a methodology that derives an applicant's probable income using their credit history, existing loan obligations, and repayment behavior—without requiring traditional income documents like salary slips or ITRs.

### Key Principles

1. **Reverse Engineering**: If a borrower is successfully paying EMIs, they must have sufficient income to support those payments
2. **FOIR Assumption**: Lenders typically approve loans at 40-60% FOIR, so existing EMI load implies minimum income
3. **Credit Behavior Correlation**: Credit utilization, loan types, and repayment patterns correlate with income levels
4. **Statistical Modeling**: ML models trained on verified income data can predict income from bureau attributes

### When to Use

| Scenario | Bureau-Only Estimation | Traditional Docs |
|----------|----------------------|------------------|
| Self-employed (informal) | ✅ Primary | ❌ Often unavailable |
| Gig economy workers | ✅ Primary | ❌ Inconsistent |
| Thin ITR filers | ✅ Supplement | ⚠️ Understated |
| Salaried (formal) | ⚠️ Validation | ✅ Primary |
| New to credit | ❌ Insufficient | ✅ Required |

---

## Use Cases & Business Context

### Primary Use Cases

1. **Surrogate Lending Programs**
   - Self-employed professionals without formal income proof
   - Business owners with cash-heavy operations
   - Commission-based workers

2. **Income Validation**
   - Cross-verify stated income against bureau-implied income
   - Detect income inflation/fraud
   - Support underwriting decisions

3. **Pre-Qualification**
   - Soft-pull based eligibility assessment
   - Lead scoring and conversion optimization
   - Offer personalization

4. **Portfolio Monitoring**
   - Detect income deterioration in existing customers
   - Early warning for collection prioritization
   - Cross-sell opportunity identification

### Market Products

| Provider | Product | Methodology |
|----------|---------|-------------|
| TransUnion CIBIL (India) | Income Estimator | Proprietary score (0-999) |
| Experian | Income Insight | Credit attribute-based model |
| Equifax | Consumer IncomeView+ | ML model on credit data |
| TransUnion (US) | TrueVision Income Estimator | Individual-level credit data |

---

## Core Methodology

### The Fundamental Logic

\`\`\`
┌─────────────────────────────────────────────────────────────────────────────┐
│                    BUREAU-BASED INCOME ESTIMATION LOGIC                      │
│                                                                              │
│  OBSERVED (Bureau Data)              INFERRED (Income)                       │
│  ─────────────────────              ─────────────────                        │
│                                                                              │
│  ┌─────────────────────┐                                                     │
│  │ Existing Loan EMIs  │─────┐                                              │
│  │ (₹50,000/month)     │     │                                              │
│  └─────────────────────┘     │                                              │
│                              │    ┌──────────────────────────────┐          │
│  ┌─────────────────────┐     ├───>│ If FOIR assumed at 50%       │          │
│  │ Credit Card Limits  │     │    │ Minimum Income = EMI / 0.50  │          │
│  │ (₹5,00,000)         │─────┤    │ = ₹50,000 / 0.50             │          │
│  └─────────────────────┘     │    │ = ₹1,00,000/month            │          │
│                              │    └──────────────────────────────┘          │
│  ┌─────────────────────┐     │                                              │
│  │ Loan Types & Tenure │─────┤    ┌──────────────────────────────┐          │
│  │ (Home Loan, 20 yrs) │     ├───>│ Loan type indicates income   │          │
│  └─────────────────────┘     │    │ bracket and stability        │          │
│                              │    └──────────────────────────────┘          │
│  ┌─────────────────────┐     │                                              │
│  │ Repayment Track     │─────┘    ┌──────────────────────────────┐          │
│  │ (0 DPD for 36 mos)  │─────────>│ Clean track = sustainable    │          │
│  └─────────────────────┘          │ income to service debt       │          │
│                                   └──────────────────────────────┘          │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
\`\`\`

### Three Approaches

| Approach | Method | Accuracy | Complexity |
|----------|--------|----------|------------|
| **EMI Reverse Calculation** | Derive income from existing EMI load | Medium | Low |
| **Statistical/ML Model** | Predict income from credit attributes | High | High |
| **Hybrid Scoring** | Combine multiple signals | High | Medium |

---

## Bureau Data Points Available

### Standard Bureau Report Fields (India - CIBIL/Experian/Equifax/CRIF)

#### 1. Account Information

| Data Point | Use in Income Estimation |
|------------|--------------------------|
| Number of active loans | Higher count may indicate higher income capacity |
| Loan types (HL, PL, AL, CC, etc.) | Loan type correlates with income bracket |
| Sanctioned amounts | Higher sanctions imply higher verified income |
| Current outstanding | Total debt burden |
| EMI amounts | Direct input for reverse calculation |
| Credit limits (CC/OD) | Banks set limits based on income assessment |
| Tenure of loans | Longer tenure for larger loans = higher income |
| Date of sanction | Recency of income verification |

#### 2. Repayment History

| Data Point | Use in Income Estimation |
|------------|--------------------------|
| DPD (Days Past Due) history | Clean track = stable income |
| Number of 30/60/90+ DPD | Stress indicators |
| Payment regularity | Income consistency signal |
| Bounce/dishonor history | Cash flow issues |

#### 3. Inquiry Information

| Data Point | Use in Income Estimation |
|------------|--------------------------|
| Number of inquiries | Credit seeking behavior |
| Types of products inquired | Aspirational vs. need-based |
| Inquiry amounts | Gives indication of expected income |

#### 4. Derived Attributes

| Attribute | Calculation | Relevance |
|-----------|-------------|-----------|
| Total EMI burden | Sum of all active EMIs | Direct income proxy |
| Credit utilization | Outstanding / Limit | Financial behavior |
| Average account age | Mean of all account ages | Credit maturity |
| Loan type mix | Secured vs. Unsecured ratio | Risk profile |
| Velocity of credit | New accounts in last 6-12 months | Income changes |

---

## Income Estimation Models

### Model 1: Simple EMI-Based Estimation

#### Formula

\`\`\`
Estimated Monthly Income = Total Monthly EMI Obligations / Assumed FOIR

Where:
- Total Monthly EMI = Sum of all active loan EMIs from bureau
- Assumed FOIR = Industry standard (typically 40-50%)
\`\`\`

#### Calculation Example

\`\`\`
Bureau Data:
- Home Loan EMI: ₹35,000
- Car Loan EMI: ₹12,000
- Personal Loan EMI: ₹8,000
- Credit Card Min Due: ₹5,000
─────────────────────────────
Total EMI: ₹60,000/month

Income Estimation (FOIR = 50%):
Estimated Income = ₹60,000 / 0.50 = ₹1,20,000/month

Income Estimation (FOIR = 40%):
Estimated Income = ₹60,000 / 0.40 = ₹1,50,000/month

Estimated Income Range: ₹1,20,000 - ₹1,50,000/month
\`\`\`

#### FOIR Assumptions by Loan Type

| Original Loan Type | Assumed FOIR at Sanction |
|--------------------|--------------------------|
| Home Loan | 40-45% |
| Loan Against Property | 45-50% |
| Auto Loan | 50-55% |
| Personal Loan | 50-60% |
| Consumer Durable | 55-65% |
| Credit Card | Varies by limit |

---

### Model 2: Credit Limit Based Estimation

#### Logic

Banks assign credit card limits based on income multiples (typically 2-3x monthly income).

#### Formula

\`\`\`
Estimated Monthly Income = Highest Credit Card Limit / Credit Limit Multiplier

Where:
- Highest CC Limit = Maximum sanctioned limit across all cards
- Credit Limit Multiplier = 2 to 3 (varies by bank policy)
\`\`\`

#### Calculation Example

\`\`\`
Bureau Data:
- Credit Card 1 Limit: ₹3,00,000
- Credit Card 2 Limit: ₹2,50,000
- Credit Card 3 Limit: ₹1,50,000

Highest Limit: ₹3,00,000

Income Estimation (Multiplier = 2.5):
Estimated Income = ₹3,00,000 / 2.5 = ₹1,20,000/month

Income Estimation (Multiplier = 3):
Estimated Income = ₹3,00,000 / 3 = ₹1,00,000/month

Estimated Income Range: ₹1,00,000 - ₹1,20,000/month
\`\`\`

---

### Model 3: Loan Sanction Amount Based Estimation

#### Logic

Large secured loans (Home Loan, LAP) undergo rigorous income verification. The sanctioned amount reflects verified income.

#### Formula

\`\`\`
For Home Loans:
Estimated Annual Income = Sanctioned Amount / Loan-to-Income Multiplier

Typical Multipliers:
- Conservative lenders: 4-5x annual income
- Aggressive lenders: 6-7x annual income
- Average assumption: 5x annual income
\`\`\`

#### Calculation Example

\`\`\`
Bureau Data:
- Home Loan Sanctioned: ₹75,00,000
- Sanction Date: 18 months ago

Income Estimation (Multiplier = 5x):
Estimated Annual Income = ₹75,00,000 / 5 = ₹15,00,000
Estimated Monthly Income = ₹15,00,000 / 12 = ₹1,25,000

Adjust for Income Growth (if sanction > 12 months old):
Assumed growth: 8% per annum
Current Estimated Income = ₹1,25,000 × 1.08 = ₹1,35,000/month
\`\`\`

---

### Model 4: Statistical/ML Model

#### Feature Engineering

| Feature Category | Specific Features |
|------------------|-------------------|
| **EMI Features** | Total EMI, Max EMI, EMI growth rate, EMI-to-limit ratio |
| **Limit Features** | Total CC limit, Max CC limit, Limit utilization, Limit growth |
| **Account Features** | Count by type, Average tenure, Newest account age |
| **Behavior Features** | Max DPD ever, DPD frequency, Utilization trend |
| **Inquiry Features** | Inquiry count, Inquiry recency, Inquiry amount |

#### Sample Feature Set

\`\`\`python
# Feature vector for ML model
features = {
    # EMI-based features
    'total_monthly_emi': 60000,
    'max_single_emi': 35000,
    'emi_count': 4,
    'secured_emi_ratio': 0.78,  # (HL+AL EMI) / Total EMI

    # Credit limit features
    'total_cc_limit': 750000,
    'max_cc_limit': 300000,
    'cc_utilization': 0.35,
    'cc_limit_growth_12m': 0.15,

    # Account features
    'total_active_accounts': 6,
    'secured_loan_count': 2,
    'unsecured_loan_count': 2,
    'avg_account_age_months': 48,
    'oldest_account_age_months': 84,

    # Behavior features
    'max_dpd_ever': 0,
    'dpd_30_count_24m': 0,
    'on_time_payment_pct': 100,

    # Inquiry features
    'inquiry_count_6m': 2,
    'inquiry_count_12m': 4,

    # Derived features
    'debt_to_limit_ratio': 0.45,
    'loan_type_diversity': 4,
    'credit_age_years': 7
}
\`\`\`

#### Model Architecture Options

| Model Type | Pros | Cons |
|------------|------|------|
| **Linear Regression** | Interpretable, fast | May miss non-linear patterns |
| **Gradient Boosting (XGBoost/LightGBM)** | High accuracy, handles mixed data | Less interpretable |
| **Random Forest** | Good for mixed features, robust | Can overfit |
| **Neural Network** | Captures complex patterns | Black box, needs more data |

#### Model Training Approach

\`\`\`
Training Data Requirements:
- Historical loans with verified income (ground truth)
- Minimum 10,000-50,000 records for robust model
- Stratified by income bands
- Include both performing and defaulted loans

Validation:
- 70/30 or 80/20 train/test split
- Cross-validation (5-fold)
- Out-of-time validation (train on old, test on recent)

Evaluation Metrics:
- MAE (Mean Absolute Error) in income estimation
- MAPE (Mean Absolute Percentage Error)
- R² (Coefficient of determination)
- Income band classification accuracy
\`\`\`

---

## EMI-Based Reverse Calculation

### Detailed Methodology

#### Step 1: Extract EMI Data from Bureau

\`\`\`
┌─────────────────────────────────────────────────────────────────┐
│                    EMI EXTRACTION LOGIC                          │
│                                                                  │
│  For each active loan account:                                  │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │ IF EMI field available in bureau → Use directly           │  │
│  │ ELSE Calculate: EMI = P × r × (1+r)^n / [(1+r)^n - 1]    │  │
│  │      Where: P = Outstanding principal                     │  │
│  │             r = Assumed interest rate / 12               │  │
│  │             n = Remaining tenure in months               │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
\`\`\`

#### Step 2: Apply Loan-Type Specific FOIR

| Loan Type | Conservative FOIR | Moderate FOIR | Aggressive FOIR |
|-----------|-------------------|---------------|-----------------|
| Home Loan | 35% | 40% | 50% |
| Loan Against Property | 40% | 45% | 55% |
| Auto Loan | 45% | 50% | 60% |
| Personal Loan | 50% | 55% | 65% |
| Consumer Durable | 55% | 60% | 70% |
| Credit Card (Min Due) | 60% | 65% | 75% |

#### Step 3: Calculate Income Range

\`\`\`
Lower Bound Income = Total EMI / Aggressive FOIR
Upper Bound Income = Total EMI / Conservative FOIR
Point Estimate = Total EMI / Moderate FOIR
\`\`\`

#### Step 4: Apply Adjustments

\`\`\`python
def adjust_estimated_income(base_income, bureau_data):
    adjustment_factor = 1.0

    # Positive adjustments
    if bureau_data['max_dpd_ever'] == 0:
        adjustment_factor += 0.05  # Clean track record

    if bureau_data['avg_account_age'] > 60:  # > 5 years
        adjustment_factor += 0.05  # Mature credit history

    if bureau_data['has_home_loan']:
        adjustment_factor += 0.10  # Verified income for HL

    # Negative adjustments
    if bureau_data['inquiry_count_6m'] > 5:
        adjustment_factor -= 0.10  # Credit hungry

    if bureau_data['cc_utilization'] > 0.80:
        adjustment_factor -= 0.10  # High utilization stress

    if bureau_data['dpd_30_count_12m'] > 2:
        adjustment_factor -= 0.15  # Payment stress

    adjusted_income = base_income * adjustment_factor
    return adjusted_income
\`\`\`

---

## Surrogate Income Methods (India Specific)

### Method 1: EMI Equalizer

**Concept:** If a borrower is successfully servicing existing EMIs, they can take additional EMI up to a multiplier.

\`\`\`
New Eligible EMI = Existing Total EMI × Multiplier Factor

Typical Multiplier: 1.5x

Example:
- Current EMIs being serviced: ₹40,000/month
- New eligible EMI: ₹40,000 × 1.5 = ₹60,000/month
- Total EMI capacity: ₹40,000 + ₹60,000 = ₹1,00,000/month
- Implied income at 50% FOIR: ₹2,00,000/month
\`\`\`

**Conditions:**
- Clean repayment track (0 DPD for 12-24 months)
- Existing loans should be substantial (>₹10 lakhs)
- Same loan type preference (existing HL → new HL preferred)

### Method 2: Loan Track Record

**Concept:** Use successfully repaid large loans as proof of income capacity.

\`\`\`
If borrower has repaid:
- Home Loan of ₹50,00,000 with clean track → Eligible for similar or higher amount
- Auto Loan of ₹10,00,000 with clean track → Can extrapolate income

Calculation:
If HL of ₹50L was sanctioned at 5x income multiple:
- Implied income at sanction: ₹50L / 5 = ₹10L/year
- With 8% growth over 3 years: ₹10L × 1.08³ = ₹12.6L/year
- Current monthly income estimate: ₹1,05,000
\`\`\`

### Method 3: Credit Summation (Modified)

**Concept:** Analyze total credit exposure growth over time as income proxy.

\`\`\`
Credit Growth Analysis:
- Total credit limit 24 months ago: ₹5,00,000
- Total credit limit today: ₹12,00,000
- Growth: 140% over 2 years

Interpretation:
- Banks increased limits based on income growth
- Implied income grew proportionally
- If initial income was ₹50,000, current may be ₹1,20,000
\`\`\`

---

## Model Validation & Accuracy

### Validation Framework

\`\`\`
┌─────────────────────────────────────────────────────────────────┐
│                    VALIDATION APPROACH                           │
│                                                                  │
│  1. BACKTESTING                                                 │
│     └─> Compare estimated income vs. actual verified income     │
│         for historical loans                                    │
│                                                                  │
│  2. PERFORMANCE CORRELATION                                     │
│     └─> Higher estimated income should correlate with          │
│         lower default rates                                     │
│                                                                  │
│  3. BAND ACCURACY                                               │
│     └─> What % of estimates fall in correct income band?       │
│         (e.g., ₹50K-75K, ₹75K-1L, ₹1L-1.5L)                   │
│                                                                  │
│  4. REASONABLENESS CHECK                                        │
│     └─> Estimated income should support observed lifestyle     │
│         indicators (property value, loan amounts)               │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
\`\`\`

### Expected Accuracy Metrics

| Metric | Good | Acceptable | Poor |
|--------|------|------------|------|
| MAPE (Mean Absolute % Error) | <15% | 15-25% | >25% |
| R² | >0.70 | 0.50-0.70 | <0.50 |
| Income Band Accuracy | >70% | 50-70% | <50% |
| Rank Ordering | >0.80 | 0.65-0.80 | <0.65 |

### Industry Benchmarks

- Equifax Consumer IncomeView+: 11% more predictive than previous versions
- TransUnion estimates: Score 0-999 correlates with income bands
- Experian Income Insight: Reduces manual verification by 30%

---

## Implementation Framework

### Phase 1: Data Collection (Week 1-2)

\`\`\`
Required Data:
1. Historical bureau pulls for 10,000+ customers
2. Corresponding verified income (from sanctioned loans)
3. Loan performance data (DPD, NPA status)
4. Customer demographics (optional, for segmentation)

Data Quality Checks:
- Remove records with incomplete bureau data
- Exclude outliers (income <10K or >50L)
- Ensure diverse income band representation
\`\`\`

### Phase 2: Feature Engineering (Week 3-4)

\`\`\`python
# Sample feature engineering pipeline
def engineer_bureau_features(bureau_data):
    features = {}

    # EMI features
    features['total_emi'] = sum_active_emis(bureau_data)
    features['max_emi'] = max_emi(bureau_data)
    features['emi_count'] = count_active_loans(bureau_data)
    features['secured_emi_pct'] = secured_emi_ratio(bureau_data)

    # Limit features
    features['total_cc_limit'] = sum_cc_limits(bureau_data)
    features['max_cc_limit'] = max_cc_limit(bureau_data)
    features['cc_utilization'] = calculate_utilization(bureau_data)

    # Behavioral features
    features['max_dpd'] = max_dpd_ever(bureau_data)
    features['clean_months'] = months_since_last_dpd(bureau_data)
    features['vintage'] = credit_history_months(bureau_data)

    return features
\`\`\`

### Phase 3: Model Development (Week 5-8)

\`\`\`
Model Selection:
1. Start with simple EMI-based heuristic as baseline
2. Build gradient boosting model (XGBoost/LightGBM)
3. Compare performance and select champion

Training:
- 70% training, 15% validation, 15% test
- 5-fold cross-validation
- Hyperparameter tuning with grid search

Output:
- Point estimate of monthly income
- Confidence interval (10th to 90th percentile)
- Income band classification
\`\`\`

### Phase 4: Integration (Week 9-12)

\`\`\`
Integration Points:
1. Bureau pull API → Extract features
2. Feature store → Cache computed features
3. Scoring engine → Generate income estimate
4. Decision engine → Use in underwriting rules

API Response Structure:
{
    "applicant_id": "APP123456",
    "estimated_income": {
        "point_estimate": 125000,
        "lower_bound": 100000,
        "upper_bound": 150000,
        "confidence": 0.75,
        "income_band": "1L-1.5L"
    },
    "model_version": "v2.1",
    "estimation_method": "ML_MODEL",
    "key_drivers": [
        "home_loan_emi",
        "clean_repayment_track",
        "cc_limit_growth"
    ]
}
\`\`\`

---

## Risk & Limitations

### Key Risks

| Risk | Description | Mitigation |
|------|-------------|------------|
| **Stacking Risk** | Borrower takes multiple loans simultaneously | Real-time bureau check, velocity controls |
| **Income Decline** | Past income ≠ current income | Recency adjustment, conservative buffers |
| **Understated Credit** | Some loans not on bureau | Ask for declaration, verify selectively |
| **Model Drift** | Economic changes affect model accuracy | Regular backtesting, model refresh |

### Limitations

1. **New to Credit (NTC)**: No history to estimate from
2. **Cash Businesses**: May have capacity not reflected in bureau
3. **Income Volatility**: Bureau shows capacity, not variability
4. **Joint Loans**: Attribution of EMI to individuals unclear
5. **Informal Loans**: Not captured in bureau

### Conservative Practices

\`\`\`
Apply Haircuts for:
- Loans sanctioned >24 months ago: 10-20% reduction
- Self-employed profiles: 15-20% reduction
- High inquiry count: 10-15% reduction
- First-time secured loan borrower: 10% reduction

Maximum Reliance:
- Don't exceed 70-80% LTV for pure surrogate cases
- Require minimum 6-12 months clean track
- Limit exposure per borrower/bureau score band
\`\`\`

---

## Regulatory Considerations

### RBI/NHB Guidelines (India)

- No explicit prohibition on surrogate-based lending
- Board-approved policy required for such programs
- Documentation of methodology and validation
- Fair practice code compliance

### ECOA/Fair Lending (US)

- Credit-based income models must not use prohibited factors
- Adverse action notices required if used for decline
- Model must be validated for disparate impact

### Best Practices

1. Maintain model documentation
2. Regular validation reports
3. Audit trail of decisions
4. Fair lending testing
5. Customer disclosure (if required)

---

## Sources

### Bureau & Income Estimation Products
- [TransUnion CIBIL Income Estimator](https://www.transunioncibil.com/product/income-estimator)
- [Experian Income Insight Product Sheet](https://www.experian.com/content/dam/marketing/na/business/product-sheets/income-insight-income-insight-wage2.0.product-sheet.pdf)
- [Equifax Consumer IncomeView+](https://www.equifax.com/business/product/consumer-incomeview/)
- [TransUnion iSoftpull Income Estimator](https://www.isoftpull.com/transunion/income-estimator)

### Methodology & Research
- [Federal Reserve - Bureau-Based Debt Service Measure](https://www.federalreserve.gov/econres/notes/feds-notes/introducing-a-credit-bureau-based-measure-of-u-s-household-debt-service-20240904.html)
- [Experian Academy - Income Estimation in Lending](https://experianacademy.com/blog/2020/08/10/income-estimation-at-the-heart-of-responsible-lending/)
- [Digital Lending - Bureau-Based Income Estimation (Medium)](https://medium.com/@tumloor.anurag/digital-lending-credit-bureau-based-income-estimation-9af2e7acc97e)

### Surrogate Lending (India)
- [Banking Surrogate Methods - Omozing](https://www.omozing.com/banking-surrogate-documents-and-eligibility/)
- [LinkedIn - What is Surrogate Income](https://www.linkedin.com/pulse/what-surrogate-income-robin-chaturvedi)

### FOIR & Reverse Calculation
- [Bajaj Housing FOIR Calculation](https://www.bajajhousingfinance.in/what-is-foir)
- [My Money Mantra - FOIR Explained](https://www.mymoneymantra.com/blog/understanding-the-concept-of-foir)
- [Bank of Baroda - FOIR Guide](https://bankofbaroda.bank.in/banking-mantra/loans-borrowings/articles/what-is-foir-and-how-is-it-calculated)

### Machine Learning in Credit
- [phData - ML for Credit Scoring](https://www.phdata.io/blog/how-to-use-ml-for-credit-scoring-decisioning/)
- [Svitla - Machine Learning for Credit Scoring](https://svitla.com/blog/machine-learning-for-credit-scoring/)
- [PMC - ML Predictivity in Consumer Credit](https://pmc.ncbi.nlm.nih.gov/articles/PMC7666641/)

---

*Bureau-Only Income Imputation Methodology - January 2026*
*Version 1.0*
`;

docsContent["Income_Imputation_Bureau_Plus_BankStatement.md"] = `# Income Imputation Using Bureau + Bank Statement Data
## Comprehensive Methodology for Housing Finance

**Date:** January 2026
**Purpose:** Enhanced income estimation combining credit bureau data with bank statement analysis for robust underwriting

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Why Combine Bureau + Bank Statement](#why-combine-bureau--bank-statement)
3. [Data Sources & Acquisition](#data-sources--acquisition)
4. [Bank Statement Analysis Methodology](#bank-statement-analysis-methodology)
5. [Transaction Categorization](#transaction-categorization)
6. [Income Detection Algorithms](#income-detection-algorithms)
7. [Combining Bureau & Bank Statement Signals](#combining-bureau--bank-statement-signals)
8. [Unified Income Estimation Model](#unified-income-estimation-model)
9. [Cash Flow Based Underwriting](#cash-flow-based-underwriting)
10. [Fraud Detection & Validation](#fraud-detection--validation)
11. [Implementation Architecture](#implementation-architecture)
12. [India-Specific: Account Aggregator Framework](#india-specific-account-aggregator-framework)
13. [Use Cases & Decision Rules](#use-cases--decision-rules)
14. [Sources](#sources)

---

## Executive Summary

Combining bureau data with bank statement analysis provides a powerful, multi-dimensional view of an applicant's true financial capacity. While bureau data reveals credit behavior and existing obligations, bank statements show actual cash flow, income patterns, and spending behavior.

### Comparison of Approaches

| Aspect | Bureau Only | Bank Statement Only | Bureau + Bank Statement |
|--------|-------------|---------------------|------------------------|
| Income Estimation | Derived/Implied | Directly Observed | Cross-validated |
| Accuracy | Medium (±25%) | High (±10-15%) | Very High (±5-10%) |
| Fraud Detection | Limited | Strong | Comprehensive |
| NTC Applicants | ❌ Cannot estimate | ✅ Can estimate | ✅ Can estimate |
| Historical View | 36-84 months | 12-24 months | Combined view |
| Real-time Data | No | Yes (recent) | Partial |

### Key Benefits of Combined Approach

1. **Cross-Validation**: Verify bureau-implied income against actual bank credits
2. **Fraud Detection**: Identify mismatches between stated, bureau-implied, and bank-observed income
3. **Comprehensive View**: Bureau shows debt burden; bank shows cash availability
4. **Better for Self-Employed**: Direct visibility into business cash flows
5. **Improved Accuracy**: Multiple data points reduce estimation error

---

## Why Combine Bureau + Bank Statement

### The Validation Matrix

\`\`\`
┌─────────────────────────────────────────────────────────────────────────────┐
│                    INCOME VALIDATION MATRIX                                  │
│                                                                              │
│              ┌─────────────────┬─────────────────┬─────────────────┐        │
│              │ Bureau-Implied  │ Bank Statement  │ Assessment      │        │
│              │ Income          │ Income          │                 │        │
│  ┌───────────┼─────────────────┼─────────────────┼─────────────────┤        │
│  │ Scenario 1│ ₹1,00,000      │ ₹1,05,000       │ ✅ CONSISTENT   │        │
│  │           │                 │                 │ High confidence │        │
│  ├───────────┼─────────────────┼─────────────────┼─────────────────┤        │
│  │ Scenario 2│ ₹1,00,000      │ ₹1,50,000       │ ⚠️ INVESTIGATE  │        │
│  │           │                 │                 │ Under-leveraged │        │
│  ├───────────┼─────────────────┼─────────────────┼─────────────────┤        │
│  │ Scenario 3│ ₹1,00,000      │ ₹60,000         │ 🔴 RED FLAG     │        │
│  │           │                 │                 │ Possible stress │        │
│  ├───────────┼─────────────────┼─────────────────┼─────────────────┤        │
│  │ Scenario 4│ No bureau data │ ₹80,000         │ ✅ NTC VIABLE   │        │
│  │           │                 │                 │ Bank-based only │        │
│  └───────────┴─────────────────┴─────────────────┴─────────────────┘        │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
\`\`\`

### Information Richness Comparison

| Signal | Bureau | Bank Statement |
|--------|--------|----------------|
| Total debt obligations | ✅ Complete | ⚠️ Only EMI debits visible |
| Monthly income | ❌ Implied only | ✅ Directly observed |
| Income consistency | ❌ Not available | ✅ Month-on-month patterns |
| Income sources | ❌ Not available | ✅ Multiple sources visible |
| Expense patterns | ❌ Not available | ✅ Fully visible |
| Cash surplus/deficit | ❌ Not available | ✅ Can calculate |
| Payment behavior | ✅ All loans | ⚠️ Only debits from account |
| Credit utilization | ✅ Complete | ❌ Not available |
| Credit history depth | ✅ Multi-year | ⚠️ Limited to statement period |

---

## Data Sources & Acquisition

### Bureau Data Acquisition

\`\`\`
┌─────────────────────────────────────────────────────────────────┐
│                    BUREAU DATA FLOW                              │
│                                                                  │
│  Application  →  Bureau API  →  Bureau Report  →  Feature       │
│  Submitted       Pull            Received         Extraction    │
│                                                                  │
│  Credit Bureaus (India):                                        │
│  • TransUnion CIBIL                                             │
│  • Experian                                                     │
│  • Equifax                                                      │
│  • CRIF High Mark                                               │
│                                                                  │
│  Data Retrieved:                                                │
│  • Credit score                                                 │
│  • Active loans (type, EMI, outstanding, tenure)                │
│  • Credit cards (limit, utilization)                            │
│  • Payment history (DPD for 36-84 months)                       │
│  • Inquiries                                                    │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
\`\`\`

### Bank Statement Acquisition Methods

| Method | Process | Pros | Cons |
|--------|---------|------|------|
| **PDF Upload** | Customer uploads bank statements | Simple | Manual, fraud risk |
| **Net Banking Fetch** | API integration with bank | Authentic | Limited bank coverage |
| **Account Aggregator (AA)** | RBI-regulated data sharing | Secure, consented, comprehensive | Requires AA integration |
| **Open Banking API** | Direct bank API (where available) | Real-time | Limited availability |

### Account Aggregator Framework (India)

\`\`\`
┌─────────────────────────────────────────────────────────────────┐
│                    ACCOUNT AGGREGATOR FLOW                       │
│                                                                  │
│  ┌──────────┐    ┌────────────┐    ┌──────────┐    ┌─────────┐  │
│  │ Customer │───>│ AA (NBFC)  │───>│ FIP      │───>│ FIU     │  │
│  │ Consent  │    │ Routes     │    │ (Bank)   │    │ (Lender)│  │
│  └──────────┘    │ Request    │    │ Provides │    │ Receives│  │
│                  └────────────┘    │ Data     │    │ Data    │  │
│                                    └──────────┘    └─────────┘  │
│                                                                  │
│  Data Available via AA:                                         │
│  • Bank accounts (savings, current, FD, RD)                     │
│  • Loans and credit facilities                                  │
│  • Investments (MF, stocks, bonds)                              │
│  • Insurance policies                                           │
│  • Tax records (GST, ITR)                                       │
│  • Pension accounts                                             │
│                                                                  │
│  Key Benefits:                                                  │
│  • Consent-based, customer controlled                           │
│  • Encrypted, secure transmission                               │
│  • Real-time data                                               │
│  • No storage by AA (pass-through only)                         │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
\`\`\`

### Statement Period Requirements

| Use Case | Minimum Period | Recommended Period |
|----------|----------------|-------------------|
| Income Verification | 3 months | 6 months |
| Self-Employed | 6 months | 12 months |
| Variable Income | 12 months | 24 months |
| Business Assessment | 12 months | 24 months |

---

## Bank Statement Analysis Methodology

### Core Analysis Pipeline

\`\`\`
┌─────────────────────────────────────────────────────────────────────────────┐
│                    BANK STATEMENT ANALYSIS PIPELINE                          │
│                                                                              │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────┐                   │
│  │ 1. INGEST    │───>│ 2. PARSE     │───>│ 3. CLEANSE   │                   │
│  │ PDF/API/AA   │    │ Extract txns │    │ Standardize  │                   │
│  └──────────────┘    └──────────────┘    └──────────────┘                   │
│         │                   │                   │                            │
│         v                   v                   v                            │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────┐                   │
│  │ 4. CATEGORIZE│───>│ 5. IDENTIFY  │───>│ 6. CALCULATE │                   │
│  │ Classify txns│    │ Income       │    │ Metrics      │                   │
│  └──────────────┘    └──────────────┘    └──────────────┘                   │
│         │                   │                   │                            │
│         v                   v                   v                            │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────────────────┐       │
│  │ 7. VALIDATE  │───>│ 8. SCORE     │───>│ 9. OUTPUT INCOME ESTIMATE│       │
│  │ Fraud checks │    │ Confidence   │    │ + Cash Flow Metrics      │       │
│  └──────────────┘    └──────────────┘    └──────────────────────────┘       │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
\`\`\`

### Key Metrics Extracted

#### Income Metrics

| Metric | Definition | Importance |
|--------|------------|------------|
| **Gross Monthly Income** | Total credits identified as income | Primary |
| **Net Monthly Income** | Gross income - regular deductions | Primary |
| **Primary Income** | Main salary/business income | High |
| **Secondary Income** | Additional income streams | Medium |
| **Income Stability** | Coefficient of variation of monthly income | High |
| **Income Trend** | Month-on-month growth/decline | High |

#### Cash Flow Metrics

| Metric | Definition | Importance |
|--------|------------|------------|
| **Average Monthly Balance (AMB)** | Mean of daily/monthly closing balances | High |
| **Minimum Balance** | Lowest balance in period | Medium |
| **Cash Surplus** | Income - Fixed Expenses | High |
| **EMI Coverage Ratio** | Cash Surplus / Proposed EMI | Critical |
| **Balance Volatility** | Std deviation of balances | Medium |

#### Behavioral Metrics

| Metric | Definition | Risk Signal |
|--------|------------|-------------|
| **Bounce/Return Count** | Cheque/ECS returns | High risk if >2 |
| **Overdraft Usage** | OD utilized / OD limit | Risk if >80% |
| **Low Balance Days** | Days with balance <₹5,000 | Risk if >10/month |
| **Inward Return Rate** | % of credits returned | Fraud indicator |

---

## Transaction Categorization

### Category Taxonomy

\`\`\`
┌─────────────────────────────────────────────────────────────────────────────┐
│                    TRANSACTION CATEGORY HIERARCHY                            │
│                                                                              │
│  CREDITS (Inflows)                                                          │
│  ├── INCOME                                                                 │
│  │   ├── Salary/Wages                                                       │
│  │   │   ├── Regular Salary                                                │
│  │   │   ├── Bonus                                                         │
│  │   │   └── Reimbursements                                                │
│  │   ├── Business Income                                                   │
│  │   │   ├── Sales Receipts                                                │
│  │   │   ├── Professional Fees                                             │
│  │   │   └── Commission                                                    │
│  │   ├── Rental Income                                                     │
│  │   ├── Investment Income                                                 │
│  │   │   ├── Dividends                                                     │
│  │   │   ├── Interest                                                      │
│  │   │   └── Capital Gains                                                 │
│  │   ├── Government/Pension                                                │
│  │   │   ├── Pension                                                       │
│  │   │   ├── Social Security                                               │
│  │   │   └── Government Benefits                                           │
│  │   └── Other Regular Income                                              │
│  │       ├── Freelance/Gig                                                 │
│  │       ├── Alimony/Child Support                                         │
│  │       └── Royalties                                                     │
│  └── NON-INCOME CREDITS                                                    │
│      ├── Transfers (Own accounts)                                          │
│      ├── Refunds                                                           │
│      ├── Loan Disbursements                                                │
│      ├── Credit Card Payments Received                                     │
│      └── One-time Receipts (Gift, Sale proceeds)                           │
│                                                                              │
│  DEBITS (Outflows)                                                          │
│  ├── FIXED OBLIGATIONS                                                      │
│  │   ├── Loan EMIs                                                         │
│  │   ├── Rent                                                              │
│  │   ├── Insurance Premiums                                                │
│  │   └── Recurring Subscriptions                                           │
│  ├── LIVING EXPENSES                                                        │
│  │   ├── Utilities                                                         │
│  │   ├── Groceries                                                         │
│  │   ├── Transportation                                                    │
│  │   └── Healthcare                                                        │
│  ├── DISCRETIONARY                                                          │
│  │   ├── Shopping                                                          │
│  │   ├── Dining/Entertainment                                              │
│  │   └── Travel                                                            │
│  └── INVESTMENTS/SAVINGS                                                    │
│      ├── SIP/Mutual Funds                                                  │
│      ├── Fixed Deposits                                                    │
│      └── PPF/EPF                                                           │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
\`\`\`

### Categorization Methods

#### 1. Rule-Based (Keywords)

\`\`\`python
# Sample keyword rules for categorization
INCOME_KEYWORDS = {
    'salary': ['salary', 'sal', 'payroll', 'wages'],
    'business': ['sales', 'receipt', 'collection', 'payment received'],
    'rental': ['rent', 'rental', 'lease'],
    'pension': ['pension', 'annuity', 'retirement'],
    'dividend': ['dividend', 'div', 'distribution'],
    'interest': ['interest', 'int credit', 'fd interest']
}

EMI_KEYWORDS = ['emi', 'loan', 'nach', 'ecs', 'mandate', 'auto debit']

TRANSFER_KEYWORDS = ['transfer', 'trf', 'neft', 'imps', 'rtgs', 'upi']

def categorize_by_keywords(description, amount, type):
    description_lower = description.lower()

    if type == 'CREDIT':
        for category, keywords in INCOME_KEYWORDS.items():
            if any(kw in description_lower for kw in keywords):
                return f'INCOME_{category.upper()}'

        if any(kw in description_lower for kw in TRANSFER_KEYWORDS):
            return 'TRANSFER_IN'

        return 'CREDIT_OTHER'

    else:  # DEBIT
        if any(kw in description_lower for kw in EMI_KEYWORDS):
            return 'EMI_PAYMENT'

        if any(kw in description_lower for kw in TRANSFER_KEYWORDS):
            return 'TRANSFER_OUT'

        return 'EXPENSE_OTHER'
\`\`\`

#### 2. ML-Based Classification

\`\`\`python
# ML model for transaction categorization
from sklearn.ensemble import RandomForestClassifier
from sklearn.feature_extraction.text import TfidfVectorizer

class TransactionCategorizer:
    def __init__(self):
        self.vectorizer = TfidfVectorizer(max_features=500)
        self.classifier = RandomForestClassifier(n_estimators=100)

    def extract_features(self, transaction):
        """Extract features from transaction"""
        features = {
            'description_vector': self.vectorizer.transform([transaction['description']]),
            'amount': transaction['amount'],
            'day_of_month': transaction['date'].day,
            'is_round_amount': transaction['amount'] % 1000 == 0,
            'amount_bucket': self.get_amount_bucket(transaction['amount'])
        }
        return features

    def predict_category(self, transaction):
        features = self.extract_features(transaction)
        prediction = self.classifier.predict(features)
        confidence = self.classifier.predict_proba(features).max()
        return prediction, confidence
\`\`\`

#### 3. Pattern-Based (Frequency & Timing)

\`\`\`python
def identify_salary_by_pattern(transactions):
    """
    Identify salary credits by pattern:
    - Similar amounts each month
    - Same day (or within 3-day window)
    - Regular frequency (monthly)
    """

    # Group credits by amount (within 5% tolerance)
    amount_groups = group_by_similar_amount(
        transactions,
        tolerance=0.05
    )

    salary_candidates = []

    for group in amount_groups:
        if len(group) >= 3:  # At least 3 occurrences
            # Check timing pattern
            days = [t['date'].day for t in group]

            # Check if dates are clustered (within 5-day range)
            if max(days) - min(days) <= 5 or is_end_of_month_pattern(days):
                # Check frequency (monthly)
                intervals = calculate_intervals(group)
                if is_monthly_pattern(intervals):
                    salary_candidates.append({
                        'transactions': group,
                        'average_amount': mean([t['amount'] for t in group]),
                        'frequency': 'monthly',
                        'typical_day': mode(days),
                        'confidence': calculate_pattern_confidence(group)
                    })

    return salary_candidates
\`\`\`

---

## Income Detection Algorithms

### Algorithm 1: Salary Detection (Salaried Individuals)

\`\`\`
┌─────────────────────────────────────────────────────────────────────────────┐
│                    SALARY DETECTION ALGORITHM                                │
│                                                                              │
│  INPUT: 6-12 months of bank transactions                                    │
│                                                                              │
│  STEP 1: Filter credit transactions                                         │
│  ─────────────────────────────────────────                                  │
│  • Remove transfers between own accounts                                    │
│  • Remove loan disbursements                                                │
│  • Remove refunds and reversals                                             │
│                                                                              │
│  STEP 2: Identify recurring credits                                         │
│  ────────────────────────────────────                                       │
│  • Group by similar amount (±5%)                                            │
│  • Filter groups with 3+ occurrences                                        │
│  • Check for monthly frequency                                              │
│                                                                              │
│  STEP 3: Apply salary heuristics                                            │
│  ───────────────────────────────                                            │
│  • Date pattern: 1st-7th or 25th-31st of month                             │
│  • Amount pattern: Consistent or with clear increments                      │
│  • Description: Contains salary keywords                                    │
│                                                                              │
│  STEP 4: Calculate confidence score                                         │
│  ─────────────────────────────────                                          │
│  Confidence = f(frequency_match, amount_consistency,                        │
│                  date_consistency, keyword_match)                           │
│                                                                              │
│  OUTPUT:                                                                    │
│  • Primary salary amount                                                    │
│  • Salary source (employer name if detectable)                              │
│  • Confidence score (0-1)                                                   │
│  • Income trend (growing/stable/declining)                                  │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
\`\`\`

### Algorithm 2: Business Income Detection (Self-Employed)

\`\`\`python
def detect_business_income(transactions, business_type='trading'):
    """
    Detect business income for self-employed individuals
    """

    # Step 1: Identify all credits
    credits = [t for t in transactions if t['type'] == 'CREDIT']

    # Step 2: Remove non-income credits
    non_income_patterns = [
        'loan', 'disbursement', 'transfer', 'refund',
        'reversal', 'fd maturity', 'redemption'
    ]

    business_credits = [
        t for t in credits
        if not any(p in t['description'].lower() for p in non_income_patterns)
    ]

    # Step 3: Calculate monthly totals
    monthly_income = {}
    for t in business_credits:
        month_key = t['date'].strftime('%Y-%m')
        monthly_income[month_key] = monthly_income.get(month_key, 0) + t['amount']

    # Step 4: Apply expense ratio
    expense_ratios = {
        'trading': 0.90,      # 10% margin
        'retail': 0.85,       # 15% margin
        'manufacturing': 0.80, # 20% margin
        'services': 0.60,     # 40% margin
        'professional': 0.50  # 50% margin
    }

    expense_ratio = expense_ratios.get(business_type, 0.70)

    # Step 5: Calculate net income
    monthly_net_income = {
        month: gross * (1 - expense_ratio)
        for month, gross in monthly_income.items()
    }

    # Step 6: Calculate average monthly income
    avg_monthly_income = sum(monthly_net_income.values()) / len(monthly_net_income)

    # Step 7: Assess stability
    income_values = list(monthly_net_income.values())
    stability_score = 1 - (std(income_values) / mean(income_values))

    return {
        'gross_monthly_turnover': mean(list(monthly_income.values())),
        'estimated_monthly_income': avg_monthly_income,
        'expense_ratio_used': expense_ratio,
        'stability_score': stability_score,
        'income_trend': calculate_trend(monthly_net_income),
        'months_analyzed': len(monthly_income)
    }
\`\`\`

### Algorithm 3: Multi-Source Income Aggregation

\`\`\`python
def aggregate_income_sources(transactions, bureau_data=None):
    """
    Identify and aggregate multiple income sources
    """

    income_sources = []

    # Detect salary income
    salary = detect_salary(transactions)
    if salary['confidence'] > 0.7:
        income_sources.append({
            'type': 'SALARY',
            'amount': salary['amount'],
            'frequency': 'monthly',
            'stability': 'high',
            'confidence': salary['confidence']
        })

    # Detect rental income
    rental = detect_rental_income(transactions)
    if rental['confidence'] > 0.6:
        income_sources.append({
            'type': 'RENTAL',
            'amount': rental['amount'],
            'frequency': 'monthly',
            'stability': 'high',
            'confidence': rental['confidence']
        })

    # Detect business income (if no clear salary)
    if not salary or salary['confidence'] < 0.5:
        business = detect_business_income(transactions)
        if business['estimated_monthly_income'] > 0:
            income_sources.append({
                'type': 'BUSINESS',
                'amount': business['estimated_monthly_income'],
                'frequency': 'variable',
                'stability': business['stability_score'],
                'confidence': 0.6 if business['stability_score'] > 0.5 else 0.4
            })

    # Detect other regular income
    other = detect_other_regular_income(transactions)
    for source in other:
        income_sources.append(source)

    # Calculate total monthly income
    total_income = sum(s['amount'] for s in income_sources)

    # Weight by stability and confidence
    weighted_income = sum(
        s['amount'] * s['stability'] * s['confidence']
        for s in income_sources
    ) / sum(s['stability'] * s['confidence'] for s in income_sources)

    return {
        'income_sources': income_sources,
        'total_monthly_income': total_income,
        'weighted_stable_income': weighted_income,
        'primary_source': max(income_sources, key=lambda x: x['amount'])['type'],
        'income_diversity': len(income_sources)
    }
\`\`\`

---

## Combining Bureau & Bank Statement Signals

### Signal Integration Framework

\`\`\`
┌─────────────────────────────────────────────────────────────────────────────┐
│                    COMBINED SIGNAL INTEGRATION                               │
│                                                                              │
│  BUREAU SIGNALS                    BANK STATEMENT SIGNALS                   │
│  ──────────────                    ──────────────────────                   │
│  • Total EMI load                  • Observed monthly income                │
│  • Credit limit (income proxy)     • Income consistency                     │
│  • Loan sanction amounts           • Cash surplus after expenses            │
│  • Payment behavior (DPD)          • Balance maintenance                    │
│  • Credit utilization              • EMI debit regularity                   │
│                                    • Bounce/return history                  │
│                                                                              │
│                    ┌───────────────────────────────┐                        │
│                    │     INTEGRATION ENGINE        │                        │
│                    │                               │                        │
│                    │  1. Calculate individual      │                        │
│                    │     income estimates          │                        │
│                    │                               │                        │
│                    │  2. Compare & validate        │                        │
│                    │                               │                        │
│                    │  3. Apply reconciliation      │                        │
│                    │     rules                     │                        │
│                    │                               │                        │
│                    │  4. Generate unified          │                        │
│                    │     income estimate           │                        │
│                    │                               │                        │
│                    └───────────────────────────────┘                        │
│                                    │                                        │
│                                    ▼                                        │
│                    ┌───────────────────────────────┐                        │
│                    │   UNIFIED INCOME ESTIMATE     │                        │
│                    │   + Confidence Score          │                        │
│                    │   + Risk Flags                │                        │
│                    └───────────────────────────────┘                        │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
\`\`\`

### Reconciliation Rules

| Scenario | Bureau Income | Bank Income | Resolution |
|----------|---------------|-------------|------------|
| **Match** | ₹1.0L | ₹1.0-1.1L | Use bank income (directly observed) |
| **Bureau Higher** | ₹1.5L | ₹1.0L | Flag for review - possible income decline |
| **Bank Higher** | ₹1.0L | ₹1.5L | Verify bank income source - may be under-leveraged |
| **No Bureau** | N/A | ₹0.8L | Use bank income with NTC flag |
| **No Bank** | ₹1.2L | N/A | Use bureau estimate with lower confidence |
| **Both Low** | ₹0.5L | ₹0.4L | Use lower, flag capacity concern |

### Confidence Scoring Matrix

\`\`\`python
def calculate_combined_confidence(bureau_estimate, bank_estimate, variance):
    """
    Calculate confidence in combined income estimate
    """

    base_confidence = 0.5

    # Factor 1: Source agreement
    if abs(variance) < 0.10:  # Within 10%
        base_confidence += 0.25
    elif abs(variance) < 0.20:  # Within 20%
        base_confidence += 0.15
    elif abs(variance) < 0.30:  # Within 30%
        base_confidence += 0.05
    else:
        base_confidence -= 0.10  # Significant mismatch

    # Factor 2: Bureau data quality
    if bureau_estimate['has_home_loan']:
        base_confidence += 0.10  # HL means verified income
    if bureau_estimate['clean_track_months'] >= 24:
        base_confidence += 0.05

    # Factor 3: Bank statement quality
    if bank_estimate['months_analyzed'] >= 6:
        base_confidence += 0.05
    if bank_estimate['income_stability'] > 0.8:
        base_confidence += 0.10
    if bank_estimate['no_bounces']:
        base_confidence += 0.05

    return min(base_confidence, 0.95)  # Cap at 95%
\`\`\`

---

## Unified Income Estimation Model

### Model Architecture

\`\`\`python
class UnifiedIncomeEstimator:
    """
    Combines bureau and bank statement data for income estimation
    """

    def __init__(self):
        self.bureau_model = BureauIncomeModel()
        self.bank_model = BankStatementIncomeModel()
        self.reconciliation_rules = ReconciliationRules()

    def estimate(self, bureau_data, bank_statements):
        """
        Main estimation method
        """

        # Step 1: Bureau-based estimation
        bureau_estimate = self.bureau_model.estimate(bureau_data)

        # Step 2: Bank statement-based estimation
        bank_estimate = self.bank_model.estimate(bank_statements)

        # Step 3: Cross-validation
        validation_result = self.cross_validate(bureau_estimate, bank_estimate)

        # Step 4: Apply reconciliation
        unified_estimate = self.reconciliation_rules.apply(
            bureau_estimate,
            bank_estimate,
            validation_result
        )

        # Step 5: Calculate eligible income for lending
        eligible_income = self.calculate_eligible_income(
            unified_estimate,
            bureau_data,
            bank_statements
        )

        return {
            'bureau_estimate': bureau_estimate,
            'bank_estimate': bank_estimate,
            'unified_estimate': unified_estimate,
            'eligible_income': eligible_income,
            'validation_flags': validation_result['flags'],
            'confidence': unified_estimate['confidence']
        }

    def calculate_eligible_income(self, unified_estimate, bureau_data, bank_statements):
        """
        Calculate income eligible for EMI calculation
        """

        base_income = unified_estimate['amount']

        # Apply haircuts based on income type
        if unified_estimate['primary_source'] == 'SALARY':
            haircut = 0.00  # No haircut for salary
        elif unified_estimate['primary_source'] == 'BUSINESS':
            haircut = 0.20  # 20% haircut for business
        else:
            haircut = 0.15  # 15% for other

        # Additional haircut for low confidence
        if unified_estimate['confidence'] < 0.7:
            haircut += 0.10

        # Additional haircut for income volatility
        if bank_statements.get('income_cv', 0) > 0.25:
            haircut += 0.10

        eligible_income = base_income * (1 - haircut)

        return {
            'gross_income': base_income,
            'haircut_applied': haircut,
            'eligible_income': eligible_income,
            'haircut_reasons': self.get_haircut_reasons(haircut, unified_estimate)
        }
\`\`\`

### Feature Combination for ML Model

\`\`\`python
def create_combined_features(bureau_data, bank_data):
    """
    Create feature set combining bureau and bank statement data
    """

    features = {}

    # Bureau features
    features['bureau_total_emi'] = bureau_data.get('total_emi', 0)
    features['bureau_cc_limit'] = bureau_data.get('total_cc_limit', 0)
    features['bureau_max_dpd'] = bureau_data.get('max_dpd', 0)
    features['bureau_credit_age'] = bureau_data.get('credit_age_months', 0)
    features['bureau_loan_count'] = bureau_data.get('active_loan_count', 0)
    features['bureau_has_hl'] = int(bureau_data.get('has_home_loan', False))
    features['bureau_utilization'] = bureau_data.get('cc_utilization', 0)

    # Bank statement features
    features['bank_avg_income'] = bank_data.get('avg_monthly_income', 0)
    features['bank_income_stability'] = bank_data.get('income_cv', 0)
    features['bank_avg_balance'] = bank_data.get('avg_balance', 0)
    features['bank_min_balance'] = bank_data.get('min_balance', 0)
    features['bank_bounce_count'] = bank_data.get('bounce_count', 0)
    features['bank_income_sources'] = bank_data.get('income_source_count', 1)
    features['bank_expense_ratio'] = bank_data.get('expense_to_income', 0)

    # Cross-validated features
    features['emi_to_bank_income'] = (
        features['bureau_total_emi'] / max(features['bank_avg_income'], 1)
    )
    features['bureau_implied_income'] = features['bureau_total_emi'] / 0.5
    features['income_match_score'] = calculate_match_score(
        features['bureau_implied_income'],
        features['bank_avg_income']
    )
    features['balance_to_emi_ratio'] = (
        features['bank_avg_balance'] / max(features['bureau_total_emi'], 1)
    )

    return features
\`\`\`

---

## Cash Flow Based Underwriting

### Cash Flow Metrics for Loan Eligibility

\`\`\`
┌─────────────────────────────────────────────────────────────────────────────┐
│                    CASH FLOW UNDERWRITING FRAMEWORK                          │
│                                                                              │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │                     INCOME ANALYSIS                                  │    │
│  │  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐     │    │
│  │  │ Primary Income  │  │ Secondary       │  │ Total Gross     │     │    │
│  │  │ (Salary/Biz)    │  │ Income          │  │ Income          │     │    │
│  │  │ ₹1,00,000       │ +│ ₹20,000         │ =│ ₹1,20,000       │     │    │
│  │  └─────────────────┘  └─────────────────┘  └─────────────────┘     │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                    │                                        │
│                                    ▼                                        │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │                     EXPENSE ANALYSIS                                 │    │
│  │  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐     │    │
│  │  │ Fixed           │  │ Living          │  │ Total Fixed +   │     │    │
│  │  │ Obligations     │  │ Expenses        │  │ Essential       │     │    │
│  │  │ ₹35,000         │ +│ ₹25,000         │ =│ ₹60,000         │     │    │
│  │  │ (EMIs)          │  │ (Utilities,etc) │  │                 │     │    │
│  │  └─────────────────┘  └─────────────────┘  └─────────────────┘     │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                    │                                        │
│                                    ▼                                        │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │                     SURPLUS CALCULATION                              │    │
│  │                                                                      │    │
│  │  Cash Surplus = Gross Income - Fixed Obligations - Living Expenses  │    │
│  │  Cash Surplus = ₹1,20,000 - ₹35,000 - ₹25,000 = ₹60,000            │    │
│  │                                                                      │    │
│  │  Available for New EMI = Cash Surplus × Safety Factor               │    │
│  │  Available for New EMI = ₹60,000 × 0.70 = ₹42,000                  │    │
│  │                                                                      │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
\`\`\`

### EMI Affordability Calculation

\`\`\`python
def calculate_emi_affordability(income_data, expense_data, bureau_data):
    """
    Calculate maximum affordable EMI based on cash flow analysis
    """

    # Method 1: FOIR-based (Traditional)
    gross_income = income_data['gross_monthly_income']
    existing_emi = bureau_data['total_emi']
    max_foir = 0.55  # 55% FOIR cap

    foir_based_emi = (gross_income * max_foir) - existing_emi

    # Method 2: Cash flow-based (Enhanced)
    monthly_income = income_data['verified_monthly_income']
    fixed_expenses = expense_data['fixed_obligations']  # From bank statement
    essential_expenses = expense_data['essential_living']  # From bank statement

    cash_surplus = monthly_income - fixed_expenses - essential_expenses
    safety_buffer = 0.70  # Keep 30% buffer

    cashflow_based_emi = cash_surplus * safety_buffer

    # Method 3: Balance maintenance-based
    avg_balance = income_data['avg_monthly_balance']
    min_balance_required = 20000  # Minimum balance cushion

    balance_based_emi = (avg_balance - min_balance_required) * 0.5

    # Final eligible EMI (conservative of all methods)
    eligible_emi = min(foir_based_emi, cashflow_based_emi, balance_based_emi)

    return {
        'foir_based_emi': foir_based_emi,
        'cashflow_based_emi': cashflow_based_emi,
        'balance_based_emi': balance_based_emi,
        'final_eligible_emi': max(eligible_emi, 0),
        'limiting_factor': identify_limiting_factor(
            foir_based_emi, cashflow_based_emi, balance_based_emi
        )
    }
\`\`\`

---

## Fraud Detection & Validation

### Red Flags from Combined Analysis

| Red Flag | Bureau Signal | Bank Signal | Risk Level |
|----------|---------------|-------------|------------|
| **Income Inflation** | EMI load suggests ₹80K income | Bank shows ₹1.5L income | High |
| **Salary Kiting** | No salary account EMIs | Large "salary" credits from unusual sources | Critical |
| **Round-Tripping** | Recent loan disbursement | Same amount deposited as "income" | Critical |
| **Multiple Applications** | High inquiry count | Multiple lenders disbursing simultaneously | High |
| **Cash Deposits** | Low EMI load | High cash deposits as income | Medium |
| **Statement Tampering** | Clean bureau | Inconsistent formatting, metadata issues | Critical |

### Validation Checks

\`\`\`python
def validate_income_sources(bureau_data, bank_data):
    """
    Cross-validate income sources between bureau and bank data
    """

    flags = []

    # Check 1: EMI payment verification
    bureau_emis = bureau_data['monthly_emi_list']
    bank_emi_debits = bank_data['emi_debits']

    for emi in bureau_emis:
        matching_debit = find_matching_debit(emi, bank_emi_debits)
        if not matching_debit:
            flags.append({
                'type': 'EMI_NOT_FOUND',
                'severity': 'HIGH',
                'message': f"EMI of ₹{emi['amount']} not found in bank statement"
            })

    # Check 2: Recent loan vs. income spike
    recent_loans = get_recent_disbursements(bureau_data, months=3)
    income_pattern = bank_data['income_trend']

    if recent_loans and income_pattern['spike_detected']:
        flags.append({
            'type': 'INCOME_SPIKE_WITH_NEW_LOAN',
            'severity': 'CRITICAL',
            'message': "Income spike coincides with recent loan disbursement"
        })

    # Check 3: Salary source verification
    salary_credits = bank_data['identified_salary']
    if salary_credits:
        employer_name = extract_employer_name(salary_credits)
        # Verify against known employer databases if available
        if not verify_employer(employer_name):
            flags.append({
                'type': 'UNVERIFIED_EMPLOYER',
                'severity': 'MEDIUM',
                'message': f"Employer '{employer_name}' could not be verified"
            })

    # Check 4: Cash deposit ratio
    cash_deposits = bank_data['cash_deposit_total']
    total_income = bank_data['total_credits']
    cash_ratio = cash_deposits / total_income if total_income > 0 else 0

    if cash_ratio > 0.30:  # More than 30% cash deposits
        flags.append({
            'type': 'HIGH_CASH_DEPOSITS',
            'severity': 'MEDIUM',
            'message': f"Cash deposits are {cash_ratio:.0%} of total income"
        })

    return flags
\`\`\`

### Document Authenticity Checks

\`\`\`python
def check_statement_authenticity(bank_statement_file):
    """
    Check for signs of tampering in bank statement PDF
    """

    checks = []

    # Check 1: PDF metadata
    metadata = extract_pdf_metadata(bank_statement_file)
    if metadata['creator'] not in KNOWN_BANK_GENERATORS:
        checks.append({'check': 'PDF_CREATOR', 'status': 'SUSPECT'})

    # Check 2: Font consistency
    fonts = extract_fonts(bank_statement_file)
    if len(set(fonts)) > 3:  # Too many different fonts
        checks.append({'check': 'FONT_CONSISTENCY', 'status': 'SUSPECT'})

    # Check 3: Date sequence
    transactions = extract_transactions(bank_statement_file)
    if not is_date_sequence_valid(transactions):
        checks.append({'check': 'DATE_SEQUENCE', 'status': 'FAIL'})

    # Check 4: Balance reconciliation
    if not verify_running_balance(transactions):
        checks.append({'check': 'BALANCE_RECONCILIATION', 'status': 'FAIL'})

    # Check 5: Format consistency
    if has_format_anomalies(bank_statement_file):
        checks.append({'check': 'FORMAT_CONSISTENCY', 'status': 'SUSPECT'})

    return checks
\`\`\`

---

## Implementation Architecture

### System Architecture

\`\`\`
┌─────────────────────────────────────────────────────────────────────────────┐
│                    INCOME ESTIMATION SYSTEM ARCHITECTURE                     │
│                                                                              │
│  ┌────────────────┐    ┌────────────────┐    ┌────────────────┐            │
│  │ Application    │    │ Bureau APIs    │    │ AA / Bank      │            │
│  │ System         │    │ (CIBIL, etc.)  │    │ Statement APIs │            │
│  └───────┬────────┘    └───────┬────────┘    └───────┬────────┘            │
│          │                     │                     │                      │
│          └─────────────────────┼─────────────────────┘                      │
│                                │                                            │
│                                ▼                                            │
│                    ┌──────────────────────┐                                 │
│                    │   DATA INGESTION     │                                 │
│                    │   LAYER              │                                 │
│                    │   • API connectors   │                                 │
│                    │   • PDF parsers      │                                 │
│                    │   • Data validation  │                                 │
│                    └──────────┬───────────┘                                 │
│                               │                                             │
│                               ▼                                             │
│         ┌─────────────────────┼─────────────────────┐                       │
│         │                     │                     │                       │
│         ▼                     ▼                     ▼                       │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────┐                  │
│  │ BUREAU       │    │ BANK STMT    │    │ FRAUD        │                  │
│  │ PROCESSOR    │    │ ANALYZER     │    │ DETECTOR     │                  │
│  │              │    │              │    │              │                  │
│  │ • Feature    │    │ • Txn parse  │    │ • Cross-val  │                  │
│  │   extraction │    │ • Categorize │    │ • Anomaly    │                  │
│  │ • EMI calc   │    │ • Income ID  │    │ • Tampering  │                  │
│  │ • Scoring    │    │ • Cash flow  │    │              │                  │
│  └──────┬───────┘    └──────┬───────┘    └──────┬───────┘                  │
│         │                   │                   │                          │
│         └───────────────────┼───────────────────┘                          │
│                             │                                              │
│                             ▼                                              │
│                    ┌──────────────────────┐                                │
│                    │   INTEGRATION        │                                │
│                    │   ENGINE             │                                │
│                    │   • Reconciliation   │                                │
│                    │   • Confidence calc  │                                │
│                    │   • Final estimate   │                                │
│                    └──────────┬───────────┘                                │
│                               │                                            │
│                               ▼                                            │
│                    ┌──────────────────────┐                                │
│                    │   DECISION ENGINE    │                                │
│                    │   • Eligibility      │                                │
│                    │   • EMI calculation  │                                │
│                    │   • Risk flags       │                                │
│                    └──────────────────────┘                                │
│                                                                            │
└─────────────────────────────────────────────────────────────────────────────┘
\`\`\`

### API Response Structure

\`\`\`json
{
    "request_id": "REQ-2026-001234",
    "applicant_id": "APP-567890",
    "timestamp": "2026-01-31T10:30:00Z",

    "bureau_analysis": {
        "score": 745,
        "total_emi": 45000,
        "implied_income": {
            "amount": 112500,
            "method": "FOIR_REVERSE",
            "confidence": 0.70
        },
        "credit_utilization": 0.35,
        "max_dpd": 0,
        "has_home_loan": true
    },

    "bank_statement_analysis": {
        "period_analyzed": "2025-07 to 2025-12",
        "months": 6,
        "observed_income": {
            "primary": {
                "type": "SALARY",
                "amount": 118000,
                "employer": "ABC Technologies Pvt Ltd",
                "frequency": "monthly",
                "consistency": 0.95
            },
            "secondary": [
                {
                    "type": "RENTAL",
                    "amount": 15000,
                    "consistency": 1.0
                }
            ],
            "total": 133000
        },
        "cash_flow": {
            "avg_monthly_balance": 85000,
            "min_balance": 22000,
            "avg_surplus": 48000,
            "expense_ratio": 0.64
        },
        "risk_indicators": {
            "bounce_count": 0,
            "od_usage": 0,
            "low_balance_days": 2
        }
    },

    "unified_estimate": {
        "gross_monthly_income": 133000,
        "eligible_income": 125000,
        "haircut_applied": 0.06,
        "confidence": 0.88,
        "income_band": "1.25L-1.50L",
        "primary_method": "BANK_OBSERVED",
        "validation_status": "CONSISTENT"
    },

    "emi_eligibility": {
        "existing_emi": 45000,
        "max_new_emi": 42000,
        "total_emi_capacity": 87000,
        "foir_current": 0.34,
        "foir_post_loan": 0.66,
        "limiting_factor": "FOIR_CAP"
    },

    "fraud_flags": [],
    "warnings": [
        "Income grew 12% in last 6 months - verify sustainability"
    ],

    "recommendation": "APPROVE_WITH_STANDARD_REVIEW"
}
\`\`\`

---

## India-Specific: Account Aggregator Framework

### AA Integration for Lending

\`\`\`
┌─────────────────────────────────────────────────────────────────────────────┐
│                    AA INTEGRATION FOR HOME LOANS                             │
│                                                                              │
│  CUSTOMER JOURNEY                                                           │
│  ────────────────                                                           │
│                                                                              │
│  1. Customer initiates loan application                                     │
│     │                                                                       │
│     ▼                                                                       │
│  2. Lender (FIU) sends consent request via AA                              │
│     │                                                                       │
│     ▼                                                                       │
│  3. Customer approves consent on AA app                                    │
│     │                                                                       │
│     ▼                                                                       │
│  4. AA fetches data from banks (FIPs)                                      │
│     │                                                                       │
│     ▼                                                                       │
│  5. Encrypted data transmitted to lender                                   │
│     │                                                                       │
│     ▼                                                                       │
│  6. Lender decrypts and analyzes data                                      │
│     │                                                                       │
│     ▼                                                                       │
│  7. Income estimation & underwriting decision                              │
│                                                                              │
│  DATA TYPES AVAILABLE VIA AA                                                │
│  ───────────────────────────                                                │
│  • Bank accounts (Savings, Current, OD, CC)                                │
│  • Deposits (FD, RD)                                                        │
│  • Loans (all lender relationships)                                        │
│  • Investments (MF, Stocks, Bonds, NPS)                                    │
│  • Insurance (Life, Health, General)                                       │
│  • Tax records (GST for business)                                          │
│                                                                              │
│  BENEFITS FOR HOME LOAN UNDERWRITING                                        │
│  ───────────────────────────────────                                        │
│  • Comprehensive view across all banks                                     │
│  • Real-time data (not stale PDFs)                                         │
│  • Reduced fraud (no tampering possible)                                   │
│  • Faster processing (minutes vs. days)                                    │
│  • Better customer experience (no document uploads)                        │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
\`\`\`

### AA Data Fields for Income Estimation

| Data Category | Fields | Use in Income Estimation |
|---------------|--------|--------------------------|
| **Deposit Account** | Transactions, Balance, Account type | Primary income source |
| **Term Deposits** | Principal, Maturity, Interest | Wealth indicator |
| **Credit Facilities** | Limit, Outstanding, EMI | Existing obligations |
| **Mutual Funds** | Holdings, NAV, SIP | Investment capacity |
| **Insurance** | Premium, Sum assured | Fixed obligation |
| **GST Data** | Turnover, Tax paid | Business income verification |

---

## Use Cases & Decision Rules

### Decision Matrix

| Bureau Data | Bank Data | Combined Estimate | Decision |
|-------------|-----------|-------------------|----------|
| ✅ Good (750+), Low EMI | ✅ High income, stable | High confidence | Auto-approve eligible |
| ✅ Good, Moderate EMI | ✅ Moderate income, stable | Good confidence | Standard approval |
| ✅ Good, High EMI | ⚠️ Income matches but tight | Adequate | Approve with monitoring |
| ⚠️ Fair (650-700) | ✅ Strong cash flow | Cross-validated | Approve with conditions |
| ❌ No bureau (NTC) | ✅ Good income observed | Bank-dependent | Approve with higher LTV |
| ✅ Good | ⚠️ Income volatile | Concern | Refer for review |
| ✅ Good, Low EMI | 🔴 Low/No income observed | Mismatch | Investigate |
| 🔴 Poor (<600) | ✅ Good income | Mixed signals | Case-by-case |

### Segment-Specific Rules

#### Salaried Applicants

\`\`\`python
def evaluate_salaried(bureau, bank):
    income = bank['salary_income']
    stability = bank['income_consistency']

    if stability > 0.90 and bureau['max_dpd'] == 0:
        return {
            'eligible_income': income,
            'haircut': 0,
            'confidence': 'HIGH',
            'docs_required': ['salary_slip_latest', 'form16_latest']
        }
    elif stability > 0.75:
        return {
            'eligible_income': income * 0.95,
            'haircut': 0.05,
            'confidence': 'MEDIUM',
            'docs_required': ['salary_slip_3months', 'form16_2years']
        }
    else:
        return {
            'eligible_income': income * 0.85,
            'haircut': 0.15,
            'confidence': 'LOW',
            'docs_required': ['salary_slip_6months', 'employment_letter', 'form16_2years']
        }
\`\`\`

#### Self-Employed Applicants

\`\`\`python
def evaluate_self_employed(bureau, bank, business_type):
    gross_turnover = bank['business_credits']
    expense_ratio = get_expense_ratio(business_type)
    estimated_income = gross_turnover * (1 - expense_ratio)

    # Cross-validate with bureau
    if bureau['total_emi'] > 0:
        bureau_implied = bureau['total_emi'] / 0.45
        variance = abs(estimated_income - bureau_implied) / bureau_implied

        if variance < 0.20:
            confidence = 'HIGH'
            haircut = 0.10
        elif variance < 0.40:
            confidence = 'MEDIUM'
            haircut = 0.20
        else:
            confidence = 'LOW'
            haircut = 0.30
    else:
        confidence = 'MEDIUM'
        haircut = 0.25

    return {
        'gross_turnover': gross_turnover,
        'expense_ratio': expense_ratio,
        'estimated_income': estimated_income,
        'eligible_income': estimated_income * (1 - haircut),
        'confidence': confidence,
        'docs_required': ['itr_3years', 'gst_returns', 'bank_stmt_12months']
    }
\`\`\`

---

## Sources

### Bank Statement Analysis
- [Ocrolus Cash Flow Analysis](https://www.ocrolus.com/cash-flow-analysis/)
- [HyperVerge Bank Statement Analysis Guide](https://hyperverge.co/blog/bank-statement-analysis/)
- [Plaid Cash Flow Underwriting](https://plaid.com/resources/lending/cash-flow-underwriting/)
- [HyperVerge Cash Flow for Income Checks](https://hyperverge.co/blog/cash-flow-analysis-for-income-verification/)
- [Mastercard/Finicity Cash Flow Insights](https://www.finicity.com/lend/cash-flow/)
- [Equifax Cashflow Insights](https://www.equifax.com/business/product/cashflow-insights/)

### Bank Statement Loan Methodology
- [DAK Mortgage - Bank Statement Calculation Methods](https://davidakrebs.com/bank-statement-loan-calculation-methods/)
- [Morty - Bank Statement Loans Guide](https://www.morty.com/resources/loan-officers/product-playbook/bank-statement-loans-explained-a-guide-for-loan-officers-and-brokers)
- [Ocrolus Bank Statement Income Calculator](https://docs.ocrolus.com/docs/bank-statement-income-calculator)

### Transaction Categorization
- [Plaid ML for Income Verification](https://plaid.com/blog/machine-learning-income-verification/)
- [DocuClipper Transaction Categorization Guide](https://www.docuclipper.com/blog/transaction-categorization-guide/)
- [Neontri AI Transaction Categorization](https://neontri.com/blog/ai-transaction-categorization/)
- [Codat Transaction Categorization](https://codat.io/blog/how-does-bank-transaction-categorization-actually-work/)
- [Swedbank Categorization Method](https://medium.com/@swedbank.tech/how-does-categorization-of-transactions-work-4262d720fd2d)

### Account Aggregator (India)
- [Ministry of Finance - AA Framework](https://financialservices.gov.in/beta/en/account-aggregator-framework)
- [Invest India - AA Network](https://www.investindia.gov.in/team-india-blogs/account-aggregator-indias-next-digital-innovation)
- [HyperVerge - RBI AA Framework Deep Dive](https://hyperverge.co/blog/account-aggregator-framework-rbi/)
- [PIB - AA Network Announcement](https://www.pib.gov.in/PressReleaseIframePage.aspx?PRID=1753713)
- [PIB - AA Ecosystem 4 Year Celebration](https://www.pib.gov.in/PressReleasePage.aspx?PRID=2162953)
- [Fego.ai - AA Explained](https://medium.com/@Fegoai/account-aggregator-explained-how-rbi-is-revolutionizing-financial-data-sharing-8ef7e67a181c)
- [ACR Journal - AA Impact Study](https://acr-journal.com/article/the-transformative-impact-of-the-account-aggregator-framework-on-financial-inclusion-in-india-a-multi-sectoral-study-of-msmes-microfinance-and-personal-lending-1852/)

### Bureau Products
- [Experian Income Insight](https://www.experian.com/business/products/income-insight)
- [Equifax Consumer IncomeView+](https://www.equifax.com/business/product/consumer-incomeview/)
- [TransUnion CIBIL Income Estimator](https://www.transunioncibil.com/product/income-estimator)

### Surrogate Lending
- [Omozing Banking Surrogate](https://www.omozing.com/banking-surrogate-documents-and-eligibility/)
- [LinkedIn Surrogate Income](https://www.linkedin.com/pulse/what-surrogate-income-robin-chaturvedi)

---

*Bureau + Bank Statement Income Imputation Methodology - January 2026*
*Version 1.0*
`;

docsContent["Scorecard_Quick_Reference_Tables.md"] = `# Housing Finance Scorecard - Quick Reference Tables

## 1. Sample Point-Based Scorecard Template

### Credit Score Points

| CIBIL/Credit Score | Points |
|-------------------|--------|
| 800+ | 100 |
| 750-799 | 85 |
| 700-749 | 70 |
| 650-699 | 50 |
| 600-649 | 30 |
| Below 600 | 0 |

### Loan-to-Value (LTV) Points

| LTV Ratio | Points |
|-----------|--------|
| ≤60% | 100 |
| 61-70% | 85 |
| 71-75% | 70 |
| 76-80% | 55 |
| 81-85% | 35 |
| 86-90% | 15 |
| >90% | 0 |

### Debt-to-Income / FOIR Points

| DTI/FOIR | Points |
|----------|--------|
| ≤30% | 100 |
| 31-40% | 85 |
| 41-45% | 70 |
| 46-50% | 55 |
| 51-55% | 35 |
| 56-60% | 15 |
| >60% | 0 |

### Employment Stability Points

| Tenure at Current Job | Points |
|----------------------|--------|
| 10+ years | 100 |
| 5-10 years | 85 |
| 3-5 years | 70 |
| 2-3 years | 55 |
| 1-2 years | 35 |
| 6 months - 1 year | 15 |
| <6 months | 0 |

### Age Factor Points

| Age Group | Max Tenure | Points |
|-----------|-----------|--------|
| 21-30 | 30 years | 100 |
| 31-40 | 25-30 years | 90 |
| 41-50 | 20-25 years | 75 |
| 51-55 | 10-15 years | 50 |
| 56-60 | 5-10 years | 30 |
| 60+ | Case-by-case | 15 |

### Property Type Points

| Property Type | Points |
|--------------|--------|
| Independent House (Approved) | 100 |
| Apartment (Reputed Builder) | 95 |
| Apartment (Other Approved) | 80 |
| Under Construction | 65 |
| Resale Property | 70 |
| Self-Construction | 50 |
| Land Purchase | 30 |

### Income Source Points

| Employment Type | Points |
|----------------|--------|
| Government | 100 |
| PSU | 95 |
| MNC | 90 |
| Large Private | 80 |
| SME | 65 |
| Self-Employed (3+ years) | 70 |
| Self-Employed (<3 years) | 45 |
| Informal Sector | 30 |

---

## 2. Sample Weighting Matrix

| Category | Weight | Max Points | Max Weighted Score |
|----------|--------|------------|-------------------|
| Credit Score | 25% | 100 | 25 |
| LTV Ratio | 20% | 100 | 20 |
| DTI/FOIR | 20% | 100 | 20 |
| Employment | 15% | 100 | 15 |
| Age/Tenure | 5% | 100 | 5 |
| Property Type | 10% | 100 | 10 |
| Income Source | 5% | 100 | 5 |
| **Total** | **100%** | - | **100** |

---

## 3. Decision Matrix

| Total Score | Decision | Action |
|-------------|----------|--------|
| 80-100 | Auto-Approve | Proceed to documentation |
| 65-79 | Approve with Review | Standard underwriting review |
| 50-64 | Refer | Senior underwriter review |
| 35-49 | Conditional | Requires compensating factors |
| Below 35 | Decline | Reject with adverse action notice |

---

## 4. Risk-Based Pricing Grid

| Score Range | Risk Tier | Rate Adjustment |
|-------------|-----------|-----------------|
| 85-100 | Tier 1 (Prime) | Base Rate |
| 70-84 | Tier 2 (Near Prime) | Base + 25 bps |
| 55-69 | Tier 3 (Standard) | Base + 50-75 bps |
| 40-54 | Tier 4 (Sub-Prime) | Base + 100-150 bps |
| Below 40 | Tier 5 (High Risk) | Base + 200+ bps or Decline |

---

## 5. Minimum Eligibility Criteria (Hard Filters)

| Criteria | Minimum Requirement |
|----------|---------------------|
| Age | 21 years (minimum) |
| Age at Maturity | 65-70 years (maximum) |
| Credit Score | 600 (absolute minimum) |
| FOIR | 65% (maximum) |
| LTV | 90% (maximum) |
| Employment Tenure | 6 months (minimum) |
| Business Vintage (Self-Employed) | 2 years (minimum) |
| Property Age | 40 years at loan maturity |

---

## 6. Compensating Factors

### Strong Compensating Factors (+10-15 points each)
- Down payment >25%
- Liquid reserves >6 months PITI
- Co-applicant with good credit
- Property in prime location
- Income growth >15% YoY

### Moderate Compensating Factors (+5-10 points each)
- Down payment 20-25%
- Liquid reserves 3-6 months PITI
- Long residence stability (5+ years)
- Professional qualifications (CA, Doctor, etc.)
- Government/PSU employee

### Negative Factors (-5-15 points each)
- Recent job change (<6 months)
- High credit utilization (>70%)
- Multiple recent inquiries (>5 in 6 months)
- Past due accounts (even if current now)
- Property in non-preferred location

---

## 7. Document Checklist by Category

### Identity & Address
- [ ] PAN Card
- [ ] Aadhaar Card
- [ ] Passport/Voter ID
- [ ] Utility Bill (Address proof)

### Income - Salaried
- [ ] Salary slips (3-6 months)
- [ ] Form 16 (2 years)
- [ ] Bank statements (6-12 months)
- [ ] Employment letter

### Income - Self-Employed
- [ ] ITR (3 years)
- [ ] Business registration
- [ ] GST returns
- [ ] Bank statements (12 months)
- [ ] P&L and Balance Sheet

### Property
- [ ] Sale agreement
- [ ] Title documents
- [ ] Approved plan
- [ ] NOCs (if applicable)
- [ ] Builder-buyer agreement
- [ ] Valuation report

---

## 8. Fraud Red Flags

| Category | Red Flags |
|----------|-----------|
| Identity | Multiple names/addresses, new identity documents, address mismatch |
| Income | Round figure salary, inconsistent bank deposits, employer verification failure |
| Employment | Newly registered company, cannot reach employer, fake offer letter |
| Property | Price significantly above market, multiple sales in short period |
| Application | Multiple applications, inconsistent information across documents |
| Behavior | Rushed process, resistance to verification, third-party involvement |

---

## 9. Key Metrics for Model Monitoring

| Metric | Good Threshold | Action Trigger |
|--------|---------------|----------------|
| Approval Rate | 40-60% | <30% or >75% |
| KS Statistic | >0.30 | <0.25 |
| Gini Coefficient | >0.40 | <0.35 |
| ROC-AUC | >0.70 | <0.65 |
| PSI (Population Stability) | <0.10 | >0.20 |
| Default Rate (90+ DPD) | <3% | >5% |

---

## 10. Information Value (IV) Reference

| IV Range | Predictive Power | Action |
|----------|------------------|--------|
| <0.02 | Not useful | Exclude variable |
| 0.02-0.10 | Weak | Consider for secondary use |
| 0.10-0.30 | Medium | Include in model |
| 0.30-0.50 | Strong | Primary predictor |
| >0.50 | Suspicious | Check for leakage/overfit |

---

*Quick Reference Tables - January 2026*
`;

