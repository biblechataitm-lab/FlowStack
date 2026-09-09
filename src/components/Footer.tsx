import React from 'react';
import Link from 'next/link';
import { ExternalLink, MessageCircle, Mail } from 'lucide-react';

export function Footer({ siteName = 'FlowStack' }: { siteName?: string }) {
  return (
    <footer className="fs-footer">
      <div className="fs-footer-content">
        <div className="fs-footer-top">
          <div className="fs-footer-brand-area">
            <div className="fs-footer-brand"><span>{siteName}</span></div>
            <p className="fs-footer-tagline">The curated workflow and productivity tool directory. Discover the best collaboration, project management, and automation tools.</p>
            <div className="fs-footer-socials">
              <a href="#" aria-label="Website"><ExternalLink size={16} /></a>
              <a href="#" aria-label="Community"><MessageCircle size={16} /></a>
              <a href="#" aria-label="Email"><Mail size={16} /></a>
            </div>
          </div>
          <div className="fs-footer-links-grid">
            <div>
              <h4 className="fs-footer-heading">Explore</h4>
              <ul>
                <li><Link href="/">Today's Launches</Link></li>
                <li><Link href="/trends">Trending</Link></li>
                <li><Link href="/collections/this-week">Weekly Top</Link></li>
                <li><Link href="/collections/this-month">Monthly Top</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="fs-footer-heading">Categories</h4>
              <ul>
                <li><Link href="/category/project-mgmt">Project Mgmt</Link></li>
                <li><Link href="/category/communication">Communication</Link></li>
                <li><Link href="/category/automation">Automation</Link></li>
                <li><Link href="/category/time-tracking">Time Tracking</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="fs-footer-heading">Directory</h4>
              <ul>
                <li><Link href="/submit">Submit Product</Link></li>
                <li><Link href="/sponsor">Sponsor</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/privacy">Privacy</Link></li>
                <li><Link href="/terms">Terms</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="fs-footer-bottom">
          <span>&copy; {new Date().getFullYear()} {siteName}. All rights reserved.</span>
          <span>Powered by the Publisher Ad Network</span>
        </div>
      </div>
    </footer>
  );
}
