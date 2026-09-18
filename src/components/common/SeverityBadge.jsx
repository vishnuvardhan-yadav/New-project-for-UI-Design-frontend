const SeverityBadge = ({ label, tone = 'medium' }) => {
  const map = {
    critical: { bg: '#f8e1d8', text: '#8f2d16', icon: '▲' },
    high: { bg: '#f7e7d1', text: '#8a5d1d', icon: '▲' },
    medium: { bg: '#f3edd9', text: '#6f5d2f', icon: '●' },
    low: { bg: '#edf1dd', text: '#4a5d31', icon: '●' },
    info: { bg: '#eaf0ff', text: '#2d4c7d', icon: '◌' },
  }

  const selected = map[tone] || map.medium

  return (
    <span className="severity-badge" style={{ background: selected.bg, color: selected.text }}>
      <span aria-hidden="true">{selected.icon}</span>
      {label}
    </span>
  )
}

export default SeverityBadge
