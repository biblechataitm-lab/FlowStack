import type { Product, ProductPage, GetProductsOptions, SiteConfig } from './types';
import { request, mockMode } from './client';

const MOCK_PRODUCTS: Product[] = [
  {
    "id": "fs-1",
    "title": "n8n Automator",
    "tagline": "Fair-code workflow automation tool with 400+ native nodes and custom JS/Python execution",
    "link": "https://n8n.io",
    "category": "Automation",
    "upvotes": 490,
    "tags": [
      "automation",
      "n8n",
      "workflow"
    ],
    "techStack": [
      "TypeScript",
      "Node.js",
      "Vue"
    ],
    "maker": {
      "name": "Jan Oberhauser",
      "avatar": "https://placehold.co/64x64/06b6d4/ffffff?text=N8"
    }
  },
  {
    "id": "fs-2",
    "title": "Zapier Central",
    "tagline": "AI-powered workflow workspace where AI bots can execute actions across 6,000+ business apps",
    "link": "https://zapier.com",
    "category": "Automation",
    "upvotes": 450,
    "tags": [
      "ai",
      "zapier",
      "automation"
    ],
    "techStack": [
      "Python",
      "React",
      "AWS"
    ],
    "maker": {
      "name": "Wade Foster",
      "avatar": "https://placehold.co/64x64/3b82f6/ffffff?text=ZP"
    }
  },
  {
    "id": "fs-3",
    "title": "Make.com",
    "tagline": "Visual platform to design, build, and automate anything from simple tasks to complex enterprise processes",
    "link": "https://make.com",
    "category": "Automation",
    "upvotes": 410,
    "tags": [
      "visual-builder",
      "integrations"
    ],
    "techStack": [
      "Node.js",
      "React"
    ],
    "maker": {
      "name": "Make Team",
      "avatar": "https://placehold.co/64x64/f59e0b/ffffff?text=MK"
    }
  },
  {
    "id": "fs-4",
    "title": "Trigger.dev",
    "tagline": "Developer-first background jobs platform for TypeScript with no timeouts and full observability",
    "link": "https://trigger.dev",
    "category": "Developer Tools",
    "upvotes": 380,
    "tags": [
      "background-jobs",
      "typescript",
      "serverless"
    ],
    "techStack": [
      "TypeScript",
      "Postgres",
      "Prisma"
    ],
    "maker": {
      "name": "Matt Aitken",
      "avatar": "https://placehold.co/64x64/10b981/ffffff?text=TD"
    }
  },
  {
    "id": "fs-5",
    "title": "Activepieces",
    "tagline": "Open source no-code business automation alternative with community-maintained pieces",
    "link": "https://activepieces.com",
    "category": "Automation",
    "upvotes": 350,
    "tags": [
      "open-source",
      "automation"
    ],
    "techStack": [
      "TypeScript",
      "Angular",
      "Node"
    ],
    "maker": {
      "name": "Ashraf Samhouri",
      "avatar": "https://placehold.co/64x64/ec4899/ffffff?text=AP"
    }
  },
  {
    "id": "fs-6",
    "title": "Inngest",
    "tagline": "Event-driven background execution platform with automatic retries, step functions, and flow control",
    "link": "https://inngest.com",
    "category": "Developer Tools",
    "upvotes": 330,
    "tags": [
      "event-driven",
      "queue",
      "workflow"
    ],
    "techStack": [
      "Go",
      "TypeScript",
      "React"
    ],
    "maker": {
      "name": "Tony Holdstock",
      "avatar": "https://placehold.co/64x64/a78bfa/ffffff?text=IN"
    }
  }
];

const MOCK_SITE: SiteConfig = {
  "key": "flowstack",
  "name": "FlowStack",
  "domain": "flowstack.com",
  "category": "productivity",
  "tags": [
    "productivity",
    "workflow",
    "automation",
    "collaboration"
  ],
  "status": "live",
  "statusMessage": null,
  "slots": [
    {
      "key": "sidebar-1",
      "slotType": "sidebar",
      "format": "native"
    }
  ]
};

export async function getSiteConfig(timeoutMs?: number): Promise<SiteConfig | null> {
  if (mockMode()) return MOCK_SITE;
  const data = await request<{ site: SiteConfig }>('/api/v1/site', {}, timeoutMs, 'getSiteConfig');
  return data?.site ?? MOCK_SITE;
}

export async function getProducts(options: GetProductsOptions = {}): Promise<ProductPage> {
  const mock = mockMode();
  if (mock) {
    if (mock === 'empty') return { products: [], nextCursor: null, appliedTags: [] };
    let filtered = [...MOCK_PRODUCTS];
    if (options.category) {
      filtered = filtered.filter((p) => p.category.toLowerCase() === options.category?.toLowerCase());
    }
    if (options.q) {
      const q = options.q.toLowerCase();
      filtered = filtered.filter((p) => p.title.toLowerCase().includes(q) || p.tagline.toLowerCase().includes(q));
    }
    const sorted = options.sort === 'top' ? filtered.sort((a, b) => b.upvotes - a.upvotes) : filtered;
    return {
      products: sorted.slice(0, options.limit ?? sorted.length),
      nextCursor: null,
      appliedTags: MOCK_SITE.tags,
    };
  }

  const data = await request<ProductPage>(
    '/api/v1/catalog/products',
    {
      tags: options.tags?.join(','),
      category: options.category,
      q: options.q,
      since: options.since,
      sort: options.sort,
      limit: options.limit ? String(options.limit) : undefined,
      cursor: options.cursor,
    },
    options.timeoutMs,
    'getProducts',
  );

  if (!data || !data.products || data.products.length === 0) {
    let filtered = [...MOCK_PRODUCTS];
    if (options.category) {
      filtered = filtered.filter((p) => p.category.toLowerCase() === options.category?.toLowerCase());
    }
    if (options.q) {
      const q = options.q.toLowerCase();
      filtered = filtered.filter((p) => p.title.toLowerCase().includes(q) || p.tagline.toLowerCase().includes(q));
    }
    const sorted =
      options.sort === 'top' ? filtered.sort((a, b) => b.upvotes - a.upvotes) : filtered;
    return {
      products: sorted.slice(0, options.limit ?? sorted.length),
      nextCursor: null,
      appliedTags: MOCK_SITE.tags,
    };
  }

  return data;
}

export async function getProduct(id: string, timeoutMs?: number): Promise<Product | null> {
  if (mockMode()) return MOCK_PRODUCTS.find((p) => p.id === id) ?? MOCK_PRODUCTS[0];

  const data = await request<{ product: Product }>(
    `/api/v1/catalog/products/${encodeURIComponent(id)}`,
    {},
    timeoutMs,
    'getProduct',
  );
  return data?.product ?? MOCK_PRODUCTS.find((p) => p.id === id) ?? MOCK_PRODUCTS[0];
}
