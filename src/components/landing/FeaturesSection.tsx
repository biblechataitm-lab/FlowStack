'use client';

import React from 'react';

export function FeaturesSection() {
  return (
    <section className="flow-features container">
  <div className="flow-header">
    <span className="flow-cyan-tag">// ARCHITECTURE</span>
    <h2>Zero-Loss Event Infrastructure</h2>
  </div>
  <div className="flow-grid-3">
    <div className="flow-card">
      <div className="flow-card-icon">⚡</div>
      <h3>Durable Execution</h3>
      <p>Automatic state checkpoints ensure jobs resume precisely where they paused after transient timeouts.</p>
    </div>
    <div className="flow-card">
      <div className="flow-card-icon">🔀</div>
      <h3>Conditional Routing</h3>
      <p>Branch, merge, and evaluate complex business logic trees without writing sprawling boilerplate.</p>
    </div>
    <div className="flow-card">
      <div className="flow-card-icon">📡</div>
      <h3>Webhook Fanout</h3>
      <p>Ingest thousands of incoming payloads per second with guaranteed FIFO delivery and rate limiting.</p>
    </div>
  </div>
</section>
  );
}
