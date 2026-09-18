import SeverityBadge from '../common/SeverityBadge'

function SummaryPanel({ title, items, type = 'list' }) {
  return (
    <section className="panel summary-panel">
      <div className="panel-header">
        <h3>{title}</h3>
      </div>
      <div className="panel-body compact-list">
        {type === 'list' ? (
          items.map((item) => (
            <div key={item.title} className="summary-row">
              <div>
                <div className="summary-title">{item.title}</div>
                <div className="summary-meta">{item.zone} • {item.owner}</div>
              </div>
              <div className="summary-side">
                <SeverityBadge label={item.severity} tone={item.severity.toLowerCase()} />
                <span className="time-label">{item.time}</span>
              </div>
            </div>
          ))
        ) : (
          items.map((item) => (
            <div key={item.name} className="summary-row">
              <div>
                <div className="summary-title">{item.name}</div>
                <div className="summary-meta">{item.risk}</div>
              </div>
              <div className="bar-wrap">
                <div className="bar-fill" style={{ width: `${item.value}%` }} />
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  )
}

export default SummaryPanel
