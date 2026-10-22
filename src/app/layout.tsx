import type { Metadata } from 'next'
import Script from 'next/script'

import { ThemeToggle } from '@/components/ThemeToggle'
import { THEME_INIT_SCRIPT } from '@/lib/theme'
import { SITE_URL, MCP_ENDPOINT, POSITIONING, GET_STARTED } from '@data/contract'
import './globals.css'

const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `Graffiticode — ${POSITIONING.headline}`,
    template: '%s · Graffiticode',
  },
  description: GET_STARTED.summary,
  alternates: {
    canonical: '/',
    types: {
      'text/plain': [{ url: '/llms.txt', title: 'llms.txt' }],
      'application/json': [{ url: '/.well-known/mcp.json', title: 'MCP config' }],
    },
  },
  other: {
    // Endpoint-only agent-discovery meta. No credential is ever published here.
    'mcp-server': MCP_ENDPOINT,
    'mcp-version': '2025-06-18',
    'ai-tool-endpoint': MCP_ENDPOINT,
  },
  openGraph: {
    title: `Graffiticode — ${POSITIONING.headline}`,
    description: GET_STARTED.summary,
    url: SITE_URL,
    siteName: 'Graffiticode',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: `Graffiticode — ${POSITIONING.headline}`,
    description: GET_STARTED.summary,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script id="theme-init" dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body>
        <main>{children}</main>
        <ThemeToggle />
        {plausibleDomain ? (
          <Script
            defer
            data-domain={plausibleDomain}
            src="https://plausible.io/js/script.js"
            strategy="afterInteractive"
          />
        ) : null}
      </body>
    </html>
  )
}
