'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Rocket } from 'lucide-react';

export function CTASection() {
  return (
    <section className="fs-cta">
      <div className="fs-cta-glow" aria-hidden="true" />
      <div className="fs-cta-content">
        <h2 className="fs-cta-title">Get Your Tool Discovered</h2>
        <p className="fs-cta-subtitle">Reach 20K+ team leads and operations managers looking for their next workflow solution.</p>
        <div className="fs-cta-buttons">
          <Link href="/submit" className="fs-cta-btn-primary">
            <Rocket size={15} /> Submit Product
          </Link>
          <Link href="/sponsor" className="fs-cta-btn-secondary">
            Sponsor <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
