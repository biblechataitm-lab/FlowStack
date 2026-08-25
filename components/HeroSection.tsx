'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Workflow, Play, Zap, ArrowRight, ArrowUpRight, Search, CheckCircle2, GitBranch, Cpu, Database, Mail, Star, Users } from 'lucide-react';

const AUTOMATION_RECIPES = [
  {
    id: 'ai-lead-router',
    title: 'AI Lead Qualification & CRM Sync',
    trigger: 'Webhook Inbound (Typeform / Formspree)',
    action1: 'LLM Enrichment (Extract Budget & Intent JSON)',
    action2: 'Route to HubSpot & Alert Slack Channel',
    speed: '420ms total execution',
    status: 'ACTIVE RUNNER',
    throughput: '14,200 runs/mo',
  },
  {
    id: 'invoice-recon',
    title: 'Stripe to QuickBooks AI Reconciliation',
    trigger: 'Payment Succeeded (Stripe Event)',
    action1: 'PDF Receipt Gen & VAT Tax Calculation',
    action2: 'Sync ledger in QuickBooks & Notify Finance',
    speed: '650ms total execution',
    status: 'ZERO ERRORS',
    throughput: '8,400 runs/mo',
  },
  {
    id: 'github-triage',
    title: 'Autonomous GitHub Issue Triager',
    trigger: 'Issue Opened (GitHub Webhook)',
    action1: 'AI Semantic Labeling & Codebase Retrieval',
    action2: 'Assign Engineering Lead & Auto-Reply',
    speed: '310ms total execution',
    status: 'OPTIMIZED',
    throughput: '32,000 runs/mo',
  },
];

export function HeroSection() {
  const [activeRecipeIndex, setActiveRecipeIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const currentRecipe = AUTOMATION_RECIPES[activeRecipeIndex];

  return (
    <section className="flowstack-hero">
      <div className="flowstack-ambient-glow" />

      <div className="flowstack-hero-grid">
        {/* Left: Automation Value Prop */}
        <div className="flowstack-hero-content">
          <div className="flowstack-badge">
            <span className="flowstack-spark-icon">⚡</span>
            <span>Next-Gen Workflow Automation & AI Recipes</span>
            <span className="flowstack-badge-pill">v3.4</span>
          </div>

          <h1 className="flowstack-title">
            The Hub for <span className="flowstack-gradient-text">Workflow Pipelines</span>, AI Routers & No-Code Stacks.
          </h1>

          <p className="flowstack-lead">
            Discover production-ready automation recipes, no-code integrations, Zapier/Make alternatives, and deterministic webhook pipelines.
          </p>

          {/* Search Box */}
          <form 
            action="/search" 
            method="GET" 
            className="flowstack-search-box"
            onSubmit={(e) => {
              if (!searchQuery.trim()) e.preventDefault();
            }}
          >
            <Search size={18} className="flowstack-search-icon" />
            <input
              type="text"
              name="q"
              placeholder="Search 450+ automation flows, AI webhooks, CRM sync..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flowstack-search-input"
            />
            <button type="submit" className="flowstack-search-btn">
              Search Flows
            </button>
          </form>

          {/* Dual Action CTAs */}
          <div className="flowstack-cta-row">
            <Link href="/category/automation" className="flowstack-primary-btn">
              Explore 450+ Pipelines <ArrowRight size={15} />
            </Link>
            <Link href="/submit" className="flowstack-secondary-btn">
              Submit Automation Recipe
            </Link>
          </div>

          {/* Social Proof */}
          <div className="flowstack-social-proof">
            <div className="flowstack-avatar-stack">
              <span className="flow-avatar av-1">⚡</span>
              <span className="flow-avatar av-2">🔄</span>
              <span className="flow-avatar av-3">🤖</span>
              <span className="flow-avatar av-4">✨</span>
            </div>
            <div className="flowstack-proof-text">
              <div className="flowstack-proof-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="fill-indigo-400 text-indigo-400" />
                ))}
                <span className="flowstack-rating">4.9/5.0</span>
              </div>
              <span className="flowstack-subtext">Used by 55,000+ operations engineers & growth teams</span>
            </div>
          </div>

          {/* Automation Category Pills */}
          <div className="flowstack-tags-row">
            <span className="flowstack-tags-label">Pipelines:</span>
            <div className="flowstack-tags-list">
              <Link href="/category/automation" className="flowstack-tag-pill">
                <Workflow size={12} /> AI Routers
              </Link>
              <Link href="/category/productivity" className="flowstack-tag-pill">
                <Zap size={12} /> Webhooks
              </Link>
              <Link href="/category/developer-tools" className="flowstack-tag-pill">
                <GitBranch size={12} /> ETL Pipelines
              </Link>
              <Link href="/category/ai" className="flowstack-tag-pill">
                <Cpu size={12} /> Autonomous Agents
              </Link>
            </div>
          </div>

          {/* Flow Metrics Strip */}
          <div className="flowstack-metrics-strip">
            <div className="flowstack-metric-box">
              <span className="flowstack-metric-val">1.2M+</span>
              <span className="flowstack-metric-desc">Hours Automated</span>
            </div>
            <div className="flowstack-metric-divider" />
            <div className="flowstack-metric-box">
              <span className="flowstack-metric-val">450+</span>
              <span className="flowstack-metric-desc">Integrations</span>
            </div>
            <div className="flowstack-metric-divider" />
            <div className="flowstack-metric-box">
              <span className="flowstack-metric-val">99.99%</span>
              <span className="flowstack-metric-desc">Delivery SLA</span>
            </div>
          </div>
        </div>

        {/* Right: Visual Node Automation Pipeline Card */}
        <div className="flowstack-pipeline-card">
          <div className="pipeline-card-header">
            <div className="pipeline-title-group">
              <Workflow size={16} className="text-indigo-400" />
              <span className="pipeline-header-title">Live Pipeline Blueprint</span>
            </div>
            <span className="pipeline-status-pill">{currentRecipe.status}</span>
          </div>

          {/* Recipe Switcher Tabs */}
          <div className="pipeline-tabs-row">
            {AUTOMATION_RECIPES.map((recipe, idx) => (
              <button
                key={recipe.id}
                onClick={() => setActiveRecipeIndex(idx)}
                className={`pipeline-tab-btn ${activeRecipeIndex === idx ? 'active' : ''}`}
                type="button"
              >
                {recipe.title.split(' ')[0]}
              </button>
            ))}
          </div>

          {/* Visual 3-Node Connected Blueprint */}
          <div className="pipeline-nodes-wrapper">
            {/* Step 1: Trigger */}
            <div className="pipeline-node-box trigger">
              <div className="node-icon-circle trigger">
                <Play size={12} />
              </div>
              <div className="node-content">
                <span className="node-step-tag">STEP 1 • TRIGGER</span>
                <span className="node-text">{currentRecipe.trigger}</span>
              </div>
            </div>

            <div className="pipeline-connector-line">
              <span className="pipeline-connector-dot" />
            </div>

            {/* Step 2: Transform */}
            <div className="pipeline-node-box transform">
              <div className="node-icon-circle transform">
                <Cpu size={12} />
              </div>
              <div className="node-content">
                <span className="node-step-tag">STEP 2 • AI ENRICHMENT</span>
                <span className="node-text">{currentRecipe.action1}</span>
              </div>
            </div>

            <div className="pipeline-connector-line">
              <span className="pipeline-connector-dot" />
            </div>

            {/* Step 3: Destination Action */}
            <div className="pipeline-node-box action">
              <div className="node-icon-circle action">
                <Database size={12} />
              </div>
              <div className="node-content">
                <span className="node-step-tag">STEP 3 • DISPATCH & SYNC</span>
                <span className="node-text">{currentRecipe.action2}</span>
              </div>
            </div>
          </div>

          {/* Card Footer with Latency Guarantee */}
          <div className="pipeline-card-footer">
            <span className="pipeline-latency-text">⚡ {currentRecipe.speed}</span>
            <Link href="/submit" className="pipeline-submit-link">
              Submit Flow <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
