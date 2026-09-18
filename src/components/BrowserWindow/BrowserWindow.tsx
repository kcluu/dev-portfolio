import { useRef } from 'react'

import { ChromeBar } from '../ChromeBar/ChromeBar'
import { Sidebar } from '../Sidebar/Sidebar'
import { type TabId } from '../Tab/Tab'

import { AboutPanel } from '../AboutPanel/AboutPanel'
import { WorkPanel } from '../WorkPanel/WorkPanel'
import { ContactPanel } from '../ContactPanel/ContactPanel'

import { useTheme } from '../../hooks/useTheme'
import { useDraggable } from '../../hooks/useDraggable'

import './BrowserWindow.css'

interface BrowserWindowProps {
  activeTab: TabId
  onSelectTab: (id: TabId) => void
}

export const BrowserWindow = ({ activeTab, onSelectTab }: BrowserWindowProps) => {
  const { isDark, toggleTheme } = useTheme()
  const { offset, handlePointerDown, handlePointerMove, handlePointerUp } = useDraggable()

  const contentRef = useRef<HTMLElement>(null)

  const handleSelectTab = (id: TabId) => {
    onSelectTab(id)

    if (contentRef.current) {
      contentRef.current.scrollTop = 0
    }
  }

  return (
    <div className="browser" style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}>
      <ChromeBar
        urlPath={`/${activeTab}`}
        isDark={isDark}
        onToggleTheme={toggleTheme}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      />

      <div className="body-row">
        <Sidebar activeTab={activeTab} onSelectTab={handleSelectTab} />

        <main className="content" ref={contentRef}>
          {activeTab === 'about' && <AboutPanel />}
          {activeTab === 'work' && <WorkPanel />}
          {activeTab === 'contact' && <ContactPanel />}
        </main>
      </div>
    </div>
  )
}
