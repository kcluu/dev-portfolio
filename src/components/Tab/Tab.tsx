import './Tab.css'

export type TabId = 'about' | 'work' | 'contact'

interface TabProps {
  id: TabId
  label: string
  isActive: boolean
  onSelect: (id: TabId) => void
}

export const Tab = ({ id, label, isActive, onSelect }: TabProps) => {
  const className = isActive ? 'tab active' : 'tab'

  return (
    <button className={className} data-tab={id} onClick={() => onSelect(id)}>
      <span className="favicon" />
      <span className="label">{label}</span>
    </button>
  )
}
