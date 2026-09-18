import StatusBadge from '../common/StatusBadge'

function HealthCard({ title, items }) {
  return (
    <section className="panel">
      <div className="panel-header">
        <h3>{title}</h3>
      </div>
      <div className="health-list">
        {items.map((item) => (
          <div key={item.name} className="health-row">
            <div>
              <div className="summary-title">{item.name}</div>
              <div className="summary-meta">{item.detail}</div>
            </div>
            <div className="health-side">
              <StatusBadge label={item.value} tone={item.state === 'normal' ? 'healthy' : item.state === 'degraded' ? 'warning' : 'info'} detail={item.info} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HealthCard
