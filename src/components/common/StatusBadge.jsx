const StatusBadge = ({ label, tone = 'info', detail }) => {
  const tones = {
    healthy: { background: '#e9f9ef', color: '#1b6b45', border: '#7ac49f' },
    warning: { background: '#fff4db', color: '#8a5a1d', border: '#d4a95f' },
    risk: { background: '#fbe9e7', color: '#a13b22', border: '#e08c6c' },
    info: { background: '#eef4ff', color: '#294a7a', border: '#9bb8e8' },
    success: { background: '#eafaf2', color: '#1a7a4d', border: '#8ddaab' },
    muted: { background: '#f1f2f4', color: '#4a4a4a', border: '#c5c7cc' },
  }

  return (
    <span
      className="status-badge"
      style={{
        background: tones[tone]?.background,
        color: tones[tone]?.color,
        border: `1px solid ${tones[tone]?.border || tones.info.border}`,
      }}
      title={detail || label}
    >
      {label}
    </span>
  )
}

export default StatusBadge
