import { Tab, type TabId } from '../Tab/Tab'

import './Sidebar.css'

interface SidebarProps {
  activeTab: TabId
  onSelectTab: (id: TabId) => void
}

const TABS: { id: TabId; label: string }[] = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'contact', label: 'Contact' },
]

export const Sidebar = ({ activeTab, onSelectTab }: SidebarProps) => {
  return (
    <aside className="sidebar">
      <div className="who">
        <div className="avatar">NV</div>

        <div>
          <div className="name">Nora Vance</div>
          <div className="role">Software Engineer</div>
        </div>
      </div>

      <nav className="tabs">
        {TABS.map((tab) => (
          <Tab key={tab.id} id={tab.id} label={tab.label} isActive={activeTab === tab.id} onSelect={onSelectTab} />
        ))}
      </nav>

      <div className="sidebar-foot">made with care · 2026</div>
    </aside>
  )
}
