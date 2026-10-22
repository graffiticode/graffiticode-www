'use client'

import { useState } from 'react'
import { track } from '@/lib/analytics'

export function CopyButton({ text, label, context }: { text: string; label: string; context: string }) {
  const [status, setStatus] = useState<'idle' | 'copied' | 'error'>('idle')

  async function copy() {
    try {
      await navigator.clipboard.writeText(text)
      setStatus('copied')
      track('copy_config', { label: context })
    } catch {
      setStatus('error')
    }
  }

  return (
    <span className="copy-control">
      <button type="button" className="copy-button" onClick={copy} aria-label={`${label}: ${context}`}>
        {status === 'copied' ? 'Copied' : label}
      </button>
      <span role="status" className={status === 'error' ? 'copy-error' : 'sr-only'}>
        {status === 'copied' ? `${context} copied to clipboard.` : status === 'error' ? 'Select the text and copy it manually.' : ''}
      </span>
    </span>
  )
}
