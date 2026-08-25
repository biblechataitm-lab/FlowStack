'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { GitMerge, Workflow, Zap, Bot, ArrowRight, ArrowDown, Search, CheckCircle2, Sliders, Sparkles } from 'lucide-react';

const RECIPES = [
  {
    id: 'lead-enrich',
    name: 'AI Lead Enrichment & Routing',
    trigger: 'Webhook: Typeform Submission',
    aiStep: 'AI Agent: Enrich with Clearbit & Score 1-100',
    action: 'Action: Sync to HubSpot + Alert #sales-vip',
    executionTime: '420ms execution',
    badge: 'Popular Recipe',
  },
  {
    id: 'invoice-sync',
    name: 'Stripe to QuickBooks Reconcile',
    trigger: 'Event: charge.succeeded ($1,490)',
    aiStep: 'Parser: Extract VAT & Classify Tax Code',
    action: 'Action: Generate Ledger Entry & Email PDF',
    executionTime: '280ms execution',
    badge: 'Finance Flow',
  },
  {
    id: 'support-triage',
    name: 'Auto-Triage & Sentry Escalation',
    trigger: 'Webhook: Critical Exception Event',
    aiStep: 'LLM Reasoner: Generate Root Cause & Patch',
    action: 'Action: Open Linear Issue & Page On-Call',
    executionTime: '610ms execution',
    badge: 'DevOps Stack',
  },
];

export function HeroSection() {
  const [activeRecipeIndex, setActiveRecipeIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const currentRecipe = RECIPES[activeRecipeIndex];

  return (
    <section className="flowstack-hero">
      <div className="flowstack-hero-grid">
        {/* Left: Workflow Automation Value Prop */}
        <div className="flowstack-hero-content">
          <div className="flowstack-badge">
            <Sparkles size={14} className="text-sky-400" />
            <span>Curated Automation Stacks & No-Code Pipelines</span>
          </div>

          <h1 className="flowstack-title">
            The Visual Hub for <span className="flowstack-gradient-text">Automated Workflows</span> & Team OS.
          </h1>

          <p className="flowstack-lead">
            Discover modern Zapier/Make alternatives, webhook data routers, autonomous AI agent pipelines, and frictionless productivity stacks.
          </p>

          {/* Workflow Search Box */}
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
              placeholder="Search workflow recipes, webhook routers, n8n nodes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flowstack-search-input"
            />
            <button type="submit" className="flowstack-search-btn">
              Explore Flows
            </button>
          </form>

          {/* Flow Category Pills */}
          <div className="flowstack-tags-row">
            <span className="flowstack-tags-label">Pipelines:</span>
            <div className="flowstack-tags-list">
              <Link href="/category/automation" className="flowstack-tag-pill">
                <Workflow size={12} /> No-Code Workflows
              </Link>
              <Link href="/category/ai" className="flowstack-tag-pill">
                <Bot size={12} /> Agent Chains
              </Link>
              <Link href="/category/productivity" className="flowstack-tag-pill">
                <Zap size={12} /> Webhook Routers
              </Link>
              <Link href="/category/developer-tools" className="flowstack-tag-pill">
                <GitMerge size={12} /> ETL Syncs
              </Link>
            </div>
          </div>

          {/* Automation Metrics */}
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
              <span className="flowstack-metric-val">Zero-Code</span>
              <span className="flowstack-metric-desc">Ready to Run</span>
            </div>
          </div>
        </div>

        {/* Right: Visual Node Pipeline Builder Preview Card */}
        <div className="flowstack-pipeline-card">
          <div className="pipeline-card-header">
            <div className="pipeline-title-group">
              <span className="pipeline-pulse-sky" />
              <span className="pipeline-header-title">Live Pipeline Canvas</span>
            </div>
            <span className="pipeline-recipe-badge">{currentRecipe.badge}</span>
          </div>

          {/* Recipe Switcher */}
          <div className="pipeline-recipes-nav">
            {RECIPES.map((recipe, idx) => (
              <button
                key={recipe.id}
                onClick={() => setActiveRecipeIndex(idx)}
                className={`pipeline-recipe-btn ${activeRecipeIndex === idx ? 'active' : ''}`}
                type="button"
              >
                {recipe.name}
              </button>
            ))}
          </div>

          {/* Visual Node Diagram */}
          <div className="pipeline-canvas-nodes">
            {/* Step 1: Trigger */}
            <div className="pipeline-node trigger">
              <div className="node-icon-box trigger">
                <Zap size={14} />
              </div>
              <div className="node-info">
                <span className="node-step-tag">STEP 1: INBOUND TRIGGER</span>
                <span className="node-text">{currentRecipe.trigger}</span>
              </div>
            </div>

            <div className="pipeline-connector-line">
              <ArrowDown size={12} className="connector-arrow" />
            </div>

            {/* Step 2: AI Transformation */}
            <div className="pipeline-node transform">
              <div className="node-icon-box transform">
                <Bot size={14} />
              </div>
              <div className="node-info">
                <span className="node-step-tag">STEP 2: AGENT ENRICHMENT</span>
                <span className="node-text">{currentRecipe.aiStep}</span>
              </div>
            </div>

            <div className="pipeline-connector-line">
              <ArrowDown size={12} className="connector-arrow" />
            </div>

            {/* Step 3: Destination Action */}
            <div className="pipeline-node action">
              <div className="node-icon-box action">
                <CheckCircle2 size={14} />
              </div>
              <div className="node-info">
                <span className="node-step-tag">STEP 3: MULTI-DESTINATION ACTION</span>
                <span className="node-text">{currentRecipe.action}</span>
              </div>
            </div>
          </div>

          {/* Pipeline Card Footer */}
          <div className="pipeline-card-footer">
            <span className="pipeline-latency-tag">⚡ {currentRecipe.executionTime}</span>
            <Link href="/submit" className="pipeline-submit-link">
              Submit Automation <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
