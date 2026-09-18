import { useState } from 'react'

import { BrowserWindow } from './components/BrowserWindow/BrowserWindow'
import type { TabId } from './components/Tab/Tab'

export const App = () => {
  const [activeTab, setActiveTab] = useState<TabId>('about')

  return <BrowserWindow activeTab={activeTab} onSelectTab={setActiveTab} />
}
