import { useEffect, useRef } from 'react'

import { ChromeBar } from '../ChromeBar/ChromeBar'
import { MusicPanel } from '../MusicPanel/MusicPanel'

import { useTheme } from '../../hooks/useTheme'
import { useDraggable } from '../../hooks/useDraggable'

import '../BrowserWindow/BrowserWindow.css'
import './MusicWindow.css'

const BASE_OFFSET = { x: 34, y: 34 }

interface MusicWindowProps {
  isFront: boolean
  onFocus: () => void
}

export const MusicWindow = ({ isFront, onFocus }: MusicWindowProps) => {
  const { isDark, toggleTheme } = useTheme()
  const { offset, handlePointerDown, handlePointerMove, handlePointerUp } = useDraggable()

  const windowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // clicking into a Spotify iframe never bubbles a pointer event to us (it's
    // a separate document), so detect the resulting window blur instead
    const handleWindowBlur = () => {
      window.setTimeout(() => {
        if (windowRef.current?.contains(document.activeElement)) {
          onFocus()
        }
      }, 0)
    }

    window.addEventListener('blur', handleWindowBlur)
    return () => window.removeEventListener('blur', handleWindowBlur)
  }, [onFocus])

  return (
    <div
      ref={windowRef}
      className="browser music-window"
      style={{
        transform: `translate(${BASE_OFFSET.x + offset.x}px, ${BASE_OFFSET.y + offset.y}px)`,
        zIndex: isFront ? 2 : 1,
      }}
      onPointerDown={onFocus}
    >
      <ChromeBar
        urlPath="/playlist/on-repeat"
        domain="open.spotify.com"
        isDark={isDark}
        onToggleTheme={toggleTheme}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      />

      <main className="content music-content">
        <MusicPanel />
      </main>
    </div>
  )
}
