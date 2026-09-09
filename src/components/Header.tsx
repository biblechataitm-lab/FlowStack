'use client';

import React from 'react';

export function Header({ siteName = 'FlowStack' }: { siteName?: string }) {
  return (
    <header class="flow-navbar">
  <div class="container flow-nav-inner">
    <a href="/" class="flow-brand">
      <div class="flow-logo-glyph">⇄</div>
      <span>FlowStack</span>
    </a>
    <div class="flow-nav-menu">
      <a href="/">Pipelines</a>
      <a href="/trends">Trending Flows</a>
      <a href="/category/automation">Triggers</a>
      <a href="/sponsor">Sponsor</a>
    </div>
    <a href="/submit" class="flow-cta-btn">+ Deploy Flow</a>
  </div>
</header>
  );
}
