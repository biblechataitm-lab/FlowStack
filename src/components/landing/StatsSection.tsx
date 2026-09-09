'use client';

import React from 'react';

const STATS = [
  { value: '1,400+', label: 'Workflow Tools' },
  { value: '20K+', label: 'Team Leads' },
  { value: '90+', label: 'Integrations' },
  { value: '95%', label: 'Recommend Rate' },
];

export function StatsSection() {
  return (
    <section className="fs-stats">
      <div className="fs-stats-grid">
        {STATS.map((s) => (
          <div key={s.label} className="fs-stat-card">
            <div className="fs-stat-value">{s.value}</div>
            <div className="fs-stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
