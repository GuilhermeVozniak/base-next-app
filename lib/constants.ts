export const APP_CONFIG = {
  name: process.env.NEXT_PUBLIC_APP_NAME ?? 'Base Next.js App',
  url: process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000',
  description:
    'A modern Next.js starter template with TypeScript, Tailwind CSS, Shadcn/ui, and comprehensive code quality tools.',
  version: '1.0.0',
} as const;

export const ROUTES = {
  home: '/',
  about: '/about',
  contact: '/contact',
} as const;

export const API_ENDPOINTS = {
  base: process.env.NEXT_PUBLIC_API_URL ?? '/api',
} as const;

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

export const ANIMATIONS = {
  fast: 150,
  normal: 300,
  slow: 500,
} as const;
