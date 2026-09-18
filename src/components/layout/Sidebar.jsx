const navItems = [
  'Dashboard',
  'Assets',
  'Findings',
  'Attack Paths',
  'Network',
  'Activity',
  'Settings',
]

function Sidebar({ active = 'Dashboard' }) {
  return (
    <aside className="sidebar" aria-label="Sidebar navigation">
      <div className="brand-block">
        <div className="brand-mark">OT</div>
        <div>
          <div className="brand-name">OT Security</div>
          <div className="brand-subtitle">Operations integrity</div>
        </div>
      </div>

      <nav className="sidebar-nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <button
            key={item}
            type="button"
            className={`nav-item ${active === item ? 'active' : ''}`}
            aria-current={active === item ? 'page' : undefined}
          >
            {item}
          </button>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
