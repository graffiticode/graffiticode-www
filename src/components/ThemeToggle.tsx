'use client'

import { useEffect } from 'react'

import { THEME_STORAGE_KEY } from '@/lib/theme'

/** Hidden iteration control: Shift+D. URL overrides also work on mobile. */
export function ThemeToggle() {
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (
        event.defaultPrevented || event.repeat || !event.shiftKey ||
        event.altKey || event.ctrlKey || event.metaKey || event.key.toLowerCase() !== 'd'
      ) return

      const target = event.target
      if (target instanceof HTMLElement && (
        target.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)
      )) return

      event.preventDefault()
      const theme = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light'
      document.documentElement.dataset.theme = theme
      try { localStorage.setItem(THEME_STORAGE_KEY, theme) } catch {}

      // Keep an explicit comparison URL in sync so reload retains the choice.
      const url = new URL(window.location.href)
      if (url.searchParams.has('theme')) {
        url.searchParams.set('theme', theme)
        window.history.replaceState(window.history.state, '', url)
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [])

  return null
}
