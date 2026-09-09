'use client';

import React from 'react';

export function HeroLanding() {
  return (
    <section class="flow-hero">
  <div class="flow-hero-grid container">
    <div class="flow-hero-left">
      <div class="flow-badge">
        <span class="flow-pulse"></span>
        <span>AUTOMATION PIPELINES &amp; WEBHOOKS</span>
      </div>
      <h1 class="flow-title">
        The Visual Engine for <span class="flow-cyan">Workflow Automation</span>
      </h1>
      <p class="flow-desc">
        Connect triggers, LLM transforms, webhooks, and storage sinks into seamless event-driven infrastructure.
      </p>
      <div class="flow-search-bar">
        <input type="text" placeholder="Search automation tools: n8n, Make, Trigger.dev..." class="flow-input" />
        <button class="flow-btn">Trigger</button>
      </div>
    </div>
    <div class="flow-hero-right">
      <div class="flow-node-graph">
        <div class="node-box node-trigger">
          <span class="node-type">TRIGGER</span>
          <strong>Webhook Received</strong>
        </div>
        <div class="flow-wire"><div class="flow-pulse-particle"></div></div>
        <div class="node-box node-transform">
          <span class="node-type">AI TRANSFORM</span>
          <strong>LLM Extraction</strong>
        </div>
        <div class="flow-wire"><div class="flow-pulse-particle"></div></div>
        <div class="node-box node-destination">
          <span class="node-type">SINK</span>
          <strong>PostgreSQL Insert</strong>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}
