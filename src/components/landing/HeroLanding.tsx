'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Search, ArrowRight, TrendingUp } from 'lucide-react';

export function HeroLanding() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const children = hero.querySelectorAll('.fs-animate');
    children.forEach((el, i) => {
      const htmlEl = el as HTMLElement;
      htmlEl.style.opacity = '0';
      htmlEl.style.transform = 'translateY(24px)';
      setTimeout(() => {
        htmlEl.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        htmlEl.style.opacity = '1';
        htmlEl.style.transform = 'translateY(0)';
      }, 100 + i * 100);
    });
  }, []);

  return (
    <section ref={heroRef} className="fs-hero">
      <div className="fs-hero-bg" aria-hidden="true" />
      <div className="fs-hero-container">
        <div className="fs-hero-content">
          <div className="fs-animate fs-hero-badge">
            <span>Work Smarter, Ship Faster</span>
          </div>
          <h1 className="fs-animate fs-hero-title">
            Supercharge Your{' '}
            <span className="fs-accent-text">Team Workflow</span>
          </h1>
          <p className="fs-animate fs-hero-subtitle">
            Discover 1,400+ productivity and collaboration tools — project management, async communication, time tracking, and team automation.
          </p>
          <form
            className="fs-animate fs-hero-search"
            onSubmit={(e) => {
              e.preventDefault();
              const input = e.currentTarget.querySelector('input');
              if (input?.value.trim()) {
                window.location.href = `/search?q=${encodeURIComponent(input.value.trim())}`;
              }
            }}
          >
            <Search size={16} className="fs-hero-search-icon" />
            <input type="text" placeholder="Search workflow tools, apps..." />
            <button type="submit">Explore <ArrowRight size={14} /></button>
          </form>
          <div className="fs-animate fs-hero-tags">
            <Link href="/category/productivity" className="fs-tag">Productivity</Link>
            <Link href="/category/ai" className="fs-tag">AI Assistants</Link>
            <Link href="/category/developer-tools" className="fs-tag">Dev Workflow</Link>
            <Link href="/trends" className="fs-tag fs-tag-hot">
              <TrendingUp size={12} /> Trending
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
