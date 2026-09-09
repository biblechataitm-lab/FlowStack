import React from 'react';
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
                <li><a href="/">Today's Launches</a></li>
                <li><a href="/trends">Trending</a></li>
                <li><a href="/collections/this-week">Weekly Top</a></li>
                <li><a href="/collections/this-month">Monthly Top</a></li>
              </ul>
            </div>
            <div>
              <h4 className="fs-footer-heading">Categories</h4>
              <ul>
                <li><a href="/category/project-mgmt">Project Mgmt</a></li>
                <li><a href="/category/communication">Communication</a></li>
                <li><a href="/category/automation">Automation</a></li>
                <li><a href="/category/time-tracking">Time Tracking</a></li>
              </ul>
            </div>
            <div>
              <h4 className="fs-footer-heading">Directory</h4>
              <ul>
                <li><a href="/submit">Submit Product</a></li>
                <li><a href="/sponsor">Sponsor</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/privacy">Privacy</a></li>
                <li><a href="/terms">Terms</a></li>
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
