'use client';

import React from 'react';
import Link from 'next/link';
import { GitBranch, Workflow, Cpu, Webhook, ArrowRight, CheckCircle2, Zap, Layers, RefreshCw, Send } from 'lucide-react';

export function LandingSections() {
  return (
    <div className="landing-additional-sections">
      {/* 1. Feature Highlights Bento Grid */}
      <section className="landing-feature-grid-section">
        <div className="section-title-wrap">
          <div className="section-pill-tag">
            <Workflow size={12} className="text-violet-400" />
            <span>Curated Automation Architecture</span>
          </div>
          <h2 className="landing-section-heading">Engineered for Operations & Workflow Engineers</h2>
          <p className="landing-section-sub">
            Discover verified webhook routers, LLM JSON extraction nodes, event-driven message brokers, and self-hosted n8n/Temporal recipes.
          </p>
        </div>

        <div className="landing-bento-grid">
          {/* Bento Card 1: Visual Pipeline Blueprints */}
          <div className="bento-feature-card span-2">
            <div className="bento-card-top">
              <div className="bento-icon-box violet">
                <GitBranch size={20} />
              </div>
              <span className="bento-badge">Deterministic DAGs</span>
            </div>
            <h3 className="bento-card-title">Event-Driven Visual DAGs & Orchestration</h3>
            <p className="bento-card-desc">
              Multi-step branching logic, guaranteed idempotency, automatic exponential backoff, and distributed transaction rollbacks.
            </p>
            <div className="bento-metric-row">
              <div className="metric-pill">
                <span className="pill-val">450+</span>
                <span className="pill-lbl">Active Recipes</span>
              </div>
              <div className="metric-pill">
                <span className="pill-val">&lt;50ms</span>
                <span className="pill-lbl">Relay Latency</span>
              </div>
              <div className="metric-pill">
                <span className="pill-val">55k+</span>
                <span className="pill-lbl">Ops Engineers</span>
              </div>
            </div>
          </div>

          {/* Bento Card 2: AI Webhook Parsing */}
          <div className="bento-feature-card">
            <div className="bento-card-top">
              <div className="bento-icon-box cyan">
                <Webhook size={20} />
              </div>
              <span className="bento-badge">Schema Strict</span>
            </div>
            <h3 className="bento-card-title">LLM Webhook JSON Parsers</h3>
            <p className="bento-card-desc">
              Transform unstructured emails and webhook payloads into strongly-typed Zod schemas.
            </p>
            <div className="bento-check-list">
              <span className="check-item"><CheckCircle2 size={13} /> Zod Schema Enforced</span>
              <span className="check-item"><CheckCircle2 size={13} /> Sub-Second SLA</span>
            </div>
          </div>

          {/* Bento Card 3: Enterprise Connectors */}
          <div className="bento-feature-card">
            <div className="bento-card-top">
              <div className="bento-icon-box amber">
                <Zap size={20} />
              </div>
              <span className="bento-badge">Zero Polling</span>
            </div>
            <h3 className="bento-card-title">450+ SaaS Pre-Built Connectors</h3>
            <p className="bento-card-desc">
              Direct webhook listeners for Stripe, Salesforce, GitHub, Slack, and HubSpot.
            </p>
          </div>

          {/* Bento Card 4: Self-Hosted Orchestration */}
          <div className="bento-feature-card span-2">
            <div className="bento-card-top">
              <div className="bento-icon-box emerald">
                <Cpu size={20} />
              </div>
              <span className="bento-badge">Self-Hosted</span>
            </div>
            <h3 className="bento-card-title">Temporal & n8n Production Infrastructure</h3>
            <p className="bento-card-desc">
              Self-hosted Docker and Kubernetes orchestration topologies with persistent state and zero vendor lock-in.
            </p>
            <div className="bento-tag-row">
              <span className="tag-chip">Temporal.io</span>
              <span className="tag-chip">n8n Enterprise</span>
              <span className="tag-chip">Kafka Streaming</span>
              <span className="tag-chip">Inngest Runner</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Curation Process Section */}
      <section className="landing-process-section">
        <div className="section-title-wrap">
          <div className="section-pill-tag">
            <RefreshCw size={12} className="text-violet-400" />
            <span>Workflow Reliability Standard</span>
          </div>
          <h2 className="landing-section-heading">How FlowStack Validates Recipes</h2>
          <p className="landing-section-sub">
            Every automation blueprint is verified for failover safety, retry idempotency, and payload encryption.
          </p>
        </div>

        <div className="process-steps-grid">
          <div className="process-step-card">
            <div className="step-number">01</div>
            <h4 className="step-title">Payload Stress & Fuzzing</h4>
            <p className="step-desc">
              We test node handlers against malformed JSON, rate-limit thresholds, and timeout exceptions.
            </p>
          </div>
          <div className="process-step-card">
            <div className="step-number">02</div>
            <h4 className="step-title">Security & Secret Isolation</h4>
            <p className="step-desc">
              We audit OAuth token refresh mechanisms and ensure zero plain-text credential leaks.
            </p>
          </div>
          <div className="process-step-card">
            <div className="step-number">03</div>
            <h4 className="step-title">Featured Workflow Hub</h4>
            <p className="step-desc">
              Verified recipes get 1-click import configurations and exposure to 55,000+ operations engineers.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Launch CTA Banner */}
      <section className="landing-launch-cta">
        <div className="launch-cta-content">
          <span className="launch-cta-tag">✦ PUBLISH ON FLOWSTACK</span>
          <h3 className="launch-cta-heading">Share Your Automation Pipeline with 55,000+ Ops Engineers</h3>
          <p className="launch-cta-desc">
            Help founders and platform teams automate repetitive workflows with your integration, SDK, or recipe.
          </p>
          <div className="launch-cta-buttons">
            <Link href="/submit" className="launch-cta-primary">
              Submit Automation Recipe <ArrowRight size={15} />
            </Link>
            <Link href="/category/automation" className="launch-cta-secondary">
              Browse Workflows
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
