
export const docTitles: Record<string, string> = {
    "Housing_Finance_Applicant_Evaluation_Scorecard_Research.md": "Scorecard Research",
    "Scorecard_Quick_Reference_Tables.md": "Quick Reference Tables",
    "Crosstab_Cohort_Framework.md": "Crosstab Framework",
    "Cohort_Movement_Tracker_Template.md": "Cohort Tracker Template",
    "Income_Imputation_Bureau_Only.md": "Income Imputation (Bureau)",
    "Income_Imputation_Bureau_Plus_BankStatement.md": "Income Imputation (Bureau + Bank)"
};

export const docsContent: Record<string, string> = {};


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


docsContent["Crosstab_Cohort_Framework.md"] = `# Crosstab Framework & Cohort Methodology

## 1. Overview and Objectives

This document outlines the framework for the **Crosstab Decision Matrix**, which integrates two independent risk dimensions—**Application Score** (Internal) and **Bureau Score** (External)—to create a granular risk segmentation grid.

### Objectives
1. **Granular Risk Segmentation:** Move beyond binary approve/decline to nuanced risk tiers (Green, Amber, Red).
2. **Experimentation Platform:** Enable controlled testing of "Amber" and "Red" cohorts to identify "Hidden Primes."
3. **Operational Clarity:** Provide clear, visual guidelines for underwriters.
4. **Dynamic Adjustment:** Allow for easy calibration of risk appetite by adjusting cut-offs and cohort definitions without code changes.

---

## 2. The Two Dimensions

### Dimension X: Bureau Score (External View)
Based on CIBIL or equivalent credit bureau score. Represents past credit behavior.

| Band | Label | Score Range | Description |
|------|-------|-------------|-------------|
| **B1** | Prime Plus | 750+ | Excellent credit history. Very low probability of default. |
| **B2** | Prime | 700-749 | Good credit history. Standard risk. |
| **B3** | Near Prime | 650-699 | Average credit history. Some past irregularities. |
| **B4** | Sub-Prime | 600-649 | Below average. Recent delinquencies or high utilization. |
| **B5** | High Risk | <600 | Poor credit history. Significant defaults/write-offs. |
| **NTC**| New to Credit| -1/0 | No credit footprint. Assessed mainly on banking/application. |

### Dimension Y: Application Score (Internal View)
Based on applicant's current financial stability, capability, and intent. Derived from the internal scorecard.

| Band | Label | Score Range | Description |
|------|-------|-------------|-------------|
| **A1** | Strong | 80-100 | High income stability, low FOIR, low LTV. |
| **A2** | Good | 65-79 | Stable profile, ample disposable income. |
| **A3** | Moderate | 50-64 | Acceptable but bordering on tight cash flow or stability issues. |
| **A4** | Weak | 35-49 | High leverage, unstable employment, or low margins. |
| **A5** | Poor | <35 | Fails multiple core eligibility criteria. |

---

## 3. The Crosstab Matrix Structure

The intersection of these two dimensions creates a **6x5 Matrix (30 Cells)**. Each cell represents a unique risk segment.

### Matrix Visualization

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
\`\`\`

---

## 4. Cohort Definitions

### 🟢 GREEN (Approved / Auto-Approve)
**Definition:** Cells where both Application and Bureau scores indicate low risk.
**Action:** Fast-track approval. Minimal manual intervention.
**Verification:** Automated checks only (ID, Income verification). No committee review.
**Target Approval Rate:** >90%

### 🟡 AMBER (Refer / Manual Review)
**Definition:** Mixed signals. Strong Application but Weaker Bureau, or vice-versa.
**Action:** Manual underwriter review required.
**Verification:** Deep dive into bank statements, employment verification, and property valuation.
**Target Approval Rate:** 40-60%
**Experimentation:** This is the primary zone for testing "Amber-to-Green" promotion.

### 🔴 RED (Decline / High Risk)
**Definition:** Weak Application and Weak Bureau/NTC.
**Action:** Auto-decline or Senior Management Exception only.
**Verification:** N/A (unless exception).
**Target Approval Rate:** <5%
**Experimentation:** Limited "Red-to-Amber" testing to find niche acceptable segments using alternative data.

---

## 5. Experimentation Framework

The core value of this framework is the ability to run controlled experiments to expand the "buy box" without exposing the portfolio to systemic risk.

### Mechanism: Moving Cells
An experiment involves changing the classification of a specific cell (e.g., A2-B2) from a stricter category to a more lenient one for a *limited sample size* and *specific duration*.

### Types of Experiments

1.  **Amber-to-Green (Efficiency Test)**
    *   **Goal:** Move a cell from Review (Amber) to Auto-Approve (Green).
    *   **Hypothesis:** Applicants in this cell behave like Green customers despite slightly lower scores.
    *   **Example Cell:** **A1-B3** (Strong App Score, Near Prime Bureau).
    *   **Control:** Limit to first 100 cases. Monitor FPD (First Payment Default) and SPD (Second Payment Default).

2.  **Red-to-Amber (Expansion Test)**
    *   **Goal:** Move a cell from Decline (Red) to Review (Amber).
    *   **Hypothesis:** Certain sub-segments in this Red cell are creditworthy ("Diamonds in the rough").
    *   **Example Cell:** **A3-NTC** (Moderate App Score, New to Credit).
    *   **Control:** Strict cap (e.g., 50 cases/month). Requires "Super-Prime" Application Score or additional collateral.

### Tracking & Governance

*   **Experiment ID:** unique identifier for each test (e.g., \`EXP-2026-A1B3-G\`).
*   **Cap Management:** Hard stop after N disbursals.
*   **Performance Monitoring:**
    *   Monthly vintage tracking.
    *   Compare default rates against the "Green" baseline.
    *   **Trigger for Rollback:** If default rate > 1.5x Baseline, immediately stop experiment.

---

## 6. Implementation Guidelines

### Data Structure for Matrix
Store the matrix configuration as a JSON object to allow dynamic updates.

\`\`\`json
{
  "matrix_version": "v1.0.0",
  "default_actions": {
    "A1": {"B1": "GREEN", "B2": "GREEN", "B3": "AMBER", "B4": "AMBER", "B5": "RED", "NTC": "AMBER"},
    "A2": {"B1": "GREEN", "B2": "AMBER", "B3": "AMBER", "B4": "AMBER", "B5": "RED", "NTC": "AMBER"},
    "A3": {"B1": "AMBER", "B2": "AMBER", "B3": "AMBER", "B4": "RED", "B5": "RED", "NTC": "RED"},
    "A4": {"B1": "AMBER", "B2": "AMBER", "B3": "RED", "B4": "RED", "B5": "RED", "NTC": "RED"},
    "A5": {"B1": "RED", "B2": "RED", "B3": "RED", "B4": "RED", "B5": "RED", "NTC": "RED"}
  },
  "experiments": [
    {
      "id": "EXP-A1B3-G",
      "cell": ["A1", "B3"],
      "action_override": "GREEN",
      "limit": 100,
      "current_count": 45,
      "status": "ACTIVE"
    }
  ]
}
\`\`\`

### SQL Logic for Cohort Assignment

\`\`\`sql
SELECT
    applicant_id,
    app_score_band, -- A1, A2...
    bureau_score_band, -- B1, B2...
    CASE
        -- Check for active experiments first
        WHEN app_score_band = 'A1' AND bureau_score_band = 'B3' AND experiment_active = 1 THEN 'GREEN_EXP'
        -- Default Logic
        WHEN app_score_band IN ('A1') AND bureau_score_band IN ('B1', 'B2') THEN 'GREEN'
        WHEN app_score_band = 'A5' OR bureau_score_band = 'B5' THEN 'RED'
        ELSE 'AMBER'
    END as final_cohort
FROM application_scoring_results;
\`\`\`

---

## 7. Performance Benchmarks

Expected performance metrics for each cohort (annualized default rates):

| Cohort | Expected Default Rate (90+ DPD) | Approval Turnaround Time (TAT) | Document Requirement |
|--------|---------------------------------|--------------------------------|----------------------|
| **GREEN** | < 0.5% | < 2 Days | Standard (KYC + Income) |
| **AMBER** | 0.5% - 1.5% | 5-7 Days | Enhanced (Bank Stmt Analysis) |
| **RED** | > 2.0% | N/A | Declined |

*Note: Default rates should be calibrated based on portfolio performance.*

---

*Crosstab Framework - January 2026*
`;


docsContent["Housing_Finance_Applicant_Evaluation_Scorecard_Research.md"] = `# Research: Housing Finance Applicant Evaluation Scorecard

## 1. Executive Summary

Developing a robust applicant evaluation scorecard for housing finance requires a multi-dimensional approach that balances quantitative credit metrics with qualitative stability indicators. The goal is to predict "Probability of Default" (PD) and "Loss Given Default" (LGD).

### Key Components
1.  **Credit History (30%)**: Past behavior as a predictor of future performance.
2.  **Repayment Capacity (35%)**: Debt-to-Income (DTI) and Fixed Obligation to Income Ratio (FOIR).
3.  **Stability & Profile (20%)**: Employment tenure, residence stability, age.
4.  **Collateral Quality (15%)**: LTV ratio, property type, location.

---

## 2. Core variables & Weightings

### A. Credit Score (CIBIL/Equifax/Experian)
*   **Weight:** 25-30%
*   **Rationale:** Single strongest predictor of default.
*   **Banding:**
    *   >750: Prime (Low Risk)
    *   700-750: Near Prime (Medium Risk)
    *   650-700: Sub-Prime (High Risk)
    *   <650: Very High Risk (Decline/Review)
    *   -1/0: New to Credit (Requires alternative scoring)

### B. Repayment Capacity (FOIR/DTI)
*   **Weight:** 25-30%
*   **Formula:** (Total Monthly EMIs + Proposed EMI) / Net Monthly Income
*   **Thresholds:**
    *   <40%: Excellent
    *   40-50%: Good
    *   50-60%: Moderate (May require higher rate)
    *   >60%: High Risk (Decline usually)

### C. Loan-to-Value (LTV) Ratio
*   **Weight:** 15-20%
*   **Rationale:** "Skin in the game". Lower LTV means less risk for the lender.
*   **Thresholds:**
    *   <60%: Low Risk
    *   60-80%: Standard Risk
    *   >80%: High Risk (Regulatory caps often apply)

### D. Employment/Business Stability
*   **Weight:** 10-15%
*   **Salaried:** Years in current job (Minimum 1-2 years preferred). Total experience.
*   **Self-Employed:** Business vintage (Minimum 3 years preferred). Profitability trends.

---

## 3. Alternative Data Points (For "New to Credit")

When traditional credit bureau data is absent (NTC customers), alternative data becomes critical.

1.  **Banking Habits**:
    *   Average Monthly Balance (AMB).
    *   Check bounce history (Zero tolerance usually).
    *   Savings habit (recurring deposits).
2.  **Utility Payments**: Consistency in electricity/phone bill payments.
3.  **Rental History**: Bank transfers for rent payments.
4.  **Assets**: Car ownership, life insurance policies.

---

## 4. Fraud Detection Triggers

The scorecard must be preceded by a fraud check. If fraud is detected, the score is irrelevant.

*   **Identity**: Manipulated PAN/Aadhaar details.
*   **Income**: Fabricated salary slips (check PF/Tax deductions).
*   **Banking**: "Round tripping" of funds to inflate turnover.
*   **Collateral**: Inflated property valuation reports.

---

## 5. Regulatory Compliance (India Context - RBI)

*   **LTV Caps**: Max 90% for loans up to 30L; 80% for 30L-75L; 75% for >75L.
*   **Risk Weights**: Lower risk weights for lower LTVs.
*   **Income Verification**: Mandatory ITR/Form 16 for standard programs. Surrogate programs exist for informal income but carry higher risk weights/rates.

---

## 6. Implementation Strategy

### Phase 1: Rule-Based Engine
Start with a definitive set of "Knock-out" criteria (Hard rules) and a weighted point system.
*   *Example:* IF Credit Score < 600 THEN Auto-Decline.

### Phase 2: Statistical Modeling (Logistic Regression)
As historical data accumulates (12-18 months), transition to a logistical regression model to assign probability weights to variables based on actual default experience.

### Phase 3: Machine Learning (Gradient Boosting/Random Forest)
For advanced segmentation and identifying non-linear relationships (e.g., interaction between Age and LTV).

---

## 7. Operationalizing the Scorecard

*   **Green Channel (Auto-Approve)**: Score > 800 + Low LTV + Low FOIR. Straight-through processing (STP).
*   **Amber Channel (Review)**: Score 650-750 or borderline FOIR. Requires Credit Manager manual underwriting.
*   **Red Channel (Decline)**: Score < 600 or Fraud Triggers.

---

## 8. Specific Considerations for Affordable Housing

*   **Cash Income**: Many applicants earn in cash. Scorecards here rely heavily on "Field Investigation" (FI) reports and standard of living assessment (house type, assets).
*   **FOIR Adjustment**: Lower income groups spend a higher % on essentials, so Max FOIR might be capped at 40% instead of 50-60%.

---

## 9. Monitoring & Calibration

The scorecard is not static.
*   **Portfolio Quality Review**: Quarterly review of delinquency (DPD 30+, DPD 90+) by score band.
*   **PSI (Population Stability Index)**: Check if the applicant population profile is shifting significantly.
*   **Override Tracking**: Monitor how often credit managers override the scorecard decision. High overrides (>10%) indicate the model is losing relevance.

---
*Research compiled for Housing Finance Underwriting System Project - January 2026*
`;


docsContent["Income_Imputation_Bureau_Only.md"] = `# Income Estimation Methodology: Bureau Data Only

## 1. Overview

In the absence of income documents (ITR, Salary Slips, Bank Statements), we can estimate an applicant's income ("Implied Income") based on their credit behavior and lifestyle indicators visible in the credit report.

**Target Segment:** Information-thin applicants, Daily cash earners, Small business owners without formal records.

**Principle:** "Obligation / FOIR = Estimated Income"

---

## 2. Methodology: Reverse FOIR Calculation

The core logic assumes that a person's existing EMI obligations represent a certain percentage of their income (FOIR - Fixed Obligation to Income Ratio). By assuming a conservative FOIR, we can back-calculate the income.

### Formula
$$ Estimated Monthly Income = \frac{Total Monthly EMIs reported in Bureau}{Assumed FOIR} $$

### Assumed FOIR Table
We assign different FOIR caps based on the "Quality" of the credit profile.

| Credit Score | Assumed FOIR | Logic |
|--------------|--------------|-------|
| >750 | 40% | High discipline, likely lower actual leverage. |
| 700-750 | 50% | Standard leverage behavior. |
| 650-700 | 60% | Likely higher leverage, living on credit. |
| <650 | N/A | Do not use this method. |

*Example:*
*   Total EMI on Bureau: ₹20,000
*   Credit Score: 760
*   Assumed FOIR: 40% (0.40)
*   **Estimated Income** = 20,000 / 0.40 = **₹50,000**

---

## 3. Adjustments & Caps

To prevent gross overestimation (e.g., someone with a massive loan relative to income), we apply caps based on surrogate indicators.

### Cap 1: Asset Ownership Cap
Checking the type of loans in the bureau history.

| Highest Asset Class Owned | Max Income Cap (Monthly) |
|---------------------------|--------------------------|
| Home Loan (>50L) | ₹3,00,000 |
| Home Loan (20-50L) | ₹1,50,000 |
| Car Loan (>10L) | ₹1,00,000 |
| Car Loan (<10L) | ₹75,000 |
| Two Wheeler / CD Loan | ₹35,000 |
| Unsecured Loans Only | ₹25,000 |

### Cap 2: Credit Limit Utilization
If credit card utilization is consistently >90%, apply a **20% haircut** to the estimated income.
*   *Rationale:* High utilization suggests cash flow stress.

---

## 4. Minimum Income Thresholds

Even if the calculation yields a low number, we assume a "Minimum Living Wage" based on location (Address in Bureau).

| Location Tier | Minimum Assumed Income |
|---------------|------------------------|
| Metro (mumbai, Delhi, etc.) | ₹18,000 |
| Tier 1 | ₹15,000 |
| Tier 2/3 | ₹12,000 |

*Logic:* If Calculated Income < Minimum, use Minimum (subject to LTV restrictions).

---

## 5. Implementation Code Snippet (Python style)

\`\`\`python
def estimate_income_bureau_only(total_emi, credit_score, asset_class, location_tier):
    # 1. Base Calculation
    if credit_score >= 750:
        foir = 0.40
    elif credit_score >= 700:
        foir = 0.50
    elif credit_score >= 650:
        foir = 0.60
    else:
        return 0 # Not eligible for excessive reliance on proxy

    estimated_income = total_emi / foir

    # 2. Apply Asset Cap
    caps = {
        'HL_PREMIUM': 300000,
        'HL_STANDARD': 150000,
        'CAR_LUXURY': 100000,
        'CAR_STD': 75000,
        'TWOWHEELER': 35000,
        'NONE': 25000
    }
    cap_limit = caps.get(asset_class, 25000)
    estimated_income = min(estimated_income, cap_limit)

    # 3. Floor check (Minimum wage)
    min_wages = {'METRO': 18000, 'TIER1': 15000, 'TIER2': 12000}
    floor_limit = min_wages.get(location_tier, 12000)

    return max(estimated_income, floor_limit)
\`\`\`

---

## 6. Risk Mitigants (Must Haves)

When using this "Bureau Only" income program, strict conditions apply:

1.  **Max LTV**: Capped at 60-70%. No high LTV loans.
2.  **Property Type**: Completed properties only (No under-construction risk).
3.  **Co-Applicant**: Mandatory co-applicant (spouse/son) to improve stability.

---
*Income Imputation Framework - January 2026*
`;


docsContent["Income_Imputation_Bureau_Plus_BankStatement.md"] = `# Income Estimation: Bureau + Bank Statement (Combined)

## 1. Overview

This is the "Gold Standard" for self-employed or non-standard salaried applicants. By triangulation of Bureau Obligation + Bank Cash Flow, we can derive a highly accurate income proxy.

**Target Segment:** Review/Amber Category applicants, Self-Employed (SME), Gig workers.

---

## 2. Triangulation Methodology

We calculate income using **Three Methods** and take the most conservative (or weighted average) approach.

### Method A: Bureau Reverse Calc (Refined)
Same as "Bureau Only" but verified against bank debits.
*   *Validation:* Does the EMI amount shown in Bureau actually get debited from the bank account?
*   *Adjustment:* If bounces are seen, discount the result by 50%.

### Method B: Banking Gross Credits (Turnover Proxy)
Sum of all "Business Related" or "Salary Like" credits.
*   *Exclusions:* Contra entries (own account transfers), Loan disbursements, One-off large deposits (windfall).
*   **Net Margin Application:**
    *   Traders: 5-8% margin
    *   Manufacturers: 10-15% margin
    *   Service Providers: 40-60% margin
    *   Gig/Salaried: 100% margin

### Method C: Average Bank Balance (ABB)
Income capability based on liquidity maintenance.
*   *Formula:* (Average Monthly Balance - Minimum Balance Req) / Assumed Saving Ratio.

---

## 3. The "Unified Income" Algorithm

\`\`\`python
def calculate_unified_income(bureau_emi, bank_credits, bank_abb, profile_type):
    # Method A
    income_a = bureau_emi / 0.50 # Assuming 50% FOIR

    # Method B
    margin = get_industry_margin(profile_type) # e.g., 10% for Trader
    income_b = bank_credits * margin

    # Method C
    income_c = (bank_abb - 5000) / 0.20 # Assuming 20% savings rate

    # Logic:
    # If Income B (Cash flow) supports Income A (Liability servicing), we take Income A.
    # Otherwise, we are capped at Income B.
    
    if income_b >= income_a:
        final_income = income_a # Conservative, they can afford their loans
    else:
        final_income = income_b # They are over-leveraged, real income is lower

    return final_income
\`\`\`

---

## 4. Bank Statement Health Checks (Red Flags)

Before accepting the income, check for health indicators:

1.  **Inward Cheque Returns**: >2 in 6 months = **Decline**.
2.  **EMI Bounces**: >1 in 6 months = **Refer to Credit Manager**.
3.  **Utilization**: Overdraft limit fully used (Hardcore) > 90% days = **High Risk**.
4.  **Stop Payment**: Frequent stop payments indicate cash flow management issues.

---

## 5. Decision Matrix

| Bureau Score | Bank Health | Imputed Income Strength | Decision |
|--------------|-------------|-------------------------|----------|
| >750 | Clean | Strong (>1.5x Obligation) | **Green (Approved)** |
| 650-750 | Minor Issues | Adequate (>1.2x Obligation) | **Amber (Review)** |
| <650 | Clean | Strong | **Amber (Review)** |
| Any | Bounces | Weak | **Red (Decline)** |

---

## 6. Implementation Notes

*   **Data Ingestion**: Requires parsing PDF statements or usage of Account Aggregator (AA) framework.
*   **Categorization**: Machine Learning model needed to tag transactions as "Revenue", "Loan", "Transfer", "Expense".

---
*Bureau + Bank Income Framework - January 2026*
`;

