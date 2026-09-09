'use client';

import React from 'react';
import Hero19 from '@/components/ui/hero-19';

export function HeroSection() {
  return (
    <div className="w-full mb-12">
      <Hero19
        brandName="FlowStack"
        eyebrow="EVENT-DRIVEN WORKFLOW AUTOMATION"
        headingLine1="Orchestrate Complex"
        headingLine2="AI & Webhook Pipelines."
        description="Discover and connect 530+ event-driven automation frameworks, visual pipeline builders, and durable execution engines."
        primaryCtaLabel="Explore Pipelines"
        primaryCtaHref="/category/automation"
        secondaryCtaLabel="Submit Pipeline"
        secondaryCtaHref="/submit"
        bookingLabel="Submit Workflow"
        bookingHref="/submit"
        scrollLabel="Explore Automation Hub"
      />
    </div>
  );
}
