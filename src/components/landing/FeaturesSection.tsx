'use client';

import React from 'react';
import { LayoutGrid, Clock, Users, Zap, Shield, TrendingUp } from 'lucide-react';

const FEATURES = [
  { icon: LayoutGrid, title: 'Workflow Builder', desc: 'Compare and build the perfect tool stack for your team size and style.' },
  { icon: Clock, title: 'Time Insights', desc: 'Productivity metrics and time tracking integrations for every tool.' },
  { icon: Users, title: 'Team Reviews', desc: 'Real reviews from real teams — sorted by company size and industry.' },
  { icon: Zap, title: 'Automation Hub', desc: 'Zapier, Make, and n8n integrations cataloged for every product.' },
  { icon: Shield, title: 'Enterprise Ready', desc: 'SSO, SOC2, and GDPR compliance status at a glance.' },
  { icon: TrendingUp, title: 'Adoption Trends', desc: 'See which tools are gaining traction across different team sizes.' },
];

export function FeaturesSection() {
  return (
    <section className="fs-features">
      <div className="fs-features-header">
        <h2 className="fs-section-title">
          Why <span className="fs-accent-text">FlowStack</span>
        </h2>
        <p className="fs-section-subtitle">More than a directory — a curated ecosystem built for your workflow.</p>
      </div>
      <div className="fs-features-grid">
        {FEATURES.map((f) => (
          <div key={f.title} className="fs-feature-card">
            <div className="fs-feature-icon"><f.icon size={22} /></div>
            <h3 className="fs-feature-title">{f.title}</h3>
            <p className="fs-feature-desc">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
