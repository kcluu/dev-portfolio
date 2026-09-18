import type { PointerEvent } from 'react'

import { ThemeToggle } from '../ThemeToggle/ThemeToggle'

import './ChromeBar.css'

interface ChromeBarProps {
  urlPath: string
  isDark: boolean
  onToggleTheme: () => void
  onPointerDown: (event: PointerEvent<HTMLDivElement>) => void
  onPointerMove: (event: PointerEvent<HTMLDivElement>) => void
  onPointerUp: () => void
}

export const ChromeBar = ({
  urlPath,
  isDark,
  onToggleTheme,
  onPointerDown,
  onPointerMove,
  onPointerUp,
}: ChromeBarProps) => {
  return (
    <div
      className="chrome"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      <div className="dots">
        <span />
        <span />
        <span />
      </div>

      <div className="addr">
        <span className="lock">🔒</span>
        <span className="url">
          nora<b>.</b>dev{urlPath}
        </span>
      </div>

      <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
    </div>
  )
}
