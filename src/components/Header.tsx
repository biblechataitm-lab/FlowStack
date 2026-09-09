'use client';

import React from 'react';

export function Header({ siteName = 'FlowStack' }: { siteName?: string }) {
  return (
    <header className="flow-navbar">
      <div className="container flow-nav-inner">
        <a href="/" className="flow-brand">
          <div className="flow-logo-glyph">⇄</div>
          <span>FlowStack</span>
        </a>
        <div className="flow-nav-menu">
        <a href="/">Pipelines</a>
        <a href="/trends">Trending Flows</a>
        <a href="/category/automation">Automation Engines</a>
        <a href="/sponsor">Sponsor</a>
        </div>
        <a href="/submit" className="flow-cta-btn">+ Deploy Flow</a>
      </div>
    </header>
  );
}
