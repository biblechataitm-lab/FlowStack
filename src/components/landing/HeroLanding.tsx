'use client';

import React, { useState } from 'react';

export function HeroLanding() {
  const [activePipeline, setActivePipeline] = useState<'ai-rag' | 'fintech' | 'crm-sync'>('ai-rag');
  const [isRunning, setIsRunning] = useState(false);
  const [runLog, setRunLog] = useState('READY TO EXECUTE');

  const PIPELINES = {
    'ai-rag': {
      name: 'AI Agent & RAG Pipeline',
      trigger: 'Document Upload (PDF/Notion)',
      transform: 'Chunk & OpenAI text-embedding-3',
      action: 'Vector Store Index (Pinecone/Qdrant)',
      sink: 'Discord/Slack Copilot Bot',
      type: 'Serverless RAG',
      reliability: 'Verified'
    },
    'fintech': {
      name: 'Real-Time AML & Stripe Sweep',
      trigger: 'Stripe Charge Succeeded',
      transform: 'AML Risk Score & Identity Proof',
      action: 'Mercury ACH Instant Split',
      sink: 'Snowflake Ledger & Quickbooks',
      type: 'Financial Rails',
      reliability: 'Verified'
    },
    'crm-sync': {
      name: 'Bi-Directional GTM Sync',
      trigger: 'Hubspot Deal Created',
      transform: 'Clearbit Enrich & Territory Assign',
      action: 'Linear Issue + GitHub Project',
      sink: 'Executive Slack Ping & Email',
      type: 'Bi-Directional',
      reliability: 'Verified'
    }
  };

  const handleTestTrigger = () => {
    setIsRunning(true);
    setRunLog('DISPATCHING PAYLOAD...');
    setTimeout(() => {
      setRunLog('PROCESSING TRANSFORM...');
    }, 600);
    setTimeout(() => {
      setRunLog(`COMPLETED PIPELINE RUN (HTTP 200 OK)`);
      setIsRunning(false);
    }, 1200);
  };

  const current = PIPELINES[activePipeline];

  return (
    <section className="flow-hero">
      <div className="container flow-hero-inner">
        {/* Top telemetry badge */}
        <div className="flow-top-telemetry">
          <span className="flow-status-chip">
            <span className="flow-dot-pulse" />
            VISUAL PIPELINE RUNTIME v2.8
          </span>
          <span className="flow-benchmark-pill">
            SUB-100MS COLD STARTS · ZERO-KAFKA OVERHEAD
          </span>
        </div>

        <h1 className="flow-title">
          Orchestrate Event-Driven <span className="flow-cyan-gradient">Autonomous Workflows</span>
        </h1>

        <p className="flow-desc">
          FlowStack indexes the next generation of visual workflow builders, serverless webhooks, and AI-native node pipelines.
        </p>

        {/* Pipeline Architecture Workbench */}
        <div className="flow-canvas-box">
          <div className="flow-canvas-header">
            <div className="flow-tab-group">
              <button 
                type="button"
                className={`flow-tab-btn ${activePipeline === 'ai-rag' ? 'active' : ''}`}
                onClick={() => setActivePipeline('ai-rag')}
              >
                ✦ RAG Pipeline
              </button>
              <button 
                type="button"
                className={`flow-tab-btn ${activePipeline === 'fintech' ? 'active' : ''}`}
                onClick={() => setActivePipeline('fintech')}
              >
                ⚡ Fintech Rails
              </button>
              <button 
                type="button"
                className={`flow-tab-btn ${activePipeline === 'crm-sync' ? 'active' : ''}`}
                onClick={() => setActivePipeline('crm-sync')}
              >
                ⇄ GTM Sync
              </button>
            </div>

            <div className="flow-header-metrics">
              <span className="flow-metric-item">
                <span className="flow-metric-k">LATENCY:</span>
                <span className="flow-metric-v">{current.latency}</span>
              </span>
              <span className="flow-metric-item">
                <span className="flow-metric-k">UPTIME:</span>
                <span className="flow-metric-v text-emerald">{current.reliability}</span>
              </span>
            </div>
          </div>

          {/* Interactive Visual Node Graph */}
          <div className="flow-interactive-graph">
            {/* Node 1: Trigger */}
            <div className={`flow-node node-1 ${isRunning ? 'flow-node-executing' : ''}`}>
              <div className="node-badge trigger-badge">TRIGGER (01)</div>
              <div className="node-title">{current.trigger}</div>
              <div className="node-status">LISTENING · WEBHOOK</div>
            </div>

            {/* Wire 1 */}
            <div className="flow-connector">
              <div className={`flow-wire-line ${isRunning ? 'wire-animating' : ''}`} />
              <span className="flow-wire-arrow">&rarr;</span>
            </div>

            {/* Node 2: Transform */}
            <div className={`flow-node node-2 ${isRunning ? 'flow-node-executing' : ''}`}>
              <div className="node-badge transform-badge">AI TRANSFORM (02)</div>
              <div className="node-title">{current.transform}</div>
              <div className="node-status">INFERENCE · LOW JITTER</div>
            </div>

            {/* Wire 2 */}
            <div className="flow-connector">
              <div className={`flow-wire-line ${isRunning ? 'wire-animating' : ''}`} />
              <span className="flow-wire-arrow">&rarr;</span>
            </div>

            {/* Node 3: Sink */}
            <div className={`flow-node node-3 ${isRunning ? 'flow-node-executing' : ''}`}>
              <div className="node-badge sink-badge">DESTINATION SINK (03)</div>
              <div className="node-title">{current.sink}</div>
              <div className="node-status">ACID WRITE · VERIFIED</div>
            </div>
          </div>

          {/* Canvas Interactive Controls */}
          <div className="flow-canvas-footer">
            <div className="flow-console">
              <span className="console-prompt">$</span>
              <span className="console-log">{runLog}</span>
            </div>

            <div className="flow-footer-actions">
              <button 
                type="button" 
                className="flow-test-run-btn"
                onClick={handleTestTrigger}
                disabled={isRunning}
              >
                {isRunning ? 'Running Wire Test...' : '▶ Simulate Pipeline Run'}
              </button>
            </div>
          </div>
        </div>

        {/* Global Node Search */}
        <div className="flow-search-section">
          <div className="flow-search-bar">
            <svg className="flow-search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input 
              type="text" 
              placeholder="Search 500+ connectors, triggers & engines (n8n, Make, Trigger.dev, Temporal, Airflow)..." 
              className="flow-search-input" 
            />
            <button type="button" className="flow-search-submit">Search DAGs</button>
          </div>
        </div>
      </div>
    </section>
  );
}
