'use client';

import React from 'react';

export function Header({ siteName = 'FlowStack' }: { siteName?: string }) {
  return (
    <header className="flow-navbar">
      <div className="container flow-nav-inner">
        <div className="flow-nav-left">
          <a href="/" className="flow-brand">
            <div className="flow-logo-glyph">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="6" cy="6" r="3"/>
                <circle cx="18" cy="18" r="3"/>
                <path d="M9 6h6a3 3 0 0 1 3 3v6"/>
                <circle cx="6" cy="18" r="3"/>
              </svg>
            </div>
            <span className="flow-brand-text">FlowStack<span className="flow-dot">.</span>io</span>
          </a>
          <span className="flow-status-pill">
            <span className="flow-pulse-dot" />
            DAG ENGINE ACTIVE
          </span>
        </div>

        <nav className="flow-nav-menu">
          <a href="/" className="flow-nav-link active">Pipelines</a>
          <a href="/trends" className="flow-nav-link">Top Automations</a>
          <a href="/category/automation" className="flow-nav-link">Connectors</a>
          <a href="/sponsor" className="flow-nav-link">Partner Nodes</a>
        </nav>

        <div className="flow-nav-right">
          <div className="flow-throughput-badge">
            <span className="throughput-label">RUNTIME</span>
            <span className="throughput-val">EVENT DRIVEN</span>
          </div>
          <a href="/submit" className="flow-cta-btn">+ Deploy Workflow</a>
        </div>
      </div>
    </header>
  );
}
