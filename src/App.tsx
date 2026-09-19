import { useState } from 'react'

import { BrowserWindow } from './components/BrowserWindow/BrowserWindow'
import { MusicWindow } from './components/MusicWindow/MusicWindow'
import type { TabId } from './components/Tab/Tab'

import './App.css'

type FrontWindow = 'browser' | 'music'

export const App = () => {
  const [activeTab, setActiveTab] = useState<TabId>('about')
  const [frontWindow, setFrontWindow] = useState<FrontWindow>('browser')

  return (
    <div className="window-stack">
      <MusicWindow isFront={frontWindow === 'music'} onFocus={() => setFrontWindow('music')} />
      <BrowserWindow
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        isFront={frontWindow === 'browser'}
        onFocus={() => setFrontWindow('browser')}
      />
    </div>
  )
}
