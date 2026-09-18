import { useCallback, useEffect, useState } from 'react'

type ThemeOverride = 'light' | 'dark' | null

function systemPrefersDark(): boolean {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export function useTheme() {
  const [override, setOverride] = useState<ThemeOverride>(null)

  const isDark = override === 'dark' || (override === null && systemPrefersDark())

  useEffect(() => {
    const root = document.documentElement

    if (override === null) {
      root.removeAttribute('data-theme')
    } else {
      root.setAttribute('data-theme', override)
    }
  }, [override])

  const toggleTheme = useCallback(() => {
    setOverride(isDark ? 'light' : 'dark')
  }, [isDark])

  return { isDark, toggleTheme }
}
