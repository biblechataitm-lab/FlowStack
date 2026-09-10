'use client';

import React from 'react';

const CATEGORIES = [
  {
    "label": "All",
    "path": "/"
  },
  {
    "label": "Automation Engines",
    "path": "/category/automation"
  },
  {
    "label": "Workflows & Sync",
    "path": "/category/collaboration"
  },
  {
    "label": "Triggers & Queues",
    "path": "/category/tasks"
  },
  {
    "label": "Data & ETL",
    "path": "/category/knowledge"
  },
  {
    "label": "Webhook Fanout",
    "path": "/category/integrations"
  },
  {
    "label": "Orchestration",
    "path": "/category/focus"
  }
];

export function CategoryChips({ activeCategory }: { activeCategory?: string }) {
  return (
    <div className="category-chips-wrapper">
      <div className="category-chips-scroll category-chips-list">
        {CATEGORIES.map((cat) => {
          const isAll = cat.path === '/';
          const isActive = isAll ? !activeCategory : activeCategory === cat.path.replace('/category/', '');
          return (
            <a
              key={cat.path}
              href={cat.path}
              className={`category-chip ${isActive ? 'active chip-active' : ''}`}
            >
              {cat.label}
            </a>
          );
        })}
      </div>
    </div>
  );
}
