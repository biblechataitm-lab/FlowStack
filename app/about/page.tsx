import React from 'react';
import type { Metadata } from 'next';
import { getSiteConfig } from '@/lib/ads';

export const metadata: Metadata = { title: 'About — FlowStack' };

export default async function AboutPage() {
  const config = await getSiteConfig();
  return (
    <div className="container" style={{ maxWidth: '800px', paddingTop: '3rem', paddingBottom: '5rem' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>About {config?.name || 'FlowStack'}</h1>
      <div style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-main)', padding: '2.5rem' }} className="prose-body">
        <h2>Our Mission</h2>
        <p>Curated productivity stacks, automated workflows, and team operating systems. We cut through the noise to showcase genuine innovations built by makers and engineering teams worldwide.</p>
        <h2>Publisher Ad Network</h2>
        <p>FlowStack is part of an independent publisher directory network delivering privacy-first, non-tracking native advertising.</p>
      </div>
    </div>
  );
}
